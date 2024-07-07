import { useForm } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import { useAthletes } from "../../hooks/useAthletes";
import { SportContext } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { useSports } from "../../hooks/index";

export const AthleteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { stateSport } = useContext(SportContext);
  const { addAthletes, getAllAthletes } = useAthletes();
  console.log("stateSport", stateSport.dataSport);

  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  const { getAllSports } = useSports();
  useEffect(() => {
    getAllSports();
  }, []);

  const onSubmit = async (data) => {
    // Convertir el campo sports a un array

    data.sports = data.sports.split(",").map((sport) => sport.trim());
    //console.log("data", data);
    await addAthletes(data).then(() => {
      reset();
      // Mostrar mensaje de creacion correcta
      setFormVisible(false);
      setSuccessMessage("El atleta ha sido creado correctamente.");

      // Redirigir al listado de atletas después de un tiempo
      setTimeout(() => {
        navigate("/");
      }, 3000); // 2 segundos de retraso
    });
    await getAllAthletes();
  };
  //Necesito enviar estos datos a mi estado global
  //Necesito redirigir a mi usuario al listado de atletas

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
            <select name="sports" {...register("sports")}>
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
