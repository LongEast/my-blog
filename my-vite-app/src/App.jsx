import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React from 'react';
import Clock from './Functional Component/Clock';
import Weather from './Functional Component/Weather';
import Calendar from './Functional Component/Calendar';

import Navbar from './Functional Component/Navbar';
import TodoList from './Functional Component/TodoList';
import SearchEngine from './Functional Component/SearchEngine';
import Banner from './Functional Component/Banner';


import Articles from './Pages/Articles';
import Archives from './Pages/Archives';
import Categories from './Pages/Categories';

import Gallery from './Pages/Gallery';
import Tag from './Pages/Tag';

import Blogroll from './Pages/Blogroll';
import About from './Pages/About'; 





function App() {

  return (
    <>
      
      
      <Routes>
        {/* Routes for workspace-page */}
        <Route path="/" element={
          <>
            <div className='container'>
              <Navbar />
              <Banner />
              <SearchEngine />
              <TodoList />
              <Clock />
              <Weather />
              <Calendar />
            </div>
          </>
        } />

        {/* 文章页面 */}
        <Route path="/Articles" element={
          <>
            <div className='container'>
              <Navbar />
              <Articles />
            </div>
          </>
        } />
        {/* 文章归档页面 */}
        <Route path="/Archives" element={
          <>
            <div className='container'>
              <Navbar />
              <Archives />
            </div>
          </>
        } />
        {/* 文章分类页面 */}
        <Route path="/Categories" element={
          <>
            <div className='container'>
              <Navbar />
              <Categories />
            </div>
          </>
        } />

        <Route path="/Gallery" element={
          <>
            <div className='container'>
              <Navbar />
              <Gallery />
            </div>
          </>
        } />

        <Route path="/Tag" element={
          <>
            <div className='container'>
              <Navbar />
              <Tag />
            </div>
          </>
        } />
        {/* 友链页面   */}
        <Route path="/Blogroll" element={
          <>
            <div className='container'>
              <Navbar />
              <Blogroll />
            </div>
          </>
        } />
        {/* 关于页面 */}
        <Route path="/About" element={
          <>
            <div className='container'>
              <Navbar />
              <About />
            </div>
          </>
        } />

      </Routes>
    </>
  );
}

export default App;