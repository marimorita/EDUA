import { useEffect, useState } from 'react'

export const useNavbarAnimation = (threshold: number = 210) => {
  const [scrolled, setScrolled] = useState(false)
  const [_, setCurrentScroll] = useState(0)
  const navbarAnimationClasses = () => {
    const animated = !scrolled ? " translate-y-[-100%] opacity-0 user-events-none " : "translate-y-0 opacity-100 ";
    return `fixed z-40 w-full transition-all ${animated}`
  }
  useEffect(() => {
    const handleScroll = () => {
      const available = window.scrollY > threshold;
      setScrolled(available);
      if (!available) return;
      setCurrentScroll((old) => {
        setScrolled(old > window.scrollY)
        return window.scrollY
      })
      console.log(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return {
    scrolled,
    navbarAnimationClasses
  }
}