"use client";

import { Carousel } from "flowbite-react";

export default function MainPage() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 relative">
      <Carousel pauseOnHover>
        <img
          src="https://png.pngtree.com/background/20230319/original/pngtree-city-%E2%80%8B%E2%80%8Bsquare-wide-angle-background-picture-image_2151105.jpg"
          alt="..."
        />
        <img
          src="https://images2.alphacoders.com/593/593292.jpg"
          alt="..."
        />
        <img
          src="https://wallpapersmug.com/download/2048x1152/160db7/high-rise-buildings.jpg"
          alt="..."
        />
        <img
          src="https://c1.wallpaperflare.com/preview/692/156/839/building-skyscraper-light-window.jpg"
          alt="..."
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/713/420/large_2x/perspective-modern-house-with-terrace-swimming-pool-on-green-forest-view-background-minimal-architecture-design-with-chaise-longue-luxury-facade-and-large-panoramic-windows-3d-rendering-exterior-photo.jpeg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
