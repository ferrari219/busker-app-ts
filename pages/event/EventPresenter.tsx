/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "src/components/03_Organism/Header";
import Heads from "src/components/99_Etc/Heads";
import IconButton from "src/components/02_Molecules/IconButton";
import Nav from "src/components/04_Templates/Nav";
import EventUl from "src/components/02_Molecules/EventUl";
import EventLi from "src/components/01_Atom/EventLi";
import Loader from "src/components/04_Templates/Loader";

const mainStyle = css``;

interface IeventProps {
  event: Array<{
    id: number;
    key: number;
    company: string;
    promotion?: string | null;
    pic: string;
    lnk: string;
  }> | null;
  loading: boolean;
  error: string | null;
}

const EventPresenter = ({ event, loading, error }: IeventProps) => {
  // console.log(event);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Heads title="이벤트" />
          {/* <h1>이벤트</h1> */}
          <main>
            <section css={mainStyle}>
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
                mid="이벤트"
                right={<IconButton icon="IcoUser" bgColor="transp" />}
              />
              <EventUl>
                {event &&
                  event.map(({ id, company, promotion, pic, lnk }) => (
                    <EventLi
                      key={id}
                      id={id}
                      company={company}
                      promotion={promotion}
                      pic={pic}
                      lnk={lnk}
                    />
                  ))}
                {/* <EventLi />
                <EventLi />
                <EventLi /> */}
              </EventUl>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default EventPresenter;
