import React from "react";
import { useState } from "react/cjs/react.development";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      movieError,
      showError,
    });
  };
  return (
    <SearchPresenter
      {...results}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
};

export default SearchContainer;
