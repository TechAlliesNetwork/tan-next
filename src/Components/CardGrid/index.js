import React, { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import * as S from "./Card.style";
import Card from "./Card";
import sanityClient, { urlFor } from "../../client";
import { Headers } from "../styles";

function Cards({ id }) {
  const [content, setContent] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_id == $id]{
          title,
          titleVisability,
          columns,
          cardBodySpacing,
          "cards":cards[]{
            image,
            title,
            titleVisability,
            text,
            "ctas":ctas[]{
              "documentUrl":document.asset->url,
              ...
            },
            "color":bgColor->,
          }
        }`,
        { id }
      )
      .then((data) => {
        setContent(data[0]);
      });
  }, [id]);
  return (
    <>
      {content?.titleVisability && <Headers.H3>{content?.title}</Headers.H3>}
      <S.CardGrid columns={content?.columns}>
        {content?.cards &&
          content?.cards.length > 0 &&
          content?.cards.map((card) => (
            <Card
              key={card?._key}
              image={card?.image && {
                url: urlFor(card?.image)?.url(),
                alt: card?.image?.alt,
              }}
              title={card?.title}
              titleVisability={card?.titleVisability}
              ctas={card?.ctas}
              bgColor={card?.color?.hexCode}
              cardBodySpacing={content?.cardBodySpacing}
            >
              <BlockContent blocks={card?.text} />
            </Card>
          ))}
      </S.CardGrid>
    </>
  );
}

export default Cards;

Cards.propTypes = {
  id: PropTypes.string,
};

Cards.defaultProps = {
  id: null,
};
