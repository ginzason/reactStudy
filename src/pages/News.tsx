import React, { useState } from 'react';
import axios from 'axios';

const News = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        '/api/v1/search/news.json?query=%EC%A3%BC%EC%8B%9D', {
          headers : {
            "X-Naver-Client-Id": '7lVgaBo6gVdzFAcWzhrA',
            "X-Naver-Client-Secret": 'ai8LljpS2K',
          }
        }
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <input type="text" placeholder='검색어를 입력해주세요.'/>
        <button onClick={onClick}>검색</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default News;
