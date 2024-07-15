const userInfo = [
  {
    bg: "./assets/profile/IMG_0881.JPG",
    user_name: "i.love.you",
    onStory: true,
    like: 1003,
    isLike: false,
    commentList: [],
    // {like: 1004,content:"",nickname:""},
    picture: [
      "./assets/feed/picture1.jpeg",
      "./assets/feed/picture1-2.jpeg",
      "./assets/feed/picture1-4.jpeg",
    ],
    write: `섬나라에서 왔어요, 현지 분위기를
  느낄 수 있는 일본화로구이 전문점🥩 #모토이시
  
  작은 화로위에 꼬기 올려서 구워먹는
  일본갬성 가득한 야끼니꾸맛집 !!!
  
  와규육회, 나베동 등 다양한 서브메뉴도
  취향에 맞게끔 주문해서 먹을 수 있다구💛
  
  주말 웨이팅필수@@
  
  📍 대구 중구 종로 28 (네이버예약가능)
  📍 매일 16:00 - 01:00 / L.O 00:00 / 연중무휴
  
  #종로술집#대구와규#대구맛집투어#대구핫플#대구여행`,
    story: ["./assets/story/IMG_6980.jpeg"],
    save: false,
  },
  {
    bg: "./assets/profile/IMG_0884.JPG",
    user_name: "1999_0114",
    onStory: true,
    like: 348,
    isLike: false,
    commentList: [],
    picture: [
      "./assets/feed/picture2.jpeg",
      "./assets/feed/picture2-2.jpeg",
      "./assets/feed/picture2-3.jpeg",
    ],
    write: `송정으로 놀러온 날, 자쿠지에서 회도 먹고 불멍도 하고`,
    story: ["./assets/story/IMG_6085.PNG"],
    save: false,
  },
  {
    bg: "./assets/profile/IMG_1826.JPG",
    user_name: "sshhrrr",
    onStory: true,
    like: 20,
    isLike: false,
    commentList: [],
    picture: ["./assets/feed/picture3.jpeg"],
    write: `오늘 하늘 너무 예쁨! 구름 한 점 없는 파란 하늘보다 구름이 뭉개뭉개있는게 더 좋아`,
    story: ["./assets/story/IMG_6985.PNG"],
    save: false,
  },
  {
    bg: "./assets/profile/IMG_4296.JPG",
    user_name: "61_53kg",
    onStory: true,
    like: 56,
    isLike: false,
    commentList: [],
    picture: ["./assets/feed/picture4.jpeg"],
    write: `일하는데 발 아파서 새로 장만했지렁~ 근데 일하러 가는데 새신발 신기 넘 아깝다ㅠ`,
    story: ["./assets/story/IMG_6957.jpeg"],
    save: false,
  },
  {
    bg: "./assets/profile/IMG_4879.JPG",
    user_name: "hyerim_0114",
    onStory: true,
    like: 2844,
    isLike: false,
    commentList: [],
    picture: ["./assets/feed/picture5.jpeg"],
    write: `시나모롤 책갈피! 책갈피 7000원에 택배비 7000원인건 안 비밀`,
    story: ["./assets/story/IMG_6877.jpeg"],
    save: false,
  },
  {
    bg: "./assets/profile/IMG_0101.JPG",
    user_name: "tjgpfla",
    onStory: true,
    like: 5342,
    isLike: false,
    commentList: [],
    picture: [
      "./assets/feed/picture6.jpeg",
      "./assets/feed/picture6-7.jpeg",
      "./assets/feed/picture6-6.jpeg",
      "./assets/feed/picture6-5.jpeg",
      "./assets/feed/picture6-4.jpeg",
      "./assets/feed/picture6-3.jpeg",
      "./assets/feed/picture6-2.jpeg",
      "./assets/feed/picture6-1.jpeg",
    ],
    write: `내 생일잔치`,
    story: ["./assets/story/IMG_6849.jpeg"],
    save: false,
  },
  {
    bg: "./assets/profile/IMG_2897.JPG",
    user_name: "hyerimmmm",
    onStory: true,
    like: 321,
    isLike: false,
    commentList: [],
    picture: ["./assets/feed/picture7.jpeg"],
    write: `이거 너무 맛있더라. 명란 이즈 뭔들`,
    story: ["./assets/story/IMG_5643.jpeg"],
    save: false,
  },
  {
    bg: "./assets/profile/IMG_4359.JPG",
    user_name: "hyerim_lov",
    onStory: true,
    like: 789,
    isLike: false,
    commentList: [],
    picture: ["./assets/feed/picture8.jpeg"],
    write: `갬성샷`,
    story: ["./assets/story/IMG_5615.jpeg"],
    save: false,
  },
];
// reducer 생성
export const reducer = (state = userInfo, action) => {
  switch (action.type) {
    //action === 'INCREASE'일 경우
    case "ONSTORY":
      let arr = state.slice();
      arr[action.idx].onStory = false;
      return arr;
    // action === 'DECREASE'일 경우
    // case "OFFSTORY":
    //   arr = state.slice();

    //   arr[action.idx].onStory = true;
    //   return arr;

    //action === 'ONLIKE일경우
    case "ONLIKE":
      // arr[action.idx].isLike = true;
      let arr2 = state.slice();
      arr2[action.idx].isLike = true;
      arr2[action.idx].like = arr2[action.idx].like + 1;
      return arr2;

    //action === 'OFFLIKE'일경우
    case "OFFLIKE":
      let arr3 = state.slice();

      arr3[action.idx].isLike = false;
      arr3[action.idx].like = arr3[action.idx].like - 1;
      return arr3;
    case "ADDCOMMENT":
      let arr4 = state.slice();
      arr4[action.idx].commentList = [
        ...arr4[action.idx].commentList,
        action.comment,
      ];
      action.comment = "";
      return arr4;
    case "ONSAVE":
      let arr5 = state.slice();
      arr5[action.idx].save = !arr5[action.idx].save;
      return arr5;
    // return (state[action.idx].isLike = false);
    // 해당 되는 경우가 없을 땐 기존 상태를 그대로 리턴
    default:
      return state;
  }
};
