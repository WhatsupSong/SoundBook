
import { useRef } from 'react';
import './App.css';

const tabs = [
  { label: '동물' },
  { label: '악기' },
  { label: '탈것' },
  { label: '기타' }
];

const buttons = [
  { label: '개', sound: '/dog.mp3' },
  { label: '', sound: '' },
  { label: '', sound: '' },
  { label: '', sound: '' },
  { label: '', sound: '' },
  { label: '', sound: '' },
  { label: '', sound: '' },
  { label: '', sound: '' },
  { label: '', sound: '' }
];

function App() {
  const audioRef = useRef(null);

  const playSound = (sound) => {
    if (!sound) return;
    if (audioRef.current) {
      audioRef.current.src = sound;
      audioRef.current.play();
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        {tabs.map((tab, idx) => (
          <div key={idx} className="tab">{tab.label}</div>
        ))}
      </div>
      <div className="main">
        <div className="grid">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className="sound-btn"
              onClick={() => playSound(btn.sound)}
              disabled={!btn.label}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <audio ref={audioRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
}

export default App;
