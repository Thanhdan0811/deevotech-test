import React from "react";

function CocktailItem(props) {
    const {cocktail} = props;
    const {strDrink : name, strDrinkThumb : img, strInstructions  : desc } = cocktail || {};
    
    return (
        <>
          <div className="col-3">
            <div className="cocktail-item">
                <div className="cocktail-img">
                    <img src={img} alt="" className="w-100"/>
                </div>
                <div className="cocktail-detail">
                    <h2 className="title">{name}</h2>
                    <p className="detail">
                        {desc}
                    </p>
                </div>
            </div>
          </div>
        </>
      );
}

export default CocktailItem;