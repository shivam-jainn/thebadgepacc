import React from 'react';
import { Card } from '@/components/ui/card';

export default function BadgeCard({ className,src }: { className?: string,src:string }) {


  return (
    <Card className={`max-w-[240px] ${className}`}>
      <img src={src} alt="" className="rounded-lg" />
    </Card>
  );
}
