"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2104],{2954:function(e,t,l){l.d(t,{Z:function(){return i}});var s=l(7437),n=l(7648);l(2265);var a=l(5168);function i(){return(0,s.jsxs)(n.default,{href:"/",className:"fixed bottom-4 sm:top-4 left-4 xl:top-12 xl:left-12 z-40",children:[(0,s.jsxs)("div",{className:" flex items-center justify-center rounded-lg overflow-hidden cursor-pointer xl:w-fit ",children:[(0,s.jsx)(a.ut6,{className:" z-20 text-white text-2xl sm:text-4xl lg:text-[44px] animate-pulse transition-all duration-300  rounded-l-lg"}),(0,s.jsx)(a.ut6,{className:" absolute -top-[4px] -left-[3px] z-10 text-gray-400 text-[33px] sm:text-4xl lg:text-[44px]  transition-all duration-300  rounded-l-lg"})]}),(0,s.jsx)("h1",{className:"text-white",children:"رجوع"})]})}},1759:function(e,t,l){l.d(t,{Z:function(){return a}});var s=l(7437),n=l(7648);function a(e){let{style:t,title:l,onClick:a,path:i=""}=e;return(0,s.jsx)(n.default,{href:i,className:"w-full",children:(0,s.jsx)("button",{type:"submit",onClick:a,className:" btn text-sm py-0.5 px-4 sm:text-lg sm:py-2 sm:px-8 my-2 text-white text-nowrap select-none rounded-full w-full max-h-12 hover:text-white shadow-lg hover:border-[#596067] ",children:l})})}l(2265)},4481:function(e,t,l){l.d(t,{InputsContextProvider:function(){return r},t:function(){return i}});var s=l(7437),n=l(2265);function a(e,t){switch(t.type){case"SET_SERIESES":return{serieses:null==t?void 0:t.payload};case"NEW_SERIES":return{newSeries:null==t?void 0:t.payload};case"NEW_SONG":return{newSong:null==t?void 0:t.payload};case"KIDS_SONG_NAME":return{kidsSongName:null==t?void 0:t.payload};case"SPACETOON_SONG_NAME":return{SpacetoonSongName:null==t?void 0:t.payload};case"NEW_SPACETOON_SONG":return{newSpacetoonSong:null==t?void 0:t.payload};case"NEW_MOVIE":return{newMovie:null==t?void 0:t.payload};case"SELECTED_VALUE":return{data:{...null==e?void 0:e.data,selectedValue:t.payload.selectedValue,modelName:t.payload.modelName}};case"DELETE_SERIES":return{deletedSeries:{...null==e?void 0:e.data,selectedValue:t.payload.selectedValue,modelName:t.payload.modelName}};case"IMAGE":return{data:{...null==e?void 0:e.data,image:t.payload}};case"PROFILE_IMAGE":return{profile_image:{image:t.payload}};case"IMAGE_ERROR":return{imageError:null==t?void 0:t.payload};case"ACTION":return{action:null==t?void 0:t.payload};case"MY_SERIESES":return{mySerieses:null==t?void 0:t.payload};case"FIRST_EPISODE":return{firstEpisode:null==t?void 0:t.payload};case"IS_SONG_NAME":return{isSongName:null==t?void 0:t.payload};default:return e}}let i=(0,n.createContext)("");function r(e){let{children:t}=e,[l,r]=(0,n.useReducer)(a,{data:{},imageError:{},profile_image:{},serieses:[],newSeries:{},newSong:{},kidsSongName:{},firstEpisode:"",SpacetoonSongName:{},newSpacetoonSong:{},newMovie:{},deletedSeries:{},deleteFavoritePost:{},action:{},mySerieses:[],isSongName:""});return(0,s.jsx)(i.Provider,{value:{...l,dispatch:r},children:t})}},1394:function(e,t,l){l.d(t,{Z:function(){return i}});var s=l(2265),n=l(4481),a=l(605);function i(){let{profile_image:e}=(0,s.useContext)(n.t),[t,l]=(0,s.useState)(),{data:i,status:r}=(0,a.useSession)();async function o(){if(i){var e;let t=null==i?void 0:null===(e=i.user)||void 0===e?void 0:e.email,s=await fetch("/api/user?email=".concat(t)),n=await (null==s?void 0:s.json());s.ok&&(localStorage.setItem("CurrentUser",JSON.stringify(n)),l(n))}}return(0,s.useEffect)(()=>{"authenticated"===r&&o()},[r,null==e?void 0:e.image]),{...t}}},7728:function(e,t,l){l.d(t,{Z:function(){return n}});var s=l(7437);function n(e){let{t,message:l,emoji:n,greenEmoji:a,redEmoji:i}=e;return(0,s.jsxs)("div",{className:"".concat(t.visible?"animate-enter":"animate-leave"," max-w-md w-full bg-white text-four shadow-lg rounded-lg pointer-events-auto flex-2 items-center justify-center p-4 mx-2 border"),children:[(0,s.jsx)("div",{className:"flex justify-between items-center my-1",children:(0,s.jsx)("div",{className:"flex-1 w-full",children:(0,s.jsx)("div",{className:"flex justify-center items-center gap-2",children:(0,s.jsx)("div",{className:"ml-3 flex-1"})})})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsxs)("h1",{className:"sm:mt-4 text-[12px] sm:text-sm s:text-nowrap text-center  ",children:[(0,s.jsx)("span",{className:"text-green-400 text-xl font-bold",children:a}),(0,s.jsx)("span",{className:"text-one text-xl mx-1 font-bold",children:i}),l,(0,s.jsx)("span",{className:"text-green-400 text-xl mx-1 font-bold",children:n})]})})})]})}l(3145),l(2265)},6393:function(e,t,l){l.d(t,{Z:function(){return i}});var s=l(7437),n=l(2265),a=l(1273);function i(e){let{myMessage:t="لا يوجد نتائج لعرضها \uD83D\uDE10"}=e,[l,i]=(0,n.useState)(""),[r,o]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{setTimeout(()=>{i(t),o(!1)},5e3)},[]),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center  h-[300px] rounded-lg w-full",children:[r&&(0,s.jsxs)("div",{className:"flex flex-col justify-start items-center bg-gray-300 rounded-lg w-full h-full p-8 transition duration-300",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,s.jsx)(a.mdD,{className:"animate-spin text-5xl mt-8 transition duration-300"}),(0,s.jsx)(a.mdD,{className:"animate-spin text-2xl transition duration-300 mx-8 w-full"})]}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("hr",{className:"w-1/2 h-[10px] bg-gray-600 rounded-full border-hidden  my-4 transition duration-300"}),(0,s.jsx)("hr",{className:"w-3/4 h-[10px] bg-gray-600 rounded-full border-hidden  my-4 transition duration-300"}),(0,s.jsx)("hr",{className:"w-full h-[10px] bg-gray-600 rounded-full border-hidden  my-4 transition duration-300"})]})]}),(0,s.jsx)("h1",{className:"text-2xl mt-4 text-white bg-four rounded-lg p-2 text-center",children:l||"جاري التحميل"})]})}},8827:function(e,t,l){l.d(t,{Z:function(){return a}});var s=l(7437),n=l(1273);function a(){return(0,s.jsx)("div",{className:"flex items-center justify-center  rounded-full h-full",children:(0,s.jsx)(n.mdD,{className:"animate-spin text-xl transition duration-300 text-gray-500"})})}},705:function(e,t,l){l.d(t,{Z:function(){return d}});var s=l(7437),n=l(605);l(2265),l(1394);var a=l(3145),i=l(7648),r=l(1759);function o(e){let{planetName:t,planetImage:l,planetRoute:n}=e;return(0,s.jsx)("div",{children:(0,s.jsxs)(i.default,{href:n,className:"flex justify-start gap-2 items-center hover:shadow-md rounded-lg",children:[(0,s.jsx)("div",{className:"relative h-14 w-16 my-1",children:(0,s.jsx)(a.default,{priority:!0,src:l,fill:!0,alt:"photo"})}),(0,s.jsx)("h5",{className:"text-black text-sm",children:t})]})})}function d(e){let{setIsOpen:t}=e,l=(0,n.useSession)();return(0,s.jsx)("div",{className:"absolute w-full h-screen border top-0 z-50 right-0",onClick:()=>t(!1),children:(0,s.jsxs)("div",{className:"w-64 bg-white z-50 right-0 h-screen overflow-y-auto",onClick:e=>e.stopPropagation(),children:[(0,s.jsxs)("div",{className:"sticky top-0 w-full z-50",children:[(0,s.jsx)("div",{className:"flex justify-center items-center w-full cursor-pointer line-clamp-2 bg-one p-4",children:(0,s.jsx)("div",{className:"relative size-20 ml-4",children:(0,s.jsx)(a.default,{priority:!0,src:"https://i.imgur.com/uuWOSAu.png",fill:!0,alt:"photo"})})}),(0,s.jsx)("div",{className:"bg-white px-4",children:(0,s.jsx)(r.Z,{title:"إغلاق",onClick:()=>t(!1)})})]}),(0,s.jsxs)("div",{className:"relative p-4 ",children:[(null==l?void 0:l.status)==="authenticated"&&(0,s.jsx)(s.Fragment,{children:" "}),(0,s.jsx)(o,{planetName:"أغاني سبيس تون",planetImage:"https://i.imgur.com/BWPdDAF.png",planetRoute:"/spacetoonSongsPlanet"}),(0,s.jsx)(o,{planetName:"أغاني أطفال",planetImage:"https://i.imgur.com/rRBpVhp.png",planetRoute:"/songsPlanet"}),(0,s.jsx)(o,{planetName:"كوكب زمردة",planetImage:"https://i.imgur.com/wbjwdXO.png",planetRoute:"/zomurodaPlanet"}),(0,s.jsx)(o,{planetName:"كوكب مغامرات",planetImage:"https://i.imgur.com/sUeBEaz.png",planetRoute:"/adventuresPlanet"}),(0,s.jsx)(o,{planetName:"كوكب رياضة",planetImage:"https://i.imgur.com/CI7HaVo.png",planetRoute:"/sportPlanet"}),(0,s.jsx)(o,{planetName:"كوكب أكشن",planetImage:"https://i.imgur.com/bg5hr5i.png",planetRoute:"/actionPlanet"}),(0,s.jsx)(o,{planetName:"كوكب أفلام",planetImage:"https://i.imgur.com/QBreMYl.png",planetRoute:"/moviesPlanet"}),(0,s.jsx)(o,{planetName:"كوكب بون بونة",planetImage:"https://i.imgur.com/DnKrRt2.png",planetRoute:"/bonbonaPlanet"})]})]})})}l(8827)},2104:function(e,t,l){l.d(t,{default:function(){return g}});var s=l(7437),n=l(8779);l(466);var a=l(9376),i=l(2265),r=l(4481),o=l(6393),d=l(3145);l(2954);var c=l(8737),u=l(705),m=l(7728),x=l(9064),p=l(1394),f=l(605),h=l(2744);function g(e){let{vertical:t=!1}=e,[l,g]=(0,i.useState)(1),[v,j]=(0,i.useState)([]),{newSeries:N,deletedSeries:w,dispatch:y}=(0,i.useContext)(r.t),S=(0,a.useRouter)(),[E,b]=(0,i.useState)(!1),I=(0,p.Z)(),_=(0,f.useSession)(),[k,C]=(0,i.useState)(!0),[R,O]=(0,n.E)({loop:!1,mode:"free",vertical:!!t,rtl:!t,slides:{perView:3,spacing:()=>window.innerWidth<768?3:17},slideChanged(e){e.track.details.rel>=e.track.details.slides.length-3&&g(e=>e+1)}});async function P(){try{let e=await fetch("/api/serieses?page=".concat(l,"&planetName=مغامرات&limit=4")),t=await e.json();if(e.ok){let e=new Set(v.map(e=>e.id)),l=t.filter(t=>!e.has(t.id));l.length>0&&j(e=>[...e,...l])}}catch(e){console.error("Error fetching adventures:",e)}}async function D(e){(await fetch("/api/serieses",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})})).ok&&x.ZP.custom(e=>(0,s.jsx)(m.Z,{t:e,emoji:"\uD83E\uDDC0",message:"تم إضافة المسلسل الى الأكثر مشاهدة",greenEmoji:"✔"}))}return(0,i.useEffect)(()=>{P();let e=setTimeout(()=>{C(!1)},5e4);return()=>clearTimeout(e)},[N,w,l]),(0,i.useEffect)(()=>{O.current&&O.current.update()},[v,N]),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full overflow-x-hidden p-2 bg-one",children:[t?(0,s.jsxs)("div",{className:"absolute flex flex-col items-start gap-2 z-40 top-2 right-2 sm:top-4 sm:right-4 xl:right-12 xl:top-12",children:[(0,s.jsx)(c.Ogj,{className:"p-1 rounded-lg text-3xl lg:text-5xl text-white cursor-pointer z-50  bg-two",onClick:()=>b(!E)}),E&&(0,s.jsx)(u.Z,{setIsOpen:b})]}):"",(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative h-52 w-52 sm:h-80 sm:w-80",children:[(0,s.jsx)(d.default,{src:"https://i.imgur.com/sUeBEaz.png",layout:"fill",objectFit:"cover",alt:"مغامرات"})," "]})}),t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex items-center w-full px-8",children:(0,s.jsx)("hr",{className:"w-full h-0.5 bg-gray-400 rounded-lg border-hidden "})}),(0,s.jsx)("h1",{className:"w-fit text-start p-2 text-white my-2 bg-one",children:"كوكب مغامرات"})]}):(0,s.jsx)("h1",{className:"w-full text-start p-2 text-white my-2 bg-one",children:"كوكب مغامرات"}),k&&(0,s.jsxs)("div",{className:"relative w-full flex items-center justify-between text-white h-12  text-2xl px-2 ",children:[(0,s.jsx)(h.eDK,{}),(0,s.jsxs)("h6",{className:"text-sm w-full text-start",children:[" ","اسحب لمزيد من المسلسلات"]})]}),(0,s.jsx)("div",{ref:R,className:(t?"h-[600px]":"h-fit")+" keen-slider  py-2 shadow-lg  overflow-scroll rounded-md",children:0===v.length?(0,s.jsx)(o.Z,{}):null==v?void 0:v.map(e=>(0,s.jsxs)("div",{className:"keen-slider__slide snap-center flex flex-col items-center",children:[(null==_?void 0:_.status)==="authenticated"&&(null==I?void 0:I.isAdmin)==="1"&&(0,s.jsx)("button",{className:"bg-green-400 rounded-full px-2 my-2 hover:scale-105 w-fit text-center mx-2",onClick:()=>D(null==e?void 0:e.id),children:"إضافة"}),(0,s.jsxs)("div",{className:" flex flex-col items-center justify-start flex-shrink-0 w-full mr-1",onClick:()=>{S.push("/seriesAndEpisodes?seriesName=".concat(null==e?void 0:e.seriesName))},children:[(0,s.jsx)("div",{className:(t?"w-72 h-44":"w-24 h-32")+" relative w-24 h-32 sm:w-full sm:h-64 rounded-md overflow-hidden mx-2 hover:cursor-pointer ",children:(0,s.jsx)(d.default,{src:null==e?void 0:e.seriesImage,layout:"fill",objectFit:"cover",objectPosition:"top",alt:null==e?void 0:e.seriesName})}),(0,s.jsx)("h1",{className:"text-white text-center m-2 text-[10px] sm:text-[15px] w-full line-clamp-2 font-bold",children:null==e?void 0:e.seriesName})]},null==e?void 0:e.id)]},e.id))})]})}}}]);