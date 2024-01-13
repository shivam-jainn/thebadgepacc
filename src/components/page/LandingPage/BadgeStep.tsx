import React from 'react';

// Pattern svg
import BadgeStepPattern from "@/assets/BadgepaccStepsPatternSvg.svg" 


export default function BadgeStep({step,desc}:{step:string,desc:string}) {
  
  return (
    <div className='flex items-center md:flex-col md:gap-4  md:min-h-[250px]'>
    <div className='relative p-2 rounded-full w-[120px] h-[120px] border-4 border-[#F3B71A] bg-[#2B2B2B] flex items-center justify-center golden-black-hue -z-10'>
      <p className="relative z-10 text-white">{step}</p>
      <img src={BadgeStepPattern.src} alt="" className='absolute inset-0 m-auto' />
    </div>

    <div className='p-2 text-xl font-semibold max-w-[120px] md:max-w-[200px] md:min-w-[200px]'>
    {desc}
    </div>
    </div>
  );
}
