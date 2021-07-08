import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useState } from "react/cjs/react.development";
import { tvApi } from "../api";

const TV = () => {
  const [tvs, setTvs] = useState({
    today: [],
    todayError: null,
    thisWeek: [],
    thisWeekError: null,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null,
  });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setTvs({
      today,
      thisWeek,
      topRated,
      popular,
      todayError,
      thisWeekError,
      topRatedError,
      popularError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>{tvs.today?.length}</Text>
    </View>
  );
};

export default TV;
