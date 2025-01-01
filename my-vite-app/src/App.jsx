import { useState } from 'react';
import './App.css';
import React from 'react';
import Clock from './Functional Component/Clock';
import Weather from './Functional Component/Weather';
import Calendar from './Functional Component/Calendar';

function App() {
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleArticleMouseEnter = () => {
    setIsArticleOpen(true);
  };

  const handleArticleMouseLeave = () => {
    setIsArticleOpen(false);
  };

  const handleGalleryMouseEnter = () => {
    setIsGalleryOpen(true);
  };

  const handleGalleryMouseLeave = () => {
    setIsGalleryOpen(false);
  };

  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <img src='https://via.placeholder.com/150' alt='logo' />
        </div>
        <div className='workspace'>
          <button>Workspace</button>
        </div>
        <div 
          className='menu' 
          onMouseEnter={handleArticleMouseEnter} 
          onMouseLeave={handleArticleMouseLeave}>
          文章
          {isArticleOpen && (
            <ul>
              <li>选项 1</li>
              <li>选项 2</li>
              <li>选项 3</li>
            </ul>
          )}
        </div>
        <div 
          className='menu' 
          onMouseEnter={handleGalleryMouseEnter} 
          onMouseLeave={handleGalleryMouseLeave}>
          图库
          {isGalleryOpen && (
            <ul>
              <li>图片 1</li>
              <li>图片 2</li>
              <li>图片 3</li>
            </ul>
          )}
        </div>
        <div className='links'>
          <a href='#about'>关于</a>
          <a href='#friends'>好友链接</a>
        </div>
        <div className='todo'>
          <button>待办</button>
        </div>
      </div>
      <div className='search'>
        <img src='https://via.placeholder.com/20' alt='搜索' />
      </div>
      <div>
        <Clock />
      </div>
      <div>
        <Weather />
      </div>
      <div>
        <Calendar />
      </div>

      
      <div className='content' >
        <h1>欢迎来到我的博客</h1>
        <p>这里是我的博客文章，欢迎大家来阅读。</p>
      </div>
    </>
  );
}

export default App;
