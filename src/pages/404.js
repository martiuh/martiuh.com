import React from 'react';

import SEO from '../components/SEO' 
export default function NotFound() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true);
  }, []);

  return ready ? (
    <main>
      <SEO title="No encontrado" />
      <h1>No tenemos ese contenido</h1>
    </main>
  ) : (
    <div style={{ height: '102vh' }} />
  );
}
