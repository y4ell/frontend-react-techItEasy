import  {bestSellingTv, inventory} from '../constants/inventory.js';

function boughtTvs() {
    let totalBought = 0
    {
        for (let i = 0; i < inventory.length; i++) {
            totalBought += inventory[i].originalStock
        }
        return totalBought
    }
}

export default boughtTvs

