import React from 'react';
import Layout from './Components/Layout/Layout';
import BugerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component {
  render () {
    return (
      <div>
        <Layout>
          <BugerBuilder></BugerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
