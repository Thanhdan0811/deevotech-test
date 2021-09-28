# Description for Search Cocktail App
- Languages used : HTML,CSS, JS, Reactjs Framework
- To create app : use command create-readt-app deevotech-test
- After code, to build and deploy app : 
    + install gh pages : npm install gh-pages --save-dev
    + Edit file package.json : add hpmepage property and 2 properties predeploy ,deploy on script property.
    + then run command : npm run deploy 
    + push everything to github

## links test for app

- [Search Cocktail app](https://thanhdan0811.github.io/deevotech-test/)

## Ideal design of app
- In React, App.jsx have 2 components Header and CocktailList. And have 2 state : title for title List, cocktailList for list of cocktails.
- Header will process input and fetch data from api : www.thecocktaildb.com/api/json/v1/1/search.php?s=
- when click on search button, result will be put in cocktailList state and change title state in App.jsx
- Component CocktailList will rerender to show the cocktailList and update the title.
