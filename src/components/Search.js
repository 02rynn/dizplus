import "./Search.css";

function Search() {
  return (
    <div className="search-form">
      <div>
        <img id="서치로고" src="images/whitelogo.png" />
      </div>

      <div className="search-screen">
        <form>
          <input type="text" placeholder="검색어를 입력하세요" />
          <div className="search__header">
            <div>
              <h3 style={{ color: "white" }}>실시간 인기 검색어</h3>
            </div>
            <div>
              <p style={{ color: "white", fontSize: "8px" }}>
                2022.09.26.14.21기준
              </p>
            </div>
            <div className="rankings">
              <div>1.빅마우스</div>
              <div>2.토르 : 러브 앤 썬더</div>
              <div>3.심슨가족</div>
              <div>4.완다비전</div>
              <div>5.엔드게임</div>
              <div>6.피노키오</div>
              <div>7.버즈 라이트 이어</div>
              <div>8.알라딘 </div>
              <div>9.주토피아</div>
              <div>10.크루엘라</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
