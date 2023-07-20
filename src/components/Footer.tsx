import React from "react";

function Footer() {
  const FooterList = [
    {
      name: '이용약관',
      link: '/'
    },
    {
      name: 'contact',
      link: '/'
    },
    {
      name: 'copyright',
      link: '/'
    },
  ];

  return (
    <>
      <div>
        <ul>
          {FooterList.map((navigator, index) => (
            <li key={index}><a href={navigator.link}>{navigator.name}</a></li>
          ))}
        </ul> 
      </div>
    </>
  )
}

export default Footer