import Layout from "@/components/Layout/Layout";
import React, { ReactElement, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/api";

export default function Restaurants({ restaurants }) {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/restaurants?pagination[page]=${pageIndex}&pagination[pageSize]=5`,
    fetcher,
    {
      fallbackData: restaurants,
    }
  );

  return (
    <div>
      <h2>Restaurants</h2>
      <div>
        <ul>
          {data.data.map((restaurant) => {
            return (
              <li key={restaurant.attributes.name}>
                {restaurant.attributes.name}
              </li>
            );
          })}
        </ul>
        <div>
          <button
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            Previous
          </button>
          <button
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            Next
          </button>
          <span>{`${pageIndex} of ${
            data && data.meta.pagination.pageCount
          }`}</span>
        </div>
      </div>
    </div>
  );
}

Restaurants.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async (context) => {
  const restaurants = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/restaurants?pagination[page]=1&pagination[pageSize]=5`
  );

  return { props: { restaurants } };
};
