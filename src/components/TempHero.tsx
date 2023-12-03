// @ts-nocheck
import { useEffect, useLayoutEffect, useState } from "react";
import '../temphero.scss';
import WalletIcon from '../assets/hero-wallet-icon.svg';
import NetworkIcon from '../assets/hero-network-icon.svg';

const getBox = (size: number, x, y) => {
  return (
    <div className="feature"
    id="feature-id"
      // className={`w-[80px] h-[80px] feature border border-[#1A2A42]`}
      key={size}
      // style={{ background: y === 6 && x === Math.ceil((window.innerWidth / 80) - 3) && 'radial-gradient(500px circle at 50%,rgba(21, 115, 254, 0.1),transparent 20%)' }}
    >
      <div 
        className="feature-content flex justify-center items-center" 
      >
        {window.innerWidth > 640 && <>
          {y === 6 && x === Math.ceil((window.innerWidth / 80) - 3) &&
            <img src={WalletIcon} className="drop-shadow-[0_35px_35px_rgba(10, 50 60)]" />
          }
          {y === 2 && (window.innerWidth < 769 ? x === 1 : x === 2) && 
            <img src={NetworkIcon}  />
          }
        </>}
      </div>
    </div>
  );
}

const rowItems = []

const renderBoxes = (y) => {
  let size = 80;
  let arr = [];
  while(size < (window.innerWidth + 80)){
    size += 80;
    arr.push(getBox(size, arr.length, y));
  }

  return arr;
}

const TempHero = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  // border handling
  useLayoutEffect(() => {
    console.clear();
      const featuresEl = document.querySelector(".features");
      const featureEls = document.querySelectorAll(".feature");
      if(featureEls && featuresEl){
        featuresEl?.addEventListener("mousemove", (ev) => {
          featureEls?.forEach((featureEl) => {
            // Not optimized yet, I know
            const rect = featureEl.getBoundingClientRect();
    
            featureEl.style.setProperty("--x", ev.clientX - rect.left);
            featureEl.style.setProperty("--y", ev.clientY - rect.top);
          });
        });
      }
  }, []);

  return (
    <div className="h-full flex flex-col bg-[#1B2028] absolute">
    <div className="features">
      {Array(10).fill().map((time, i) => {
        return (
          <div className="flex" key={time}>
            {...renderBoxes(i)}
          </div>
        );
      })}

    </div>
    </div>
  );
}

export default TempHero;