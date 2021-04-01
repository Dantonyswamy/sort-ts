import {NumberCollection} from './NumberCollection';
import {CharacterCollection} from './Charactercollection';

const numberArray = new NumberCollection([10,3,25,-1,0]);
numberArray.sort()
const stringArray = new CharacterCollection('acbfe');
stringArray.sort()
console.log(numberArray.data);
