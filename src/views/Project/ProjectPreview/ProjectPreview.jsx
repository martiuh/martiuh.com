import React, { useEffect, useState } from 'react';
import { getPreview } from '../../../services/previewService';

export default function ProjectPreview({ url }) {
  const [previewData, setPreviewData] = useState({});
  useEffect(() => {
    async function fetchPreview() {
      const data = await getPreview(url);
      return setPreviewData(data);
    }

    fetchPreview();
  }, [url]);

  return (
    <div className="w-20 h-64 bg-red-64 max-w-full">
      {JSON.stringify(previewData)}
    </div>
  );
}
