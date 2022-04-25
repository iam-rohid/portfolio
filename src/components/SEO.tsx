import Head from "next/head";
import React, { useMemo } from "react";
import { me } from "src/data/me";

const defaultDesc = "A rohid.dev blog";

export type SEOProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  twitterHandle?: string;
};

const SEO = ({
  title,
  description = defaultDesc,
  imageAlt = me.name,
  image = me.avatar,
  type = "website",
  url = me.url,
  keywords = me.keywords,
  twitterHandle = me.twitterHandle,
}: SEOProps) => {
  const pageTitle = useMemo(
    () => (title ? `${title} | ${me.name}` : me.name),
    [title]
  );

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(",")} />
      <meta name="image" content={image} />
      <meta name="url" content={url} />
      <meta name="type" content={type} />

      {/* OG */}
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:image:alt" content={imageAlt || pageTitle} />
      <meta name="og:url" content={url} />
      <meta name="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt || pageTitle} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle || me.twitter} />
      <meta name="twitter:domain" content={me.doamin} />
    </Head>
  );
};

export default SEO;
