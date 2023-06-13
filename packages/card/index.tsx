import React from "react";
import { useStore } from "store";

export const MovieCard: React.FunctionComponent<{
  title: string;
  image: string;
  showAddButton?: boolean;
}> = ({ title, image, showAddButton }) => {
  const { movies, addMovie } = useStore();

  return (
    <>
      <h5>{title} {movies.length}</h5>
      <button
        onClick={() => addMovie({ title, image })}
      >
        Add To List
      </button>
    </>
  );
};
