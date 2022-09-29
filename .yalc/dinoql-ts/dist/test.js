"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const deserializer_1 = require("./deserializer");
const index_1 = require("./index");
const file = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "../test.dinoql"), "utf8");
console.log("Trying to parse");
console.log("====================================");
console.log(file);
console.log("====================================");
try {
    const start = performance.now();
    const output = (0, index_1.parse)(file, {});
    const end = performance.now();
    console.log(`DinoQLDocument: ${output.definitions.size} definitions`);
    console.log(`Parsed in ${end - start}ms`);
    const deserializer = new deserializer_1.Serializer(output, { serverMode: true });
    deserializer.registerScalarHandler({
        name: "Date",
        serialize: (value) => value.toISOString(),
        deserialize: (value) => {
            if (typeof value !== "string")
                throw new Error(`Expected ISO 8601 date string, but got ${value}`);
            if (!isIsoDate(value))
                throw new Error(`Expected ISO 8601 date string, but got ${value}`);
            return new Date(value);
        },
    });
    console.log("Trying to deserialize input for Me.sendFriendRequest");
    const userObj = output.getTypeDefinition("Me");
    const action = userObj.getMethod("sendFriendRequest");
    const input = {
        user: {
            id: 2,
        },
    };
    const deserializeStart = performance.now();
    const deserialized = deserializer.deserializeParameters(input, action);
    const deserializeEnd = performance.now();
    console.log(deserialized);
    console.log(`Deserialized in ${deserializeEnd - deserializeStart}ms`);
}
catch (e) {
    if (typeof e.format === "function") {
        console.log(e.format([{ text: file }]));
    }
    else if (e instanceof deserializer_1.DeserializationError) {
        console.log(e.toJSON());
    }
    else {
        throw e;
    }
}
function isIsoDate(str) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str))
        return false;
    const d = new Date(str);
    return d instanceof Date && !isNaN(d.getTime()) && d.toISOString() === str;
}
//# sourceMappingURL=test.js.map