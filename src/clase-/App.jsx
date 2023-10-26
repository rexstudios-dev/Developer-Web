
import reactLogo from './react.svg'
import viteLogo from './vite.svg'

import './App.css'

export default function App() {

  return ( 
    <div className="app">
  <header className="header"> {/* El header*/ }

<h1>Bienvenidos a mi app de React + Vite</h1> 
<p>Construyendo con React y Vite!</p> 

</header>
     
      <main>

      

      <div className="logo-card"> 
          <img src={reactLogo} className="logo react" /> 
          <img src={viteLogo} className="logo vite" /> 
        </div>

      
        <div className="content"> 

<h2>Aprendiendo React</h2> 

<p> 
React es una biblioteca para construir interfaces de usuario. Nos permite crear componentes reutilizables y mantener el estado de la aplicación.
</p>

          



</div>

       
<div className="buttons">
          <a href="https://es.reactjs.org">Docs React</a>  
          <a href="https://vitejs.dev">Docs Vite</a>
        </div>

      </main>

    </div>
  )

}