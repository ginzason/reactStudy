import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from '../components/NewsList';
import styled from 'styled-components';

const NewsWrap = styled.div`
  padding:20px;
  > div {
    margin-bottom:20px;
    input {
      width:calc(100% - 90px);
      margin-right:10px;
      height:40px;
    }
    button {
      background:#333;
      border:1px solid #fff;
    }
  }
`;

const News = () => {
  const [searchQuery, setSearchQuery] = useState('인기');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [debouncedInputValue, setDebouncedInputValue] = useState(500);
  const fetchData = async () => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/v1/search/news.json?query=${encodeURIComponent(searchQuery)}`, {
          headers: {
            'X-Naver-Client-Id': '7lVgaBo6gVdzFAcWzhrA',
            'X-Naver-Client-Secret': 'ai8LljpS2K',
          },
        }
      );
      setData(response.data.items);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // useEffect(() => {
  //   fetchData(); // 초기 렌더링 시에도 데이터를 가져오도록 호출
  // }, [searchQuery]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(searchQuery);
      fetchData();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, 500]);

  

  const handleSearchClick = () => {
    fetchData(); // 검색 버튼 클릭 시 데이터를 가져오도록 호출
  };

  return (
    <NewsWrap>
      <div>
        <input
          type="text" 
          placeholder="검색어를 입력해주세요."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick}>검색</button>
      </div>
      {loading ? (
        <div>뉴스를 불러오는 중...</div>
      ) : (
        <NewsList articles={data} />
      )}
    </NewsWrap>
  );
};

export default News;