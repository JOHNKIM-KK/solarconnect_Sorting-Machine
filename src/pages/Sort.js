import React, { useState } from "react";
import styled from "styled-components";

function Sort() {
  const [inputs, setInputs] = useState([]);
  const [sortArr, setSortArr] = useState([]);
  const [sortReverseArr, setSortReverseArr] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeNum = e => {
    const { value } = e.target;
    setInputs([...value.split(",")].map(Number));
  };

  const insertionSort = function (arr, count = 0) {
    if (count === arr.length) {
      return arr;
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    insertionSort(arr, count + 1);
    return arr;
  };

  const insertionReverseSort = function (arr, count = 0) {
    if (count === arr.length) {
      return arr;
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    insertionReverseSort(arr, count + 1);
    return arr;
  };

  const handleClickSort = () => {
    setSortArr([...insertionSort(inputs)]);
    setTimeout(
      () => setSortReverseArr([...insertionReverseSort(inputs)]),
      3000
    );
  };

  const handleValidateCheck = () => {
    const results = inputs?.filter(item => isNaN(item));
    if (results.length !== 0) {
      setErrorMessage("올바른 형식을 입력하세요 ex) (10, 2, 45, 1)");
      return;
    }

    setErrorMessage("");
  };

  return (
    <Container>
      <InputBox>
        <InputNumber
          onChange={handleChangeNum}
          placeholder="숫자를 입력하세요. ex) 1, 2, 3, 4"
        />
      </InputBox>
      <ErrorMsg>{errorMessage}</ErrorMsg>
      <SortBtn
        onClick={async () => {
          await handleValidateCheck();
          await handleClickSort();
        }}
      >
        정렬
      </SortBtn>
      {!errorMessage && (
        <>
          <Result>
            <ResultHeader>오름차순</ResultHeader>
            {sortArr.map((item, idx) => {
              if (sortArr.length - 1 === idx) {
                return <span key={idx}>{item}</span>;
              }
              return <span key={idx}>{item},</span>;
            })}
          </Result>
          <Result>
            <ResultHeader>내림차순</ResultHeader>
            {sortReverseArr.map((item, idx) => {
              if (sortReverseArr.length - 1 === idx) {
                return <span key={idx}>{item}</span>;
              }
              return <span key={idx}>{item},</span>;
            })}
          </Result>
        </>
      )}
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0px 10px 0px;
  padding: 15px 14px 15px 30px;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
  border-radius: 10px;
`;

const InputNumber = styled.input`
  width: 100%;
  padding: 5px 0px;
  border: none;
  background: none;
  outline: none;
  font-size: 20px;

  &:focus {
    border-bottom: 3px solid #156aff;
  }
`;

const SortBtn = styled.button`
  width: 100%;
  margin: 10px 0px;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  background-color: #156aff;
  color: #fff;
  font-size: 17px;

  &:focus {
    cursor: pointer;
  }
`;

const Result = styled.section`
  width: 100%;
  margin: 10px 0px;
  padding: 15px 14px 15px 30px;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
  border-radius: 10px;

  span {
    color: #156aff;
    font-size: 20px;
    font-weight: 600;
  }
`;

const ResultHeader = styled.h2`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 700;
`;

const ErrorMsg = styled.span`
  padding-left: 8px;
  color: red;
`;

export default Sort;

// if (isNaN(Number(item))) {
//   setErrorMessage("올바른 형식을 입력하세요 ex) (10,2,45,1)");
//   return;
// }
// setErrorMessage("");
// return Number(item);
