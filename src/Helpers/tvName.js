import {bestSellingTv, inventory} from "../constants/inventory.js";

function tvName(tvInput) {
    const tvBrand = tvInput.brand
    const tvType = tvInput.type
    const tvName = tvInput.name

    return (`${tvBrand} ${tvType} + ${tvName}`)
}

export default tvName

