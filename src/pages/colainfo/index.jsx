import React from "react";
import colaimg from "../../images/colaimg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export const ColaInfo = () => {
  return (
    <div>
      <div className="d-flex container gap-4">
        <img
          style={{ width: "250px", height: "250px" }}
          src={colaimg}
          alt="cola"
        />
        <p className="text-secondary fs-5 fw-normal">
          Coca-Cola, one of the world's most iconic and beloved beverages, has
          left an indelible mark on global culture since its inception in 1886.
          Created by pharmacist John Stith Pemberton, Coca-Cola has become
          synonymous with refreshment and enjoyment. Its signature secret
          formula blends carbonated water with high-quality sweeteners and
          natural flavors, producing a uniquely satisfying and effervescent
          taste. Coca-Cola's distinctive red branding and timeless contour
          bottle have become instantly recognizable symbols, transcending
          borders and languages. Beyond its taste, Coca-Cola has played a
          significant role in advertising, employing memorable slogans and
          campaigns that have become ingrained in popular consciousness. The
          brand's commitment to community, environmental sustainability, and
          innovation further contributes to its enduring legacy. Whether shared
          during social gatherings, celebrations, or moments of simple pleasure,
          Coca-Cola continues to bring people together and spark moments of
          happiness worldwide.
        </p>
      </div>
    </div>
  );
};
