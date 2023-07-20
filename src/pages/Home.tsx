import React from "react"
const height = {
  height: '100dvh'
}
function Home() {
  return (
    <>
      <section style={height}>
        <div>
          블로그의 홈입니다
          각종 컨텐츠를 제공할 예정입니다.
        </div>
        <div>
          <button>태그태그</button>
        </div>
      </section>
    </>
  )
}

export default Home