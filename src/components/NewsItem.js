import React from 'react'
const NewsItem = (props) => {
  
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (

      <div className="my-3">
        <div className="card" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-primary" style={{ left: '85%', zIndex: '1' }}>
            {source}
          </span>
          <img src={!imgUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/4574/live/90811480-0eea-11f0-ba12-8d27eb561761.jpg" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">by {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem