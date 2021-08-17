import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Sort from 'pages/Sort';
import Main from 'pages/Main';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Main />
      <Sort />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
`;

export default App;
