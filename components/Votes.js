import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Votes = styled.Text`
  color: rgb(240, 240, 240);
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 500;
`;

export default ({ votes }) => <Votes>⭐️ {votes} / 10</Votes>;
