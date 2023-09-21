import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 10px;
    a >
      img {
        display: block;
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
    
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color:#fff;
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

const NewsList = ({ articles }) => {
  if (!articles) {
    // articles가 null 또는 undefined인 경우, 오류 방지를 위해 아무것도 렌더링하지 않음
    return null;
  }
  return (
    <div>
      {articles.map((article) => (
        <NewsItemBlock key={article.originallink}>
          {article.urlToImage && (
            <div className="thumbnail">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <img src={article.urlToImage} alt="thumbnail" />
              </a>
            </div>
          )}
          <div className="contents">
            <h2>
              <a href={article.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: article.title }}></a>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: article.description }}></p>
          </div>
        </NewsItemBlock>
      ))}
    </div>
  );
};

export default NewsList;