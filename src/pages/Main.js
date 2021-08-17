import React from "react";
import LiveTime from "components/LiveTime";
import Sort from "pages/Sort";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <Header>
        <LogoImg alt="로고" src="./image/1549031284474.png" />
        <h1>Sorting Machine</h1>
      </Header>
      <ClockContainer>
        <Wrapper>
          <City>Seoul</City>
          <Time>
            <LiveTime lang={"ko"} />
          </Time>
        </Wrapper>
      </ClockContainer>
      <Sort />
      <ClockContainer>
        <Wrapper>
          <City>New York</City>
          <Time>
            <LiveTime lang={"en"} />
          </Time>
        </Wrapper>
      </ClockContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 512px;
  background: rgb(243, 243, 243);
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 4px 28px 0 rgb(0 0 0 / 10%);
  text-align: center;
  font-size: 30px;
  font-weight: 700;

  h1 {
    padding-top: 4px;
    color: #403c3c;
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`;

const ClockContainer = styled.div`
  padding: 0px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 156px;
  margin: 20px 0px;
  padding: 14px 14px 20px 14px;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
  border-radius: 10px;
  font-weight: 700;
`;

const City = styled.span`
  margin-bottom: 10px;
  font-size: 40px;
  color: rgb(11, 116, 226);
`;

const Time = styled.div`
  font-size: 20px;
`;

export default Main;
