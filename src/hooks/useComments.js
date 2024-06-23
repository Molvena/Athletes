import { useFetch } from "./index.jsx"

export const useComments = () => {
    const useGetAllComments = async () => {
        useFetch("http://localhost:8081/api/v1/comment/getAll")
    }
  return {useGetAllComments}
}
