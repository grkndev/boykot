"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import data from "@/lib/data";

export default function Stream() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out, change image and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setIsVisible(true);
      }, 500); // Half a second for fade out
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(fadeInterval);
  }, []);

  const currentLogo = data[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Boykot et!</h1>
      <p className="text-zinc-500 text-sm mb-16">Demokrasi için boykot et!</p>
      
      <div className="flex flex-col items-center justify-center">
        <div 
          className={`transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <Image 
              className="size-64 mb-6" 
              src={currentLogo.image} 
              alt={currentLogo.alt} 
              width={512} 
              height={512} 
            />
            <p className="text-xl font-medium">{currentLogo.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
