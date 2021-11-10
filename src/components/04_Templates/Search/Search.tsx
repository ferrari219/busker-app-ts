/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FootFloat from "src/components/03_Organism/FootFloat";
import SearchResult from "src/components/03_Organism/SearchResult";

const searchStyle = css``;
interface IsearchProps {
  iptClick?: () => void;
}

const Search = ({ iptClick }: IsearchProps) => {
  return (
    <div css={searchStyle}>
      <FootFloat iptClick={iptClick} />
      <div className="schresult">
        <SearchResult />
      </div>
    </div>
  );
};

export default Search;
