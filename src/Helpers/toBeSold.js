import soldTv from "./soldTv.js";
import boughtTvs from "./boughtTvs.js";

function toBeSold(productArray) {
        const sold = soldTv(productArray);
        const bought = boughtTvs(productArray);
        return bought - sold;
}

export default toBeSold