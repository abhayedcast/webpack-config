import React from 'react'
import "../styles/index.scss";
import Recipes from './Recipes';
import leapeast from '../images/leapest.png';
import taskList from "../images/task_list.svg";



function App() {
    return (
        <>
          <section className="hero"></section> 
          <main>
              <section>
                  <h1>Oh haxzxzxzre krishna, React chant and be happy</h1>
              </section>
              <img src={leapeast} alt="Leapest" width="250"/>
              <img src={taskList} alt="taskList" width="250"/>
              <Recipes />
          </main>
        </>
    )
}

export default App
