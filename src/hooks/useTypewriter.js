import { useEffect, useState, useRef } from "react";

/**
 * Basit typewriter hook.
 * words: string[]
 * typingSpeed: ms per char
 * deletingSpeed: ms per char deleted
 * pause: ms between finished word and deleting
 */
export default function useTypewriter(words = [], typingSpeed = 80, deletingSpeed = 40, pause = 1200) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    let timer;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && display.length < currentWord.length) {
      timer = setTimeout(() => {
        if (mounted.current) setDisplay(currentWord.slice(0, display.length + 1));
      }, typingSpeed);
    } else if (isDeleting && display.length > 0) {
      timer = setTimeout(() => {
        if (mounted.current) setDisplay(currentWord.slice(0, display.length - 1));
      }, deletingSpeed);
    } else {
      // finished typing a word
      if (!isDeleting) {
        timer = setTimeout(() => {
          if (mounted.current) setIsDeleting(true);
        }, pause);
      } else {
        // finished deleting -> next word
        timer = setTimeout(() => {
          if (mounted.current) {
            setIsDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }, 250);
      }
    }

    return () => {
      mounted.current = false;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return display;
}
