import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";

const Container = styled.ScrollView`
  background-color: black;
`;

const SearchPresenter = ({ movies, shows, keyword, onSubmit, onChange }) => {
  return (
    <Container>
      <Input
        placeholder={"검색어를 입력하세요.."}
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {movies.length !== 0 && (
        <HorizontalSlider title={"영화 검색 결과"}>
          {movies.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
      {shows.length !== 0 && (
        <HorizontalSlider title={"드라마 검색 결과"}>
          {shows.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.name}
              poster={show.poster_path}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
    </Container>
  );
};

export default SearchPresenter;
