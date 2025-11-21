// app/posts/[id]/page.js (Client Component - must include 'use client')
'use client';

import { useParams } from 'next/navigation';

export default function PostPage() {
  // Get the route parameters
  const params = useParams();
  const postId = params.id; 

  return (
    <div>
      <h1>Post ID: {postId}</h1>
    </div>
  );
}