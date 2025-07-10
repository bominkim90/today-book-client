import type { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";
import TopButton from "../components/buttons/TopButton";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  const [showTopButton, setShowTopButton] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollTop = mainRef.current.scrollTop;
        const clientHeight = mainRef.current.clientHeight;
        
        // 화면의 절반 이상 스크롤했는지 확인
        const halfScreen = clientHeight / 2;
        setShowTopButton(scrollTop > halfScreen);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      
      return () => {
        mainElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

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
