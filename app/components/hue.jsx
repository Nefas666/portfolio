'use client'
import React, { memo, useRef, useEffect } from 'react';
import anime from 'animejs';


const ORB_COUNT = 100;

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const iterate = (count, mapper) => [...Array(count)].map((_, i) => mapper(i));
const distance = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[0]);

const Gooey = ({ id }) => (
  <filter id={id}>
    <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -5" result="goo" />
    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
  </filter>
);

const Blur = ({ id }) => (
  <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
  </filter>
);

const Gradient = ({ id, hue }) => {
  const h = hue + random(-40, 40);
  const f = [h, 80, 60];
  const t = [h + 20, 100, 30];
  return (
    <linearGradient id={id} x1="70%" x2="0%" y1="70%" y2="0%">
      <stop offset="0%" stopColor={`hsl(${t[0]},${t[1]}%,${t[2]}%)`} stopOpacity="1" />
      <stop offset="100%" stopColor={`hsl(${f[0]},${f[1]}%,${f[2]}%)`} stopOpacity="1" />
    </linearGradient>
  );
};

const Orb = ({ hue }) => {
  const r = random(20, 50);
  const from = [
    random(0 - r, 1000 + r),
    random(0 - r, 1000 + r),
  ];
  const to = [
    random(0 - r, 1000 + r),
    random(0 - r, 1000 + r),
  ];
  const d = distance(from, to);
  const id = random(0, 1000);

  const circleRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      //console.log('it is');
      anime({
        targets: circleRef.current,
        translateY: [
          { value: -1000, duration: 30000, easing: 'easeInOutSine' },
          { value: 1000, duration: 30500, easing: 'easeInOutSine' },
        ],
        rotate: function() { return anime.random(180, -360); },
        translateX: function() { return anime.random(50, 250); },
        loop: true,
        duration: 50000,
      });
    }
  }, []);

  return (
    <>
      <circle
        ref={circleRef}
        cx={from[0]} cy={to[0]} r={r}
        fill={`url(#grad-${id})`}
        style={{
          '--duration': `${d / 15}s`,
          '--from-x': from[0],
          '--from-y': from[1],
          '--to-x': to[0],
          '--to-y': to[1],
        }}
      />
      <Gradient id={`grad-${id}`} hue={hue} />
    </>
  );
}

const Orbs = memo(({ hue }) => {
  return (
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMinYMin slice" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1, border: '0.5px solid white' }}>
      <g filter="url(#blur)">
        <g filter="url(#gooey)">
          {iterate(ORB_COUNT, i => (
            <Orb key={i} hue={hue} />
          ))}
        </g>
      </g>
      <defs>
        <Gooey id="gooey" />
        <Blur id="blur" />
      </defs>
    </svg>
  );
});

const Hue = () => {
  const hue = random(0, 720);
  return (
    <>
      <Orbs hue={hue} />
    </>
  );
};

export default Hue;
