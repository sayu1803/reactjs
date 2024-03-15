import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (specialChar) str += "!@#$%^&*()`~{}[]:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, num, specialChar]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    document.execCommand("copy");
  }, []);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900 text-white'>
      <div className='w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold text-center mb-6'>Password Generator</h1>
        <div className='relative'>
          <input
            type="text"
            value={password}
            className='w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 focus:outline-none text-white'
            placeholder='Generated Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='absolute top-0 right-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none'>
            Copy
          </button>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex items-center text-gray-300'>
            <label className='mr-2'>Length:</label>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className='appearance-none bg-gray-700 rounded-lg h-1 w-24'
              onChange={(e) => setLength(e.target.value)}
            />
            <span className='ml-2'>{length}</span>
          </div>
          <div className='flex items-center space-x-4'>
            <input
              type="checkbox"
              checked={num}
              id="numberInput"
              onChange={() => setNum(!num)}
            />
            <label htmlFor="numberInput" className='text-gray-300'>Numbers</label>
            <input
              type="checkbox"
              checked={specialChar}
              id="characterInput"
              onChange={() => setSpecialChar(!specialChar)}
            />
            <label htmlFor="characterInput" className='text-gray-300'>Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
