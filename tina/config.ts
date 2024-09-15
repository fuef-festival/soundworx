import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "pages",
        label: "Seiten",
        path: "content",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "string",
            name: "description",
            label: "Beschreibung",
          },
          {
            type: "string",
            name: "summary",
            label: "Zusammenfassung",
          },
          {
            type: "datetime",
            name: "date",
            label: "Datum",
          },
          {
            type: "datetime",
            name: "lastmod",
            label: "Letzte Änderung",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Text",
            isBody: true,
          },
        ]
      }
    ],
  },
});
