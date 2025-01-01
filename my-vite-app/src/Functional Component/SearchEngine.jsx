import React, { useState } from 'react';

const SearchEngine = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // 在这里处理搜索逻辑
    alert(`搜索: ${query}`);
  };

  return (
    <div>
      <h2>搜索引擎</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="请输入搜索内容"
      />
      <button onClick={handleSearch}>搜索</button>
    </div>
  );
};

export default SearchEngine;
