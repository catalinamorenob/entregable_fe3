import Card from "./Components/Card";
import Form from "./Components/Form";
import {useState} from 'react'; 

function App () {
  return (
    <div classname = "App">
      <h1>¡Hola!</h1>
      <h2>Por favor completa los siguientes datos: </h2>
      <Form/>
    </div>
  );
}

export default App