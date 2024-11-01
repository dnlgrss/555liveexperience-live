"use strict";(()=>{var e={};e.id=901,e.ids=[901,888],e.modules={9968:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>u,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>p,reportWebVitals:()=>v,routeModule:()=>j,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>g});var s=r(7093),a=r(5244),n=r(1323),o=r(2084),l=r(9158),c=r(2812),d=e([c]);c=(d.then?(await d)():d)[0];let u=(0,n.l)(c,"default"),p=(0,n.l)(c,"getStaticProps"),h=(0,n.l)(c,"getStaticPaths"),x=(0,n.l)(c,"getServerSideProps"),m=(0,n.l)(c,"config"),v=(0,n.l)(c,"reportWebVitals"),g=(0,n.l)(c,"unstable_getStaticProps"),w=(0,n.l)(c,"unstable_getStaticPaths"),f=(0,n.l)(c,"unstable_getStaticParams"),S=(0,n.l)(c,"unstable_getServerProps"),b=(0,n.l)(c,"unstable_getServerSideProps"),j=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/our-network",pathname:"/our-network",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:c});i()}catch(e){i(e)}})},2812:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>ourNetwork,getStaticProps:()=>getStaticProps});var s=r(997),a=r(6689),n=r(968),o=r.n(n),l=r(3049),c=r(9114),d=r(2905),u=r(6099),p=r(1372),h=e([d]);d=(h.then?(await h)():h)[0];let getStaticProps=async()=>{let e=c.gql`
    query fecthPageSEO($id: ID = "our-network") {
      page(id: $id, idType: URI) {
        slug
        title
        content
      seo{
          metaDesc
          fullHead
          title
        }
      }
    }
  `,t=await l.L.query({query:e}),r=t.data.page;return{props:{data:r}}};function ourNetwork({data:e}){let{seo:t}=e,r=["professionals","freelancers","creatives","technicians","event experts","performers/artist"],[i,n]=(0,a.useState)(r[0].split("").map(e=>({char:e,visible:!1}))),[l,c]=(0,a.useState)(0),[h,x]=(0,a.useState)(null);return(0,a.useEffect)(()=>{x(window.innerWidth);let handleResize=()=>{x(window.innerWidth)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),(0,a.useEffect)(()=>{let e=setTimeout(()=>{n(e=>{let t=e.every(({visible:e})=>e);return t?e:e.map((t,r)=>({...t,visible:r<=e.findIndex(({visible:e})=>!e)||t.visible}))})},20),t=i.every(({visible:e})=>e);if(t){let e=setTimeout(()=>{let e=(l+1)%r.length;n(r[e].split("").map(e=>({char:e,visible:!1}))),c(e)},2e3);return()=>clearTimeout(e)}return()=>clearTimeout(e)},[i,l]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o(),{children:[s.jsx("title",{children:t.title}),s.jsx("meta",{name:"description",content:t.metaDesc}),s.jsx("link",{rel:"icon",href:"/favicon.ico"}),(0,d.default)(t.fullHead)]}),s.jsx(u.Z,{}),(0,s.jsxs)("div",{className:"network-page",children:[(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"network-h1",children:"Our Network"}),(0,s.jsxs)("div",{className:"our-network-container",children:[s.jsx("p",{className:"network-intro-p network-intro-p-width",children:"Enter the world of extraordinary events with us, where we excel in industries like Music, Sports, Corporate, Live Broadcast, Public Events, and Fan Bases. Whether it’s providing mere technical support or crafting captivating shows from inception to execution, we invite you to collaborate with us in delivering unparalleled experiences."}),(0,s.jsxs)("div",{className:"network-quote",children:[s.jsx("p",{children:"We are always  "}),s.jsx("p",{children:"looking for talented"}),s.jsx("div",{className:"animated-word",children:i.map(({char:e,visible:t},r)=>s.jsx("p",{style:{visibility:t?"visible":"hidden",height:`${h<480?"48px":"73px"}`},children:" "===e?"\xa0":e},r))}),s.jsx("p",{children:"from all over the world."})]}),s.jsx("div",{className:"subheaders",children:s.jsx("div",{children:s.jsx("p",{className:"join-us-width",style:{marginLeft:"20px"},children:"Join us as a team member or hire our services to give your audiences and fans the experience of a lifetime and witness the transformation of every occasion into a timeless moment."})})})]})]}),s.jsx(p.Z,{})]})]})}i()}catch(e){i(e)}})},9114:e=>{e.exports=require("@apollo/client")},8028:e=>{e.exports=require("@apollo/client/dev")},1820:e=>{e.exports=require("@apollo/client/react")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},2905:e=>{e.exports=import("html-react-parser")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[761,29,859,450,158,546],()=>__webpack_exec__(9968));module.exports=r})();