/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import StepUl from "src/components/02_Molecules/StepUl";
import StepLi from "src/components/01_Atom/StepLi/StepLi";
import StepCont from "src/components/02_Molecules/StepCont";

import Button from "src/components/01_Atom/Button";
import ButtonWrap from "src/components/02_Molecules/ButtonWrap";
import A from "src/components/01_Atom/A";
import Step1 from "src/components/03_Organism/Step1";
import Step2 from "src/components/03_Organism/Step2";
import Step3 from "src/components/03_Organism/Step3";
import Step4 from "src/components/03_Organism/Step4";
import Step5 from "src/components/03_Organism/Step5";

const content = [
  {
    id: 1,
    tab: "스토어등록",
    content: <Step1 />,
  },
  {
    id: 2,
    tab: "위치 등록",
    content: <Step2 />,
  },
  {
    id: 3,
    tab: "메뉴 등록",
    content: <Step3 />,
  },
  {
    id: 4,
    tab: "상세정보",
    content: <Step4 />,
  },
  {
    id: 5,
    tab: "스토어 생성 완료",
    content: (
      <>
        <h3>스토어 생성이 완료되었습니다.</h3>
        <div>
          <Image src={ImgHam} width="890" height="670" alt="맵사진" />
          <p>뉴욕 정통 수제버거</p>
        </div>
      </>
    ),
  },
];
//console.log(content.length);

const useTabs = (
  initialTab: number,
  allTabs: Array<{
    id: number;
    tab: string;
    content: React.ReactNode;
  }>,
) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab); // 전체탭의 [0]번째로 노출해야함
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex, // changeItem은 함수 = setCurrentIndex
  };
};

interface IstepProps {
  children?: React.ReactNode;
}

const Step = ({ children }: IstepProps) => {
  const { currentItem, changeItem } = useTabs(0, content);
  // console.log(currentItem.id);
  return (
    <section>
      <StepUl>
        {content.map((item, index) => (
          <StepLi
            key={item.id}
            step={item.id}
            label={item.tab}
            active={currentItem.id - 1 === index}
            onClick={() => {
              changeItem(index);
            }}
          />
        ))}
        {/* <StepLi step={1} label="스토어 등록" />
        <StepLi step={2} label="위치 등록" active={true} />
        <StepLi step={3} label="메뉴 등록" />
        <StepLi step={4} label="상세정보" />
        <StepLi step={5} label="스토어 생성 완료" /> */}
      </StepUl>
      <StepCont>{currentItem.content}</StepCont>
      <ButtonWrap>
        <A type="light" href="/">
          생성취소
        </A>
        {currentItem.id - 1 !== 0 && (
          <Button
            type="outline"
            size="lg"
            onClick={() => changeItem(currentItem.id - 2)}
          >
            이전
          </Button>
        )}
        {currentItem.id === content.length ? (
          <A type="solid" href="/">
            스토어 생성완료
          </A>
        ) : (
          <Button size="lg" onClick={() => changeItem(currentItem.id)}>
            다음
          </Button>
        )}
      </ButtonWrap>
    </section>
  );
};

export default Step;
