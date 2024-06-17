'use client'
// ./src/components/MuaSection.tsx
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';


const MuaSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const width = canvas.width;
        const height = canvas.height;

        // Draw the faint pink background
        ctx.fillStyle = '#F27BBD'; // Faint pink color
        ctx.fillRect(0, 0, width, height);

        // Draw the dark pink background starting from specific points
        ctx.beginPath();
        ctx.moveTo(100, 0); // Start point on the top side at 200px
        ctx.lineTo(width, 0);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.lineTo(180, height); // End point on the bottom side at 400px
        ctx.closePath();
        ctx.fillStyle = '#EA2793'; // Dark pink color
        ctx.fill();
      }
    }
  }, []);

  return (
    <div className="relative p-8 ">
      <canvas ref={canvasRef}  className="absolute inset-0 m-0 p-0 w-full h-[580px]"></canvas>
      <div className="relative z-10 grid grid-flow-col grid-cols-2">
        <div className="flex  align-top">
            <Image src="/images/Ellipse 1.png" alt="" height={300} width={330} className='z-10 w-[300px] h-[330px] transform translate-x-32 -translate-y-4'/>
            <Image src="/images/Ellipse 2.png" alt="" height={250} width={280} className='w-[270px] h-[300px] transform translate-y-56 -translate-x-5'/>
        </div>
        <div className="text-white mt-16 ml-40 ">
          <h2 className="text-4xl font-bold  mb-4 ">WE have the best -</h2>
          <ul className="space-y-5 list-disc text-2xl  mb-10">
            <li>WEDDING MAKEUP ARTIST</li>
            <li>PRE SHOOT MAKEUP ARTIST</li>
            <li>ALBUM SHOOT MAKEUP ARTIST</li>
            <li>CELEBRITY MAKEUP ARTIST</li>
            <li>CORPORATE EVENTS MAKEUP ARTIST</li>
          </ul>
          <span className=' text-amber-100 font-bold text-2xl '>AND MORE...</span>
        </div>
      </div>
    </div>
  );
};

export default MuaSection;
