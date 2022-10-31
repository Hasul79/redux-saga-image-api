import React from 'react';
import './App.css';
import {Actions} from "./redux/action/action";
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch =useDispatch();
  function handleClick(){
   dispatch ({
    type: Actions.GET_IMAGES_1
   })
  }
  const image = useSelector((state) => state.getImages1.images.message)
   console.log(image)
  
   return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
   <img src={image} width="500" height="400" />
      </div>
  );
}

export default App;
