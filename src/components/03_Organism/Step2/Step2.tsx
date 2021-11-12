/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import ImgMap from "src/assets/img/map_sample.jpg";
import Input from "src/components/01_Atom/Input";
import IconButton from "src/components/02_Molecules/IconButton";

const wrapStyle = css``;
const mapStyle = css`
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
  }
  // 포인터
  button {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
  }
  svg {
    transform: rotate(-45deg);
  }
`;

// interface Istep2Props {}

const Step2 = () => {
  return (
    <div>
      <h3>스토어 위치를 맵에서 선택하고 주소를 적어주세요.</h3>
      <div css={wrapStyle}>
        <div css={mapStyle}>
          <IconButton icon="IcoPointer" bgColor="pointer" shadow />
          <Image src={ImgMap} width="890" height="670" alt="맵사진" />
        </div>
        <p>
          <Input
            value="뉴욕시 도봉구 강남대로566"
            placeholder="스토어 위치"
            width="100%"
          />
        </p>
      </div>
    </div>
  );
};

export default Step2;
