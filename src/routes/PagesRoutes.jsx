import { Routes, Route, } from "react-router-dom";

import {Home, Sport} from "../pages/index"

export const PagesRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/sport" element={<Sport />} />

    </Routes>
     
    
  )
}
