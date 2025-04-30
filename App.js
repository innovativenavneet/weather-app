import React from 'react';
import { Provider } from 'react-redux';
import store from "./src/redux/store"; 
import HomeScreen from "./src/screens/Homescreen"; 

const App = () => {
  console.log('Store exists?', !!store); 
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;