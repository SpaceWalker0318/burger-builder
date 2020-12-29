import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredients.module.css';



class BurgerIngredients extends Component {

    render(){
        let ingredients = null;
        
        switch (this.props.type) {
            case('bread-bottom'):
                ingredients=<div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredients=
                (<div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
                break;
            case('meat'):
                ingredients=<div className={classes.Meat}></div>;
                break;
            case('cheese'):
                ingredients=<div className={classes.Cheese}></div>;
                break;
            case('salad'):
                ingredients=<div className={classes.Salad}></div>;
                break;
            case('Bacon'):
                ingredients=<div className={classes.Bacon}></div>;
                break;
            default:
                ingredients = null;
        }

        return ingredients;
    }
        
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired,
  };

export default BurgerIngredients;
