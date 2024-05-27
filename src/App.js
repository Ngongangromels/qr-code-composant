import React, { useState, useEffect } from 'react';
import './App.css';
import QrCode from './component/QrCode';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3500);
  }, []);
  return (
    <div className="App">
       { loading ? (<p className='loading'>Loading....</p> ): (<QrCode />) }
    </div>
  );
}

export default App;
