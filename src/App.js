import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [isAnimate, setIsAnimate] = useState([
    { id: 1, isSelected: false },
    { id: 2, isSelected: false },
    { id: 3, isSelected: false },
    { id: 4, isSelected: false },
    { id: 5, isSelected: false },
  ]);
  const [value, setValue] = useState({});

  const rndInt = Math.floor(Math.random() * 5) + 1;

  const handleAnimate = (rndInt) => {
    const arr = [1, 2, 3, 4, 5];

    setIsAnimate((prevState) =>
      prevState.map((el) => ({
        ...el,
        isSelected: el.id === arr[rndInt] ? true : false,
      })),
    );
  };

  useEffect(() => {
    const findIsSelected = isAnimate.find((el) => el.isSelected);
    setValue(findIsSelected);
  }, [isAnimate]);

  return (
    <div className="App">
      <p>hello</p>
      <div className="test" data="20"></div>
      <div className="wrapper-btn">
        <button className="btn" onClick={() => handleAnimate(rndInt - 1)}>
          Click
        </button>
      </div>
      <div className="wrapper">
        <div
          className={`${value && value.id === 1 && 'isAnimate-class'}
            ${value && value.id === 2 && 'isAnimate2-class'}
            ${value && value.id === 3 && 'isAnimate3-class'}
            ${value && value.id === 4 && 'isAnimate4-class'}
            ${value && value.id === 5 && 'isAnimate5-class'}
            box-area
         `}
        >
          <div className="box1">
            <span>.</span>
          </div>
          <div className="box2">
            <span>.</span>
            <span>.</span>
          </div>
          <div className="box3">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <div className="box4">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <div className="box5">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <div className="box6">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
