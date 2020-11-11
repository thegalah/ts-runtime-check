const fs = require("fs");
const schema = require("../src/validation.schema.json");
const OUTPUT_FILE = "./src/SchemaDefinition.ts";

const definitions = Object.keys(schema.definitions);

const outputBuffer = [];
outputBuffer.push(`// THIS IS AN AUTOGENERATED FILE PLEASE DO NOT MODIFY MANUALLY`);
outputBuffer.push("export enum SchemaDefinition {");

definitions.forEach((definition) => {
    outputBuffer.push(`    ${definition.toUpperCase()} = "#/definitions/${definition}",`);
});

outputBuffer.push("}");

const output = outputBuffer.join("\n");

fs.writeFile(OUTPUT_FILE, output, { flag: "w" }, function (err) {
    if (err) {
        return console.log(err);
    }
});