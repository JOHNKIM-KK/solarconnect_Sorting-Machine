import React from "react";
import styled from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import Main from "pages/Main";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
