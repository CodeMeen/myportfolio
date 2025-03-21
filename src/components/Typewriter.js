import { useState, useEffect } from "react";

const Typewriter = ({ texts, speed = 60 }) => {
  const [displayedTexts, setDisplayedTexts] = useState(Array(texts.length).fill(""));
  const [indices, setIndices] = useState(Array(texts.length).fill(0));

  useEffect(() => {
    const typeNextCharacter = () => {
      setDisplayedTexts((prevTexts) => {
        const newTexts = [...prevTexts];
        for (let i = 0; i < texts.length; i++) {
          if (indices[i] < texts[i].length) {
            newTexts[i] += texts[i].charAt(indices[i]);
            setIndices((prevIndices) => {
              const newIndices = [...prevIndices];
              newIndices[i] += 1;
              return newIndices;
            });
            break;
          }
        }
        return newTexts;
      });
    };

    if (indices.some((index, i) => index < texts[i].length)) {
      const timer = setTimeout(typeNextCharacter, speed);
      return () => clearTimeout(timer);
    }
  }, [displayedTexts, indices, texts, speed]);

  return (
    <div>
      {displayedTexts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

export default Typewriter;
