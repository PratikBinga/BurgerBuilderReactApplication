import React,{Component} from 'react';
//import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';


class Burger extends Component{

    render(){

        let transformedIngredients = Object.keys(this.props.ingredients) //Object.Keys is used to convert an object of key vaslue pair into an array 
        .map(igKey => { //map is used as keys method returns an array an igkey is salad,bacon i.e. the key used in ingredient
             return [...Array(this.props.ingredients[igKey])].map((_,i) => {
                 return <BurgerIngredient key = {igKey + i} type = {igKey}/>
             }) // igkey is meat then array of 2 element is created [,]
        } )
        .reduce((arr, el) => {
         return arr.concat(el)
          // return arr + el;
        },[]);
        
        if (transformedIngredients.length === 0){
            transformedIngredients =  <p>Please add ingredient.</p>;
        }

        console.log(transformedIngredients);
        const Burger = {
            
                width:'100%',
                margin: 'auto',
                height:'250px',
                overflow: 'scroll',
                'text-align': 'center',
                'font-weight': 'bold',
                'font-size': '1.2rem',
                
        };
        return (
            <div style={Burger}>
               <BurgerIngredient type="Bread-top"/>
               {/* <BurgerIngredient type="Cheese"/>
               <BurgerIngredient type="Salad"/>
               <BurgerIngredient type="Bacon"/>
               <BurgerIngredient type="Meat"/>
               <BurgerIngredient type="Salad"/> */}
               {transformedIngredients}
               <BurgerIngredient type="Bread-bottom"/>
            </div>
        );
    }
}


//const burger = (props) => { 
// return (
//     <div className={classes.Burger}>
//        <BurgerIngredient type="Bread-top"/>
//        <BurgerIngredient type="Cheese"/>
//        <BurgerIngredient type="Meat"/>
//        <BurgerIngredient type="Bread-bottom"/>
//     </div>
// );
//};

export default Burger;