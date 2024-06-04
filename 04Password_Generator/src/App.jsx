import { useCallback, useEffect, useState ,useRef} from "react";

function App() {
  const [length, setLegth] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789";
    }
    if (character) {
      str += "!@#$%^&*()/+*-~_=[]{}()";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, character]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-700 text-center">
        <h1 className="my-3">PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0"
          onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>setLegth(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
