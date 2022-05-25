import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [substitude, setSubstitude] = useState('');
  const [translated, setTranslated] = useState();

  useEffect(() => {
    const set = setTimeout(() => {
      setSubstitude(text);
    }, 1000);
    return () => clearTimeout(set);
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: substitude,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    translate();
  }, [language, substitude]);

  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  );
};

export default Convert;
