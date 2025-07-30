import { useEffect, useRef, useState } from "react";

export const useImageAnimation = () => {
  const imageRef = useRef(null);
  const [isVisibleImage, setIsVisibleImage] = useState(false);

  useEffect(() => {
    const handleImageScroll = () => {
      const imageElement = imageRef.current;

      if (imageElement) {
        const isImageVisible =
          imageElement.getBoundingClientRect().top < window.innerHeight;

        if (isImageVisible && !isVisibleImage) {
          imageElement.style.opacity = 1;
          setIsVisibleImage(true);
        }
      }
    };

    window.addEventListener("scroll", handleImageScroll);

    return () => {
      window.removeEventListener("scroll", handleImageScroll);
    };
  }, [isVisibleImage]);

  return { imageRef };
};

export const useTextAnimation = () => {
  const textContainerRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const handleTextScroll = () => {
      const textContainerElement = textContainerRef.current;

      if (textContainerElement) {
        const isTextContainerVisible =
          textContainerElement.getBoundingClientRect().top < window.innerHeight;

        if (isTextContainerVisible && !isTextVisible) {
          textContainerElement.style.transform = "translateX(0)";
          textContainerElement.style.opacity = 1;
          setIsTextVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleTextScroll);

    return () => {
      window.removeEventListener("scroll", handleTextScroll);
    };
  }, [isTextVisible]);

  return { textContainerRef };
};
