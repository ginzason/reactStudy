import React from "react"
const height = {
  height: '100dvh'
}
const homeStyle = {
  padding:'20px'
}
function Home() {
  return (
    <>
      <section style={height}>
        <div style={homeStyle}>
          블로그의 홈입니다 <br />
          홈에는 이것저것이 등장할 예정입니다.<br />
          각종 컨텐츠를 제공할 예정입니다.<br />
        </div>
        <div>
          <button>태그태그</button>
        </div>
      </section>
    </>
  )
}

export default Home