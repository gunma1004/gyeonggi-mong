/* ==========================================================================
   1. 경기도 31개 시·군 / 일반구 / 주요 읍·면·동 전체 데이터셋
   ========================================================================== */
const areasData = [
  // 1. 수원시 (4개 일반구)
  {
    name: "수원시",
    slug: "suwon",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "영통구",
        slug: "yeongtong",
        dongs: [
          { name: "영통동", slug: "yeongtong-dong" }, { name: "매탄동", slug: "maetan-dong" },
          { name: "망포동", slug: "mangpo-dong" }, { name: "이의동(광교)", slug: "gwanggyo-dong" },
          { name: "원천동", slug: "woncheon-dong" }, { name: "하동", slug: "ha-dong" }, { name: "신동", slug: "sin-dong" }
        ]
      },
      {
        name: "팔달구",
        slug: "paldal",
        dongs: [
          { name: "인계동", slug: "ingye-dong" }, { name: "우만동", slug: "uman-dong" },
          { name: "매교동", slug: "maegyo-dong" }, { name: "화서동", slug: "hwaseo-dong" },
          { name: "지동", slug: "ji-dong" }, { name: "행궁동", slug: "haenggung-dong" }, { name: "매산동", slug: "maesan-dong" }
        ]
      },
      {
        name: "권선구",
        slug: "gwonseon",
        dongs: [
          { name: "권선동", slug: "gwonseon-dong" }, { name: "곡반정동", slug: "gokbanjeong-dong" },
          { name: "금곡동", slug: "geumgok-dong" }, { name: "호매실동", slug: "homaesil-dong" },
          { name: "세류동", slug: "seryu-dong" }, { name: "구운동", slug: "guun-dong" }, { name: "서둔동", slug: "seodun-dong" }
        ]
      },
      {
        name: "장안구",
        slug: "jangan",
        dongs: [
          { name: "정자동", slug: "jeongja-dong" }, { name: "조원동", slug: "jowon-dong" },
          { name: "천천동", slug: "cheoncheon-dong" }, { name: "율전동", slug: "yuljeon-dong" },
          { name: "송죽동", slug: "songjuk-dong" }, { name: "연무동", slug: "yeonmu-dong" }, { name: "파장동", slug: "pajang-dong" }
        ]
      }
    ]
  },

  // 2. 성남시 (3개 일반구)
  {
    name: "성남시",
    slug: "seongnam",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "분당구",
        slug: "bundang",
        dongs: [
          { name: "정자동", slug: "jeongja-dong" }, { name: "서현동", slug: "seohyeon-dong" },
          { name: "야탑동", slug: "yatap-dong" }, { name: "판교동", slug: "pangyo-dong" },
          { name: "백현동", slug: "baekhyeon-dong" }, { name: "수내동", slug: "sunae-dong" },
          { name: "이매동", slug: "imae-dong" }, { name: "구미동(미금)", slug: "gumi-dong" }
        ]
      },
      {
        name: "수정구",
        slug: "sujeong",
        dongs: [
          { name: "신흥동", slug: "sinheung-dong" }, { name: "태평동", slug: "taepyeong-dong" },
          { name: "위례동", slug: "wirye-dong" }, { name: "산성동", slug: "sanseong-dong" },
          { name: "양지동", slug: "yangji-dong" }, { name: "복정동", slug: "bokjeong-dong" }, { name: "고등동", slug: "godeung-dong" }
        ]
      },
      {
        name: "중원구",
        slug: "jungwon",
        dongs: [
          { name: "성남동(모란)", slug: "moran-dong" }, { name: "상대원동", slug: "sangdaewon-dong" },
          { name: "하대원동", slug: "hadaewon-dong" }, { name: "금광동", slug: "geumgwang-dong" },
          { name: "은행동", slug: "eunhaeng-dong" }, { name: "중앙동", slug: "jungang-dong" }, { name: "여수동", slug: "yeosu-dong" }
        ]
      }
    ]
  },

  // 3. 고양시 (3개 일반구)
  {
    name: "고양시",
    slug: "goyang",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "일산동구",
        slug: "ilsandong",
        dongs: [
          { name: "장항동(라페스타)", slug: "janghang-dong" }, { name: "백석동", slug: "baekseok-dong" },
          { name: "마두동", slug: "madu-dong" }, { name: "식사동", slug: "siksa-dong" },
          { name: "중산동", slug: "jungsan-dong" }, { name: "풍동", slug: "pung-dong" }
        ]
      },
      {
        name: "일산서구",
        slug: "ilsanseo",
        dongs: [
          { name: "주엽동", slug: "juyeop-dong" }, { name: "대화동(킨텍스)", slug: "daehwa-dong" },
          { name: "탄현동", slug: "tanhyeon-dong" }, { name: "일산동", slug: "ilsan-dong" },
          { name: "가좌동", slug: "gajwa-dong" }, { name: "덕이동", slug: "deoki-dong" }
        ]
      },
      {
        name: "덕양구",
        slug: "deogyang",
        dongs: [
          { name: "화정동", slug: "hwajeong-dong" }, { name: "행신동", slug: "haengsin-dong" },
          { name: "삼송동", slug: "samsong-dong" }, { name: "원흥동", slug: "wonheung-dong" },
          { name: "지축동", slug: "jichuk-dong" }, { name: "향동동", slug: "hyangdong-dong" }, { name: "원당동(주교)", slug: "wondang-dong" }
        ]
      }
    ]
  },

  // 4. 용인시 (3개 일반구)
  {
    name: "용인시",
    slug: "yongin",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "수지구",
        slug: "suji",
        dongs: [
          { name: "풍덕천동", slug: "pungdeokcheon-dong" }, { name: "상현동", slug: "sanghyeon-dong" },
          { name: "죽전동", slug: "jukjeon-dong" }, { name: "동천동", slug: "dongcheon-dong" },
          { name: "신봉동", slug: "sinbong-dong" }, { name: "성복동", slug: "seongbok-dong" }
        ]
      },
      {
        name: "기흥구",
        slug: "giheung",
        dongs: [
          { name: "구갈동(기흥역)", slug: "gugal-dong" }, { name: "보정동(카페거리)", slug: "bojeong-dong" },
          { name: "신갈동", slug: "singal-dong" }, { name: "영덕동(흥덕)", slug: "yeongdeok-dong" },
          { name: "서천동", slug: "seocheon-dong" }, { name: "동백동", slug: "dongbaek-dong" }, { name: "마북동", slug: "mabuk-dong" }
        ]
      },
      {
        name: "처인구",
        slug: "cheoin",
        dongs: [
          { name: "김량장동(용인역)", slug: "gimryangjang-dong" }, { name: "역북동", slug: "yeokbuk-dong" },
          { name: "삼가동", slug: "samga-dong" }, { name: "유방동", slug: "yubang-dong" },
          { name: "고림동", slug: "gorim-dong" }, { name: "포곡읍(에버랜드)", slug: "pogok-eup" }, { name: "모현읍", slug: "mohyeon-eup" }
        ]
      }
    ]
  },

  // 5. 부천시 (3개 일반구)
  {
    name: "부천시",
    slug: "bucheon",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "원미구",
        slug: "wonmi",
        dongs: [
          { name: "중동(신중동)", slug: "jung-dong" }, { name: "상동", slug: "sang-dong" },
          { name: "심곡동(부천역)", slug: "simgok-dong" }, { name: "역곡동", slug: "yeokgok-dong" },
          { name: "소사동", slug: "sosa-dong" }, { name: "원미동", slug: "wonmi-dong" }, { name: "도당동", slug: "dodang-dong" }
        ]
      },
      {
        name: "소사구",
        slug: "sosa",
        dongs: [
          { name: "괴안동", slug: "goean-dong" }, { name: "송내동", slug: "songnae-dong" },
          { name: "소사본동", slug: "sosabon-dong" }, { name: "범박동", slug: "beombak-dong" }, { name: "옥길동", slug: "okgil-dong" }
        ]
      },
      {
        name: "오정구",
        slug: "ojeong",
        dongs: [
          { name: "원종동", slug: "wonjong-dong" }, { name: "오정동", slug: "ojeong-dong" },
          { name: "고강동", slug: "gogang-dong" }, { name: "삼정동", slug: "samjeong-dong" }, { name: "내동", slug: "nae-dong" }
        ]
      }
    ]
  },

  // 6. 안산시 (2개 일반구)
  {
    name: "안산시",
    slug: "ansan",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "단원구",
        slug: "danwon",
        dongs: [
          { name: "고잔동(중앙역)", slug: "gojan-dong" }, { name: "초지동", slug: "choji-dong" },
          { name: "선부동", slug: "seonbu-dong" }, { name: "원곡동", slug: "wongok-dong" },
          { name: "와동", slug: "wa-dong" }, { name: "신길동", slug: "singil-dong" }, { name: "대부동", slug: "daebu-dong" }
        ]
      },
      {
        name: "상록구",
        slug: "sangnok",
        dongs: [
          { name: "본오동(상록수역)", slug: "bono-dong" }, { name: "이동(한대앞)", slug: "i-dong" },
          { name: "사동", slug: "sa-dong" }, { name: "월피동", slug: "wolpi-dong" },
          { name: "성포동", slug: "seongpo-dong" }, { name: "부곡동", slug: "bugok-dong" }, { name: "일동", slug: "il-dong" }
        ]
      }
    ]
  },

  // 7. 안양시 (2개 일반구)
  {
    name: "안양시",
    slug: "anyang",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "동안구",
        slug: "dongan",
        dongs: [
          { name: "평촌동", slug: "pyeongchon-dong" }, { name: "범계동", slug: "beomgye-dong" },
          { name: "호계동", slug: "hogye-dong" }, { name: "관양동(인덕원)", slug: "indeogwon-dong" },
          { name: "비산동", slug: "bisan-dong" }, { name: "귀인동", slug: "gwiin-dong" }
        ]
      },
      {
        name: "만안구",
        slug: "manan",
        dongs: [
          { name: "안양동(안양역)", slug: "anyang-dong" }, { name: "석수동", slug: "seoksu-dong" },
          { name: "박달동", slug: "bakdal-dong" }, { name: "명학동", slug: "myeonghak-dong" }
        ]
      }
    ]
  },

  // 8. 화성시
  {
    name: "화성시",
    slug: "hwaseong",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "동탄·동부권",
        slug: "dongtan",
        dongs: [
          { name: "동탄1동(반송)", slug: "bansong-dong" }, { name: "동탄2동(영천)", slug: "yeongcheon-dong" },
          { name: "청계동", slug: "cheonggye-dong" }, { name: "산척동(호수)", slug: "sancheok-dong" },
          { name: "병점동", slug: "byeongjeom-dong" }, { name: "진안동", slug: "jinan-dong" }, { name: "반월동", slug: "banwol-dong" }
        ]
      },
      {
        name: "서남부권",
        slug: "seobu",
        dongs: [
          { name: "향남읍", slug: "hyangnam-eup" }, { name: "봉담읍", slug: "bongdam-eup" },
          { name: "남양읍", slug: "namyang-eup" }, { name: "우정읍", slug: "ujeong-eup" },
          { name: "마도면", slug: "mado-myeon" }, { name: "송산면", slug: "songsan-myeon" }, { name: "새솔동", slug: "saesol-dong" }
        ]
      }
    ]
  },

  // 9. 평택시
  {
    name: "평택시",
    slug: "pyeongtaek",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "남부·북부권",
        slug: "pyeongtaek-center",
        dongs: [
          { name: "비전동(소사벌)", slug: "bijeon-dong" }, { name: "평택동(평택역)", slug: "pyeongtaek-dong" },
          { name: "서정동(서정리역)", slug: "seojeong-dong" }, { name: "송탄(신장동)", slug: "songtan-dong" },
          { name: "지제동", slug: "jije-dong" }, { name: "용이동", slug: "yongi-dong" }, { name: "동삭동", slug: "dongsak-dong" }
        ]
      },
      {
        name: "서부·교외권",
        slug: "pyeongtaek-west",
        dongs: [
          { name: "안중읍", slug: "anjung-eup" }, { name: "포승읍", slug: "poseung-eup" },
          { name: "청북읍", slug: "cheongbuk-eup" }, { name: "고덕면/고덕동", slug: "godeok-dong" }, { name: "팽성읍", slug: "paengseong-eup" }
        ]
      }
    ]
  },

  // 10. 남양주시
  {
    name: "남양주시",
    slug: "namyangju",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "다산동", slug: "dasan-dong" }, { name: "별내동", slug: "byeollae-dong" },
          { name: "호평동", slug: "hopyeong-dong" }, { name: "평내동", slug: "pyeongnae-dong" },
          { name: "화도읍(마석)", slug: "hwado-eup" }, { name: "진접읍", slug: "jinjeop-eup" },
          { name: "오남읍", slug: "onam-eup" }, { name: "와부읍(덕소)", slug: "wabu-eup" }
        ]
      }
    ]
  },

  // 11. 시흥시
  {
    name: "시흥시",
    slug: "siheung",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "정왕동(배곧/이마트)", slug: "jeongwang-dong" }, { name: "배곧동", slug: "baegot-dong" },
          { name: "은계동/은행동", slug: "eunhaeng-dong" }, { name: "대야동", slug: "daeya-dong" },
          { name: "목감동(조남)", slug: "mokgam-dong" }, { name: "장곡동", slug: "janggok-dong" },
          { name: "신천동", slug: "sincheon-dong" }, { name: "월곶동", slug: "wolgot-dong" }
        ]
      }
    ]
  },

  // 12. 파주시
  {
    name: "파주시",
    slug: "paju",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "야당동(운정)", slug: "yadang-dong" }, { name: "와동동(운정)", slug: "wadong-dong" },
          { name: "목동동(운정)", slug: "mokdong-dong" }, { name: "금촌동", slug: "geumchon-dong" },
          { name: "문산읍", slug: "munsan-eup" }, { name: "교하동", slug: "gyoha-dong" }, { name: "탄현면(헤이리)", slug: "tanhyeon-myeon" }
        ]
      }
    ]
  },

  // 13. 김포시
  {
    name: "김포시",
    slug: "gimpo",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "구래동", slug: "gurae-dong" }, { name: "장기동(라베니체)", slug: "janggi-dong" },
          { name: "사우동", slug: "sau-dong" }, { name: "풍무동", slug: "pungmu-dong" },
          { name: "운양동", slug: "unyang-dong" }, { name: "통진읍(마송)", slug: "tongjin-eup" }, { name: "양촌읍", slug: "yangchon-eup" }
        ]
      }
    ]
  },

  // 14. 의정부시
  {
    name: "의정부시",
    slug: "uijeongbu",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "의정부동(중앙로)", slug: "uijeongbu-dong" }, { name: "민락동", slug: "millak-dong" },
          { name: "호원동(회룡)", slug: "howon-dong" }, { name: "금오동", slug: "geumo-dong" },
          { name: "용현동", slug: "yonghyeon-dong" }, { name: "신곡동", slug: "singok-dong" }, { name: "가능동", slug: "ganeung-dong" }
        ]
      }
    ]
  },

  // 15. 광명시
  {
    name: "광명시",
    slug: "gwangmyeong",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "철산동(상업지구)", slug: "cheolsan-dong" }, { name: "일직동(KTX광명)", slug: "iljik-dong" },
          { name: "하안동", slug: "haan-dong" }, { name: "광명동(광명사거리)", slug: "gwangmyeong-dong" }, { name: "소하동", slug: "soha-dong" }
        ]
      }
    ]
  },

  // 16. 하남시
  {
    name: "하남시",
    slug: "hanam",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "미사동(망월)", slug: "misa-dong" }, { name: "신장동(스타필드)", slug: "sinjang-dong" },
          { name: "덕풍동", slug: "deokpung-dong" }, { name: "위례동", slug: "wirye-dong" },
          { name: "풍산동", slug: "pungsan-dong" }, { name: "감일동", slug: "gamil-dong" }
        ]
      }
    ]
  },

  // 17. 군포시
  {
    name: "군포시",
    slug: "gunpo",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "산본동(산본로데오)", slug: "sanbon-dong" }, { name: "금정동", slug: "geumjeong-dong" },
          { name: "당동(군포역)", slug: "dang-dong" }, { name: "당정동", slug: "dangjeong-dong" },
          { name: "부곡동(송부)", slug: "bugok-dong" }, { name: "대야미동", slug: "daeyami-dong" }
        ]
      }
    ]
  },

  // 18. 오산시
  {
    name: "오산시",
    slug: "osan",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "원동(오산역)", slug: "won-dong" }, { name: "궐동", slug: "gwol-dong" },
          { name: "오산동(운암지구)", slug: "osan-dong" }, { name: "세교동/금암동", slug: "segyo-dong" },
          { name: "수청동", slug: "sucheong-dong" }, { name: "양산동", slug: "yangsan-dong" }
        ]
      }
    ]
  },

  // 19. 이천시
  {
    name: "이천시",
    slug: "icheon",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "중리동(터미널)", slug: "jungni-dong" }, { name: "창전동(로데오)", slug: "changjeon-dong" },
          { name: "부발읍(하이닉스)", slug: "bubal-eup" }, { name: "안흥동", slug: "anheung-dong" },
          { name: "증포동", slug: "jeungpo-dong" }, { name: "장호원읍", slug: "janghowon-eup" }, { name: "마장면", slug: "majang-myeon" }
        ]
      }
    ]
  },

  // 20. 양주시
  {
    name: "양주시",
    slug: "yangju",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "옥정동(옥정신도시)", slug: "okjeong-dong" }, { name: "고읍동(광사동)", slug: "goeup-dong" },
          { name: "덕정동(덕정역)", slug: "deokjeong-dong" }, { name: "덕계동(회천)", slug: "deokgye-dong" },
          { name: "백석읍", slug: "baekseok-eup" }, { name: "삼숭동", slug: "samsung-dong" }
        ]
      }
    ]
  },

  // 21. 구리시
  {
    name: "구리시",
    slug: "guri",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "수택동(돌다리)", slug: "sutaek-dong" }, { name: "인창동(구리역)", slug: "inchang-dong" },
          { name: "교문동", slug: "gyomun-dong" }, { name: "갈매동", slug: "galmae-dong" },
          { name: "토평동", slug: "topyeong-dong" }, { name: "아천동", slug: "acheon-dong" }
        ]
      }
    ]
  },

  // 22. 안성시
  {
    name: "안성시",
    slug: "anseong",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "공도읍", slug: "gongdo-eup" }, { name: "대덕면(중앙대)", slug: "daedeok-myeon" },
          { name: "석정동", slug: "seokjeong-dong" }, { name: "아양동", slug: "ayang-dong" },
          { name: "당왕동", slug: "dangwang-dong" }, { name: "죽산면", slug: "juksan-myeon" }
        ]
      }
    ]
  },

  // 23. 포천시
  {
    name: "포천시",
    slug: "pocheon",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "소흘읍(송우리스포츠)", slug: "soheul-eup" }, { name: "신읍동(포천시청)", slug: "sineup-dong" },
          { name: "일동면", slug: "ildong-myeon" }, { name: "이동면", slug: "idong-myeon" },
          { name: "가산면", slug: "gasan-myeon" }, { name: "군내면", slug: "gunnae-myeon" }
        ]
      }
    ]
  },

  // 24. 의왕시
  {
    name: "의왕시",
    slug: "uiwang",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "포일동(인덕원역권)", slug: "poil-dong" }, { name: "내손동", slug: "naeson-dong" },
          { name: "오전동", slug: "ojeon-dong" }, { name: "고천동", slug: "gocheon-dong" },
          { name: "삼동(의왕역)", slug: "sam-dong" }, { name: "학의동(백운밸리)", slug: "hagui-dong" }
        ]
      }
    ]
  },

  // 25. 여주시
  {
    name: "여주시",
    slug: "yeoju",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "홍문동(여주역)", slug: "hongmun-dong" }, { name: "창동", slug: "chang-dong" },
          { name: "교동", slug: "gyo-dong" }, { name: "월송동", slug: "wolsong-dong" },
          { name: "가남읍", slug: "ganam-eup" }, { name: "오학동", slug: "ohak-dong" }
        ]
      }
    ]
  },

  // 26. 동두천시
  {
    name: "동두천시",
    slug: "dongducheon",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "지행동(신시가지)", slug: "jihaeng-dong" }, { name: "생연동(구시가지)", slug: "saengyeon-dong" },
          { name: "보산동(캠프케이시)", slug: "bosan-dong" }, { name: "송내동", slug: "songnae-dong" },
          { name: "동두천동", slug: "dongducheon-dong" }
        ]
      }
    ]
  },

  // 27. 과천시
  {
    name: "과천시",
    slug: "gwacheon",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "별양동(정부청사역)", slug: "byeolyang-dong" }, { name: "중앙동", slug: "jungang-dong" },
          { name: "원문동", slug: "wonmun-dong" }, { name: "갈현동(지정타)", slug: "galhyeon-dong" },
          { name: "부림동", slug: "burim-dong" }, { name: "과천동", slug: "gwacheon-dong" }
        ]
      }
    ]
  },

  // 28. 광주시 (경기광주)
  {
    name: "광주시",
    slug: "gwangju-si",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "시 관할",
        slug: "all",
        dongs: [
          { name: "경안동(시내)", slug: "gyeongan-dong" }, { name: "태전동", slug: "taejeon-dong" },
          { name: "역동(경기광주역)", slug: "yeok-dong" }, { name: "오포읍(신현/능평)", slug: "opo-eup" },
          { name: "송정동", slug: "songjeong-dong" }, { name: "초월읍", slug: "chowol-eup" }, { name: "곤지암읍", slug: "gonjiam-eup" }
        ]
      }
    ]
  },

  // 29. 가평군
  {
    name: "가평군",
    slug: "gapyeong",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "군 관할",
        slug: "all",
        dongs: [
          { name: "가평읍(터미널)", slug: "gapyeong-eup" }, { name: "청평면(청평역)", slug: "cheongpyeong-myeon" },
          { name: "설악면", slug: "seorak-myeon" }, { name: "상면(아침고요)", slug: "sang-myeon" },
          { name: "조종면", slug: "jojong-myeon" }, { name: "북면", slug: "buk-myeon" }
        ]
      }
    ]
  },

  // 30. 양평군
  {
    name: "양평군",
    slug: "yangpyeong",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "군 관할",
        slug: "all",
        dongs: [
          { name: "양평읍(양평역)", slug: "yangpyeong-eup" }, { name: "양서면(두물머리)", slug: "yangseo-myeon" },
          { name: "용문면(용문산)", slug: "yongmun-myeon" }, { name: "강상면", slug: "gangsang-myeon" },
          { name: "서종면(문호리)", slug: "seojong-myeon" }, { name: "옥천면", slug: "okcheon-myeon" }
        ]
      }
    ]
  },

  // 31. 연천군
  {
    name: "연천군",
    slug: "yeoncheon",
    img: "/images/massage-06.jpg",
    gus: [
      {
        name: "군 관할",
        slug: "all",
        dongs: [
          { name: "전곡읍(전곡역)", slug: "jeongok-eup" }, { name: "연천읍(연천역)", slug: "yeoncheon-eup" },
          { name: "청산면(초성리)", slug: "cheongsan-myeon" }, { name: "백학면", slug: "baekhak-myeon" },
          { name: "신서면(대광리)", slug: "sinseo-myeon" }, { name: "군남면", slug: "gunnam-myeon" }
        ]
      }
    ]
  }
];

/* ==========================================================================
   2. 추천 제휴업체 5개 HTML 생성기
   ========================================================================== */
const sampleShops = [
  {
    badge: "BEST",
    title: "VIP 시그니처 1인샵",
    desc: "프라이빗 1인 전용 공간에서 누리는 감성 스웨디시 & 림프 순환 케어",
    courses: [
      { name: "A코스 (60분)", price: "90,000원" },
      { name: "B코스 (90분)", price: "120,000원" }
    ],
    tel: "0507-1280-3344"
  },
  {
    badge: "HOT",
    title: "로얄 힐링 테라피",
    desc: "숙련된 한국인 전문 관리사의 부드러운 스웨디시 & 아로마 릴렉싱",
    courses: [
      { name: "스웨디시 (60분)", price: "80,000원" },
      { name: "스페셜 (90분)", price: "110,000원" }
    ],
    tel: "0507-1280-3344"
  },
  {
    badge: "PREMIUM",
    title: "더프리미엄 바디케어",
    desc: "호텔식 단독 프라이빗룸, 철저한 위생 관리와 맞춤 바디 테라피",
    courses: [
      { name: "딥티슈 (60분)", price: "100,000원" },
      { name: "VIP 힐링 (90분)", price: "130,000원" }
    ],
    tel: "0507-1280-3344"
  },
  {
    badge: "추천",
    title: "힐링포레스트",
    desc: "지친 일상의 스트레스를 날려주는 감성 테라피 & 로미로미 케어",
    courses: [
      { name: "힐링 A (60분)", price: "70,000원" },
      { name: "힐링 B (90분)", price: "100,000원" }
    ],
    tel: "0507-1280-3344"
  },
  {
    badge: "인기",
    title: "더블랙 에스테틱",
    desc: "체계적인 프로그램과 프리미엄 오일을 활용한 1:1 집중 관리",
    courses: [
      { name: "베이직 (60분)", price: "90,000원" },
      { name: "스페셜 VIP (90분)", price: "120,000원" }
    ],
    tel: "0507-1280-3344"
  }
];

function getShopsHtml() {
  return sampleShops.map(s => `
    <div class="shop-card">
      <div>
        <div class="shop-header">
          <span class="shop-badge">${s.badge}</span>
          <h3 class="shop-title">${s.title}</h3>
        </div>
        <p class="shop-desc">${s.desc}</p>
        <div class="shop-courses">
          ${s.courses.map(c => `
            <div class="course-item">
              <span>${c.name}</span>
              <span class="course-price">${c.price}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <a href="tel:${s.tel.replace(/-/g, '')}" class="shop-call-btn">예약 및 제휴문의</a>
    </div>
  `).join("");
}

/* ==========================================================================
   3. 메인 화면 및 세부 페이지 라우팅 제어
   ========================================================================== */

// 메인 화면 초기화 (추천 샵만 렌더링)
function initMainPage() {
  const shopContainer = document.getElementById("shopGridContainer");
  if (shopContainer) {
    shopContainer.innerHTML = getShopsHtml();
  }
}

// 메인 화면 표시
function showMainPage() {
  const mainView = document.getElementById("mainView");
  const detailView = document.getElementById("detailView");
  if (mainView) mainView.style.display = "block";
  if (detailView) detailView.style.display = "none";

  const mainTitle = "경기건마몽 - 경기 1인샵 & 건마·스웨디시 31개 시군 안내";
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

// 시군 클릭 시 세부 페이지 진입
function selectArea(slug) {
  const selectedArea = areasData.find(a => a.slug === slug);
  if (selectedArea) {
    showDetailPage(selectedArea);
  }
}

// 세부 페이지 동적 렌더링
function showDetailPage(area, guName, dongName) {
  const mainView = document.getElementById("mainView");
  const detailView = document.getElementById("detailView");
  const detailContent = document.getElementById("detailContent");

  if (mainView) mainView.style.display = "none";
  if (detailView) detailView.style.display = "block";

  let cityName = area.name;
  let pageTitle = `${cityName} 건마 & 1인샵 스웨디시 안내`;
  let pageDesc = `${cityName} 경기 전지역 프리미엄 1인샵, 건마, 스웨디시 제휴 정보.`;

  if (guName && guName !== "시 관할" && guName !== "군 관할") {
    pageTitle = `${cityName} ${guName} 건마 · 1인샵 안내`;
    pageDesc = `${cityName} ${guName} 1인샵, 건마, 스웨디시 제휴업체 정보.`;
  }

  if (dongName) {
    pageTitle = `${cityName} ${dongName} 건마 · 1인샵 안내`;
    pageDesc = `${cityName} ${dongName} 1인샵, 건마, 스웨디시 맞춤 제휴 정보.`;
  }

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

  // 구/동 하위 링크 목록 생성
  let subNavHtml = "";
  area.gus.forEach(gu => {
    subNavHtml += `
      <div class="gu-box">
        <h4 class="gu-title">${gu.name}</h4>
        <div class="dong-link-grid">
          ${gu.dongs.map(d => `
            <a href="javascript:void(0)" onclick="selectDong('${area.slug}', '${gu.name}', '${d.name}')" class="dong-link-btn">
              ${d.name}
            </a>
          `).join("")}
        </div>
      </div>
    `;
  });

  detailContent.innerHTML = `
    <div class="detail-nav-menu">
      <a href="#shops" onclick="navigateSection(event, 'shops')">추천업체</a>
      <a href="#service" onclick="navigateSection(event, 'service')">서비스</a>
      <a href="#price-info" onclick="navigateSection(event, 'price-info')">가격안내</a>
      <a href="#travel" onclick="navigateSection(event, 'travel')">근처여행</a>
      <a href="#food" onclick="navigateSection(event, 'food')">맛집숙소</a>
      <a href="#areas" onclick="navigateSection(event, 'areas')">지역안내</a>
      <a href="#reviews" onclick="navigateSection(event, 'reviews')">후기</a>
    </div>

    <div class="detail-hero">
      <img src="${area.img}" alt="${pageTitle}" class="detail-hero-img"/>
      <div class="detail-hero-text">
        <span class="eyebrow">GYEONGGI LOCAL SERVICE</span>
        <h1>${pageTitle}</h1>
        <p>해당 권역 검증된 1:1 맞춤형 힐링 케어를 안내해 드립니다.</p>
      </div>
    </div>

    <div class="detail-section">
      <h3>🔥 ${pageTitle} 추천 제휴업체</h3>
      <div class="shop-grid">
        ${getShopsHtml()}
      </div>
    </div>

    <div class="detail-section">
      <h3>📍 ${cityName} 세부 구/동 지역 선택</h3>
      <p style="color:#aaa; font-size:0.9rem; margin-bottom:15px;">원하시는 동을 클릭하시면 해당 동 전용 1인샵 &amp; 건마 안내 페이지로 이동합니다.</p>
      ${subNavHtml}
    </div>
  `;

  window.scrollTo(0, 0);
}

// 동 링크 클릭 시 동작
function selectDong(areaSlug, guName, dongName) {
  const area = areasData.find(a => a.slug === areaSlug);
  if (area) {
    showDetailPage(area, guName, dongName);
  }
}

// 메인으로 돌아가기
function goBackToMain(e) {
  if (e) e.preventDefault();
  showMainPage();
}

// 상단 네비게이션 스크롤 이동
function navigateSection(e, sectionId) {
  if (e) e.preventDefault();
  showMainPage();
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, 50);
}

/* ==========================================================================
   4. 페이지 최초 실행
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initMainPage();
  showMainPage();
});