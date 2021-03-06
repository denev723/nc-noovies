import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Votes from "./Votes";
import Poster from "./Poster";
import { TouchableOpacity } from "react-native";
import { trimText } from "../utils";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({
  isTv = false,
  id,
  poster,
  title,
  votes,
  backgroundImage,
  overview,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      title,
      votes,
      backgroundImage,
      poster,
      overview,
      isTv,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 8)}</Title>
        {votes > 0 && <Votes votes={votes} />}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  backgroundImage: PropTypes.string,
};

export default Vertical;
