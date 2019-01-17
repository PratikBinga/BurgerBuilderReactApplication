import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';

class App extends Component {
  render() {
    return (
         <Layout>
           <BurgerBuilder/>
         </Layout>

    );
  };
}

export default App;
