import Head from 'next/head';

export default ({ title = 'Default Site Title', description = 'Default Site Description....' }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{title}</title>
    <meta name="author" content="JC" />
    <meta name="description" content={description} />
    <meta name="subject" content="Site Subject" />
    <meta name="keywords" content="site, keywords, go, here" />
    <meta property="og:image" content="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png" />
    <meta property="og:description" content={description} />
    <meta property="og:title" content={title} />
  </Head>
);
