import { useState } from 'react'
import {PagesRoutes} from "./routes/index"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/index" ;

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <PagesRoutes/>
      </AuthProvider>
    </BrowserRouter>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>

    </>
  )
}

export default App
