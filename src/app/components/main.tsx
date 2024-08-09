"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 relative">
      <Carousel pauseOnHover>
        <Image
          src="/assets/1.jpg"
          alt="..."
          height={1080}
          width={1920}
          
        />
        <Image
          src="/assets/2.jpg"
          alt="..."
          height={1200}
          width={1920}
          
        />
        <Image
          src="/assets/3.jpg"
          alt="..."
          height={1152}
          width={2048}
          
        />
        <Image
          src="/assets/4.jpg"
          alt="..."
          height={557}
          width={910}
          
        />
        <Image
          src="/assets/5.jpg"
          alt="..."
          height={512}
          width={910}
          
        />
      </Carousel>
    </div>
  );
}
