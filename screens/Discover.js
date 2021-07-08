import React, { useEffect } from "react";
import { View, Text, Platform } from "react-native";
import { useState } from "react/cjs/react.development";
import { movieApi } from "../api";

const Favs = () => {
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>{movies.results?.length}</Text>
    </View>
  );
};

export default Favs;
