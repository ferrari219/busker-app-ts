// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const mainStyle = css`
  background-color: black;
  color: #fff;
`;

const Index = () => {
  return (
    <div css={mainStyle}>
      <ul>
        <li>next.config emotion관련 수정</li>
        <li>emotion 설치</li>
        <li>storybook preview.js</li>
        <li>storybook typescript-loader설치</li>
        <li>storybook main.js변경</li>
        <li>storybook 설치</li>
        <li>svgr 설치, next.config 수정</li>
        <li>esline.json</li>
        <li>prettierrc</li>
        <li>tsconfig.json 수정</li>
        <li>prettier설치</li>
        <li>eslint airbnb설치</li>
        <li>nextjs 설치</li>
      </ul>
    </div>
  );
};

export default Index;
