'use client';
import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from "motion/react"
import Image from 'next/image';

export default function StreamPage() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const imageData = await fetch('/api/stream');
        const data = await imageData.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);


  // Auto-cycling effect
  useEffect(() => {
    if (loading || images.length === 0) return;
    
    const timer = setTimeout(() => {
      nextImage();
    }, 3000); // Total transition time: 1s fade in, 1s display, 1s fade out
    
    return () => clearTimeout(timer);
  }, [currentIndex, loading, images.length, nextImage]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen p-4">
      {loading ? (
        <div className="text-xl">Resimler yükleniyor...</div>
      ) : images.length === 0 ? (
        <div className="text-xl">Resim bulunamadı.</div>
      ) : (
        <>
          <div className="relative w-full max-w-2xl h-[60vh] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1 },
                }}
                className="absolute w-full h-full"
              >
                <Image
                  src={`https://boykotyap.net${images[currentIndex]}`}
                  alt={`Image ${currentIndex + 1}`}
                  width={512} height={512}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          
          
         
        </>
      )}
    </div>
  );
}
