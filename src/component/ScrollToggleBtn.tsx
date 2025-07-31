import { useEffect, useState, useRef } from 'react';


const ScrollToggleButton = () => {
  const [atBottom, setAtBottom] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = () => {
    if (atBottom) {
      scrollToTop();
    } else {
      scrollToBottom();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className='bounce-7 bg-light-400 text-light-500'
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        fontSize: '1.5rem',
        borderRadius: '50%',
        border: 'none',
        // backgroundColor: '#000',
        // color: '#fff',
        cursor: 'pointer',
        zIndex: 9999,
      }}
    >
      {atBottom ? '↑' : '↓'}
    </button>
  );
};

export default ScrollToggleButton;
