import React from "react";
import fastfoodimg from "../../images/fast-food.jpg";
export const FastFoodInfo = () => {
  return (
    <div>
      <div>
        <div className="d-flex container gap-4">
          <img
            style={{ width: "350px", height: "250px" }}
            src={fastfoodimg}
            alt="Fast-Food"
          />
          <p className="text-secondary fs-5 fw-normal">
            Fast food, a ubiquitous and influential aspect of contemporary
            dining, has transformed the culinary landscape and eating habits
            globally. Characterized by quick service, affordability, and a menu
            often dominated by easily portable items, fast food establishments
            offer a convenient solution for individuals with busy lifestyles.
            From iconic chains like McDonald's, Burger King, and KFC to local
            eateries, fast food encompasses a wide range of cuisines, including
            burgers, fries, pizza, fried chicken, and more. While celebrated for
            its accessibility and efficiency, the industry has faced scrutiny
            for health concerns related to the often high levels of salt, fat,
            and calories in some menu items. Despite the debates surrounding its
            nutritional impact, fast food remains a cultural phenomenon,
            influencing social dynamics, popular culture, and the way people
            around the world approach dining in the fast-paced modern era.
          </p>
        </div>
      </div>
    </div>
  );
};
