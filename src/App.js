
import { useEffect, useState } from 'react';
import './App.css';
import NavInshort from './Component/NavInshort';
import Newscontent from './NewsContent/Newscontent';
import apikey from './Data/config';
import axios from 'axios';
import Footer from './Footer/Footer';

function App() {
  const [categary, setCategary] = useState("general");

  const [newsArray, setNewsArray] = useState([]);

  const [newsResult, setNewsResult]= useState();

  const [loadMore, setLoadMore] = useState(20)
 
   const newsApi = async () =>{
    try{
       const news = await axios.get (
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${categary}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResult);
    }catch(error){
      console.log(error);
    }
   };
   console.log(newsArray);
   useEffect(()=> {
      newsApi();
   },[newsResult, loadMore, categary]);
  return (
    <div className="App">
      <NavInshort setCategary={setCategary}/>

      <Newscontent setLoadMore={setLoadMore} loadMore={loadMore}newsArray={newsArray} newsResult={newsResult}/>

      <Footer/>
    </div>
  );
}

export default App;
