import React from 'react'
import "../styles/index.scss";
import Recipes from './Recipes';
function App() {
    return (
        <>
          <section className="hero"></section> 
          <main>
              <section>
                  <h1>Oh hai, React chant and be happy</h1>
              </section>
          </main>

          <Recipes />
        </>
    )
}

export default App
