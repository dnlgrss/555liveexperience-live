exports.id=158,exports.ids=[158],exports.modules={5315:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});let l={src:"/_next/static/media/logo-black-white.1ba975a3.svg",height:1065,width:1920,blurWidth:0,blurHeight:0}},9555:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});let l={src:"/_next/static/media/logo-white-yellow.e7381206.svg",height:1065,width:1920,blurWidth:0,blurHeight:0}},4079:(e,t,r)=>{"use strict";r.d(t,{Z:()=>UI_Icon});var l=r(997),n=r(6689),i=r(5675),s=r.n(i),a=r(1664),o=r.n(a),d=r(5315),h=r(9555);let UI_Icon=()=>{let[e,t]=(0,n.useState)(null);return(0,n.useEffect)(()=>{t(window.innerWidth);let handleResize=()=>{t(window.innerWidth)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),l.jsx(o(),{href:"/",children:e<480?l.jsx(s(),{src:d.Z,alt:"555 Live Experience Logo",className:"logo",style:{width:"80px",height:"auto",margin:"10px 0 0 16px"}}):l.jsx(s(),{src:h.Z,alt:"555 Live Experience Logo",className:"logo",style:{width:"80px",height:"auto",margin:"10px 0 0 16px"}})})}},7034:(e,t,r)=>{"use strict";r.d(t,{Z:()=>UI_Loader});var l=r(997);r(6689);let n={src:"/_next/static/media/loader.176b7663.svg",height:170,width:173,blurWidth:0,blurHeight:0};var i=r(5675),s=r.n(i);let UI_Loader=()=>l.jsx("div",{className:"loader",children:l.jsx(s(),{src:n,alt:"loader"})})},9158:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>App});var l=r(997),n=r(5031),i=r.n(n),s=r(6689),a=r(1163),o=r(1820),d=(r(8028),r(3049)),h=r(968);r(5675),r(5315),r(9555),r(4079);var c=r(7034);function App({Component:e,pageProps:t}){let[r,n]=(0,s.useState)(!1),h=(0,a.useRouter)();return(0,s.useEffect)(()=>{let handleStart=()=>n(!0),handleComplete=()=>n(!1);return h.events.on("routeChangeStart",handleStart),h.events.on("routeChangeComplete",handleComplete),h.events.on("routeChangeError",handleComplete),()=>{h.events.off("routeChangeStart",handleStart),h.events.off("routeChangeComplete",handleComplete),h.events.off("routeChangeError",handleComplete)}},[h]),l.jsx(o.ApolloProvider,{client:d.L,children:r?l.jsx("div",{className:"loader-container",style:{width:"100dvw",height:"100dvh"},children:l.jsx(c.Z,{})}):l.jsx("main",{className:i().className,children:l.jsx(e,{...t})})})}r(7945),r(1701),r(8914),r(2048),r(7698),r(477),r(3071),r(4202),r(2830),r(7451),r(8038),r(1928),r(2441),r(6111)},6111:()=>{},3071:()=>{},7945:()=>{},477:()=>{},4202:()=>{},1701:()=>{},2048:()=>{},8914:()=>{},2830:()=>{},2441:()=>{},8038:()=>{},7451:()=>{},7698:()=>{},1928:()=>{},3049:(e,t,r)=>{"use strict";r.d(t,{L:()=>i});var l=r(9114);let n=l.ApolloLink.from([new l.HttpLink({uri:"https://vault.555liveexperience.com/graphql",useGETForQueries:!0})]),i=new l.ApolloClient({link:n,cache:new l.InMemoryCache,defaultOptions:{query:{fetchPolicy:"network-only"}}})}};