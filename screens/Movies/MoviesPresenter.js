import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
      }}
      contentContainerStyle={{
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "flex-start",
      }}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <>
          <SliderContainer>
            <Swiper controlsEnabled={false} loop timeout={3}>
              {nowPlaying.map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  votes={movie.vote_average}
                  backgroundImage={movie.backdrop_path}
                  poster={movie.poster_path}
                />
              ))}
            </Swiper>
          </SliderContainer>
          <Container>
            <Title title={"인기 영화"} />
            <ScrollView
              style={{ marginTop: 20, marginBottom: 40 }}
              contentContainerStyle={{ paddingLeft: 30 }}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {popular.map((movie) => (
                <Vertical
                  id={movie.id}
                  key={movie.id}
                  poster={movie.poster_path}
                  votes={movie.vote_average}
                  title={movie.title}
                />
              ))}
            </ScrollView>
            <Title title={"개봉 예정작"} />
            <UpcomingContainer>
              {upcoming.map((movie) => (
                <Horizontal
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  poster={movie.poster_path}
                  overview={movie.overview}
                />
              ))}
            </UpcomingContainer>
          </Container>
        </>
      )}
    </ScrollView>
  );
};
