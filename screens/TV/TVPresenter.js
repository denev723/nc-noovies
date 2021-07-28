import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import PropTypes from "prop-types";
import ScrollContainer from "../ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 30px;
`;

const Container = styled.View`
  margin-top: 30px;
`;

const TVPresenter = ({ loading, popular, topRated, today }) => {
  return (
    <ScrollContainer loading={loading}>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {popular.map((show) => (
            <Slide
              key={show.id}
              id={show.id}
              title={show.name}
              votes={show.vote_average}
              backgroundImage={show.backdrop_path}
              poster={show.poster_path}
              overview={show.overview}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <Container>
        <HorizontalSlider title="최고 평점 드라마">
          {topRated.map((show) => (
            <Vertical
              id={show.id}
              key={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <HorizontalSlider title="오늘 방영 드라마">
          {today.map((show) => (
            <Vertical
              id={show.id}
              key={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
      </Container>
    </ScrollContainer>
  );
};

export default TVPresenter;
