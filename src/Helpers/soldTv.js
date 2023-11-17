import {bestSellingTv, inventory} from "../constants/inventory.js";

function soldTv(productArray){
    let total = 0
    {
        for (let i = 0; i < productArray.length; i++) {
            total = total + productArray[i].sold;
        }
        return total;
    }
}

export default soldTv