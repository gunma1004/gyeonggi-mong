// 1. 메인 화면 표시 (80자 이내 최적화 문구 적용 및 도메인 교체)
function showMainPage() {
  document.getElementById("mainView").style.display = "block";
  document.getElementById("detailView").style.display = "none";

  const mainTitle = "경기건마몽 - 경기 1인샵 & 건마·스웨디시 31개 시군 안내";
  // 58자로 축약 (네이버 80자 이내 완벽 충족)
  const mainDesc = "경기건마몽 경기 전지역 1인샵, 건마, 스웨디시, 타이 힐링 제휴 및 구·동별 맞춤 정보.";
  const mainImg = "https://gyeonggi-mong.massagemong-kr.workers.dev/images/logo.png";
  const mainUrl = "https://gyeonggi-mong.massagemong-kr.workers.dev/";

  document.title = mainTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", mainDesc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", mainTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", mainDesc);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute("content", mainImg);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", mainUrl);
  
  window.scrollTo(0, 0);
}

// 2. [시 - 구 - 동] 세부 페이지 영역 (도메인 주소 갱신)
function showDetailPage(area, guName, dongName) {
  document.getElementById("mainView").style.display = "none";
  const detailView = document.getElementById("detailView");
  const detailContent = document.getElementById("detailContent");

  let cityName = area.name;
  let pageTitle = `${cityName} 건마 & 1인샵 스웨디시 안내`;
  let pageDesc = `${cityName} 경기 전지역 프리미엄 1인샵, 건마, 스웨디시 제휴 정보.`;

  if (guName && guName !== "시 관할" && guName !== "권역") {
    pageTitle = `${cityName} ${guName} 건마 · 1인샵 안내`;
    pageDesc = `${cityName} ${guName} 1인샵, 건마, 스웨디시 제휴업체 정보.`;
  }
  
  if (dongName) {
    pageTitle = `${cityName} ${dongName} 건마 · 1인샵 안내`;
    pageDesc = `${cityName} ${dongName} 1인샵, 건마, 스웨디시 맞춤 제휴 정보.`;
  }

  // 새 배포 도메인 주소로 교체
  const fullImg = area.img.startsWith("http") ? area.img : `https://gyeonggi-mong.massagemong-kr.workers.dev${area.img}`;
  const currentUrl = window.location.href;

  document.title = pageTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", pageDesc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", pageTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", pageDesc);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute("content", fullImg);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", currentUrl);

  let subNavHtml = "";
  area.gus.forEach(gu => {
    subNavHtml += `
      <div class="gu-box">
        <h4 class="gu-title">${gu.name}</h4>
        <div class="dong-link-grid">
          ${gu.dongs.map(d => `<a href="/${area.slug}/${gu.slug}/${d.slug}" onclick="navigateDong(event, '/${area.slug}/${gu.slug}/${d.slug}')" class="dong-link-btn">${d.name}</a>`).join("")}
        </div>
      </div>
    `;
  });

  detailContent.innerHTML = `
    <!-- 1. 구/동 전용 상단 네비게이션 -->
    <div class="detail-nav-menu">
      <a href="/#service" onclick="goBackToMain(event)">서비스</a>
      <a href="/#price-info" onclick="goBackToMain(event)">가격안내</a>
      <a href="/#travel" onclick="goBackToMain(event)">근처여행</a>
      <a href="/#food" onclick="goBackToMain(event)">맛집숙소</a>
      <a href="/#areas" onclick="goBackToMain(event)">지역안내</a>
      <a href="/#reviews" onclick="goBackToMain(event)">후기</a>
    </div>

    <!-- 2. 구/동 전용 히어로 헤더 -->
    <div class="detail-hero">
      <img src="${area.img}" alt="${pageTitle}" class="detail-hero-img"/>
      <div class="detail-hero-text">
        <span class="eyebrow">GYEONGGI LOCAL SERVICE</span>
        <h1>${pageTitle}</h1>
        <p>해당 권역 검증된 1:1 맞춤형 힐링 케어를 안내해 드립니다.</p>
      </div>
    </div>

    <!-- 3. 제휴업체 5개 전용 카드 배치 -->
    <div class="detail-section">
      <h3 style="color:#ff3366; margin-bottom:15px;">🔥 ${pageTitle} 추천 제휴업체</h3>
      <div class="shop-grid">
        ${getShopsHtml()}
      </div>
    </div>

    <!-- 4. 하위 구 및 동 지역 선택 네비게이션 -->
    <div class="detail-section">
      <h3>📍 ${cityName} 세부 구/동 지역 선택</h3>
      <p style="color:#aaa; font-size:0.9rem; margin-bottom:15px;">원하시는 동을 클릭하시면 해당 동 전용 1인샵 &amp; 건마 안내 페이지로 이동합니다.</p>
      ${subNavHtml}
    </div>
  `;

  detailView.style.display = "block";
  window.scrollTo(0, 0);
}