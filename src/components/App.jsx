import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'Red',
  },
  {
    label: 'The Color Green',
    value: 'Green',
  },
  {
    label: 'A Shade of Blue',
    value: 'Blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        options={options}
        selected={selected}
        handleSetSelected={setSelected}
        label='color'
      /> */}
      <Translate />
    </div>
  );
};

export default App;
