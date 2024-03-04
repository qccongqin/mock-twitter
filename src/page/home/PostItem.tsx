import React from 'react';
import { Posts } from '../../mock-data/data';
import Avatar from '@mui/material/Avatar';

type PostItemProps = {
  post: (typeof Posts)[0];
};

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="flex flex-row">
      <Avatar alt="avatar" src={post.avatorUrl} />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span>{post.displayName}</span>
          <span>{post.created_at}</span>
        </div>

        <span className="whitespace-pre-wrap">{post.full_text}</span>
      </div>
    </div>
  );
}
