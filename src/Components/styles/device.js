const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export default {
  mobileS: `screen and (min-width: ${size.mobileS})`,
  mobileM: `screen and (min-width: ${size.mobileM})`,
  mobileL: `screen and (min-width: ${size.mobileL})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  laptop: `screen and (min-width: ${size.laptop})`,
  laptopL: `screen and (min-width: ${size.laptopL})`,
  desktop: `screen and (min-width: ${size.desktop})`,
  desktopL: `screen and (min-width: ${size.desktop})`,

  maxMobileS: `screen and (max-width: ${size.mobileS})`,
  maxMobileM: `screen and (max-width: ${size.mobileM})`,
  maxMobileL: `screen and (max-width: ${size.mobileL})`,
  maxTablet: `screen and (max-width: ${size.tablet})`,
  maxLaptop: `screen and (max-width: ${size.laptop})`,
  maxLaptopL: `screen and (max-width: ${size.laptopL})`,
  maxDesktop: `screen and (max-width: ${size.desktop})`,
  maxDesktopL: `screen and (max-width: ${size.desktop})`,
};
