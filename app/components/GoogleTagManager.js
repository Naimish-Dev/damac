import React from "react";

const GoogleTagManager = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16540884080');
        `,
      }}
    />
  </>
);

export default GoogleTagManager;
