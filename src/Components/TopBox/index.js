import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import Button from "../Button";
import * as S from "./TopBox.style";
import sanityClient from "../../client";

function TopBox({ id, ...props }) {
  const [content, setContent] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_id == $id]{
          title,
          body,
          cta
        }`,
        { id }
      )
      .then((data) => {
        setContent(data[0]);
      });
  }, [id]);
  return props.title ? (
    <S.TopBox>
      <h3>{props?.title ? props.title : "Loading..."}</h3>
      {props?.body ? props.body : "Loading..."}
      {props?.cta &&
        props.cta.map((action) => (
          <Button
            secondary
            key={action._key}
            link={action.link}
            text={action.title}
          />
        ))}
    </S.TopBox>
  ) : (
    <S.TopBox>
      <h3>{content?.title ? content.title : "Loading..."}</h3>
      {content?.body ? <BlockContent blocks={content.body} /> : "Loading..."}
      {content?.cta &&
        content.cta.map((action) => (
          <Button
            secondary
            key={action._key}
            link={action.link}
            text={action.title}
          />
        ))}
    </S.TopBox>
  );
}

export default TopBox;

TopBox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  body: PropTypes.object,
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

TopBox.defaultProps = {
  id: null,
  title: null,
  body: null,
  cta: null,
};
