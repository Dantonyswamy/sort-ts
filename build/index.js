"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var Charactercollection_1 = require("./Charactercollection");
var numberArray = new NumberCollection_1.NumberCollection([10, 3, 25, -1, 0]);
numberArray.sort();
var stringArray = new Charactercollection_1.CharacterCollection('acbfe');
stringArray.sort();
console.log(numberArray.data);
