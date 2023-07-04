import React, { useState,useEffect } from 'react';
import ListEntry from './ListEntry';
import CurTime from './CurTime';
import './App.css';


function App() {
  const local_Storage_key = "arr";
  const local_Storage_key2 = "arr2";
  const [work, setWork] = useState("");
  const [arr, setArr] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem(local_Storage_key);
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [arr2, setArr2] = useState(() => {
    // getting stored value
    const saved2 = localStorage.getItem(local_Storage_key2);
    const initialValue2 = JSON.parse(saved2);
    return initialValue2 || "";
  });

  useEffect(() => {
    localStorage.setItem(local_Storage_key, JSON.stringify(arr));
  }, [arr]);

  useEffect(() => {
    localStorage.setItem(local_Storage_key2, JSON.stringify(arr2));
  }, [arr2]);

  const ItemEvents = (e) => {
    setWork(e.target.value);
  };


  const arrEvents = (e) => {
    e.preventDefault();

    setArr((oldItem) => {
      return [...oldItem, work]
    });
    setWork("");
    arrEvents2();
  };

  const arrEvents2 = (e) => {
    setArr2((oldItem2) => {
      return [...oldItem2, work]
    });
  };

  function DelItem(id) {
    setArr((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }


  return (
    <div className="App">

      <div className='childDivTime'><CurTime /></div>
      <div className='mainDiv'>

        <div className='childDiv'>
          <h1 className='head1'>Plan Your Actions!</h1>
          <form onSubmit={arrEvents}>
            <div className='inputBTN'>
              <input type="text" value={work} placeholder='Add Your Work' onChange={ItemEvents} required />
              <button >+</button>
            </div>
          </form>
          <ul>
            {arr.map((Itemval, index) => {
              return <ListEntry
                key={index} id={index} text={Itemval}
                onSelect={DelItem} />;
            })}
          </ul>
        </div>

        <div className="childDiv">
          <h1 className='headH1'>Plans History</h1>
          <ul className='ul2'>
            {arr2.map((Itemval2) => {
              return <li>{Itemval2}</li>
            })}
          </ul>
        </div>

      </div>

    </div>
  );
}

export default App;
