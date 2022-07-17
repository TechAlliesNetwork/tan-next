import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import sanityClient from "../../client";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import Hero from "../Hero";
import { Content } from "../styles";
import TopBox from "../TopBox";
import Cards from "../CardGrid";


// index.js
const Page = () => {
  const name = "Tech Allies Network";
  const router = useRouter()
  const [pageContent, setPageContent] = useState(0);
  useEffect(() => {
    if (router.query.page){
      sanityClient
        .fetch(
          `
            *[_type == "page" && pagename == $path ]{
              hero->,
              pageElements
            }
        `,
          { path: router.asPath }
        )
        .then((data) => {
          setPageContent(data.length === 0 ? { error: 404 } : data[0]);
        });
    }
  }, [router.asPath]);
  
  return (
    <div id="top" className="App">
      <Header appName={name} />
      <main>
        {pageContent?.error === 404 ? (
          <TopBox
            title="Oops this page cannot be found"
            body={
              <p>
                You&apos;ve tried to access a page that doesn&apos;t exist, try
                again.
              </p>
            }
          />
        ) : (
          <>
            <Hero
              title={pageContent.hero?.title}
              subtitle={pageContent.hero?.subtitle}
              cta={pageContent.hero?.cta}
            />
            <Content>
              {pageContent.pageElements &&
                pageContent.pageElements.map((element) => {
                  if (element._type === "topbox") {
                    return <TopBox id={element._ref} key={element._ref} />;
                  }
                  if (element._type === "cardGrid") {
                    return <Cards id={element._ref} key={element._ref} />;
                  }
                  return <div key={element._ref} />;
                })}
            </Content>
          </>
        )}
      </main>

      <Footer appName={name} />
    </div>
  );
}
export default Page;
