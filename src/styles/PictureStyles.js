import React from 'react';
import styled from 'styled-components';

// Main
export const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledPictureColumns = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: lightgoldenrodyellow;
  padding: 10px;
  overflow-y: scroll;
  margin-top: 2rem;
  //-webkit-scrollbar {
  //  display: none;
  //}
  //-ms-overflow-style: none;
  //scrollbar-width: none;
`;

export const StyledMainPicture = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: mediumpurple;
  padding: 10px;
  justify-content: center;
  align-items: center;
`

// Inside PictureColumns
export const IndividualPictureColumn = styled.div`
  max-width: 80%;
  height: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const IndividualPictureRow = styled.div`
  max-width: 80%;
  height: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled.div`
  background-color: #4CAF50; /* Green */
  margin-bottom:2%;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`