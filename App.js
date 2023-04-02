import React from "react";
import { Provider } from "react-redux";
import { mystore } from "./redux/store/store";
import Main from "./src/main";
import 'react-native-gesture-handler';

const App=()=>{
  
  return(
    <Provider store={mystore}>
    <Main/>   
     </Provider> 
   
  

  )
}
export default App