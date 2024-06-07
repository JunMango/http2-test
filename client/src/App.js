/** @format */

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    fetch('https://172.21.77.186:8000')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setIsData(json.data);
      })
      .catch((error) => {
        console.error('에러 났다~!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isData !== 'none' ? (
          isData.map((item, index) => (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.message}</p>
            </div>
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </header>
    </div>
  );
}

export default App;
