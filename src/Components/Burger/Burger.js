import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_,i)=>{
                return <BurgerIngredients key={igkey+i} type='igkey'/>;
            });
        });

    return (
        <div className={classes.burger}>
            <BurgerIngredients type = 'bread-top'></BurgerIngredients>
            {transformedIngredients}
            <BurgerIngredients type = 'bread-bottom'/>
        </div>
    );
};

export default burger;