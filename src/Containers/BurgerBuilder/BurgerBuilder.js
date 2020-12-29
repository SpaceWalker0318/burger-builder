import React, {Component} from 'react';

import Axuiliary from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            meat: 2,
            cheese: 2,
            salad: 1,
            bacon: 1
        }
    }
    render() {
        return (
          <Axuiliary>
              <div>
                  <Burger ingredients={this.state.ingredients}/>
              </div>
              <div>build controls</div>
          </Axuiliary>  
        );
    }
}

export default BurgerBuilder;