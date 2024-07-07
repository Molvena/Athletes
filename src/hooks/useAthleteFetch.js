
import { useContext, useEffect, useState, useCallback } from "react";
import { AthleteContext } from "../context/index.jsx";

export const useAthleteFetch = () => {
  const { dispatch } = useContext(AthleteContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 

  const fetchData = useCallback(async (url, typeAction,options = {}) => {
    //console.log("🚀 ~ fetchData ~ url:", url)
    
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      dispatch({ type: typeAction, payload: result });
      return result
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);



  return { loading, error, fetchData };
};








