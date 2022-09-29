import "./Search.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

function Search() {
  let navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [index, setIndex] = useState();

  const movies = [
    {
      title: "그루트의 첫 발자국",
      img: "https://image.tmdb.org/t/p/w200/lSONYnVc2tfzsQuenZgzawQtW2c.jpg",
      overview:
        "이제 화분 밖으로 나가 보자. 첫걸음을 떼는 베이비 그루트. 하지만 달리기 전에 걸음마부터 배워야지.",
    },
    {
      title: "버즈 라이트이어",
      img: "https://image.tmdb.org/t/p/w200/oMa5NjFxK8Csp6uVQ0tRuF1pWM5.jpg",
      overview:
        "나, 버즈 라이트이어. 인류 구원에 필요한 자원을 감지하고 현재 수많은 과학자들과 미지의 행성으로 향하고 있다. 이번 미션은 인류의 역사를 새롭게 쓸 것이라 확신한다. 잘못된 신호였다. 이곳은 삭막하고 거대한 외계 생물만이 살고 있는 폐허의 땅이다. 나의 실수로 모두가 이곳에 고립되고 말았다...",
    },
    {
      title: "더 배트맨",
      img: "https://image.tmdb.org/t/p/w200/zGgrDMJCnE0s4EDX0L4X1wXFgZv.jpg",
      overview:
        "지난 2년 간 고담시의 어둠 속에서 범법자들을 응징하며 배트맨으로 살아온 브루스 웨인. 알프레드와 제임스 고든 경위의 도움 아래 그는 도시의 부패한 공직자들과 고위 관료들 사이에서 복수의 화신으로 활약한다. 고담의 시장 선거를 앞두고 고담의 엘리트 집단을 목표로 잔악한 연쇄살인을 저지르는 수수께끼 킬러 리들러가 나타나자, 최고의 탐정 브루스 웨인이 수사에 나서고 남겨진 단서를 풀어가며...",
    },
    {
      title: "신비한 동물들과 덤블도어의 비밀",
      img: "https://image.tmdb.org/t/p/w200/uvQbXjMgC5weQepx4jLJJ60H3N0.jpg",
      overview:
        "1930년대, 제2차 세계대전에 마법사들이 개입하게 되면서 강력한 어둠의 마법사 그린델왈드의 힘이 급속도로 커진다. 덤블도어는 뉴트 스캐맨더에게 위대한 마법사 가문 후손, 마법학교의 유능한 교사, 머글 등으로 이루어진 팀에게 임무를 맡긴다. 이에 뉴트와 친구들은 머글과의 전쟁을 선포한 그린델왈드와 추종자들, 그의 위험한 신비한 동물들에 맞서 세상을 구할 거대한 전쟁에 나선다. 한편 전쟁의 위기가 최고조로 달한 상황 속에서 덤블도어는 더 이상 방관자로 머물 수 없는 순간을 맞이하고, 서서히 숨겨진 비밀이 드러나는데...",
    },
    {
      title: "엔칸토: 마법의 세계",
      img: "https://image.tmdb.org/t/p/w200/b8gz7UKMwMz39mz6EH5Jjicjdth.jpg",
      overview:
        "콜롬비아의 깊은 산 속, 놀라운 마법과 활기찬 매력이 넘치는 세계 엔칸토. 이곳을 만든 장본인은 마드리갈 가문의 기둥인 알마 할머니다. 그녀는 젊었을 때 세 쌍둥이를 데리고 이곳으로 오던 중에 위기를 맞았다. 그때 그녀가 들고 있던 촛불에 기적이 일어났고 그이후로 마법의 능력이 손주 세대까지 대물림된다. 3대에 걸친 이대가족은 음식으로 병을 고치는 능력, 꽃을 피우는 능력, 날씨를 조종 하는 능력 등 저마다 독특한 능력을 지니게 됐다. 하지만 가족 중 유일하게 미라벨만 아무런 능력이 없다. 어느 날 엔칸토가 지닌 마법의 힘이 위험에 처하고 가족들은 점차 자신의 능력을 잃어가기 시작한다. 이를 감지한 미라벨은 유일하게 평범한 자신이 특별한 이 가족의 마지막 희망일지 모른다고 생각하는데...",
    },
    {
      title: "그레이 맨",
      img: "https://image.tmdb.org/t/p/w200/3weHvdbJ9RiSNHS0cz5694fkAnk.jpg",
      overview:
        "그 누구도 실체를 몰라 그레이 맨으로 불리는 CIA의 암살 전문 요원이우연히 CIA의 어두운 비밀을 발견한다. 이런 그의 목에 현상금을 건 소시오패스 기질의 전직 요원. 세계 곳곳을 배경으로 두 사람의 쫓고 쫓기는 추격전이 펼쳐진다.",
    },
    {
      title: "베놈 2: 렛 데어 비 카니지",
      img: "https://image.tmdb.org/t/p/w200/1Lh9LER4xRQ3INFFi2dfS2hpRwv.jpg",
      overview:
        "‘베놈'과 완벽한 파트너가 된 ‘에디 브록' 앞에 ‘클리터스 캐서디'가 ‘카니지'로 등장, 앞으로 닥칠 대혼돈의 세상을 예고한다. 대혼돈의 시대가 시작되고, 악을 악으로 처단할 것인가?",
    },
    {
      title: "씽2게더",
      img: "https://image.tmdb.org/t/p/w200/xe8dVB2QiCxLWFV77V4dpZcOvYB.jpg",
      overview:
        "대국민 오디션 이후 각자의 자리에서 꿈을 이루고 있는 버스터 문(매튜 맥커너히)과 크루들에게 레드 쇼어 시티에서 전 세계가 주목하는 사상 최고의 쇼가 펼쳐진다는 소식이 들려오고 버스터 문과 크루들은 도전에 나선다. 그러나 최고의 스테이지에 서기 위한 경쟁은 이전과는 비교도 할 수 없을 만큼 치열하고, 버스터 문은 완벽한 라이브를 위해 종적을 감춘 레전드 뮤지션 클레이(보노)를 캐스팅하겠다는 파격 선언을 하는데!",
    },
    {
      title: "어벤져스: 인피니티 워",
      img: "https://image.tmdb.org/t/p/w200/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg",
      overview:
        "타노스는 6개의 인피니티 스톤을 획득해 신으로 군림하려 한다. 그것은 곧 인류의 절반을 학살해 우주의 균형을 맞추겠다는 뜻. 타노스는 닥터 스트레인지가 소유한 타임 스톤, 비전의 이마에 박혀 있는 마인드 스톤을 차지하기 위해 지구를 침략한다. 아이언맨과 스파이더맨은 가디언즈 오브 갤럭시의 멤버들과 타노스를 상대한다. 지구에선 캡틴 아메리카, 완다, 블랙 위도우, 블랙 팬서 등이 비전을 지키기 위해 뭉친다.",
    },
    {
      title: "배드 가이즈",
      img: "https://image.tmdb.org/t/p/w200/k5TL1oBUqSr6dL9NlHGRr3vJcXd.jpg",
      overview:
        "작전 설계부터 금고 해제, 해킹, 액션, 위장까지 완벽한 팀플레이를 펼치는 자타공인 최고의 나쁜 녀석들이 한순간의 실수로 체포된다.  하지만 그들도 착해질 수 있다는 ‘마멀레이드 박사’의 주장으로 나쁜 녀석들은 바른 생활 갓생 프로젝트에 투입되고, 이들은 다시 한번 자유의 몸을 위해 태어나 처음으로 바른 생활에 도전하게 되는데…  나쁜 녀석들의 사상 초유 바른 생활 갓생 프로젝트가 시작된다!",
    },
  ];

  return (
    <div className="search-form">
      <div>
        <img
          id="서치로고"
          src="images/whitelogo.png"
          onClick={() => {
            navigate("/main");
          }}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="search-screen">
        <form>
          <input type="text" placeholder="검색어를 입력하세요" />
          <div className="search__header">
            <div>
              <h3 style={{ color: "white" ,position:"relative" , right:'100px'}}>실시간 인기 검색어</h3>
            </div>
            <div>
              <p style={{ color: "white", fontSize: "8px" , position:'relative', left:'100px' }}>
                2022.09.26.14.21기준
              </p>
              </div>
            
            <div className="rankings">
              <div className="ranking_list">
                {movies.map((data,i)=>{
                  return(
                    <div onClick={()=>{
                     
                      setIndex(i)
                      setModalIsOpen(true)
                    }}>
                     <p>
                      {i+1} .
                        {movies[i].title}
                        </p>
                    </div>
                  )
                })}
                </div>
            </div>
              </div>
             
              </form>
             

            
              <Modal
                className="modal_search"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
              >
                <ModalContents movies={movies} index={index} />
                <button
                  className="modal_closebtn"
                  onClick={() => setModalIsOpen(false)}
                >
                  창닫기
                </button>
              </Modal>

            
            </div>
          
      
     
    </div>
  );
}

function ModalContents({ movies, index }) {
  return(
    <div>
    <h1>{movies[index].title}</h1>
    <img src={movies[index].img}></img>
    <p>{movies[index].overview}</p>
    </div>
  ) 
}

export default Search;
