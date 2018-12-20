import Prismic from 'prismic-javascript';
import { PRISMIC_API } from '../constants';

export const getApi = () => Prismic.api(PRISMIC_API);

export const getCommonData = () => getApi().then(api => api.getSingle('common'));