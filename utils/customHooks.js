"use client"
import { useLayoutEffect, useState } from 'react';


// Custom React hook for getting size
export function useElementSize(ref) {
    const [size, setSize] = useState([0, 0]);
  
    useLayoutEffect(() => {
      if (!ref.current) {
        console.log('failed');
        return};
  
      const updateSize = () => {
        let width = ref.current.offsetWidth;
        let height = ref.current.offsetHeight;
        setSize([width, height]);
      };
  
      const resizeObserver = new ResizeObserver(() => updateSize());
  
      resizeObserver.observe(ref.current);
    
      return () => resizeObserver.disconnect();
    }, [ref]);
  
    return size;
  }