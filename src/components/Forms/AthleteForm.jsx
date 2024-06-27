import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAthletes } from "../../hooks";

export const AthleteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { UseAddAthletes } = useAthletes();

  const onSubmit = (data) => {
    UseAddAthletes(data);
    console.log("data", data);
    //Necesito enviar estos datos a mi estado global
    //Necesito redirigir a mi usuario al listado de atletas
  };

  return (
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
        <input
          type="text"
          id="sports"
          {...register("sports")}
          placeholder="Deporte"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
