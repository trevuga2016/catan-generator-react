import React, { createContext, useContext } from 'react';

const contentful = require("contentful");

const ContentfulContext = createContext({});

let client;
try {
  client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENV
  });
} catch (e) {
  throw new Error('Invalid contentful configuration: Missing Environment Variables.');
}

export const ContentfulProvider = ({ children }) => {
  return (
    <ContentfulContext.Provider value={{ client }}>
      {children}
    </ContentfulContext.Provider>
  );
};

export const useContentfulContext = () => {
  return useContext(ContentfulContext);
};
