import React from 'react';
import { Helmet } from 'react-helmet-async';
import { themeConfig } from '../themeConfig';

const SEO = ({ title, description, path }) => {
  const fullTitle = `${title} | ${themeConfig.brand.name}`;
  const siteUrl = `https://${themeConfig.brand.name.toLowerCase()}${path || ''}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || `${themeConfig.brand.name} provides bespoke digital architectures and high-performance IT services.`} />
      
      {/* Open Graph / Facebook (Luxury Social Sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${themeConfig.brand.logoUrl}`} />

      {/* Twitter (Tech Founder Engagement) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;