import { Fragment } from 'react';
import {
  CHURCH_NAME,
  SITE_URL,
  META_DESCRIPTION,
  META_KEYWORDS
} from '../../constants';

export default () => (
  <Fragment>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="robots" content="noindex" />
    <meta property="og:title" content={CHURCH_NAME} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:site_name" content={CHURCH_NAME} />
    <meta property="og:description" content={META_DESCRIPTION} />
    <meta name="description" content={META_DESCRIPTION} />
    <meta name="keywords" content={META_KEYWORDS} />
    <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet"></link>
  </Fragment>
);