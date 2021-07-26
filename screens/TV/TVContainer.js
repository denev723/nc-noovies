import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { tvApi } from "../../api";
import TVPresenter from "./TVPresenter";

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
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
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
  console.log(tvs.today);
  return <TVPresenter {...tvs} />;
};

export default TV;
