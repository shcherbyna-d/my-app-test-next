import axios from "axios";

// const pokemonInstance = axios.create({
//   baseURL: "https://pokeapi.co/api/v2/",
// });

export type Pokemon = {
  name: string;
  url: string;
};

export type AllPokemonsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export async function getAllPokemons(
  pageUrl = "https://pokeapi.co/api/v2/pokemon"
) {
  try {
    const response = await axios.get<AllPokemonsResponse>(pageUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
