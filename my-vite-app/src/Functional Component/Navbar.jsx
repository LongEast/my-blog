import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isArticleOpen, setArticleOpen] = useState(false);
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const handleArticleMouseEnter = () => {
    setArticleOpen(true);
  };

  const handleArticleMouseLeave = () => {
    setArticleOpen(false);
  };

  const handleGalleryMouseEnter = () => {
    setGalleryOpen(true);
  };

  const handleGalleryMouseLeave = () => {
    setGalleryOpen(false);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='workspace'>
        <nav>
          <Link to="/">工作间</Link>
        </nav>
      </div>
      <div 
        className='menu' 
        onMouseEnter={handleArticleMouseEnter} 
        onMouseLeave={handleArticleMouseLeave}>
        博客
        {isArticleOpen && (
          <ul>
            <li><Link to="/Articles">文章</Link></li>
            <li><Link to="/Archives">归档</Link></li>
            <li><Link to="/Categories">分类</Link></li>
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
            <li><Link to="/Gallery">图库</Link></li>
            <li><Link to="/Tag">标签</Link></li>
          </ul>
        )}
      </div>
      <div className='links'>
        <nav>
          <Link to="/Blogroll">鱼塘</Link>
        </nav>
      </div>
      <div className='links'>
        <nav>
          <Link to="/About">关于</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
