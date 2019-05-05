import Prismic from 'prismic-javascript';

const PRISMIC_API = 'https://dreamers.cdn.prismic.io/api/v2';

export const getApi = () => Prismic.api(PRISMIC_API);
export const getPageData = pageId => getApi().then(api => api.getSingle(pageId));
export const getPageDataById = pageId => getApi().then(api => api.getByUID('page', pageId));
export const linkResolver = (doc) => {
  if (doc.type === 'next_steps') return '/nextsteps';
};