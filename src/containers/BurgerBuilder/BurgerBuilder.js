import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';



const INGREDIENT_PRICES = {
    Salad:0.5,
    Cheese : 0.4,
    Meat:1.3,
    Bacon:0.7
};


class BurgerBuilder extends Component{

    // constructor(props){
    //     super(props)
    //     this.state={

    //     }
    // }

    

    state = {

        ingredients: {
            Meat : 0,
            Cheese : 0,
            Bacon : 0, 
            Salad : 0
        },
        totalPrice : 4
    };

     addIngredientHandler = (type) => 
     {
         const oldCount = this.state.ingredients[type]; // finding the old ingredient count for specific tpe eg cheese
         const updatedCount = oldCount + 1; // updated te new count by 1.
         const updatedIngredients = {   // changing the state in an immutable fashion creating an obj updatedingredients
        ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount; //setting the new object updatedingredient of specific type to a new update value and then needs to set it though set state.
    
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice : newPrice, ingredients:updatedIngredients});
    };

    removeIngredientHandler = (type) => 
     {
         const oldCount = this.state.ingredients[type]; // finding the old ingredient count for specific tpe eg cheese
        if (oldCount <= 0){
            return;
        }
        
         const updatedCount = oldCount - 1; // updated te new count by 1.
         const updatedIngredients = {   // changing the state in an immutable fashion creating an obj updatedingredients
        ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount; //setting the new object updatedingredient of specific type to a new update value and then needs to set it though set state.
    
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice : newPrice, ingredients:updatedIngredients});
    };
   
    render(){
        return(
     <Aux>
        <p>Burger builder App!</p>
        <Burger ingredients = {this.state.ingredients}/>
        
        <BuildControls price = {this.state.totalPrice} ingredientAdded = {this.addIngredientHandler} ingredientRemoved = {this.removeIngredientHandler} />
     </Aux>
        );
    };
}

export default BurgerBuilder;