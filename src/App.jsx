import { useState } from "react";
import { PagesRoutes } from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/index";
import {
  AthleteProvider,
  SportProvider,
  CommentProvider,
} from "./context/index";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AthleteProvider>
            <SportProvider>
              <CommentProvider>
                <PagesRoutes />
              </CommentProvider>
            </SportProvider>
          </AthleteProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
