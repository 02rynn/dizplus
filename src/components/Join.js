import { Form, useNavigate } from "react-router-dom";

import "./Join.css";

function Join(){

    let navigate = useNavigate();

    return(
      <form>
        <div className="join-form">
          <img  id='join_logo' src="/images/whitelogo.png"/>
  
        <div className="join-form__screen">
            <h2>내가 좋아하는 바로 그 이야기가 <br/> 모두 여기에</h2>
            <div className="join-form__buttons">
            <div className="join-form__btn-now">
            <p>9,900원 | 월</p>
            <span>멤버십이 필요합니다.</span>
           <button onClick={()=>{
             navigate('/subscribe')
           }}>
           지금 구독하기
           </button>
            </div >

            <div className="join-form__btn-12">
                <p >99,000 | 연</p>
                <span>최대 16% 할인된 가격</span>
           <button onclick={()=>{
            navigate('/Subscribe')
           }}>
            12개월 구독하고 할인받기
           </button>
           </div>
           </div>
    
        </div>

        </div>
      </form>
    )
}

export default Join;