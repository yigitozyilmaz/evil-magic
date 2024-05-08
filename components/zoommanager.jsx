'use client';

import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';

export default function ZoomManager() {
  // eslint-disable-next-line
  const [zoom, setZoom] = useState(1);
  const { width } = useWindowSize();

  useEffect(() => {
    const base = 1920;
    const zoom = width / base;
    if (zoom > 1) setZoom(zoom);
    else setZoom(1);
  }, [width]);

  useEffect(() => {
    document.body.style.zoom = zoom;

    return () => {
      document.body.style.zoom = 1;
    };
  }, [zoom]);

  return null;
}