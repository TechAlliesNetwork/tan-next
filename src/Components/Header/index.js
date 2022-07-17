import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import * as S from "./Header.style";
import * as N from "./Nav.style";
import Content from "../styles/Content";

function Header(props) {
  const { appName } = props;
  const [menuActive, setMenuActive] = useState(false);
  return (
    <S.HeaderContainer>
      <Content>
        <N.Nav active={menuActive} />
        <S.Header>
          <div className="logo-container">
            <Link href="/">
              <img
                src={`/images/TAN_logo.png`}
                alt={appName + " logo"}
                className="logo"
              />
            </Link>
            <span className="name">{appName}</span>
          </div>

          <div className="menu-container">
            <S.MenuButton
              menuActive={menuActive}
              setMenuActive={setMenuActive}
            />
          </div>
        </S.Header>
      </Content>
    </S.HeaderContainer>
  );
}

export default Header;

Header.propTypes = {
  appName: PropTypes.string,
};

Header.defaultProps = {
  appName: "Tech Allies Network",
};
