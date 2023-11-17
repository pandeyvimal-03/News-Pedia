import React from 'react';
import '../css/NewsItem.css';
import news from '../images/news.jpg'

function NewsItem (props) {

   
    

        let {title , description ,urlToImage , url } = props

        return (
            <div className="newsItem">

                <img src={ urlToImage? urlToImage :news} alt="" />


                <div className="Text-body">
                    <h3 className='title'>{ title ? title.slice(0,50): title}...</h3>
                    <p className="description">{description ? description.slice(0,80): description}...</p>
                </div>
               
                <a href={url} target='blank'>Read More</a>
                
               

            </div>
        );
    }



export default NewsItem;
