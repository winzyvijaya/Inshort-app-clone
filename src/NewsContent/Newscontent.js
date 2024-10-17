import React from 'react'
import Container from '@mui/material/Container';
import './Newscontent.css';
import NewsCard from '../Newscard/NewsCard';



const Newscontent = ({newsArray,loadMore, setLoadMore, newsResult}) => {
  return (
    
    <Container maxWidth='mid'>

        <div className='content'>
          <div className='downloadMessage'>
           <span className='downloadText'>
            for the best experience use <b>inshorts</b> app on your smartphone
           </span>
           <img
           alt='app store'
           height= "80%"
           src="https://assets.inshorts.com/website_assets/images/appstore.png"
           />
           <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
          </div>
         {/* {
          newsArray.map((newsItem)=>(
            <NewsCard newsItem={newsItem} key={newsItem.title}/>
          ))  
         } */}

            {
            newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))
        }
        {/* {
          loadMore <= newsResult &&(
            <>
            <hr />
            <button className='loadmore' onClick={()=> setLoadMore(loadMore + 20)}>Load More</button>
            </>
          )
        } */}
        {loadMore <= newsResult && (
          <></>
            )}
            <>
          <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        </div>
    </Container>
  )
}

export default Newscontent;