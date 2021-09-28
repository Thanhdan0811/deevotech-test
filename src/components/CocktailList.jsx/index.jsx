import React from "react";
import CocktailItem from "../CocktailItem.jsx";

function CocktailList(props) {
    const {cocktailList,title} = props;
    function renderCocktailItems() {
        return cocktailList.map((cocktail)=> {
            return <CocktailItem cocktail={cocktail} key={cocktail.idDrink}/>
        })
    }
    return (
        <>
          <div className="cocktail-list">
            <div className="container">
                <h1>{title}</h1>
                <div className="row list-wrap">
                    {
                        renderCocktailItems()
                    }
                </div>
            </div>
          </div>
        </>
      );
}

export default CocktailList;