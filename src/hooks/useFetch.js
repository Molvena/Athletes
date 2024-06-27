//Comunicar el front y el back para pedirle el listado de athletes

import { useState, useEffect, useContext } from "react";
import { InfoContext } from "../context/infoContext";

// type options = {
//   method: 'POST', // *GET, POST, PUT, DELETE, etc.
//   mode: 'cors', // no-cors, *cors, same-origin
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: 'same-origin', // include, *same-origin, omit
//   headers: {
//     'Content-Type': 'application/json'
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   redirect: 'follow', // manual, *follow, error
//   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   body: JSON.stringify(data) // body data type must match "Content-Type" header
// }

export const useFetch = (url, typeAction, options) => {
  const { dispatch } = useContext(InfoContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthData = async () => {
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
  }, [url, dispatch, typeAction]);


  return { loading, error };
};

