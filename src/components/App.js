import React, { useState } from 'react';
import '../css/App.css';
// import NewsItem from './newsItem';
import Header from './Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './News';
import LoadingBar from 'react-top-loading-bar'




function App (){

  const [progress , setProgress] = useState( 0)

  return (
      <div className="App">
     
          <Router>
            <LoadingBar
              color='#666464'
              background='050404'
              height={3}
              progress={progress}
              onLoaderFinished={() => setProgress({ progress: 0 })}
            />
            <Header></Header>

            <Routes>
              <Route exact path='/' element={<News setProgress={setProgress} key={'general'} category={'general'}></News>}></Route>
              <Route exact path='/sports' element={<News setProgress={setProgress} key={'sports'} category={'sports'}></News>}></Route>
              <Route exact path='/business' element={<News setProgress={setProgress} key={'business'} category={'business'}></News>}></Route>
              <Route exact path='/technology' element={<News setProgress={setProgress} key={'technology'} category={'technology'}></News>}></Route>
              <Route exact path='/entertainment' element={<News setProgress={setProgress} key={'entertainment'} category={'entertainment'}></News>}></Route>
              <Route exact path='/health' element={<News setProgress={setProgress} key={'health'} category={'health'}></News>}></Route>
             
            </Routes>


            {/* <News></News> */}

          </Router>
       
      </div>
  )
}

export default App;
