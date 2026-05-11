import { useEffect, useRef } from 'react';
import '../styles/AttackCursor.css';

export const AttackCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    const updatePosition = () => {
      frameRef.current = null;
      cursor.style.setProperty('--cursor-x', `${positionRef.current.x}px`);
      cursor.style.setProperty('--cursor-y', `${positionRef.current.y}px`);
    };

    const scheduleUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(updatePosition);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const offset = cursor.offsetWidth / 2;
      positionRef.current.x = event.clientX - offset;
      positionRef.current.y = event.clientY - offset;
      scheduleUpdate();
    };

    const handlePointerDown = () => {
      cursor.classList.add('is-down');
    };

    const handlePointerUp = () => {
      cursor.classList.remove('is-down');
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return <div className="attack-cursor" ref={cursorRef} aria-hidden="true" />;
};
