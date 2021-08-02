import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const Horizontal = ({
  id,
  title,
  poster,
  overview,
  releaseDate,
  backgroundImage,
  votes,
  isTv = false,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      title,
      poster,
      overview,
      releaseDate,
      backgroundImage,
      votes,
      isTv,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 10)}</Title>
          {releaseDate ? (
            <ReleaseDate>개봉 예정일: {formatDate(releaseDate)}</ReleaseDate>
          ) : (
            <Text>"개봉일미정"</Text>
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
  backgroundImage: PropTypes.string,
  votes: PropTypes.number,
};

export default Horizontal;
