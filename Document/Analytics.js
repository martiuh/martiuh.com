import React from 'react';

export default function Analytics({ id: analyticsId }) {
  if (process.env.NODE_ENV === 'production' && analyticsId) {
    return (
      <React.Fragment>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){
                  dataLayer.push(arguments);
                }

                gtag("js", new Date());
                gtag("config", "${analyticsId}");
              `
          }}
        />
      </React.Fragment>
    );
  }
  return null;
}
