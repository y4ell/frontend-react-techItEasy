import {bestSellingTv, inventory} from "../constants/inventory.js";

function soldTv(){
    let totalSold = 0
    {
        for (let i = 0; i < inventory.length; i++) {
            totalSold += inventory[i].sold;
        }
        return totalSold
    }
}

export default soldTv

