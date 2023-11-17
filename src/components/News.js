import React, { useEffect, useState } from 'react';
import '../css/News.css';
import NewsItem from './NewsItem';
import Spinner from './Spinner'



function News (props) {

   
   let pageSize = 16;
    let pages;

   
    const [Articles , setArticles] = useState([])
    const [Page , setPage] = useState(1)
    const [Loading , setLoading] = useState(true)

   const  updateNews = async()=> {


        setLoading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=${pageSize}&page=${Page}&category=${props.category}&apiKey=809b1919888b404ba2abdb0826305004`;

        props.setProgress(10)
        let result = await fetch(url)
        props.setProgress(20)
        let data = await result.json()
        console.log(data)
        props.setProgress(50)
        pages = Math.ceil(data.totalResults / pageSize)
        setArticles(data.articles)
        setLoading(false)
        props.setProgress(100)
    }

   
    useEffect(() => {
    
        updateNews();

     },);

  const  onNextClick = (e) => {

        setPage( Page + 1 , () => {
           updateNews();
        });



    }


  const  onPrevClick = (e) => {

        setPage( Page - 1 , () => {
            updateNews();
        });



    }

   

        return (
            <div className="news">
                <h2>Top headlines from - {props.category}</h2>
                {Loading ? <Spinner /> : null}
                <div className="newsContainer">

                    {
                        
                        Articles.map((element) => {

                            return (<NewsItem key={element.url} title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url}></NewsItem>);
                        })
                       
                    }


                </div>

                <div className="btnContainer">
                    <button onClick={onPrevClick} disabled={Page <= 1 ? true : false} style={{ backgroundColor: Page <= 1 ? 'rgb(61, 61, 61)' : 'black' }} >&larr; previous</button>
                    <button onClick={onNextClick} disabled={Page >= pages ? true : false} style={{ backgroundColor: Page >= pages ? 'rgb(61, 61, 61)' : 'black' }}>next &rarr;</button>
                </div>

            </div>
        );
    }



export default News;
