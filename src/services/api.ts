import axios from "axios";
import { API_KEY, HASH_API, TS_API } from "../../envs/production.json";
export const getApiMarvel = async (
  path: string,
  limit?: string | number,
  offset?: string | number
) => {
  try {
    let url = `http://gateway.marvel.com/v1/public/${path}?ts=${TS_API}&apikey=${API_KEY}&hash=${HASH_API}&limit=${limit}&offset=${offset}`;
    const response = await axios.get(url);

    let { data } = response.data;

    return data;
  } catch (error) {
    return console.log(error, "erro na requisição");
  }
};
