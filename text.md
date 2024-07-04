# ///////ATLETAS

-Visualizar todas las cards en la pagina de inicio: home

## AthleteCard

--Crear una card para cada atleta
-------Lo creo con @mui/material
-------Creamos un estado ??

## AthleteList

--Crear un listado de atletas con un map

/////Rutas
-Crear las rutas

////infoContext

crear un context con un reducer para listar los atletas

hook/ useFetch
Comunicar front y back para pedirle el listado de atletas
(ver useFetch de RepoPEdro/9-customHooks/ejercicio en clase)

puedo poner como estado inicial el json de los atletas

export const useFetch = (url, typeAction, options) => {
const { dispatch } = useContext(InfoContext);

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fecthData = async () => {
console.log("options",options)
try {
const response = await fetch(url, options);
const result = await response.json();
console.log("result",result);
dispatch({ type: typeAction, payload: result });

      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fecthData();

}, [url, dispatch, typeAction,options]);

return { loading, error };
};
