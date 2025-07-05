import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-HNS4YC9KN5"); // ganti dengan ID kamu
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
