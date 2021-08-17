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
      <input onChange={handleChangeNum} />
      <button
        onClick={async () => {
          await handleValidateCheck();
          await handleClickSort();
        }}
      >
        정렬 버튼
      </button>
      {errorMessage ? (
        <ErrorMsg>{errorMessage}</ErrorMsg>
      ) : (
        <>
          <section>
            {sortArr.map((item, idx) => {
              if (sortArr.length - 1 === idx) {
                return <span key={idx}>{item}</span>;
              }
              return <span key={idx}>{item},</span>;
            })}
          </section>
          <section>
            {sortReverseArr.map((item, idx) => {
              if (sortReverseArr.length - 1 === idx) {
                return <span key={idx}>{item}</span>;
              }
              return <span key={idx}>{item},</span>;
            })}
          </section>
        </>
      )}
    </Container>
  );
}

const Container = styled.article``;

const ErrorMsg = styled.span`
  color: red;
  display: flex;
`;

export default Sort;

// if (isNaN(Number(item))) {
//   setErrorMessage("올바른 형식을 입력하세요 ex) (10,2,45,1)");
//   return;
// }
// setErrorMessage("");
// return Number(item);
