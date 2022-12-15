import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={"img/logo.png"} alt="" />
        <p className='text'>본 사이트는 상업적 용도가 아닌 <br />
            개인 프로젝트 입니다.
        </p>
        <p className='sub_text'>
            🎉 주요 기술 : Redux, Router, Middleware, Axios 🎉
        </p>
    </div>
  )
}

export default Footer