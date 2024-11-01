"use strict";(()=>{var e={};e.id=933,e.ids=[933,888],e.modules={2118:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>u,getServerSideProps:()=>g,getStaticPaths:()=>x,getStaticProps:()=>p,reportWebVitals:()=>h,routeModule:()=>j,unstable_getServerProps:()=>k,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>w});var l=r(7093),i=r(5244),a=r(1323),o=r(2084),n=r(9158),d=r(116),c=e([d]);d=(c.then?(await c)():c)[0];let u=(0,a.l)(d,"default"),p=(0,a.l)(d,"getStaticProps"),x=(0,a.l)(d,"getStaticPaths"),g=(0,a.l)(d,"getServerSideProps"),m=(0,a.l)(d,"config"),h=(0,a.l)(d,"reportWebVitals"),w=(0,a.l)(d,"unstable_getStaticProps"),S=(0,a.l)(d,"unstable_getStaticPaths"),f=(0,a.l)(d,"unstable_getStaticParams"),k=(0,a.l)(d,"unstable_getServerProps"),_=(0,a.l)(d,"unstable_getServerSideProps"),j=new l.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/our-works",pathname:"/our-works",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:d});s()}catch(e){s(e)}})},8229:(e,t,r)=>{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(997),l=r(6689),i=r(1664),a=r.n(i),o=r(5675),n=r.n(o),d=r(7034);let __WEBPACK_DEFAULT_EXPORT__=({single:e,slug:t})=>{let[r,i]=(0,l.useState)(!0);return(0,s.jsxs)("div",{className:"work-box",children:[s.jsx("div",{className:"work-box-image",children:(0,s.jsxs)(a(),{href:`/${t}/${e.slug}`,children:[r&&s.jsx("div",{className:"loader-container",style:{width:"100%",height:"450px"},children:s.jsx(d.Z,{})}),s.jsx(n(),{src:e.works.featuredImage.mediaItemUrl,alt:e.works.featuredImage.altText,fill:!0,onLoadingComplete:()=>i(!1),onError:()=>i(!1)})]})}),s.jsx(a(),{href:`/${t}/${e.slug}`,className:"work-title",children:e.works.title})]})}},116:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>ourWorks,getServerSideProps:()=>getServerSideProps});var l=r(997),i=r(6689),a=r(968),o=r.n(a),n=r(5675),d=r.n(n),c=r(8229),u=r(7034),p=r(3049),x=r(9114),g=r(2905),m=r(6099),h=r(1372),w=r(603),S=e([g]);g=(S.then?(await S)():S)[0];let getServerSideProps=async()=>{let e=x.gql`
    query fecthPageSEO($id: ID = "our-works") {
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
        works (first: 100) {
            nodes {
                id
                slug
                works{
                    title
                    featuredImage {
                        altText
                        mediaItemUrl
                    }
                }
            }
        }
        clients (first: 100){
            nodes {
                clients {
                    title
                    clientLogoLight {
                        altText
                        mediaItemUrl
                    }
                    clientLogoDark {
                        altText
                        mediaItemUrl
                    }
                }
            }
        }
    }
  `,t=await p.L.query({query:e}),r=t.data;return{props:{data:r}}};function ourWorks({data:e}){let t=e?.page?.seo,r=e.works.nodes,s=e?.clients?.nodes,a=(0,w.L)(r),[n,p]=(0,i.useState)(null);return(0,i.useEffect)(()=>{p(window.innerWidth);let handleResize=()=>{p(window.innerWidth)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o(),{children:[l.jsx("title",{children:t.title}),l.jsx("meta",{name:"description",content:t.metaDesc}),l.jsx("link",{rel:"icon",href:"/favicon.ico"}),(0,g.default)(t.fullHead)]}),l.jsx(m.Z,{}),(0,l.jsxs)("div",{className:"works-section",children:[(0,l.jsxs)("div",{children:[l.jsx("h1",{className:"network-h1",children:"Our Works"}),l.jsx("div",{className:"works-list",children:a.map(t=>l.jsx(i.Suspense,{fallback:l.jsx(u.Z,{}),children:l.jsx(c.Z,{single:t,slug:e.page.slug})},t.id))}),(0,l.jsxs)("div",{className:"selected-clients",children:[l.jsx("p",{children:"Selected Clients"}),l.jsx("div",{className:"selected-clients-logos",children:[...s].reverse().map((e,t)=>l.jsx(i.Suspense,{fallback:l.jsx(u.Z,{}),children:l.jsx("div",{className:"selected-clients-logos-image",children:l.jsx(d(),{src:n<480?e.clients.clientLogoDark.mediaItemUrl:e.clients.clientLogoLight.mediaItemUrl,alt:n<480?e.clients.clientLogoDark.altText:e.clients.clientLogoLight.altText,fill:!0})})},t))})]})]}),l.jsx(h.Z,{})]})]})}s()}catch(e){s(e)}})},9114:e=>{e.exports=require("@apollo/client")},8028:e=>{e.exports=require("@apollo/client/dev")},1820:e=>{e.exports=require("@apollo/client/react")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},2905:e=>{e.exports=import("html-react-parser")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")},603:(e,t,r)=>{r.d(t,{L:()=>reorderWorks});let reorderWorks=e=>{let t=e.filter(e=>"Happiness Program"===e.works.title),r=e.filter(e=>"Happiness Program"!==e.works.title);return[...r,...t]}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[761,29,859,450,158,546],()=>__webpack_exec__(2118));module.exports=r})();