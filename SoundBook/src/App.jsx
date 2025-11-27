
import { useRef, useState } from 'react';
import './App.css';

const tabs = [
  { label: '동물' },
  { label: '악기' },
  { label: '탈것' },
  { label: '기타' }
];

const buttonData = {
  동물: [
    { label: '개', image: '/images/animals/dog.jpg', sound: '/sounds/animals/dog.mp3' },
    { label: '닭', image: '/images/animals/chicken.jpg', sound: '/sounds/animals/chicken.mp3' },
    { label: '소', image: '/images/animals/cow.jpg', sound: '/sounds/animals/cow.mp3' },
    { label: '까마귀', image: '/images/animals/crow.jpg', sound: '/sounds/animals/crow.mp3' },
    { label: '오리', image: '/images/animals/duck.jpg', sound: '/sounds/animals/duck.mp3' },
    { label: '코끼리', image: '/images/animals/elephant.jpg', sound: '/sounds/animals/elephant.mp3' },
    { label: '말', image: '/images/animals/horse.jpg', sound: '/sounds/animals/horse.mp3' },
    { label: '사자', image: '/images/animals/lion.jpg', sound: '/sounds/animals/lion.mp3' },
    { label: '돼지', image: '/images/animals/pig.jpg', sound: '/sounds/animals/pig.mp3' }
  ],
  악기: [
    { label: '피아노', image: '/images/instrument/piano.png', sound: '/sounds/instrument/piano.mp3' },
    { label: '기타', image: '/images/instrument/guitar.png', sound: '/sounds/instrument/guitar.mp3' },
    { label: '드럼', image: '/images/instrument/drum.png', sound: '/sounds/instrument/drum.mp3' },
    { label: '트럼펫', image: '/images/instrument/trumpet.png', sound: '/sounds/instrument/trumpet.mp3' },
    { label: '바이올린', image: '/images/instrument/violin.png', sound: '/sounds/instrument/violin.mp3' },
    { label: '플루트', image: '/images/instrument/flute.png', sound: '/sounds/instrument/flute.mp3' },
    { label: '하모니카', image: '/images/instrument/harmonica.png', sound: '/sounds/instrument/harmonica.mp3' },
    { label: '색소폰', image: '/images/instrument/saxophone.png', sound: '/sounds/instrument/saxophone.mp3' },
    { label: '하프', image: '/images/instrument/harp.png', sound: '/sounds/instrument/harp.mp3' }
  ],
  탈것: [
    { label: '자동차', image: '/images/vehicles/car.png', sound: '/sounds/vehicles/car.mp3' },
    { label: '버스', image: '/images/vehicles/bus.png', sound: '/sounds/vehicles/bus.mp3' },
    { label: '기차', image: '/images/vehicles/train.png', sound: '/sounds/vehicles/train.mp3' },
    { label: '비행기', image: '/images/vehicles/airplane.png', sound: '/sounds/vehicles/airplane.mp3' },
    { label: '배', image: '/images/vehicles/ship.png', sound: '/sounds/vehicles/ship.mp3' },
    { label: '오토바이', image: '/images/vehicles/motorcycle.png', sound: '/sounds/vehicles/motorcycle.mp3' },
    { label: '자전거', image: '/images/vehicles/bicycle.png', sound: '/sounds/vehicles/bicycle.mp3' },
    { label: '트럭', image: '/images/vehicles/truck.png', sound: '/sounds/vehicles/truck.mp3' },
    { label: '헬리콥터', image: '/images/vehicles/helicopter.png', sound: '/sounds/vehicles/helicopter.mp3' }
  ],
  기타: [
    { label: '', image: '', sound: '' },
    { label: '', image: '', sound: '' },
    { label: '', image: '', sound: '' },
    { label: '', image: '', sound: '' },
    { label: '', image: '', sound: '' },
    { label: '', image: '', sound: '' },
    { label: '', image: '', sound: '' },
    { label: '', image: '', sound: '' },
    { label: '', image: '', sound: '' }
  ]
};

function App() {
  const audioRef = useRef(null);
  const [activeTab, setActiveTab] = useState('동물');

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
          <div
            key={idx}
            className={`tab${activeTab === tab.label ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.label)}
            style={{ cursor: 'pointer' }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="main">
        <div className="grid">
          {buttonData[activeTab].map((btn, idx) => (
            <button
              key={idx}
              className="sound-btn"
              onClick={() => playSound(btn.sound)}
              disabled={!btn.label}
            >
              {btn.image && (<img src={btn.image} alt={btn.label} style={{ width: '60%', height: '60%' }} />)}
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
