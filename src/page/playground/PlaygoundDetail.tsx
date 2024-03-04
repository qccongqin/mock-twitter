import React from 'react';
import Audio from './Audio';
import { Link, useParams } from 'react-router-dom';
import { playgroundMenu } from './PlaygoundPage';

// export  const playgroundMenu = [
//   { name: "audio-api", displayName: "Audio API", component: Audio },
//   { name: "video-api", displayName: "Video API", component: Audio },
// ];
export default function PlaygoundDetail() {
  const params = useParams();
  const api = params.api || '';
  const item = playgroundMenu.find((i) => i.name === api);
  if (!item) {
    return 'Not found.';
  }

  return item.component;
}
