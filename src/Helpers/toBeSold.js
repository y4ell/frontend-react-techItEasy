import soldTv from "./soldTv.js";
import boughtTvs from "./boughtTvs.js";

function toBeSold() {
        return boughtTvs() - soldTv();
}

export default toBeSold