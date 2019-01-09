import ReactGA from 'react-ga';
import { GA_ID } from '../constants';

export const initializeGA = () => {
  ReactGA.initialize(GA_ID);
};

export const logPageView = () => {
  ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
};