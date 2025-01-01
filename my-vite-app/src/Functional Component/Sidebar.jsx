import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css'; // Import the sidebar styles
import { FaHome, FaBook, FaImage, FaUsers, FaList, FaEnvelope } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem icon={<FaHome />}>
          <Link to="/">工作间</Link>
        </MenuItem>
        <SubMenu
          title="博客"
          icon={<FaBook />}
          onMouseEnter={handleArticleMouseEnter}
          onMouseLeave={handleArticleMouseLeave}
          open={isArticleOpen}
        >
          <MenuItem>
            <Link to="/articles">文章</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/gallery">图库</Link>
          </MenuItem>
          <MenuItem>讨论区</MenuItem>
        </SubMenu>
        <SubMenu
          title="图库"
          icon={<FaImage />}
          onMouseEnter={handleGalleryMouseEnter}
          onMouseLeave={handleGalleryMouseLeave}
          open={isGalleryOpen}
        >
          <MenuItem>图片 1</MenuItem>
          <MenuItem>图片 2</MenuItem>
          <MenuItem>图片 3</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaUsers />}>
          <a href="#about">关于</a>
        </MenuItem>
        <MenuItem icon={<FaEnvelope />}>
          <a href="#friends">好友链接</a>
        </MenuItem>
        <MenuItem icon={<FaList />}>
          <button>待办</button>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;