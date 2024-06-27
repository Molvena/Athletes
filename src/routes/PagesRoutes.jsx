import { Routes, Route } from "react-router-dom";

import {
  Home,
  Sport,
  Login,
  Settings,
  Comments,
  CreateSport,
  CreateAthlete,
} from "../pages/index";

import { HomeLayout, ProtectedLayout } from "../components/index";

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sports" element={<Sport />} />
      <Route path="/comments" element={<Comments />} />

      <Route element={<HomeLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="settings" element={<Settings />} />
        <Route path="CreateSport" element={<CreateSport />} />
        <Route path="CreateAthlete" element={<CreateAthlete />} />
      </Route>
    </Routes>
  );
};
