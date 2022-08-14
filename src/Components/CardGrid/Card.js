import React from "react";
import PropTypes from "prop-types";
import { Headers } from "../styles";
import Button from "../Button";
import * as S from "./Card.style";

function Card({ image, title, titleVisability, children, ctas, bgColor, cardBodySpacing }) {
  return (
    <S.Card background-color={bgColor} cardBodySpacing={cardBodySpacing}>
      {image && <S.Image src={image.url} alt={image.alt} />}
      <div className="card-contents">
        {titleVisability && <Headers.H2>{title}</Headers.H2>}
        {children}
        {ctas ? (
          <S.ButtonContainer>
            {ctas.map((cta) =>
              !cta?.isLink ? (
                <Button
                  key={cta.documentUrl}
                  link={cta.documentUrl}
                  text={cta.text}
                  secondary={cta.isSecondaryButton}
                />
              ) : (
                <Button
                  key={cta.link}
                  link={cta.link}
                  text={cta.text}
                  secondary={cta.isSecondaryButton}
                />
              )
            )}
          </S.ButtonContainer>
        ) : (
          ""
        )}
      </div>
    </S.Card>
  );
}

export default Card;

Card.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.string,
  }),
  title: PropTypes.string,
  titleVisability: PropTypes.bool,
  children: PropTypes.node,
  ctas: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      documentUrl: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  bgColor: PropTypes.string,
  cardBodySpacing: PropTypes.number
};

Card.defaultProps = {
  title: null,
  titleVisability: true,
  children: null,
  ctas: null,
  image: { url: null, alt: null, style: null },
  bgColor: null,
  cardBodySpacing: 1,
};
