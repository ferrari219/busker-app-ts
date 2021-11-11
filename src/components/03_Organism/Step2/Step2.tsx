import Image from "next/image";
import ImgHam from "src/assets/img/sample_burger.jpg";
import Input from "src/components/01_Atom/Input";

// interface Istep1Props {}

const Step1 = () => {
  return (
    <div>
      <h3>생성할 스토어 대표사진과 이름을 입력해주세요</h3>
      <div>
        {/* <Image src={ImgHam} width="890" height="670" alt="대표사진" /> */}
        <p>
          <Input value="뉴욕 수제버거" placeholder="스토어 이름" width="100%" />
        </p>
      </div>
    </div>
  );
};

export default Step1;
