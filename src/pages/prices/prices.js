import React from "react";
import pricingImg00 from "../../assets/images/pricing-image00.jpg";
import pricingImg01 from "../../assets/images/pricing-image01.jpg";
import pricingImg02 from "../../assets/images/pricing-image02.jpg";

const Prices = () => {
  return (
    <div className="prices" id="prices-comp">
        <div className="prices-header--wrapper">
            <h1 className="prices-header header header--medium">Preise</h1>
        </div>
        <div className="prices-image--wrapper">
            <img src={pricingImg00} alt="pricing-image00" className="prices-image prices-image--small"></img>
            <img src={pricingImg01} alt="pricing-image01" className="prices-image prices-image--big"></img>
            <img src={pricingImg02} alt="pricing-image02" className="prices-image prices-image--big"></img>
        </div>
    </div>
  );
}

export default Prices;