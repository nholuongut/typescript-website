// node ./node_modules/.bin/ts-node packages/tsconfig-reference/scripts/schema/downloadSchemaBase.ts

// https://json.schemastore.org/tsconfig.json

const nodeFetch = require("node-fetch").default;
const { writeFileSync, existsSync, mkdirSync } = require("fs");
const { join } = require("path");

const getFileAndStoreLocally = async (url, path, editFunc) => {
  const editingFunc = editFunc ? editFunc : (text) => text;
  const packageJSON = await nodeFetch(url);
  const contents = await packageJSON.text();
  writeFileSync(join(__dirname, path), editingFunc(contents), "utf8");
};

getFileAndStoreLocally(
  "https://json.schemastore.org/tsconfig.json",
  "./vendor/base.json",
  undefined
);

// /Users/ortatherox/dev/typescript/new-website/packages/tsconfig-reference/scripts/Users/ortatherox/dev/typescript/new-website/packages/tsconfig-reference/scripts/schema/vendor/base.js
// /Users/ortatherox/dev/typescript/new-website/packages/tsconfig-reference/scripts/schema/vendor/base.json
