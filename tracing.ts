import * as opentelemetry from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

const sdk = new opentelemetry.NodeSDK({
  resource: new opentelemetry.resources.Resource({
    "service.name": "sample-service",
  }),
  traceExporter: new OTLPTraceExporter({
    headers: {},
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
