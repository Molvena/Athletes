import { Header, UpdateAthleteForm, Footer } from "../../components/index";
import { Outlet } from "react-router-dom";
import { useAthletes } from "../../hooks/useAthletes";
import { useSearchParams, useParams } from "react-router-dom";

export const UpdateAthlete = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let { id } = useParams();
  console.log("🚀 ~ UpdateAthlete ~ id:", id);

  return (
    <>
      <div>UpdateAthlete</div>
      <Header />
      <UpdateAthleteForm athleteId={id} />
      <Footer />
    </>
  );
};
