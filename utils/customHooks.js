"use client"
import { useLayoutEffect, useState } from 'react';


// Custom React hook for getting size
export function useElementSize(ref, scaling_factor, aspectRatio) {
    const [size, setSize] = useState([0, 0]);
  
    useLayoutEffect(() => {
      if (!ref.current) return;
  
      const updateSize = () => {
        let width = scaling_factor * (ref.current.offsetWidth / 3); // I found this to be the best scaling to prevent the resizing issue, can be subject to change
        let height = aspectRatio * width; // Aspect ratio is determined by the image (might become a constant if the images end up all having the same aspect ratio)
        setSize([width, height]);
      };
  
      const resizeObserver = new ResizeObserver(() => updateSize());
  
      resizeObserver.observe(ref.current);
    
      return () => resizeObserver.disconnect();
    }, [ref]);
  
    return size;
  }