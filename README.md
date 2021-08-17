## 기업과제 솔라커넥트 #2 Sorting Machine

![스크린샷 2021-08-17 오후 10 50 58](https://user-images.githubusercontent.com/76652614/129738221-b096e80b-632c-4168-912c-f6ca3cb38ef7.png)

### 배포주소
https://amazing-noether-61ab85.netlify.app/

## Installation

```
# Yarn 패키지 매니저 사용

$ yarn
$ yarn start
```

## 요구사항

1. 타이머

- 타이머는 재활용이 가능한 Component로 구성합니다.
- 타이머 1은 “ko-KR” 지역시간 표기법으로 나타냅니다. (예> 2021년 7월 20일 화요일)
- 타이머 2는 “en-US” 지역시간 표기법으로 나타냅니다. (예> Tuesday July 20, 2021)
- 한국 표준시를 기준으로 나타냅니다.

2. Sorting Machine

- 사용자의 입력을 받습니다.
- 입력 데이터의 형식은 “숫자,숫자,숫자…” 입니다. (예> 1,2,3,4)
- 잘못된 형식의 입력데이터는 예외처리하여 사용합니다.
- 사용자가 버튼을 누르면 소팅이 시작됩니다.
- 오름차순이 노출 되고 3초 후에 내림차순 결과가 노출 됩니다.
- 결과 데이터의 형식은 “숫자, 숫자, 숫자…” 입니다. (예> 1, 2, 3, 4)
- 알고리즘은 소팅알고리즘을 사용하지 않고, 본인이 구현할 수 있는 정렬 방법으로 직접 구현합니다.

### 개발 인원별 구현 리스트

- [구남규](https://github.com/nain93)

- 숫자 입력시 오름차순, 내림차순 가능한 sorting Machine 구현
- 배포

- [김명준](https://github.com/JOHNKIM-KK)

- CRA 초기세팅
- 재사용 가능한 component로 지역시간표기법을 통한 타이머 구현
- 전체적인 컴포넌트 스타일링 (with styled components)

### 적용기술

- Front : React, Styled-Components
- Etc : Git, GitHub
