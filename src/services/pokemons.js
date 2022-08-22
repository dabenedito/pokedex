import { api } from "./config.js";

export default {
  listar: (offset = 0) => {
    return api.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${offset}`);
  }
}