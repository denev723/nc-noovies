import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;

const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
`;

const Horizontal = ({ id, title, poster, overview, releaseDate }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 10)}</Title>
          {releaseDate ? (
            <ReleaseDate>개봉 예정일: {formatDate(releaseDate)}</ReleaseDate>
          ) : (
            "개봉일미정"
          )}
          <Overview>{trimText(overview, 80)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Horizontal;
