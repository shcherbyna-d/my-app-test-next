import Layout from "@/components/Layout/Layout";
import React, { ReactElement, useEffect, useState } from "react";
import { AllPokemonsResponse, getAllPokemons } from "@/api/pokemons";

export default function Pokemons({
  pokemonsResponse,
}: {
  pokemonsResponse: AllPokemonsResponse;
}) {
  const [pageIndex, setPageIndex] = useState(1);
  const [data, setData] = useState<AllPokemonsResponse>(pokemonsResponse);

  useEffect(() => {
    function getData() {
      getAllPokemons().then((response) => {
        if (response) {
          setData(response);
        }
      });
    }

    if (!data) {
      getData();
    }
  }, [data]);

  const handleNextPage = () => {
    getAllPokemons(data?.next || undefined).then((response) => {
      if (response) {
        setData(response);
        setPageIndex(pageIndex + 1);
      }
    });
  };

  const handlePreviousPage = () => {
    getAllPokemons(data?.previous || undefined).then((response) => {
      if (response) {
        setData(response);
        setPageIndex(pageIndex - 1);
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl mb-5">Pokemons</h2>
      <div className="ml-4">
        <ul>
          {data?.results.map((pokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          })}
        </ul>
        <div className="mt-4 flex gap-5">
          <button
            disabled={!Boolean(data?.previous)}
            onClick={handlePreviousPage}
            className="bg-slate-800 text-slate-50 px-4 flex items-center h-8 rounded-md enabled:hover:bg-slate-600 transition-colors cursor-pointer disabled:cursor-default"
          >
            Previous
          </button>
          <span>{`${pageIndex} of ${
            data && Math.round(data.count / 20)
          }`}</span>
          <button
            disabled={Boolean(!data?.next)}
            onClick={handleNextPage}
            className="bg-slate-800 text-slate-50 px-4 flex items-center h-8 rounded-md enabled:hover:bg-slate-600 transition-colors cursor-pointer disabled:cursor-default"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

Pokemons.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async (context) => {
  // const restaurants = await fetcher(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/restaurants?pagination[page]=1&pagination[pageSize]=5`
  // );

  const pokemonsResponse = await getAllPokemons();

  return { props: { pokemonsResponse } };
};
