import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : 'Salad', type : 'Salad'},
    {label : 'Bacon', type : 'Bacon'},
    {label : 'Cheese', type : 'Cheese'},
    {label : 'Meat', type : 'Meat'},

];
const buildControls = (props) => (
    <div className={classes.BuildControls}> 
    <p>Price of burger is <strong>{props.price.toFixed(2)}</strong></p>
       { controls.map(ctrl => (
            <BuildControl 
            Key={ctrl.label} 
            added = {() => props.ingredientAdded(ctrl.type)}
            removed = {()=> props.ingredientRemoved(ctrl.type)}
            label={ctrl.label} />
        ))}   
    </div>
);

export default buildControls;
 
