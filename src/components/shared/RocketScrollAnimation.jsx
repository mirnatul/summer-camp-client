import React, { useRef } from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web';
import styles from '../shared/styles.module.scss';

const X_LINES = 40;
const PAGE_COUNT = 5;
const INITIAL_WIDTH = 20;

const RocketScrollAnimation = () => {
    const { o } = useSpring({
        from: { o: 0 },
        to: { o: 1 },
        config: { duration: 2000 },
      });
    
      return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
          <animated.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'purple',
              opacity: o.to((value) => value),
            }}
          />
        </div>
      );
};

export default RocketScrollAnimation;
