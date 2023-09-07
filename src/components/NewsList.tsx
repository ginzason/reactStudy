import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from "styled-components";

// const NewsList = () => {
//   const CLIENT_ID = '7lVgaBo6gVdzFAcWzhrA';
//   const CLIENT_SECRET = 'ai8LljpS2K';
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     // Make the API request using Axios or any other HTTP client library
//     axios.get('/v1/search/news.json', {
//       headers: {
//         'X-Naver-Client-Id': CLIENT_ID,
//         'X-Naver-Client-Secret': CLIENT_SECRET
//       },
//       params:{
//         query: "날씨"
//       }
//     })
//     .then(response => {
//       console.log(response)
//       //setData(response.data);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
//   }, []);
//   const NewsItemBlock = styled.div`
//     display: flex;
//     .thumbnail {
//       margin-right: 1rem;
//       img {
//         display: block;
//         width: 160px;
//         height: 100px;
//         object-fit: cover;
//       }
//     }
//     .contentes {
//       h2 {
//         margin: 0;
//         a {
//           color: black;
//         }
//       }
//       p {
//         margin: 0;
//         line-height: 1.5;
//         margin-top: 0.5rem;
//         white-space: normal;
//       }
//     }
//     & + & {
//       margin-top: 3rem;
//     }
//   `;

//   return (
//     <>
//       <button>
//         데이터 연동확인 테스트
//       </button>
//     </>
//   );
// };

// export default NewsList;