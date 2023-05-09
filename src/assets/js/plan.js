var url = "http://localhost:8080/plan/";

var markers = [];

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places();

// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

// 키워드로 장소를 검색합니다
searchPlaces();

// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {
  var keyword = document.getElementById("keyword").value;

  if (!keyword.replace(/^\s+|\s+$/g, "")) {
    alert("키워드를 입력해주세요!");
    return false;
  }

  //fetch 하자
  fetch(url + keyword)
    .then((response) => response.json())
    .then((data) => displayPlaces(data));
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    // 정상적으로 검색이 완료됐으면
    // 검색 목록과 마커를 표출합니다
    displayPlaces(data);

    // 페이지 번호를 표출합니다
    displayPagination(pagination);
  } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    alert("검색 결과가 존재하지 않습니다.");
    return;
  } else if (status === kakao.maps.services.Status.ERROR) {
    alert("검색 결과 중 오류가 발생했습니다.");
    return;
  }
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {
  var listEl = document.getElementById("placesList"),
    menuEl = document.getElementById("menu_wrap"),
    fragment = document.createDocumentFragment(),
    bounds = new kakao.maps.LatLngBounds(),
    listStr = "";

  // 검색 결과 목록에 추가된 항목들을 제거합니다
  removeAllChildNods(listEl);

  // 지도에 표시되고 있는 마커를 제거합니다
  removeMarker();

  const remark = places;

  for (var i = 0; i < places.length; i++) {
    // 마커를 생성하고 지도에 표시합니다
    var placePosition = new kakao.maps.LatLng(places[i].latitude, places[i].longitude),
      marker = addMarker(placePosition, i),
      itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

    // 마커와 검색결과 항목에 mouseover 했을때
    // 해당 장소에 인포윈도우에 장소명을 표시합니다
    // mouseout 했을 때는 인포윈도우를 닫습니다
    fragment.appendChild(itemEl);
  }

  // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
  listEl.appendChild(fragment);
  menuEl.scrollTop = 0;
}

// 검색결과 항목을 Element로 반환하는 함수입니다
function getListItem(index, places) {
  var el = document.createElement("li"),
    itemStr =
      '<span class="markerbg marker_' +
      (index + 1) +
      '"></span>' +
      '<div class="info">' +
      "   <h5>" +
      places.title +
      "</h5>";

  if (false) {
    itemStr +=
      "    <span>" +
      places.road_address_name +
      "</span>" +
      '   <span class="jibun gray">' +
      places.address_name +
      "</span>";
  } else {
    itemStr += "    <span>" + places.addr1 + "</span>";
  }

  el.innerHTML = itemStr;
  el.className = "item";

  //오른쪽 리스트에 생성. 아래 타임라인 생성
  el.addEventListener("click", () => {
    let rContainer = document.querySelector("#cardContainer");
    let nowCard = document.createElement("div");
    nowCard.setAttribute("class", "card_1");

    let c0 = document.createElement("div");
    c0.setAttribute("class", "indexId");
    c0.innerText = places.content_id;
    c0.setAttribute("style", "display:none");
    nowCard.appendChild(c0);

    let c1 = document.createElement("div");
    c1.innerText = places.title;
    nowCard.appendChild(c1);

    let c2 = document.createElement("div");
    c2.innerText = places.addr1;
    nowCard.appendChild(c2);

    let but = document.createElement("button");
    but.innerText = "삭제";
    nowCard.appendChild(but);

    //타임 라인 생성
    let tContainer = document.querySelector(".dayCard");
    let bCard = document.createElement("div");
    bCard.setAttribute("class", "card_2");

    let b0 = document.createElement("div");
    b0.setAttribute("class", "indexId");
    b0.innerText = places.content_id;
    b0.setAttribute("style", "display:none");
    bCard.appendChild(b0);

    let b1 = document.createElement("div");
    b1.innerText = places.title;
    bCard.appendChild(b1);

    let b2 = document.createElement("div");
    b2.innerText = places.addr1;
    bCard.appendChild(b2);

    but.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      deleteTimeline(e.target.parentElement.firstElementChild.innerText);
    });

    tContainer.appendChild(bCard);
    rContainer.appendChild(nowCard);
  });

  return el;
}

function deleteTimeline(p0) {
  let pp = document.querySelector(".dayCard");
  let pc = pp.children;
  for (let i = 0; i < pc.length; i++) {
    if (pc[i].firstElementChild.innerText == p0) {
      pc[i].remove();
      break;
    }
  }
}

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
function addMarker(position, idx, title) {
  var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
    imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
    imgOptions = {
      spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
      spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
      offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    },
    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
    marker = new kakao.maps.Marker({
      position: position, // 마커의 위치
      image: markerImage,
    });

  marker.setMap(map); // 지도 위에 마커를 표출합니다
  markers.push(marker); // 배열에 생성된 마커를 추가합니다

  return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
  var paginationEl = document.getElementById("pagination"),
    fragment = document.createDocumentFragment(),
    i;

  // 기존에 추가된 페이지번호를 삭제합니다
  while (paginationEl.hasChildNodes()) {
    paginationEl.removeChild(paginationEl.lastChild);
  }

  for (i = 1; i <= pagination.last; i++) {
    var el = document.createElement("a");
    el.href = "#";
    el.innerHTML = i;

    if (i === pagination.current) {
      el.className = "on";
    } else {
      el.onclick = (function (i) {
        return function () {
          pagination.gotoPage(i);
        };
      })(i);
    }

    fragment.appendChild(el);
  }
  paginationEl.appendChild(fragment);
}

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
// 인포윈도우에 장소명을 표시합니다
function displayInfowindow(marker, title) {
  var content = '<div style="padding:5px;z-index:1;">' + title + "</div>";

  infowindow.setContent(content);
  infowindow.open(map, marker);
}

// 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {
  while (el.hasChildNodes()) {
    el.removeChild(el.lastChild);
  }
}

//전송 부분
document.querySelector("#send").addEventListener("click", () => {
  let title = document.querySelector("#title").value;
  console.log(title);
  let contents = document.querySelector("#contents").value;
  let start_date = document.querySelector("#start_date").value;
  let end_date = document.querySelector("#end_date").value;
  let list = [];
  let ids = [];
  let pp = document.querySelector(".dayCard");
  let pc = pp.children;
  for (let i = 0; i < pc.length; i++) {
    ids.push(pc[i].firstElementChild.innerText);
  }
  list.push(ids);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      start_date: start_date,
      end_date: end_date,
      contents: contents,
      list: list,
    }),
  }).then((res) => res.json());
});
