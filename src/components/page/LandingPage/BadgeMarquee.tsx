import React from 'react';

import Image  from 'next/image';

// Badges Pic path
import FirstBadgePicPath from "@/assets/FIRSTBADGE.png" 

// Types import
import { StaticImageData } from 'next/image';

function BadgeForMarquee({ src }: { src: StaticImageData }) {
  return (
    <div className="w-[20%] max-md:w-[60%] shadow-lg border-1 border-white border-solid ">
      <Image src={src} alt="" className='rounded-lg '/>
    </div>
  );
}

export default function BadgeMarquee() {
  return (
    <div className="my-3 marquee-container">
      <div className="marquee-content">
        <BadgeForMarquee src={FirstBadgePicPath} />
        <BadgeForMarquee src={FirstBadgePicPath} />
        <BadgeForMarquee src={FirstBadgePicPath} />
        <BadgeForMarquee src={FirstBadgePicPath} />
        <BadgeForMarquee src={FirstBadgePicPath} />
        <BadgeForMarquee src={FirstBadgePicPath} />
        <BadgeForMarquee src={FirstBadgePicPath} />
        <BadgeForMarquee src={FirstBadgePicPath} />

      </div>
    </div>
  );
}
