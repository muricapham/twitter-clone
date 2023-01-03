import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  basePath: "/studio",
  name: "twitter",
  title: "twitter-clone",
  projectId: "fyu3bzwn",
  dataset: "production",
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
