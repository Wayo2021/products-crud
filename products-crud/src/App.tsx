import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dockerLogo from './assets/docker2-svgrepo-com.svg'
import muiLogo from './assets/material-ui-svgrepo-com.svg'
import strapiLogo from './assets/strapi-icon-svgrepo-com.svg'
import nodeLogo from './assets/nodejs-1-logo-svgrepo-com.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://google.com" target="_blank">
          <img src={muiLogo} className="logo docker" alt="MUI logo" />
        </a>
        <a href="https://google.com" target="_blank">
          <img src={strapiLogo} className="logo docker" alt="Strapi logo" />
        </a>
        <a href="https://google.com" target="_blank">
          <img src={dockerLogo} className="logo docker" alt="Docker logo" />
        </a>
        <a href="https://google.com" target="_blank">
          <img src={nodeLogo} className="logo docker" alt="NodeJs logo" />
        </a>
      </div>
      <h1>Vite + React + MUI + Strapi + Docker + NodeJs</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
