import { useState } from "react";
import reactImg from "./assets/react-core-concepts.png"
import ListButtons from "./components/ListButtons";
import {EXAMPLES, CORE_CONCEPTS} from "./data-with-examples"
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

const randomArray = ["fuck" , "geee" , "mooo"];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
} 

function Card({title, description, image}) {
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function Header() {
  return (
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {randomArray[getRandomInt(2)]} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}


function App() {

  
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
