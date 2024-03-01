import React from 'react';
import Audio from './Audio';
import { Link } from 'react-router-dom';
import Video from './Video';
import { TextField } from '@mui/material';

export const playgroundMenu = [
  { name: 'audio-api', displayName: 'Audio API', component: <Audio /> },
  { name: 'video-api', displayName: 'Video API', component: <Video /> },
];
export default function PlaygoundPage() {
  return (
    <div>
      {playgroundMenu.map((i) => (
        <div key={i.name}>
          <Link to={`/playground/${i.name}`}>{i.displayName}</Link>
        </div>
      ))}

      <TextField variant="outlined" />
    </div>
  );
}
