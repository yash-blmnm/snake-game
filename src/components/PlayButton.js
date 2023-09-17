import React from "react";
import { styled } from "styled-components";

const PlayButtonWrapper = styled.button`
  background: transparent;
  border: none;
  color: #033203;
  font-size: medium;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  font-weight: 800;
  width: 150px;

  &:focus,
  &:hover {
    color: #dadada;
  }
`;

const PlayButton = ({ label, onClick }) => {
  return <PlayButtonWrapper onClick={onClick}>{label}</PlayButtonWrapper>;
};

export default PlayButton;
