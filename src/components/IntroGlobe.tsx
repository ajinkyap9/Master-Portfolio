import { useEffect, useRef, useState } from 'react';
import '../styles/IntroGlobe.css';

type IntroPhase = 'enter' | 'exit' | 'done';

const INTRO_EXIT_MS = 2400;
const INTRO_DONE_MS = 3200;

export const IntroGlobe = () => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const exitTimerRef = useRef<number | null>(null);
  const doneTimerRef = useRef<number | null>(null);
  const [phase, setPhase] = useState<IntroPhase>('enter');

  const triggerExit = () => {
    if (phase !== 'enter') {
      return;
    }
    setPhase('exit');
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
    }
    if (doneTimerRef.current !== null) {
      window.clearTimeout(doneTimerRef.current);
    }
    doneTimerRef.current = window.setTimeout(() => setPhase('done'), 700);
  };

  useEffect(() => {
    exitTimerRef.current = window.setTimeout(() => setPhase('exit'), INTRO_EXIT_MS);
    doneTimerRef.current = window.setTimeout(() => setPhase('done'), INTRO_DONE_MS);

    return () => {
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
      if (doneTimerRef.current !== null) {
        window.clearTimeout(doneTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (phase === 'done') {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [phase]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = overlay.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const tiltX = (-y * 12).toFixed(2);
      const tiltY = (x * 16).toFixed(2);
      overlay.style.setProperty('--tilt-x', `${tiltX}deg`);
      overlay.style.setProperty('--tilt-y', `${tiltY}deg`);
    };

    const handlePointerLeave = () => {
      overlay.style.setProperty('--tilt-x', '0deg');
      overlay.style.setProperty('--tilt-y', '0deg');
    };

    overlay.addEventListener('pointermove', handlePointerMove);
    overlay.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      overlay.removeEventListener('pointermove', handlePointerMove);
      overlay.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  if (phase === 'done') {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className={`intro-overlay ${phase === 'exit' ? 'is-exit' : ''}`}
      onClick={triggerExit}
      role="presentation"
    >
      <div className="intro-hud" aria-hidden="true" />
      <div className="intro-globe" aria-hidden="true">
        <div className="globe-core">
          <div className="globe-texture" />
          <div className="globe-scan" />
        </div>
        <div className="globe-orbit orbit-one" />
        <div className="globe-orbit orbit-two" />
        <div className="globe-orbit orbit-three" />
      </div>
    </div>
  );
};
