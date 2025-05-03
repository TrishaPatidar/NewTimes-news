import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);

 
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fe70326dc2f84123a372aa09cb872b48&page=1&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json();
    console.log(parsedata);
    props.setProgress(70);

    setarticles(parsedata.articles);
    settotalResult(parsedata.totalResults);
   
    props.setProgress(100);
  }
  
  
  useEffect(() => {
     document.title = `${capitalizeFirstLetter(props.category)} - NEWTIMES`;
    updateNews();

  }, [])


  const fetchMoreData = async () => {
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fe70326dc2f84123a372aa09cb872b48&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page + 1);

    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);

    setarticles(articles.concat(parsedata.articles));
    settotalResult(parsedata.totalResults);
    setloading(false);

  };


  return (
    <>
      <h1 className="text-center "style={{marginTop:'5%'}}>NEWTIMES NEWS - Top Headlines : {capitalizeFirstLetter(props.category)} </h1>
      {/* {loading && <Spinner />} */}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={articles.loading && <Spinner />}

      >

        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return <div className="col-md-4" key={`${element.url}-${index}`}>
                <NewsItem title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt} source={element.source.name} />

              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>


  )

}
News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News