import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import ScrollContainer from "../ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

const Container = styled.View`
  margin-top: 30px;
`;

const TVPresenter = ({ loading, popular, topRated, today }) => {
  return (
    <ScrollContainer loading={loading}>
      <Container>
        <HorizontalSlider title="인기 드라마">
          {popular.map((show) => (
            <Vertical
              id={show.id}
              key={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
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
        <List title="오늘 방영 드라마">
          {today.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              title={show.name}
              poster={show.poster_path}
              overview={show.overview}
            />
          ))}
        </List>
      </Container>
    </ScrollContainer>
  );
};

export default TVPresenter;
