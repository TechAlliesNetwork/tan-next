import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ImageUrlBuilder from "@sanity/image-url";
import * as S from "./Footer.style";
import sanityClient from "../../client";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function Footer({ appName }) {
  const [footerContent, setFooterContent] = useState([]);
  async function fetchdata() {
    const data = await sanityClient.fetch(`
      *[_type == "footer"]{
        image,
        title,
        link,
      }
    `);
    setFooterContent(data);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  const year = new Date().getFullYear();
  return (
    <S.Footer>
      <S.SocialBar>
        {footerContent.map((social) => (
          <S.LI key={social.image.asset._ref}>
            <a href={social.link}>
              <S.Image
                src={urlFor(social.image).url()}
                alt={social.image.alt}
              />
            </a>
          </S.LI>
        ))}
      </S.SocialBar>

      <S.BottomBar>
        <div>
          &copy; 2017-{year} {appName}
        </div>

        <div>
          <a href="#top">Back to top</a>
        </div>
      </S.BottomBar>
    </S.Footer>
  );
}

export default Footer;

Footer.propTypes = {
  appName: PropTypes.string,
};

Footer.defaultProps = {
  appName: "Tech Allies Network",
};
