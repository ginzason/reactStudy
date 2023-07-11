import React from "react";
import '../assets/css/navigator.scss'

function Navigator() {
  const navigatorList = [
    {
      name: '홈',
      link: '/'
    },
    {
      name: '뉴스',
      link: '/news'
    },
    {
      name: '태그',
      link: '/tag'
    },
    {
      name: '방명록',
      link: '/guestBook'
    },
  ];

  return (
    <>
      <div>
        <ul className="navigator-list">
          {navigatorList.map((navigator, index) => (
            <li key={index}><a href={navigator.link}>{navigator.name}</a></li>
          ))}
        </ul> 
      </div>
    </>
  )
}

export default Navigator