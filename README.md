# 사진과 가구 정보를 조합한 집 소개 페이지 구현 프로젝트

<br>

## 🚀 정보

- [배포주소 바로가기](https://luxury-haupia-352759.netlify.app/)
 
<br>

## 📝 스택


![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

<br/>

## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/kokoball/Decorating_House.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn dev
```

<br>

## ✨ 구현 사항

- [x] 방 사진 하단의 가구 리스트를 마우스로 스크롤 할 수 있도록 구현
  - [x] 영역 너비 이상으로 오버 스크롤 하는 경우 원래 위치로 돌아가도록 구현
- [x] 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
- [x] 돋보기 버튼에 마우스 오버 시 상품정보 tool tip 출력
- [x] tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출
- [x] 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
- [x] 선택된 가구는 선택되었으면 표시
- [x] 할인율이 존재하는 경우에는 할인율(discountRate) 표시
- [x] 입점된 가구, 입점되지 않은 가구 다르게 표시

<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── config-overrides.js
├── package.json
├── public
│   ├── dummy.json
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── styles
│   ├── types
│   ├── index.tsx
│   ├── setupTests.ts
│   └── utils
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── tsconfig.paths.json
├── yarn-error.log
└── yarn.lock
