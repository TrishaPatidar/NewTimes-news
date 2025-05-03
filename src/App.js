import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default function App(props) {
  const [progress, setProgress] = useState(0);
  const pageSize = 8;

    return (
      <div>

        <BrowserRouter>
          <div>
            <LoadingBar
              color="#f11946"
              progress={progress}
             

            />
            <Navbar />
            <Routes>

              <Route  path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
              <Route  path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />
              <Route  path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
              <Route  path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
              <Route  path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />} />
              <Route  path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />
              <Route  path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
              <Route  path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />} />



            </Routes>
          </div>
        </BrowserRouter>
      </div>
    )
  }
