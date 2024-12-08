import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

function HomeAnime() {
  const animationRef = useRef(null);

  useEffect(() => {
    const animation = anime({
      targets: '.my-animated-element',
      translateX: 250,
      duration: 1000,
      easing: 'easeInOutSine'
    });

    animationRef.current = animation;

    return () => animation.pause();
  }, []);

  return (
    <div className="home-anime-container">
      <div className="my-animated-element">Juan Andres</div>
    </div>
  );
}

export default HomeAnime;