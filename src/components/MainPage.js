import { useEffect, useState } from 'react';
import { CharacterItems } from './CharacterItems';
import axios from 'axios';
import './style.css';

export const MainPage = () => {
  const [items, setItems] = useState();
  const url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6419168c8e565d906a3ff600c3445f7b&hash=98eb16b74e70253b39abca69ae24ca2e";

  const fetch = async() => {
    const response = await axios.get(url);
    setItems(response.data.data.results);
  }

  useEffect(()=>{
    fetch();
  }, [])

   
  return( 
    <div className='content'>
      <CharacterItems data={items}/>
    </div>
  );
};