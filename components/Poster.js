import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({ url }) => {
  if (url) {
    return <Image source={{ url: apiImage(url) }} />;
  } else {
    return <Image source={require("../assets/noPosterSmall.png")} />;
  }
};

Poster.propTypes = {
  url: PropTypes.func | string | null,
};

export default Poster;
