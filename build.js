const fs = require('fs');
const path = require('path');

/* ==========================================================================
   1. 경기도 31개 시·군 및 구/동 전체 상세 데이터셋
   ========================================================================== */
const areaData = [
  { 
    id: "suwon",
    slug: "suwon",
    name: "수원", 
    tag: "영통·인계·매탄·망포·권선·곡반정·화서·정자·원천", 
    img: "/images/thumbs/massage-01.jpg",
    gus: [
      { name: "영통구", slug: "yeongtong-gu", dongs: [{name:"영통동", slug:"yeongtong-dong"}, {name:"매탄동", slug:"maetan-dong"}, {name:"망포동", slug:"mangpo-dong"}, {name:"원천동", slug:"woncheon-dong"}, {name:"이의동", slug:"ui-dong"}] },
      { name: "권선구", slug: "gwonseon-gu", dongs: [{name:"권선동", slug:"gwonseon-dong"}, {name:"곡반정동", slug:"gokbanjeong-dong"}, {name:"세류동", slug:"seryu-dong"}, {name:"구운동", slug:"guun-dong"}, {name:"탑동", slug:"tap-dong"}] },
      { name: "장안구", slug: "jangan-gu", dongs: [{name:"정자동", slug:"jeongja-dong"}, {name:"파장동", slug:"pajang-dong"}, {name:"율전동", slug:"yuljeon-dong"}, {name:"천천동", slug:"cheoncheon-dong"}, {name:"조원동", slug:"jowon-dong"}] },
      { name: "팔달구", slug: "paldal-gu", dongs: [{name:"인계동", slug:"ingye-dong"}, {name:"화서동", slug:"hwaseo-dong"}, {name:"우만동", slug:"uman-dong"}, {name:"지동", slug:"ji-dong"}, {name:"매산동", slug:"maesan-dong"}] }
    ]
  },
  { 
    id: "seongnam",
    slug: "seongnam",
    name: "성남", 
    tag: "분당·정자·서현·야탑·삼평·판교·수내·백현·태평·신흥·상대원", 
    img: "/images/thumbs/massage-02.jpg",
    gus: [
      { name: "분당구", slug: "bundang-gu", dongs: [{name:"분당동", slug:"bundang-dong"}, {name:"정자동", slug:"jeongja-dong"}, {name:"서현동", slug:"seohyeon-dong"}, {name:"야탑동", slug:"yatap-dong"}, {name:"삼평동", slug:"sampyeong-dong"}, {name:"판교동", slug:"pangyo-dong"}, {name:"수내동", slug:"sunae-dong"}, {name:"백현동", slug:"baekhyeon-dong"}] },
      { name: "수정구", slug: "sujeong-gu", dongs: [{name:"태평동", slug:"taepyeong-dong"}, {name:"신흥동", slug:"sinheung-dong"}, {name:"수진동", slug:"sujin-dong"}, {name:"복정동", slug:"bokjeong-dong"}, {name:"창곡동", slug:"changgok-dong"}] },
      { name: "중원구", slug: "jungwon-gu", dongs: [{name:"상대원동", slug:"sangdaewon-dong"}, {name:"성남동", slug:"seongnam-dong"}, {name:"금광동", slug:"geumgwang-dong"}, {name:"은행동", slug:"eunhaeng-dong"}] }
    ]
  },
  { 
    id: "goyang",
    slug: "goyang",
    name: "고양", 
    tag: "일산·화정·장항·백석·주엽·마두·행신·식사·삼송·덕이", 
    img: "/images/thumbs/massage-03.jpg",
    gus: [
      { name: "일산동구", slug: "ilsandong-gu", dongs: [{name:"장항동", slug:"janghang-dong"}, {name:"백석동", slug:"baekseok-dong"}, {name:"마두동", slug:"madu-dong"}, {name:"식사동", slug:"siksa-dong"}, {name:"풍동", slug:"pung-dong"}] },
      { name: "일산서구", slug: "ilsanseo-gu", dongs: [{name:"일산동", slug:"ilsan-dong"}, {name:"주엽동", slug:"juyeop-dong"}, {name:"덕이동", slug:"deogi-dong"}, {name:"탄현동", slug:"tanhyeon-dong"}, {name:"대화동", slug:"daehwa-dong"}] },
      { name: "덕양구", slug: "deogyang-gu", dongs: [{name:"화정동", slug:"hwajeong-dong"}, {name:"행신동", slug:"haengsin-dong"}, {name:"삼송동", slug:"samsong-dong"}, {name:"원흥동", slug:"wonheung-dong"}, {name:"신원동", slug:"sinwon-dong"}] }
    ]
  },
  { 
    id: "yongin",
    slug: "yongin",
    name: "용인", 
    tag: "수지·죽전·풍덕천·성복·동천·기흥·구갈·보라·보정·역북·유방", 
    img: "/images/thumbs/massage-04.jpg",
    gus: [
      { name: "수지구", slug: "suji-gu", dongs: [{name:"풍덕천동", slug:"pungdeokcheon-dong"}, {name:"죽전동", slug:"jukjeon-dong"}, {name:"성복동", slug:"seongbok-dong"}, {name:"동천동", slug:"dongcheon-dong"}, {name:"신봉동", slug:"sinbong-dong"}, {name:"상현동", slug:"sanghyeon-dong"}] },
      { name: "기흥구", slug: "giheung-gu", dongs: [{name:"구갈동", slug:"gugal-dong"}, {name:"보라동", slug:"bora-dong"}, {name:"보정동", slug:"bojeong-dong"}, {name:"영덕동", slug:"yeongdeok-dong"}, {name:"신갈동", slug:"singal-dong"}, {name:"마북동", slug:"mabuk-dong"}] },
      { name: "처인구", slug: "cheoin-gu", dongs: [{name:"역북동", slug:"yeokbuk-dong"}, {name:"유방동", slug:"yubang-dong"}, {name:"김량장동", slug:"gimnyangjang-dong"}, {name:"포곡읍", slug:"pogok-eup"}, {name:"모현읍", slug:"mohyeon-eup"}] }
    ]
  },
  { 
    id: "bucheon",
    slug: "bucheon",
    name: "부천", 
    tag: "상동·중동·심곡·원미·소사·범박·괴안·오정·원종·삼정", 
    img: "/images/thumbs/massage-05.jpg",
    gus: [
      { name: "원미구", slug: "wonmi-gu", dongs: [{name:"상동", slug:"sang-dong"}, {name:"중동", slug:"jung-dong"}, {name:"심곡동", slug:"simgok-dong"}, {name:"원미동", slug:"wonmi-dong"}, {name:"도당동", slug:"dodang-dong"}, {name:"춘의동", slug:"chunui-dong"}] },
      { name: "소사구", slug: "sosa-gu", dongs: [{name:"소사동", slug:"sosa-dong"}, {name:"범박동", slug:"beombak-dong"}, {name:"괴안동", slug:"goean-dong"}, {name:"송내동", slug:"songnae-dong"}] },
      { name: "오정구", slug: "ojeong-gu", dongs: [{name:"오정동", slug:"ojeong-dong"}, {name:"원종동", slug:"wonjong-dong"}, {name:"삼정동", slug:"samjeong-dong"}, {name:"고강동", slug:"gogang-dong"}] }
    ]
  },
  { 
    id: "ansan",
    slug: "ansan",
    name: "안산", 
    tag: "고잔·선부·성포·본오·사동·와동·월피·초지·신길·대부동", 
    img: "/images/thumbs/massage-06.jpg",
    gus: [
      { name: "단원구", slug: "danwon-gu", dongs: [{name:"고잔동", slug:"gojan-dong"}, {name:"선부동", slug:"seonbu-dong"}, {name:"초지동", slug:"choji-dong"}, {name:"신길동", slug:"singil-dong"}, {name:"대부동", slug:"daebu-dong"}, {name:"원곡동", slug:"wongok-dong"}] },
      { name: "상록구", slug: "sangnok-gu", dongs: [{name:"성포동", slug:"seongpo-dong"}, {name:"본오동", slug:"bono-dong"}, {name:"사동", slug:"sa-dong"}, {name:"월피동", slug:"wolpi-dong"}, {name:"부곡동", slug:"bugok-dong"}, {name:"일동", slug:"il-dong"}] }
    ]
  },
  { 
    id: "anyang",
    slug: "anyang",
    name: "안양", 
    tag: "평촌·안양·관양·비산·호계·박달·석수", 
    img: "/images/thumbs/massage-07.jpg",
    gus: [
      { name: "동안구", slug: "dongan-gu", dongs: [{name:"평촌동", slug:"pyeongchon-dong"}, {name:"관양동", slug:"gwanyang-dong"}, {name:"비산동", slug:"bisan-dong"}, {name:"호계동", slug:"hoge-dong"}, {name:"범계동", slug:"beomgye-dong"}] },
      { name: "만안구", slug: "manan-gu", dongs: [{name:"안양동", slug:"anyang-dong"}, {name:"박달동", slug:"bakdal-dong"}, {name:"석수동", slug:"seoksu-dong"}] }
    ]
  },
  { 
    id: "namyangju",
    slug: "namyangju",
    name: "남양주", 
    tag: "다산·별내·호평·평내·마석·진접·오남·와부·진건·화도읍", 
    img: "/images/thumbs/massage-08.jpg",
    gus: [
      { name: "남양주시 관할", slug: "namyangju-gwanhal", dongs: [{name:"다산동", slug:"dasan-dong"}, {name:"별내동", slug:"byeollae-dong"}, {name:"호평동", slug:"hopyeong-dong"}, {name:"평내동", slug:"pyeongnae-dong"}, {name:"진접읍", slug:"jinjeop-eup"}, {name:"오남읍", slug:"onam-eup"}, {name:"와부읍", slug:"wabu-eup"}, {name:"진건읍", slug:"jingeon-eup"}, {name:"화도읍", slug:"hwado-eup"}] }
    ]
  },
  { 
    id: "hwaseong",
    slug: "hwaseong",
    name: "화성", 
    tag: "동탄·병점·향남읍·봉담읍·남양·마도·송산·우정읍·새솔", 
    img: "/images/thumbs/massage-09.jpg",
    gus: [
      { name: "동탄권역", slug: "dongtan-gwon", dongs: [{name:"동탄동", slug:"dongtan-dong"}, {name:"영천동", slug:"yeongcheon-dong"}, {name:"청계동", slug:"cheonggye-dong"}, {name:"목동", slug:"mok-dong"}, {name:"산척동", slug:"sancheok-dong"}] },
      { name: "서부/남부권역", slug: "seobu-nambu", dongs: [{name:"병점동", slug:"byeongjeom-dong"}, {name:"향남읍", slug:"hyangnam-eup"}, {name:"봉담읍", slug:"bongdam-eup"}, {name:"남양읍", slug:"namyang-eup"}, {name:"마도면", slug:"mado-myeon"}, {name:"송산면", slug:"songsan-myeon"}, {name:"새솔동", slug:"saesol-dong"}] }
    ]
  },
  { 
    id: "pyeongtaek",
    slug: "pyeongtaek",
    name: "평택", 
    tag: "송탄·서정·비전·세교·동삭·칠원·팽성읍·포승읍·안중읍·고덕", 
    img: "/images/thumbs/massage-10.jpg",
    gus: [
      { name: "평택시 관할", slug: "pyeongtaek-gwanhal", dongs: [{name:"서정동", slug:"seojeong-dong"}, {name:"비전동", slug:"bijeon-dong"}, {name:"세교동", slug:"segyo-dong"}, {name:"동삭동", slug:"dongsak-dong"}, {name:"칠원동", slug:"chilwon-dong"}, {name:"팽성읍", slug:"paengseong-eup"}, {name:"포승읍", slug:"poseung-eup"}, {name:"안중읍", slug:"anjung-eup"}, {name:"고덕면", slug:"godeok-myeon"}] }
    ]
  },
  { 
    id: "uijeongbu",
    slug: "uijeongbu",
    name: "의정부", 
    tag: "의정부·호원·신곡·용현·민락·낙양·가능·녹양", 
    img: "/images/thumbs/massage-11.jpg",
    gus: [
      { name: "의정부시 관할", slug: "uijeongbu-gwanhal", dongs: [{name:"의정부동", slug:"uijeongbu-dong"}, {name:"호원동", slug:"howon-dong"}, {name:"신곡동", slug:"singok-dong"}, {name:"용현동", slug:"yonghyeon-dong"}, {name:"민락동", slug:"minrak-dong"}, {name:"낙양동", slug:"nakyang-dong"}, {name:"가능동", slug:"ganeung-dong"}, {name:"녹양동", slug:"nokyang-dong"}] }
    ]
  },
  { 
    id: "siheung",
    slug: "siheung",
    name: "시흥", 
    tag: "정왕·배곧·은행·대야·신천·목감·장현·능곡·월곶", 
    img: "/images/thumbs/massage-12.jpg",
    gus: [
      { name: "시흥시 관할", slug: "siheung-gwanhal", dongs: [{name:"정왕동", slug:"jeongwang-dong"}, {name:"배곧동", slug:"baegot-dong"}, {name:"은행동", slug:"eunhaeng-dong"}, {name:"대야동", slug:"daeya-dong"}, {name:"신천동", slug:"sincheon-dong"}, {name:"목감동", slug:"mokgam-dong"}, {name:"장현동", slug:"janghyeon-dong"}, {name:"능곡동", slug:"neunggok-dong"}, {name:"월곶동", slug:"wolgot-dong"}] }
    ]
  },
  { 
    id: "paju",
    slug: "paju",
    name: "파주", 
    tag: "금촌·운정·동패·목동·야당·교하·문산읍·조리읍·법원읍", 
    img: "/images/thumbs/massage-13.jpg",
    gus: [
      { name: "파주시 관할", slug: "paju-gwanhal", dongs: [{name:"금촌동", slug:"geumchon-dong"}, {name:"동패동", slug:"dongpae-dong"}, {name:"목동동", slug:"mokdong-dong"}, {name:"야당동", slug:"yadang-dong"}, {name:"다율동", slug:"dayul-dong"}, {name:"문산읍", slug:"munsan-eup"}, {name:"조리읍", slug:"jori-eup"}, {name:"법원읍", slug:"beopwon-eup"}] }
    ]
  },
  { 
    id: "gimpo",
    slug: "gimpo",
    name: "김포", 
    tag: "장기·구래·운양·풍무·사우·북변·마산·통진읍·양촌읍", 
    img: "/images/thumbs/massage-14.jpg",
    gus: [
      { name: "김포시 관할", slug: "gimpo-gwanhal", dongs: [{name:"장기동", slug:"janggi-dong"}, {name:"구래동", slug:"gurae-dong"}, {name:"운양동", slug:"unyang-dong"}, {name:"풍무동", slug:"pungmu-dong"}, {name:"사우동", slug:"sau-dong"}, {name:"북변동", slug:"bukbyeon-dong"}, {name:"마산동", slug:"masan-dong"}, {name:"통진읍", slug:"tongjin-eup"}, {name:"양촌읍", slug:"yangchon-eup"}] }
    ]
  },
  { 
    id: "gwangmyeong",
    slug: "gwangmyeong",
    name: "광명", 
    tag: "철산·하안·소하·일직·광명·옥길", 
    img: "/images/thumbs/massage-15.jpg",
    gus: [
      { name: "광명시 관할", slug: "gwangmyeong-gwanhal", dongs: [{name:"철산동", slug:"cheolsan-dong"}, {name:"하안동", slug:"haan-dong"}, {name:"소하동", slug:"soha-dong"}, {name:"일직동", slug:"iljig-dong"}, {name:"광명동", slug:"gwangmyeong-dong"}, {name:"옥길동", slug:"okgil-dong"}] }
    ]
  },
  { 
    id: "gwangju",
    slug: "gwangju",
    name: "광주", 
    tag: "태전·경안·쌍령·송정·오포읍·곤지암읍·초월읍·퇴촌면", 
    img: "/images/thumbs/massage-16.jpg",
    gus: [
      { name: "광주시 관할", slug: "gwangju-gwanhal", dongs: [{name:"태전동", slug:"taejeon-dong"}, {name:"경안동", slug:"gyeong-an-dong"}, {name:"쌍령동", slug:"ssangryeong-dong"}, {name:"송정동", slug:"songjeong-dong"}, {name:"오포읍", slug:"opo-eup"}, {name:"곤지암읍", slug:"gonjiam-eup"}, {name:"초월읍", slug:"chowol-eup"}, {name:"퇴촌면", slug:"toechon-myeon"}] }
    ]
  },
  { 
    id: "gunpo",
    slug: "gunpo",
    name: "군포", 
    tag: "산본·금정·당동·당정·부곡·대야미", 
    img: "/images/thumbs/massage-17.jpg",
    gus: [
      { name: "군포시 관할", slug: "gunpo-gwanhal", dongs: [{name:"산본동", slug:"sanbon-dong"}, {name:"금정동", slug:"geumjeong-dong"}, {name:"당동", slug:"dang-dong"}, {name:"당정동", slug:"dangjeong-dong"}, {name:"부곡동", slug:"bugok-dong"}, {name:"대야미동", slug:"daeyami-dong"}] }
    ]
  },
  { 
    id: "icheon",
    slug: "icheon",
    name: "이천", 
    tag: "창전·증포·중리·관고·안흥·부발읍·장호원읍·마장면", 
    img: "/images/thumbs/massage-18.jpg",
    gus: [
      { name: "이천시 관할", slug: "icheon-gwanhal", dongs: [{name:"창전동", slug:"changjeon-dong"}, {name:"증포동", slug:"jeungpo-dong"}, {name:"중리동", slug:"jungni-dong"}, {name:"관고동", slug:"gwango-dong"}, {name:"안흥동", slug:"anhung-dong"}, {name:"부발읍", slug:"bubal-eup"}, {name:"장호원읍", slug:"janghowon-eup"}, {name:"마장면", slug:"majang-myeon"}] }
    ]
  },
  { 
    id: "yangju",
    slug: "yangju",
    name: "양주", 
    tag: "덕정·옥정·삼숭·고읍·광사·회정·백석읍·광적면", 
    img: "/images/thumbs/massage-19.jpg",
    gus: [
      { name: "양주시 관할", slug: "yangju-gwanhal", dongs: [{name:"덕정동", slug:"deokjeong-dong"}, {name:"옥정동", slug:"okjeong-dong"}, {name:"삼숭동", slug:"samsung-dong"}, {name:"고읍동", slug:"gohup-dong"}, {name:"광사동", slug:"gwangsa-dong"}, {name:"회정동", slug:"hoejeong-dong"}, {name:"백석읍", slug:"baekseok-eup"}, {name:"광적면", slug:"gwangjeok-myeon"}] }
    ]
  },
  { 
    id: "osan",
    slug: "osan",
    name: "오산", 
    tag: "오산·세교·원동·궐동·수청·금암·양산·외삼미", 
    img: "/images/thumbs/massage-20.jpg",
    gus: [
      { name: "오산시 관할", slug: "osan-gwanhal", dongs: [{name:"오산동", slug:"osan-dong"}, {name:"세교동", slug:"segyo-dong"}, {name:"원동", slug:"won-dong"}, {name:"궐동", slug:"gwol-dong"}, {name:"수청동", slug:"sucheong-dong"}, {name:"금암동", slug:"geumam-dong"}, {name:"양산동", slug:"yangsan-dong"}, {name:"외삼미동", slug:"oesammi-dong"}] }
    ]
  },
  { 
    id: "guri",
    slug: "guri",
    name: "구리", 
    tag: "인창·수택·토평·교문·아천·갈매", 
    img: "/images/thumbs/massage-21.jpg",
    gus: [
      { name: "구리시 관할", slug: "guri-gwanhal", dongs: [{name:"인창동", slug:"inchang-dong"}, {name:"수택동", slug:"sutaek-dong"}, {name:"토평동", slug:"topyeong-dong"}, {name:"교문동", slug:"gyomun-dong"}, {name:"아천동", slug:"acheon-dong"}, {name:"갈매동", slug:"galmae-dong"}] }
    ]
  },
  { 
    id: "anseong",
    slug: "anseong",
    name: "안성", 
    tag: "봉산·석정·옥산·아양·공도읍·대덕면·죽산면·일죽면", 
    img: "/images/thumbs/massage-22.jpg",
    gus: [
      { name: "안성시 관할", slug: "anseong-gwanhal", dongs: [{name:"봉산동", slug:"bongsan-dong"}, {name:"석정동", slug:"seokjeong-dong"}, {name:"옥산동", slug:"oksan-dong"}, {name:"아양동", slug:"ayang-dong"}, {name:"공도읍", slug:"gongdo-eup"}, {name:"대덕면", slug:"daedeok-myeon"}, {name:"죽산면", slug:"juksan-myeon"}, {name:"일죽면", slug:"iljuk-myeon"}] }
    ]
  },
  { 
    id: "pocheon",
    slug: "pocheon",
    name: "포천", 
    tag: "신읍·선단·자작·소흘읍·내촌면·가산면·영북면", 
    img: "/images/thumbs/massage-23.jpg",
    gus: [
      { name: "포천시 관할", slug: "pocheon-gwanhal", dongs: [{name:"신읍동", slug:"sineup-dong"}, {name:"선단동", slug:"seondan-dong"}, {name:"자작동", slug:"jajak-dong"}, {name:"소흘읍", slug:"soheul-eup"}, {name:"내촌면", slug:"naechon-myeon"}, {name:"가산면", slug:"gasan-myeon"}, {name:"영북면", slug:"yeongbuk-myeon"}] }
    ]
  },
  { 
    id: "uiwang",
    slug: "uiwang",
    name: "의왕", 
    tag: "내손·오전·포일·삼동·왕곡·청계", 
    img: "/images/thumbs/massage-24.jpg",
    gus: [
      { name: "의왕시 관할", slug: "uiwang-gwanhal", dongs: [{name:"내손동", slug:"naeson-dong"}, {name:"오전동", slug:"ojeon-dong"}, {name:"포일동", slug:"poil-dong"}, {name:"삼동", slug:"sam-dong"}, {name:"왕곡동", slug:"wanggok-dong"}, {name:"청계동", slug:"cheonggye-dong"}] }
    ]
  },
  { 
    id: "hanam",
    slug: "hanam",
    name: "하남", 
    tag: "미사·신장·덕풍·풍산·감일·위례·초이", 
    img: "/images/thumbs/massage-25.jpg",
    gus: [
      { name: "하남시 관할", slug: "hanam-gwanhal", dongs: [{name:"미사동", slug:"misa-dong"}, {name:"신장동", slug:"sinjang-dong"}, {name:"덕풍동", slug:"deokpung-dong"}, {name:"풍산동", slug:"pungsan-dong"}, {name:"감일동", slug:"gamil-dong"}, {name:"위례동", slug:"wirye-dong"}, {name:"초이동", slug:"choi-dong"}] }
    ]
  },
  { 
    id: "yeoju",
    slug: "yeoju",
    name: "여주", 
    tag: "여흥·중앙·광대·점봉·가남읍·흥천면·금사면", 
    img: "/images/thumbs/massage-26.jpg",
    gus: [
      { name: "여주시 관할", slug: "yeoju-gwanhal", dongs: [{name:"여흥동", slug:"yeohung-dong"}, {name:"중앙동", slug:"jungang-dong"}, {name:"광대동", slug:"gwangdae-dong"}, {name:"점봉동", slug:"jembong-dong"}, {name:"가남읍", slug:"ganam-eup"}, {name:"흥천면", slug:"heungcheon-myeon"}, {name:"금사면", slug:"geumsa-myeon"}] }
    ]
  },
  { 
    id: "yangpyeong",
    slug: "yangpyeong",
    name: "양평군", 
    tag: "양평읍·양서면·용문면·강상면·강하면·서종면", 
    img: "/images/thumbs/massage-27.jpg",
    gus: [
      { name: "양평군 관할", slug: "yangpyeong-gwanhal", dongs: [{name:"양평읍", slug:"yangpyeong-eup"}, {name:"양서면", slug:"yangseo-myeon"}, {name:"용문면", slug:"yongmun-myeon"}, {name:"강상면", slug:"gangsang-myeon"}, {name:"강하면", slug:"gangha-myeon"}, {name:"서종면", slug:"seojong-myeon"}] }
    ]
  },
  { 
    id: "dongducheon",
    slug: "dongducheon",
    name: "동두천", 
    tag: "생연·지행·보산·동두천·상패·광암", 
    img: "/images/thumbs/massage-28.jpg",
    gus: [
      { name: "동두천시 관할", slug: "dongducheon-gwanhal", dongs: [{name:"생연동", slug:"saengyeon-dong"}, {name:"지행동", slug:"jihaeng-dong"}, {name:"보산동", slug:"bosan-dong"}, {name:"동두천동", slug:"dongducheon-dong"}, {name:"상패동", slug:"sangpae-dong"}, {name:"광암동", slug:"gwangam-dong"}] }
    ]
  },
  { 
    id: "gwacheon",
    slug: "gwacheon",
    name: "과천", 
    tag: "별양·중앙·원문·갈현·문원·주암", 
    img: "/images/thumbs/massage-29.jpg",
    gus: [
      { name: "과천시 관할", slug: "gwacheon-gwanhal", dongs: [{name:"별양동", slug:"byeolyang-dong"}, {name:"중앙동", slug:"jungang-dong"}, {name:"원문동", slug:"wonmun-dong"}, {name:"갈현동", slug:"galhyeon-dong"}, {name:"문원동", slug:"munwon-dong"}, {name:"주암동", slug:"juam-dong"}] }
    ]
  },
  { 
    id: "gapyeong",
    slug: "gapyeong",
    name: "가평군", 
    tag: "가평읍·청평면·설악면·조종면·상면·북면", 
    img: "/images/thumbs/massage-30.jpg",
    gus: [
      { name: "가평군 관할", slug: "gapyeong-gwanhal", dongs: [{name:"가평읍", slug:"gapyeong-eup"}, {name:"청평면", slug:"cheongpyeong-myeon"}, {name:"설악면", slug:"seorak-myeon"}, {name:"조종면", slug:"jojong-myeon"}, {name:"상면", slug:"sang-myeon"}, {name:"북면", slug:"buk-myeon"}] }
    ]
  },
  { 
    id: "yeoncheon",
    slug: "yeoncheon",
    name: "연천군", 
    tag: "연천읍·전곡읍·군남면·신서면·청산면", 
    img: "/images/thumbs/massage-31.jpg",
    gus: [
      { name: "연천읍 관할", slug: "yeoncheon-gwanhal", dongs: [{name:"연천읍", slug:"yeoncheon-eup"}, {name:"전곡읍", slug:"jeongok-eup"}, {name:"군남면", slug:"gunnam-myeon"}, {name:"신서면", slug:"sinseo-myeon"}, {name:"청산면", slug:"cheongsan-myeon"}] }
    ]
  }
];

/* ==========================================================================
   2. 제휴업체 데이터
   ========================================================================== */
const shopsData = [
  { id: 1, name: "한국미인테라피", phone: "0507-1280-3294", badge: "추천업체", desc: "24시 정성 가득한 1인샵 & 아로마·스웨디시 전문 테라피", courses: [{ name: "아로마 힐링 케어 (60분)", price: "90,000원" }, { name: "프리미엄 스웨디시 (60분)", price: "140,000원" }] },
  { id: 2, name: "젊은애인테라피", phone: "0507-1280-3191", badge: "인기폭발", desc: "지친 일상에 편안한 휴식을 선사하는 프리미엄 1인샵 수기 힐링 케어", courses: [{ name: "건식 테라피 (60분)", price: "60,000원" }, { name: "스웨디시 코스 (60분)", price: "140,000원" }] },
  { id: 3, name: "그녀의온도 1인샵", phone: "0507-1280-3289", badge: "24시상시", desc: "철저한 위생 관리와 아늑한 1:1 맞춤형 프라이빗 공간", courses: [{ name: "건마 / 타이 마사지 (60분)", price: "60,000원" }, { name: "한국 스웨디시 케어 (60분)", price: "140,000원" }] },
  { id: 4, name: "젊은미녀스웨디시", phone: "0507-1280-3189", badge: "신규제휴", desc: "베테랑 테라피스트의 맞춤형 림프 순환 및 피로 회복 프로그램", courses: [{ name: "힐링 마사지 (60분)", price: "60,000원" }, { name: "스페셜 아로마 (90분)", price: "140,000원" }] },
  { id: 5, name: "지금될까 1인샵", phone: "0507-1280-3232", badge: "만족도1위", desc: "쾌적한 1인실 환경과 정성 어린 전문 수기 힐링 케어", courses: [{ name: "건식 바디케어 (60분)", price: "60,000원" }, { name: "VIP 스웨디시 코스 (60분)", price: "140,000원" }] }
];

/* ==========================================================================
   3. 50개 출장마사지 전용 타이틀 & 메타 디스크립션 템플릿 풀
   ========================================================================== */
const titleTemplates = [
  "{loc} 출장마사지 1인샵 & 홈타이 스웨디시 힐링 케어",
  "{loc} 출장안마 전문 24시 프리미엄 1인샵 테라피",
  "{loc} 출장홈타이 1위 빠르고 편안한 방문 마사지",
  "{loc} 24시 출장마사지 호텔 모텔 자택 방문 테라피",
  "{loc} 출장스웨디시 감성 힐링 1:1 맞춤 바디케어",
  "{loc} 출장안마 1인샵 검증된 전문 관리사 상시 대기",
  "{loc} 프리미엄 출장홈타이 건식 아로마 힐링 코스",
  "{loc} 출장마사지 내 주변 가장 빠른 방문 테라피 안내",
  "{loc} 출장안마 힐링케어 100% 힐링 만족 보장 코스",
  "{loc} 최고급 출장홈타이 1인샵 감성 힐링 가이드",
  "{loc} 24시 출장스웨디시 전문 테라피스트 완벽 케어",
  "{loc} 감성 출장마사지 피로회복 1:1 집중 관리",
  "{loc} 출장안마 VIP 맞춤 방문 스웨디시 & 홈타이",
  "{loc} 믿고 부르는 {loc} 출장홈타이 빠른 도착 케어",
  "{loc} 1인샵 출장마사지 프라이빗 힐링 바디 테라피",
  "{loc} 출장안마 전지역 신속 방문 24시 테라피",
  "{loc} 스웨디시 출장홈타이 아로마 타이 힐링 코스",
  "{loc} 출장마사지 추천 1위 전문 힐러 맞춤 서비스",
  "{loc} 24시 출장안마 언제 어디서나 편안한 힐링케어",
  "{loc} 힐링 출장홈타이 전문 수기관리 프리미엄 코스",
  "{loc} 출장스웨디시 림프순환 감성 테라피 가이드",
  "{loc} 명품 출장마사지 지친 일상 완벽 힐링 충전",
  "{loc} 출장안마 1인샵 수준 높은 프라이빗 홈케어",
  "{loc} 24시 출장홈타이 안심 방문 힐링 서비스 안내",
  "{loc} 출장마사지 호텔 자택 원룸 어디든 즉시 방문",
  "{loc} 프리미엄 출장안마 스웨디시 & 건식 테라피",
  "{loc} 출장홈타이 베테랑 관리사의 섬세한 손길",
  "{loc} 출장스웨디시 1위 럭셔리 감성 바디케어",
  "{loc} 24시 출장마사지 1:1 맞춤형 힐링 프로그램",
  "{loc} 출장안마 쾌적하고 편안한 방문 테라피 안내",
  "{loc} 감성 힐링 {loc} 출장홈타이 아로마 스웨디시",
  "{loc} 출장마사지 내 공간에서 즐기는 최고급 케어",
  "{loc} 24시 출장안마 스트레스 해소 전문 바디테라피",
  "{loc} 출장스웨디시 로미로미 감성 힐링 추천",
  "{loc} 프리미엄 출장홈타이 철저한 위생 안심 관리",
  "{loc} 출장마사지 정통 타이 아로마 스웨디시 안내",
  "{loc} 24시 출장안마 빠른 배차 100% 만족 힐링",
  "{loc} 명품 출장홈타이 호텔식 프리미엄 방문 케어",
  "{loc} 출장스웨디시 1인샵 전문 관리사 힐링 코스",
  "{loc} 출장마사지 힐링의 품격을 높이는 1:1 케어",
  "{loc} 24시 출장안마 내 주변 실시간 방문 예약",
  "{loc} 프라이빗 출장홈타이 극상의 편안함 선사",
  "{loc} 출장스웨디시 피로회복 림프순환 힐링 테라피",
  "{loc} 출장마사지 검증된 매니저 24시 안심 방문",
  "{loc} 호텔식 출장안마 맞춤 수기 힐링 프로그램",
  "{loc} 출장홈타이 전코스 맞춤 테라피 빠른 도착",
  "{loc} 감성 스웨디시 {loc} 출장마사지 추천 가이드",
  "{loc} 24시 출장안마 피로 완벽 케어 힐링 서비스",
  "{loc} 출장홈타이 아늑한 내 공간 맞춤 힐링 케어",
  "{loc} 출장마사지 & 스웨디시 1인샵 최고 만족도"
];

const descTemplates = [
  "{loc} 출장마사지 전문 24시 연중무휴! 호텔·자택·오피스텔 빠른 방문과 검증된 1:1 맞춤 스웨디시 & 홈타이 힐링 케어를 선사합니다.",
  "{loc} 출장안마 1위! 24시 상시 대기 중인 전문 테라피스트의 프라이빗 힐링 바디케어 코스를 지금 바로 경험해보세요.",
  "{loc} 출장홈타이 및 스웨디시 전문. 내 공간에서 가장 편안하게 즐기는 최고급 아로마 수기 힐링과 피로회복 테라피.",
  "24시 {loc} 출장마사지 안내. 빠른 배차 시스템과 철저한 위생 관리로 호텔, 모텔, 자택 어디서든 안심하고 이용하세요.",
  "{loc} 출장안마 및 1인샵 감성 힐링 테라피! 지친 일상의 스트레스를 날려주는 림프 순환 스웨디시 전문 프로그램.",
  "엄선된 베테랑 관리사의 {loc} 출장홈타이. 타이, 아로마, 스웨디시 등 개인 맞춤형 바디케어 코스를 제공합니다.",
  "{loc} 전지역 24시 출장스웨디시 전문. 프라이빗 1:1 감성 힐링과 극상의 부드러운 케어를 약속드립니다.",
  "{loc} 출장마사지 추천! 믿고 부르는 안심 방문 서비스, 빠른 도착과 높은 만족도의 힐링 테라피를 만나보세요.",
  "지친 하루의 끝, {loc} 출장안마로 완벽한 피로회복을! 24시간 언제 어디서나 신속하게 찾아갑니다.",
  "{loc} 출장홈타이 전문 안내. 청결과 정성을 최우선으로 하는 1:1 맞춤 방문 마사지 서비스입니다.",
  "{loc} 24시 출장마사지 & 스웨디시. 호텔식 프리미엄 바디케어로 나만의 아늑한 공간에서 힐링하세요.",
  "프리미엄 {loc} 출장안마. 숙련된 여성 테라피스트의 정성 어린 손길로 뭉친 근육과 피로를 부드럽게 풀어드립니다.",
  "{loc} 출장홈타이 1위 안내. 아로마, 건식, 스웨디시 전 코스 완비 및 신속 방문 예약 가능.",
  "{loc} 출장스웨디시 감성 케어. 1인 프라이빗 맞춤 코스로 일상의 스트레스를 깔끔하게 해소해 드립니다.",
  "{loc} 전지역 출장마사지 24시 상시 운영. 내 집, 호텔에서 편하게 받는 최고급 수기 힐링 프로그램.",
  "믿을 수 있는 {loc} 출장안마 서비스. 철저한 매니저 교육과 검증된 테라피로 재방문 만족도 1위를 자랑합니다.",
  "{loc} 출장홈타이 빠른 도착 보장! 원하시는 시간과 장소에 맞춰 찾아가는 맞춤형 힐링 바디케어.",
  "{loc} 출장마사지 & 1인샵 가이드. 감성 스웨디시부터 딥티슈 로미로미까지 다양한 코스를 만나보세요.",
  "24시간 언제나 열려있는 {loc} 출장안마. 전화 한 통으로 빠르게 만나는 나만의 프라이빗 테라피.",
  "{loc} 출장홈타이 최고 만족도! 쾌적하고 편안한 내 공간에서 경험하는 정통 힐링 마사지.",
  "{loc} 출장스웨디시 1:1 집중 림프순환 케어. 부드러운 터치와 힐링으로 몸과 마음을 가볍게 만듭니다.",
  "고품격 {loc} 출장마사지 안내. 호텔, 자택 어디든 신속 방문하여 최상의 휴식을 선사합니다.",
  "{loc} 출장안마 전문 제휴점 안내. 베테랑 관리사의 정성 어린 수기 관리로 피로를 날려버리세요.",
  "{loc} 출장홈타이 & 아로마 테라피. 합리적인 가격과 고품질 서비스로 만족을 약속합니다.",
  "24시 {loc} 출장마사지 추천. 예약 즉시 빠른 배차와 프라이빗한 맞춤 힐링 서비스를 제공합니다.",
  "{loc} 출장안마 1인샵 명품 코스. 철저한 위생 관리와 품격 있는 바디케어를 경험해보세요.",
  "{loc} 출장홈타이 방문 케어. 지친 현대인을 위한 맞춤 피로회복 힐링 프로그램 완비.",
  "{loc} 출장스웨디시 감성 힐링 샵. 부드러운 오일 테라피로 하루의 피로를 사르르 녹여드립니다.",
  "{loc} 전지역 24시 출장마사지 안내. 프라이빗 공간에서 만나는 럭셔리 호텔식 바디케어.",
  "{loc} 출장안마 내 주변 1등 추천! 빠르고 정확한 방문과 친절한 서비스로 힐링을 선사합니다.",
  "내 방에서 편안하게 즐기는 {loc} 출장홈타이. 숙련된 테라피스트의 정성 가득한 수기 힐링.",
  "{loc} 출장마사지 VIP 스페셜 케어. 1:1 맞춤 상담 및 취향 저격 힐링 코스를 제안합니다.",
  "24시 {loc} 출장안마 신속 예약. 호텔, 모텔, 자택 어디서든 안심하고 부르는 1등 테라피.",
  "{loc} 출장홈타이 프리미엄 안내. 건식 타이마사지부터 고급 스웨디시까지 완벽 커버.",
  "{loc} 출장스웨디시 림프 집중 케어. 섬세하고 전문적인 테크닉으로 극상의 힐링을 선사합니다.",
  "{loc} 출장마사지 24시 안심 서비스. 청결한 관리와 정성 어린 힐링으로 고객 만족을 실현합니다.",
  "{loc} 출장안마 전문 홈케어. 지친 몸에 활력을 불어넣는 프라이빗 맞춤 테라피 프로그램.",
  "{loc} 출장홈타이 1위 플랫폼. 빠른 방문과 품격 있는 테라피로 특별한 휴식을 선사합니다.",
  "{loc} 출장스웨디시 & 1인샵 안내. 감성 가득한 공간에서 누리는 최고의 릴렉싱 타임.",
  "{loc} 출장마사지 어디든 빠르게! 피로와 스트레스를 한 번에 날려주는 베테랑 손길.",
  "24시 {loc} 출장안마 만족도 보장. 검증된 한국인 & 전문 테라피스트의 체계적인 케어.",
  "{loc} 출장홈타이 명품 힐링 코스. 타이, 아로마, 스웨디시 등 취향 맞춤 방문 케어.",
  "{loc} 출장스웨디시 1:1 프라이빗 힐링. 부드러운 릴렉싱 케어로 편안한 밤을 선물합니다.",
  "{loc} 출장마사지 24시 실시간 예약 안내. 내 공간에서 누리는 가장 안전하고 편안한 테라피.",
  "호텔식 {loc} 출장안마 추천. 숙련된 관리사의 차별화된 수기 테크닉을 경험하세요.",
  "{loc} 출장홈타이 빠른 방문 시스템. 편안한 내 집에서 누리는 최고급 힐링 마사지.",
  "{loc} 출장마사지 & 스웨디시 1인샵. 꼼꼼한 관리와 섬세한 손길로 감동을 전합니다.",
  "24시 {loc} 출장안마 프라이빗 케어. 언제 어디서든 지친 몸을 위한 완벽한 휴식처.",
  "{loc} 출장홈타이 정통 수기 마사지. 피로 회복과 스트레스 완화에 탁월한 맞춤 프로그램.",
  "{loc} 출장마사지 1등 안내 플랫폼. 검증된 제휴 샵의 최고급 힐링 서비스를 만나보세요."
];

// 고유 문자열 기반 결정론적 해시 (지역별 고유 템플릿 유지 및 고른 분산)
function getHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// 폴더 및 파일 재귀 복사 헬퍼 함수
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

// 제휴업체 HTML 생성기
function renderShopsHtml() {
  return shopsData.map(s => `
    <div class="shop-card">
      <div>
        <div class="shop-header">
          <span class="shop-badge">${s.badge}</span>
          <h3 class="shop-title">${s.name}</h3>
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
      <a href="tel:${s.phone.replace(/-/g, '')}" class="shop-call-btn">예약문의 ${s.phone}</a>
    </div>
  `).join("");
}

/* ==========================================================================
   4. 세부 독립 페이지 HTML 템플릿 생성기 (출장마사지 키워드 적용)
   ========================================================================== */
function generateDetailPageHtml(area, gu, dong) {
  const locName = dong ? `${area.name} ${dong.name}` : (gu ? `${area.name} ${gu.name}` : area.name);
  const pageKey = dong ? `${area.slug}-${gu.slug}-${dong.slug}` : (gu ? `${area.slug}-${gu.slug}` : area.slug);
  
  const h = getHash(pageKey);
  const title = titleTemplates[h % titleTemplates.length].replace(/{loc}/g, locName);
  const desc = descTemplates[(h + 7) % descTemplates.length].replace(/{loc}/g, locName);

  const currentUrl = dong 
    ? `https://gyeonggi-mong.massagemong-kr.workers.dev/${area.slug}/${gu.slug}/${dong.slug}`
    : (gu ? `https://gyeonggi-mong.massagemong-kr.workers.dev/${area.slug}/${gu.slug}` : `https://gyeonggi-mong.massagemong-kr.workers.dev/${area.slug}`);

  let subNavHtml = "";
  area.gus.forEach(g => {
    const isGuOnly = g.name.includes("관할");
    subNavHtml += `
      <div class="gu-box">
        <h4 class="gu-title">${g.name}</h4>
        <div class="dong-link-grid">
          ${g.dongs.map(d => `
            <a href="/${area.slug}/${g.slug}/${d.slug}" class="dong-link-btn">
              ${isGuOnly ? '' : g.name + ' '}${d.name}
            </a>
          `).join("")}
        </div>
      </div>
    `;
  });

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1" name="viewport"/>
  <title>${title} | 경기건마몽</title>
  <meta name="description" content="${desc}"/>
  <meta name="robots" content="index, follow"/>

  <!-- 오픈 그래프 -->
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="${currentUrl}"/>
  <meta property="og:title" content="${title} | 경기건마몽"/>
  <meta property="og:description" content="${desc}"/>
  <meta property="og:image" content="https://gyeonggi-mong.massagemong-kr.workers.dev${area.img}"/>

  <link rel="icon" href="/images/logo.png" type="image/png"/>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap" rel="stylesheet"/>
  <link href="/css/styles.css" rel="stylesheet"/>
</head>
<body>
  <div class="page-shell">
    <header class="site-header">
      <a aria-label="경기건마몽 홈" class="brand" href="/">
        <span class="brand-text"><strong>경기건마몽</strong><em>GYEONGGI GUNMAMONG</em></span>
      </a>
      <nav class="nav-menu">
        <a href="/#shops">추천업체</a>
        <a href="/#service">서비스</a>
        <a href="/#price-info">가격안내</a>
        <a href="/#travel">근처여행</a>
        <a href="/#food">맛집숙소</a>
        <a href="/#areas">지역안내</a>
        <a href="/#reviews">후기</a>
      </nav>
    </header>

    <div class="detail-page-container">
      <a href="/" class="back-btn" style="display:inline-block; text-decoration:none;">← 전체 경기지역 목록으로 돌아가기</a>
      
      <div class="detail-nav-menu">
        <a href="/#shops">추천업체</a>
        <a href="/#service">서비스</a>
        <a href="/#price-info">가격안내</a>
        <a href="/#travel">근처여행</a>
        <a href="/#food">맛집숙소</a>
        <a href="/#areas">지역안내</a>
        <a href="/#reviews">후기</a>
      </div>

      <div class="detail-hero">
        <img src="${area.img}" alt="${locName} 출장마사지" class="detail-hero-img"/>
        <div class="detail-hero-text">
          <span class="eyebrow">GYEONGGI LOCAL SERVICE</span>
          <h1>${locName} 출장마사지 &amp; 1인샵 안내</h1>
          <p>${locName} 전지역 신속 방문 및 검증된 1:1 프리미엄 맞춤 테라피 제휴 가이드</p>
        </div>
      </div>

      <div class="detail-section">
        <h3>🔥 ${locName} 추천 제휴업체</h3>
        <div class="shop-grid">
          ${renderShopsHtml()}
        </div>
      </div>

      <div class="detail-section">
        <h3>📍 ${area.name} 세부 구/동 지역 선택</h3>
        <p style="color:#aaa; font-size:0.9rem; margin-bottom:15px;">원하시는 동을 클릭하시면 해당 동 전용 안내 페이지로 이동합니다.</p>
        ${subNavHtml}
      </div>
    </div>

    <footer class="site-footer">
      <div class="footer-info">
        <h2>제휴문의</h2>
        <p><strong>0507-1280-3344</strong></p>
        <p>서비스 품질 향상을 위해 모든 통화는 녹음되고 있습니다.</p>
        <h3>사업자 정보</h3>
        <p>상호명: 경기건마몽</p>
        <p>제휴문의: 0507-1280-3344</p>
        <p>플랫폼 운영 안내: 경기건마몽은 정식 검증된 1인샵, 건마, 스웨디시 및 테라피 업체의 제휴 정보를 제공하는 광고 중개 플랫폼입니다.</p>
      </div>
      <div class="footer-bottom">
        <span>© 2026 경기건마몽. All rights reserved.</span>
      </div>
    </footer>
  </div>

  <a class="floating-call" href="tel:050712803344">제휴문의 0507-1280-3344</a>
</body>
</html>`;
}

/* ==========================================================================
   5. 전체 정적 빌드 및 파일 동기화 실행
   ========================================================================== */
function buildStaticPages() {
  const outputBase = path.join(__dirname, 'dist');

  if (!fs.existsSync(outputBase)) {
    fs.mkdirSync(outputBase, { recursive: true });
  }

  let totalPages = 0;

  // 1) 31개 시군 및 하위 구/동 독립 페이지 자동 생성
  areaData.forEach(area => {
    const cityDir = path.join(outputBase, area.slug);
    fs.mkdirSync(cityDir, { recursive: true });
    fs.writeFileSync(
      path.join(cityDir, 'index.html'), 
      generateDetailPageHtml(area)
    );
    totalPages++;

    area.gus.forEach(gu => {
      gu.dongs.forEach(dong => {
        const dongDir = path.join(outputBase, area.slug, gu.slug, dong.slug);
        fs.mkdirSync(dongDir, { recursive: true });
        fs.writeFileSync(
          path.join(dongDir, 'index.html'),
          generateDetailPageHtml(area, gu, dong)
        );
        totalPages++;
      });
    });
  });

  // 2) 루트의 메인 index.html 복사
  if (fs.existsSync(path.join(__dirname, 'index.html'))) {
    fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(outputBase, 'index.html'));
  }

  // 3) css, images 등 에셋 복사
  if (fs.existsSync(path.join(__dirname, 'css'))) {
    copyFolderSync(path.join(__dirname, 'css'), path.join(outputBase, 'css'));
  }
  if (fs.existsSync(path.join(__dirname, 'images'))) {
    copyFolderSync(path.join(__dirname, 'images'), path.join(outputBase, 'images'));
  }
  if (fs.existsSync(path.join(__dirname, 'robots.txt'))) {
    fs.copyFileSync(path.join(__dirname, 'robots.txt'), path.join(outputBase, 'robots.txt'));
  }
  if (fs.existsSync(path.join(__dirname, 'sitemap.xml'))) {
    fs.copyFileSync(path.join(__dirname, 'sitemap.xml'), path.join(outputBase, 'sitemap.xml'));
  }

  console.log(`✅ [빌드 성공] 메인 페이지, CSS, 이미지 및 ${totalPages}개 세부 출장마사지 페이지가 dist 폴더에 완벽히 준비되었습니다!`);
}

buildStaticPages();

module.exports = {
  areaData,
  shopsData
};