import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, handleSetSelected, label }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpenMenu(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => handleSetSelected(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div className='ui form' ref={ref}>
        <div className='field'>
          <label className='label'>Select a {label}</label>
          <div
            className={`ui selection dropdown ${
              openMenu ? 'visible active' : ''
            }`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <i className='dropdown icon'></i>
            <div className='text'>{selected.label}</div>
            <div className={`menu ${openMenu ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: '30px',
          padding: '10px',
          color: `${selected.value}`,
        }}
      >
        {selected.value.length > 2 ? selected.value : null}
      </div>
    </>
  );
};

export default Dropdown;
