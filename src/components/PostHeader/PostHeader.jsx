import React from 'react'
import { useDispatch } from 'react-redux'
import './css/style.css'

const PostHeader = ({bg, user_name,type}) => {
  const dispatch = useDispatch()
  return (
    <div className='postheader-page'>
        <div className={`post-header ${type}-post-header`}>
            <div  className='user-info'>
                <div style={{backgroundImage : `url(${bg})`}} className='profile-img'></div>
                <div className='user-name'>{user_name}</div>
                {type ==="list" && 
                 <>
                  <div className='dot'></div>
                <div className='date'>2일</div>
                 </>}
            </div>
            <img src='./assets/main/seemore2.svg' alt=''
            onClick={()=>{
            dispatch({type:"ONSTORY"})
            }}
            />
       </div>
    </div>
  )
}

export default PostHeader