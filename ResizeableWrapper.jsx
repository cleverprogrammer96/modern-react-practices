import React, { useRef, useState } from 'react';
import './ResizableWrapper.css';

const ResizableWrapper = ({ children, minHeight = 200, maxHeight = 1000 }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(400);
  const isDragging = useRef(false);

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const newHeight = e.clientY - containerRef.current.getBoundingClientRect().top;
    if (newHeight >= minHeight && newHeight <= maxHeight) {
      setHeight(newHeight);
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = () => {
    isDragging.current = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div ref={containerRef} className="resizable-container" style={{ height }}>
      {children}
      <div className="resize-handle" onMouseDown={onMouseDown} />
    </div>
  );
};

export default ResizableWrapper;