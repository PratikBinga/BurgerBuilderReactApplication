import React,{Component} from 'react';
//import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';


class BurgerIngredient extends Component {
    render(){
        const breadBottom = {
            
                
                height: '13%',
                width: '30%',
                background: 'linear-gradient(#F08E4A, #e27b36)',
                'border-radius':' 0 0 30px 30px',
                'box-shadow': 'inset -15px 0 #c15711',
                margin: '0.5% auto',

            
        };
        
        const breadTop = {
           
                height: '20%',
                width: '30%',
                background: 'linear-gradient(#bc581e, #e27b36)',
               'border-radius': '50% 50% 0 0',
                'box-shadow': 'inset -15px 0 #c15711',
                margin: '0.5% auto',
                position: 'relative',
            
        };

        const meat = {
             
                width: '30%',
                height: '8%',
                background: 'linear-gradient(#7f3608, #702e05)',
                margin: '0.5% auto',
                'border-radius': '15px',
            
        }
        const salad = {
            width: '30%',
            height: '7%',
             margin: '0.5% auto',
            background: 'linear-gradient(#228c1d, #91ce50)',
            'border-radius':'20px',
        };

        const bacon = {
            width: '30%',
            height: '3%',
            background: 'linear-gradient(#bf3813, #c45e38)',
            margin: '0.5% auto',
        }

        const seeds2 = {
            
                width: "2%",
                height: "5%",
                position: "absolute",
                "background-color": "white",
                left: "64%",
                top: "50%",
                "border-radius": "40%",
                transform: "rotate(10deg)",
                "box-shadow": "inset -3px 0 #c9c9c9",
              
        };

        const seeds1 = {
            width: "2%",
            height: "5%",
            position: "absolute",
            "background-color": "white",
            left: "30%",
            top: "50%",
            "border-radius": "40%",
            transform: "rotate(-20deg)",
            "box-shadow": "inset -2px -3px #c9c9c9",
        };

        const cheese = {
            width: '30%',
            height: '4.5%',
            margin: '0.5% auto',
            background:'linear-gradient(#f4d004, #d6bb22)',
            'border-radius': '20px',
        };

        let ingredient = null;
    
        switch(this.props.type){
              case('Bread-bottom'):
              ingredient = <div style = {breadBottom}>
              </div>;
              break;

              case('Bread-top'):
              ingredient =
              <div style = {breadTop}>
                    <div style = {seeds1}></div>
                    <div style = {seeds2} ></div>
              </div>;
              break;

              case('Meat'):
              ingredient = <div style = {meat}>
              </div>;
              break;

              case('Cheese'):
              ingredient = <div style = {cheese}>
              </div>;
              break;

              case('Salad'):
              ingredient = <div style = {salad}>
              </div>;
              break;

              
              case('Bacon'):
              ingredient = <div style = {bacon}>
              </div>;
              break;
    
              default:
              ingredient = null;
        }
        return ingredient;
    
    }
}

    BurgerIngredient.propTypes = {
        type : PropTypes.string.isRequired
    };
    


 



export default BurgerIngredient;