import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import chipsimg from "../../images/lays.jpg";
export const ChipsInfo = () => {
  return (
    <div>
      <div>
        <div className="d-flex container gap-4">
          <img
            style={{ width: "250px", height: "250px" }}
            src={chipsimg}
            alt="lays"
          />
          <p className="text-secondary fs-5 fw-normal">
            Lay's, a renowned brand in the world of snacks, has been delighting
            taste buds since its founding in 1932 by Herman Lay. Specializing in
            potato chips, Lay's has become a household name synonymous with
            crispy, flavorful indulgence. The brand's success lies not only in
            its classic Original Salted chips but also in its innovative
            approach to flavors, offering a diverse range that caters to a broad
            spectrum of preferences. Whether it's the tangy zest of Sour Cream
            and Onion, the smoky richness of Barbecue, or exotic regional
            variations, Lay's has mastered the art of creating irresistible
            snacking experiences. The iconic bright packaging and the tagline
            "Betcha can't eat just one" reflect the brand's commitment to
            providing a snack that is not only delicious but also irresistibly
            satisfying. With a history rooted in quality and a constant pursuit
            of new and exciting taste adventures, Lay's remains a go-to choice
            for those seeking a flavorful and crunchy snack for any occasion.
          </p>
        </div>
      </div>
    </div>
  );
};
