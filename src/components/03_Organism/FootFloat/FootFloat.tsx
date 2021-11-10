/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IconA from "src/components/02_Molecules/IconA";
import SearchComp from "src/components/02_Molecules/SearchComp";

const footFloatStyle = css`
  display: flex;
  flex-flow: row wrap;
  max-width: 89rem;
  padding: 1rem 0;
  .btn {
    flex-basis: 4rem;
    display: flex;
    justify-content: center;
  }
  .sch {
    flex: 1;
    padding: 0 1rem;
    /* display: flex;
    justify-content: center; */
  }
`;

interface IfootfloatProps {
  iptClick?: () => void;
}

const FootFloat = ({ iptClick }: IfootfloatProps) => {
  return (
    <div id="dev_footFloat" css={footFloatStyle}>
      <div className="btn">
        <IconA icon="IcoAdd" bgColor="add" round="5" href="/add" />
      </div>
      <div className="sch">
        <SearchComp iptClick={iptClick} />
      </div>
      <div className="btn">
        <IconA icon="IcoBell" bgColor="notice" round="5" href="/event" />
      </div>
    </div>
  );
};

export default FootFloat;
