import { Header, AthleteForm, Footer } from "../../components/index";
import { Outlet } from "react-router-dom";

export const CreateAthlete = () => {
  return (
    <>
      <Header />
      <AthleteForm />
      <Footer />
    </>
  );
};
