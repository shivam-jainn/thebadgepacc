import React from 'react';

function BadgeForMarquee({ src }: { src: string }) {
  return (
    <div className="w-[20%] max-md:w-[60%] shadow-lg border-1 border-white border-solid ">
      <img src={src} alt="" className='rounded-lg '/>
    </div>
  );
}

export default function BadgeMarquee() {
  return (
    <div className="my-3 marquee-container">
      <div className="marquee-content">
        <BadgeForMarquee src="/FIRSTBADGE.png" />
        <BadgeForMarquee src="/FIRSTBADGE.png" />
        <BadgeForMarquee src="/FIRSTBADGE.png" />
        <BadgeForMarquee src="/FIRSTBADGE.png" />
        <BadgeForMarquee src="/FIRSTBADGE.png" />
        <BadgeForMarquee src="/FIRSTBADGE.png" />
        <BadgeForMarquee src="/FIRSTBADGE.png" />
        <BadgeForMarquee src="/FIRSTBADGE.png" />

        {/* Repeat the badges as needed */}
      </div>
    </div>
  );
}
