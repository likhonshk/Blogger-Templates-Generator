import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">{message}</h1>
    </div>
  );
}

export default App;
