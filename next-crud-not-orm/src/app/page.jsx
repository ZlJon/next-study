import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      <div>Hello, Next js!</div>
      <Image alt="flower" src="/flower.jpg" width={100} height={100} />
    </>
  );
}
