import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

function Sort() {
  const [inputs, setInputs] = useState([]);
  const [sortArr, setSortArr] = useState([]);
  const [sortReverseArr, setSortReverseArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChangeNum = e => {
    const { value } = e.target;
    setInputs([...value.split(",")]);
  };

  const insertionSort = function (arr, count = 0) {
    if (count === arr.length) {
      return arr;
    }

    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) > Number(arr[i + 1])) {
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
      if (Number(arr[i]) < Number(arr[i + 1])) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    insertionReverseSort(arr, count + 1);
    return arr;
  };

  const handleClickSort = () => {
    if (loading) {
      return;
    }
    if (inputs.length === 0) {
      return;
    }
    if (errorMessage) {
      return;
    }

    console.log(errorMessage, "errorMessage");

    setLoading(true);
    setSortArr([...insertionSort(inputs)]);
    setTimeout(() => {
      setLoading(false);
      setSortReverseArr([...insertionReverseSort(inputs)]);
    }, 3000);
    console.log("asd");
  };

  const handleValidateCheck = useCallback(() => {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === "") {
        setErrorMessage("올바른 형식을 입력하세요 ex) (10, 2, 45, 1)");
        return;
      }
      if (isNaN(inputs[i])) {
        setErrorMessage(
          "숫자가 아닌 값은 입력 할 수 없습니다 ex) (10, 2, 45, 1)"
        );
        return;
      }
    }
    setErrorMessage("");
  }, [inputs]);

  useEffect(() => {
    handleValidateCheck();
  }, [handleValidateCheck]);

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleClickSort();
    }
  };

  return (
    <Container>
      <InputBox>
        <InputNumber
          onKeyPress={handleKeyPress}
          onChange={handleChangeNum}
          placeholder="숫자를 입력하세요. ex) 1, 2, 3, 4"
        />
      </InputBox>
      <ErrorMsg>{errorMessage}</ErrorMsg>
      <SortBtn
        onClick={() => {
          handleClickSort();
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
            {loading ? (
              <div>loading...</div>
            ) : (
              <>
                {sortReverseArr.map((item, idx) => {
                  if (sortReverseArr.length - 1 === idx) {
                    return <span key={idx}>{item}</span>;
                  }
                  return <span key={idx}>{item},</span>;
                })}
              </>
            )}
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
