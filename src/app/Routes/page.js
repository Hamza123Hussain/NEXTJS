"use client";
import { useRouter } from 'next/navigation';
export default function Routes() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to a specific route
    router.push('/');

    // You can also navigate to a dynamic route with parameters
    // router.push('/posts/[postId]', `/posts/${postId}`);

    // If you want to scroll to the top of the page after navigation
    // router.push('/other-page', undefined, { scroll: true });
  };

  return (
    <button onClick={handleClick}>Go to other page</button>
  );
}
