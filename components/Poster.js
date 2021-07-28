import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({ url }) => {
  if (url !== null) {
    return <Image source={{ url: apiImage(url) }} />;
  }
  return <Image source={require("../assets/noPosterSmall.png")} />;
};

Poster.propTypes = {
  url: PropTypes.string || null,
};

export default Poster;
