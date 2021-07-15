import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { apiImage } from "../../api";
import Poster from "../Poster";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 7px;
`;

const Votes = styled.Text`
  color: rgb(240, 240, 240);
  margin-bottom: 7px;
  font-size: 12px;
`;

const Overview = styled.Text`
  color: rgb(240, 240, 240);
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 5px 10px;
  border-radius: 5px;
`;

const ButtonText = styled.Text``;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => {
  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={apiImage(poster)} />
        <Data>
          <Title>{title.slice(0, 10)}...</Title>
          <Votes>⭐️ {votes} / 10</Votes>
          <Overview>
            {overview ? overview.slice(0, 70) : "줄거리가 없습니다."}...
          </Overview>
          <TouchableOpacity>
            <Button>
              <ButtonText>자세히 보기..</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;