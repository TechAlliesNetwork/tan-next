import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import * as S from "./Button.style";

function Button({ link, text, secondary }) {
  if (link?.substring(0, 1) === "/") {
    return (
      <Link href={link} style={{ textDecoration: "none" }}>
        <S.Button secondary={secondary}>{text}</S.Button>
      </Link>
    );
  }

  return (
    <a href={link} style={{ textDecoration: "none" }}>
      <S.Button secondary={secondary}>{text}</S.Button>
    </a>
  );
}

export default Button;

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  secondary: false,
};
