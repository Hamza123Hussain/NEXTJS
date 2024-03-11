// pages/endpage.js (assuming this is in the pages directory)
'use client';
import { useRouter } from "next/navigation"; // Import from next/router instead of next/navigation

export default function Endpage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
    console.log('Button clicked');
  };

  return (
    <>
      <h1>I am endpage</h1>
      <button onClick={handleClick}>GO TO HOME</button>
    </>
  );
}
