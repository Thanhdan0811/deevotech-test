import React from "react";

function Header(props) {
    let {setCocktailList,setTitle} = props;
    const fetchCocktail = (e) => {
        e.preventDefault();
        let input = e.target.querySelector("input");
        let cocktailName = input.value.trim();
        if(!cocktailName) return;
        let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName;
        fetch(url)
        .then((result) => {
            result.json().then((res)=> {
                if(!res.drinks) {
                    console.log("cocktailList", res);
                    setTitle("we can't find your \"" + cocktailName + "\" cocktail, please try again");
                    setCocktailList([]);
                    return;
                }
                setCocktailList([...res.drinks]);
                setTitle("List cocktails for " + cocktailName + " :");
            }).catch((err)=> {
                setCocktailList([]);
            });
        });
    };
    return (
        <>
          <div className="header">
            <div className="container">
                <div className="header-wrap">
                    <div className="header-title">
                        Search Cocktail App
                    </div>
                    <form method="GET" className="header-search" onSubmit={fetchCocktail}>
                        <input type="text" name="drink-name" />
                        <button className="btn-search">Search</button>
                    </form>
                </div>
            </div>
          </div>
        </>
      );
}

export default Header;