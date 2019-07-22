import Prismic from 'prismic-javascript';
import { Date } from 'prismic-reactjs';

const PRISMIC_API = 'https://dreamers.cdn.prismic.io/api/v2';

export const getApi = () => Prismic.api(PRISMIC_API);
export const getPageData = pageId => getApi().then(api => api.getSingle(pageId));
export const getPageDataById = pageId => getApi().then(api => api.getByUID('page', pageId));
export const getEventDataById = eventId => getApi().then(api => api.getByUID('event', eventId));
export const linkResolver = (doc) => {
  if (doc.type === 'next_steps') return '/nextsteps';
};

export const getEvents = async () => {
  const api = await getApi();
  const events = await api.query(
    Prismic.Predicates.at('document.type', 'event'),
    { orderings: '[my.event.date desc]' }
  );
  return events.results;
};

export const formatDate = (date) => {
  const prismicDate = Date(date);
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(prismicDate);
};