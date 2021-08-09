import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { tvApi } from "../../api";
import TVPresenter from "./TVPresenter";

const TV = () => {
  const [tvs, setTvs] = useState({
    loading: true,
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
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    setTvs({
      loading: false,
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
  return <TVPresenter refreshFn={getData} {...tvs} />;
};

export default TV;
