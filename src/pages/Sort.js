import React, { useState } from 'react';
import styled from 'styled-components';

function Sort() {
  const [inputs, setInputs] = useState([]);
  const [sortArr, setSortArr] = useState([]);

  const handleChangeNum = e => {
    const { value } = e.target;
    setInputs([...value.split(',')].map(Number));
  };

  const quickSort = function (arr, transform = item => item) {
    if (arr.length <= 1) {
      return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
      if (transform(arr[i]) < transform(pivot)) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    let ls = quickSort(left, transform);
    let rs = quickSort(right, transform);
    return [...ls, pivot, ...rs];
  };

  const handleClickSort = () => {
    setSortArr(quickSort(inputs));
  };
  return (
    <Container>
      <input onChange={handleChangeNum} name="start" />
      <button onClick={handleClickSort}>정렬 버튼</button>
      <div>
        {sortArr.map((item, idx) => {
          return <span key={idx}>{item},</span>;
        })}
      </div>
      <div>내림차순</div>
    </Container>
  );
}

const Container = styled.div``;

export default Sort;
