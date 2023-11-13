import './App.css';
import soldTv from "./Helpers/soldTv.js";
import boughtTvs from "./Helpers/boughtTvs.js";
import toBeSold from "./Helpers/toBeSold.js";
import tvName from "./Helpers/tvName.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import priceFormat from "./Helpers/priceFormat.js";
import tvScreensize from "./Helpers/tvScreensizes.js";


function App() {
  return (
      <>
    <h1>Tech it Easy dashboard</h1>

      <h2>Verkoopoverzicht</h2>
<div className="productOverview">

  <div className="products">
    <h3>Aantal verkochte producten</h3>
  <p>{soldTv()}</p>
  </div>

  <div className="products">
  <h3>Aantal ingekochte producten</h3>
  <p>{boughtTvs()}</p>
  </div>

  <div className="products">
  <h3>Aantal te verkopen producten</h3>
    <p>{toBeSold()}</p>
  </div>
      </div>

        <p>{tvName(bestSellingTv)}</p>
        <p>{priceFormat(bestSellingTv.price)}</p>
        <p>{tvScreensize(bestSellingTv.availableSizes)}</p>
        </>)
}

export default App
