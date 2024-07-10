import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useAthletes } from "../../hooks/useAthletes";
import { useNavigate } from "react-router-dom";
import { useSports } from "../../hooks/index";
import { SportContext } from "../../context/index";
import { Box } from "@mui/material";

export const UpdateAthleteForm = ({ athleteId }) => {
  const [defaultSport, setDefaultSport] = useState();

  const { stateSport } = useContext(SportContext);
  const [athleteDefault, setAthleteDefault] = useState();
  const { updateAthletes, getAthleteById, getAllAthletes } = useAthletes();
  const { getAllSports } = useSports();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm({
    //   defaultValues: {
    //     name: athleteDefault?.name || "",
    //     year: athleteDefault?.year || "",
    //     gender: athleteDefault?.gender || "",
    //     country: athleteDefault?.country || "",
    //     sports: athleteDefault?.sports[0]._id || "",
    //   },
  });
  //console.log("🚀 ~ UpdateAthleteForm ~ athleteDefault:", athleteDefault);
  useEffect(() => {
    //cargamos todos los deportes
    getAllSports();
  }, []);

  useEffect(() => {
    const getAthlete = async () => {
      try {
        const athlete = await getAthleteById(athleteId);
        //console.log("🚀 ~ getAthlete ~ athlete:", athlete);

        console.log("🚀 ~ getAthlete ~ athlete.sports[0]:", athlete.sports[0]);
        if (athlete) {
          setAthleteDefault(athlete);
          setValue("name", athlete.name);
          setValue("gender", athlete.gender);
          setValue("year", athlete.year);
          setValue("country", athlete.country);
          setDefaultSport(athlete.sports[0]);
          // Establecemos los valores del formulario usando reset para todos los campos
          reset({
            name: athlete.name,
            gender: athlete.gender,
            year: athlete.year,
            country: athlete.country,
            sports: athlete.sports[0]._id,
          });
        }
      } catch (error) {
        console.error("Error al cargar el atleta:", error);
      }
    };

    getAthlete();
  }, []);

  const onSubmit = async (data) => {
    console.log("data sin modificar", data);
    // Convertir el campo sports a un array
    data.sports = [data.sports];
    await updateAthletes(athleteId, data);
    await getAllAthletes();
    // Mostrar mensaje de creacion correcta
    setFormVisible(false);
    setSuccessMessage("El atleta se ha modificado correctamente.");
    //console.log("data", data);
    // Redirigir al listado de atletas después de un tiempo
    setTimeout(() => {
      navigate("/");
    }, 2000); // 2 segundos de retraso

    //Necesito enviar estos datos a mi estado global
    //Necesito redirigir a mi usuario al listado de atletas
  };

  return (
    <div>
      {!formVisible && <h1>{successMessage}</h1>}

      {formVisible && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "El nombre es obligatorio",
                min: {
                  value: 2,
                  message: "El nombre debe tener al menos dos caracteres",
                },
              })}
              placeholder="Nombre"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="gender">Género</label>
            <input
              type="text"
              id="gender"
              {...register("gender")}
              placeholder="Género"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="year">Año</label>
            <input
              type="number"
              id="year"
              {...register("year", { required: "El año es obligatorio" })}
              placeholder="Año"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="country">País</label>
            <input
              type="text"
              id="country"
              {...register("country")}
              placeholder="País"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="sports">Deporte</label>
            <select
              id="sports"
              name="sports"
              {...register("sports")}
              //defaultValue={defaultSport?.name ? defaultSport?.name : ""}
              //defaultChecked={defaultSport?.name}
            >
              {/* <option
                defaultValue
                value={defaultSport?._id ? defaultSport?._id : ""}
              >
                {defaultSport?.name}
              </option> */}

              {stateSport.dataSport.map((sport, index) => (
                <option key={index} value={sport._id}>
                  {sport.name}
                </option>
              ))}
            </select>

            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
