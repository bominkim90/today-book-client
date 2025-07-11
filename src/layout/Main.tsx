import type { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";
import TopButton from "../components/buttons/TopButton";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  const [showTopButton, setShowTopButton] = useState(false);
  const [halfScreenHeight, setHalfScreenHeight] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;
  
    // 높이 감지
    const updateHalfScreenHeight = () => {
      setHalfScreenHeight(mainElement.clientHeight / 2);
    };
  
    updateHalfScreenHeight();
  
    const resizeObserver = new ResizeObserver(updateHalfScreenHeight);
    resizeObserver.observe(mainElement);
  
    // 스크롤 감지
    const handleScroll = () => {
      setShowTopButton(mainElement.scrollTop > halfScreenHeight);
    };
    mainElement.addEventListener('scroll', handleScroll);
  
    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, []);
  
  useEffect(() => {
    // halfScreenHeight가 바뀌면 현재 scrollTop과 비교해서 바로 갱신
    const mainElement = mainRef.current;
    if (!mainElement) return;
    setShowTopButton(mainElement.scrollTop > halfScreenHeight);
  }, [halfScreenHeight]);

  function scrollToTop() {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <main 
        ref={mainRef}
        className="absolute top-[64px] left-0 right-0 bottom-0 w-full flex-1 overflow-y-auto p-[16px] pb-[95px]"
      >
        {children}
      </main>
      {showTopButton && <TopButton onClick={scrollToTop} />}
    </>
  );
}
