import {inventory} from "./constants/inventory.js";

// 1a
const tvNames = inventory.name

const allNames  = tvNames.map((tvName) => {
    return tvName
});

console.log(allNames);