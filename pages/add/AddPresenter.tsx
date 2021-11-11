/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Heads from "src/components/99_Etc/Heads";
import Step from "src/components/04_Templates/Step";
import Header from "src/components/03_Organism/Header";
import IconButton from "src/components/02_Molecules/IconButton";
import Nav from "src/components/04_Templates/Nav";

const mainStyle = css``;

const AddPresenter = () => {
  return (
    <section>
      <Heads title="스토어 등록" />
      <main css={mainStyle}>
        <Header
          left={
            <>
              <IconButton
                icon="IcoBack"
                bgColor="transp"
                onClick={() => window.history.back()}
              />
              <Nav bgColor="transp" shadow={false} />
            </>
          }
          mid="스토어등록"
          right={<IconButton icon="IcoUser" bgColor="transp" />}
        />
        <Step />
      </main>
    </section>
  );
};

export default AddPresenter;
