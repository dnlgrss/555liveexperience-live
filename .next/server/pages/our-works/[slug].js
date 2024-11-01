"use strict";(()=>{var e={};e.id=347,e.ids=[347,888],e.modules={9947:(e,r,t)=>{t.a(e,async(e,i)=>{try{t.r(r),t.d(r,{config:()=>x,default:()=>u,getServerSideProps:()=>p,getStaticPaths:()=>m,getStaticProps:()=>h,reportWebVitals:()=>v,routeModule:()=>_,unstable_getServerProps:()=>k,unstable_getServerSideProps:()=>f,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>g});var s=t(7093),l=t(5244),a=t(1323),o=t(2084),d=t(9158),n=t(5044),c=e([n]);n=(c.then?(await c)():c)[0];let u=(0,a.l)(n,"default"),h=(0,a.l)(n,"getStaticProps"),m=(0,a.l)(n,"getStaticPaths"),p=(0,a.l)(n,"getServerSideProps"),x=(0,a.l)(n,"config"),v=(0,a.l)(n,"reportWebVitals"),g=(0,a.l)(n,"unstable_getStaticProps"),j=(0,a.l)(n,"unstable_getStaticPaths"),w=(0,a.l)(n,"unstable_getStaticParams"),k=(0,a.l)(n,"unstable_getServerProps"),f=(0,a.l)(n,"unstable_getServerSideProps"),_=new s.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/our-works/[slug]",pathname:"/our-works/[slug]",bundlePath:"",filename:""},components:{App:d.default,Document:o.default},userland:n});i()}catch(e){i(e)}})},1653:(e,r,t)=>{t.d(r,{Z:()=>UI_AccordionMenu});var i=t(997),s=t(6689),l=t(5675),a=t.n(l);let o={src:"/_next/static/media/PLUS_white.7a4d0778.svg",height:15,width:15,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/PLUS_black.05070c5a.svg",height:15,width:15,blurWidth:0,blurHeight:0},n={src:"/_next/static/media/MINUS_white.9a562e47.svg",height:15,width:15,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/MINUS_black.4eb902fd.svg",height:15,width:15,blurWidth:0,blurHeight:0};var u=t(2567),h=t(496),m=t(5205);let UI_AccordionMenu=({previousWorks:e})=>{let[r,t]=(0,s.useState)(null),[l,p]=(0,s.useState)(null);(0,s.useEffect)(()=>{p(window.innerWidth);let handleResize=()=>{p(window.innerWidth)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]);let toggleItem=e=>{t(r===e?null:e)},hasExtraData=e=>e.description||e.image1||e.hasVideo;return i.jsx("div",{children:e.map(e=>(0,i.jsxs)("div",{className:"accordion-item",style:{opacity:r===e.id?1:.6,borderBottom:r===e.id&&"1px solid rgb(204, 204, 204, 0.6)"},children:[(0,i.jsxs)("div",{className:`accordion-title ${hasExtraData(e.previousWorks)?"":"no-linker"}`,onClick:()=>hasExtraData(e.previousWorks)&&toggleItem(e.id),children:[e.previousWorks.title,i.jsx("div",{children:l<480?hasExtraData(e.previousWorks)&&(r===e.id?i.jsx(a(),{src:c,style:{width:"30px",fontSize:"20px"},alt:"minus icon"}):i.jsx(a(),{src:d,style:{width:"30px",fontSize:"20px"},alt:"plus icon"})):hasExtraData(e.previousWorks)&&(r===e.id?i.jsx(a(),{src:n,style:{width:"30px",height:"30px",fontSize:"20px"},alt:"minus icon"}):i.jsx(a(),{src:o,style:{width:"30px",height:"30px"},alt:"plus icon"}))})]}),r===e.id&&(0,i.jsxs)("div",{className:"accordion-content",children:[e.previousWorks.hasVideo?e.previousWorks.video&&i.jsx(u.Z,{verticalVideoUrl:(0,h.W)(e.previousWorks.video),horizontalVideoUrl:(0,h.W)(e.previousWorks.video),isAccordion:!0}):i.jsx("div",{className:"header-picture-accordion",children:i.jsx(a(),{src:e.previousWorks.headerImage.mediaItemUrl,alt:e.previousWorks.headerImage.altText,fill:!0})}),(0,i.jsxs)("div",{className:"accordion-grid",children:[l<480&&e.previousWorks.description&&i.jsx("p",{children:e.previousWorks.description}),l<480&&i.jsx("br",{}),l<480&&i.jsx("br",{}),l<480&&e.previousWorks.description2&&i.jsx("p",{children:e.previousWorks.description2}),e.previousWorks.description&&(0,i.jsxs)("div",{className:"accordion-labels",children:[(0,i.jsxs)("div",{children:[i.jsx("p",{className:"work-label",children:"Category"}),i.jsx("p",{className:"greyed-out",children:e.previousWorks.category})]}),(0,i.jsxs)("div",{children:[i.jsx("p",{className:"work-label",children:"Client"}),i.jsx("p",{className:"greyed-out",children:e.previousWorks.client})]}),(0,i.jsxs)("div",{children:[i.jsx("p",{className:"work-label",children:"Location"}),i.jsx("p",{className:"greyed-out",children:e.previousWorks.location})]})]}),(0,i.jsxs)("div",{children:[l>480&&e.previousWorks.description&&i.jsx("p",{children:e.previousWorks.description}),i.jsx("br",{}),l>480&&e.previousWorks.description2&&i.jsx("p",{children:e.previousWorks.description2})]})]}),i.jsx("div",{className:"accordion-image-container",children:e.previousWorks.image1&&(0,m.n)(e.previousWorks).map((e,r)=>i.jsx(a(),{src:e.url,alt:e.alt,fill:!0},r))})]})]},e.id))})}},6545:(e,r,t)=>{t.d(r,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=t(997),s=t(6689),l=t(5675),a=t.n(l),o=t(1664),d=t.n(o),n=t(7034);let __WEBPACK_DEFAULT_EXPORT__=({work:e})=>{let[r,t]=(0,s.useState)(!0);return(0,i.jsxs)("div",{className:"related-box",children:[i.jsx("div",{className:"related-project",children:(0,i.jsxs)(d(),{href:`${e.slug}`,children:[r&&i.jsx("div",{className:"loader-container",style:{width:"100%",height:"100%"},children:i.jsx(n.Z,{})}),i.jsx(a(),{src:e.works.featuredImage.mediaItemUrl,alt:e.works.featuredImage.altText,fill:!0,onLoadingComplete:()=>t(!1),onError:()=>t(!1)})]})}),i.jsx(d(),{href:`${e.slug}`,className:"related-title",children:e.works.shortTitle})]})}},5044:(e,r,t)=>{t.a(e,async(e,i)=>{try{t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__,getServerSideProps:()=>getServerSideProps});var s=t(997),l=t(6689),a=t(5675),o=t.n(a),d=t(968),n=t.n(d);t(1664);var c=t(6099),u=t(1653),h=t(1372),m=t(3049),p=t(9114),x=t(2905),v=t(2567),g=t(496),j=t(5205),w=t(6545),k=e([x]);x=(k.then?(await k)():k)[0];let getServerSideProps=async({params:e})=>{let{slug:r}=e;console.log(`Fetching data for slug: ${r}`);let t=p.gql`
    query Event($id: ID!) {
        work(id: $id, idType: SLUG) {
            works {
                video
                hasVideo
                headerPicture{
                    altText
                    mediaItemUrl
                }
                title
                relatedWorks {
                    ... on Work {
                        id
                        slug
                        works {
                            title
                            shortTitle
                            featuredImage{
                            altText
                            mediaItemUrl
                            }
                        }
                    }
                }
                previousWorks {
                    ... on PreviousWork {
                        id
                        previousWorks {
                            hasVideo
                            video
                            headerImage {
                                altText
                                mediaItemUrl
                            }
                            title
                            description
                            description2
                            category
                            client
                            location
                            image1 {
                                altText
                                mediaItemUrl
                            }
                            image2 {
                                altText
                                mediaItemUrl
                            }
                            image3 {
                                altText
                                mediaItemUrl
                            }
                            image4 {
                                altText
                                mediaItemUrl
                            }
                        }
                    }
                }
                location
                intro2
                intro
                category
                client
                featuredImage{
                    altText
                    mediaItemUrl
                }
                headerPicture {
                    altText
                    mediaItemUrl
                }
                image1 {
                    altText
                    mediaItemUrl
                }
                image2 {
                    altText
                    mediaItemUrl
                }
                image3 {
                    altText
                    mediaItemUrl
                }
                image4 {
                    altText
                    mediaItemUrl
                }
                image5 {
                    altText
                    mediaItemUrl
                }
                image6 {
                    altText
                    mediaItemUrl
                }
                image7 {
                    altText
                    mediaItemUrl
                }
                image8 {
                    altText
                    mediaItemUrl
                }
            }
            slug
            seo {
                fullHead
                title
                metaDesc
            }
        }
    }
  `;try{let e=await m.L.query({query:t,variables:{id:r}});if(console.log(`Data fetched successfully for slug: ${r}`,e.data),!e?.data?.work?.works)return{redirect:{destination:"/",permanent:!1}};let i=e?.data;return{props:{data:i}}}catch(e){return console.error(`Error fetching data for slug: ${r}`,e),{props:{data:null,error:"Failed to fetch data"}}}},__WEBPACK_DEFAULT_EXPORT__=({data:e})=>{let[r,t]=(0,l.useState)(),i=e?.work?.seo,{works:a}=e?.work,{relatedWorks:d}=a,{previousWorks:m}=a,p=(0,j.n)(a),[k,f]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let e=document.querySelector(".header"),handleScroll=()=>{window.scrollY>0?e.classList.remove("transparent"):e.classList.add("transparent")};return window.addEventListener("scroll",handleScroll),handleScroll(),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,l.useEffect)(()=>{f(window.innerWidth);let handleResize=()=>{f(window.innerWidth)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),(0,l.useEffect)(()=>{if(k<480)return;let e=document.querySelector(".working-title"),r=document.querySelector(".work-intro"),t=e.getBoundingClientRect().top+window.scrollY,i=r.offsetTop-80,handleScroll=()=>{let r=window.scrollY;t+r<i?e.style.transform=`translateY(${r}px)`:e.style.transform=`translateY(${i-t}px)`};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[k]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:[s.jsx("title",{children:i.title}),s.jsx("meta",{name:"description",content:i.metaDesc}),s.jsx("link",{rel:"icon",href:"/favicon.ico"}),(0,x.default)(i.fullHead)]}),s.jsx(c.Z,{}),a.hasVideo?(0,s.jsxs)(s.Fragment,{children:[s.jsx(v.Z,{verticalVideoUrl:(0,g.W)(a.video),horizontalVideoUrl:(0,g.W)(a.video)}),console.log(a.video),console.log((0,g.W)(a.video)),s.jsx("h1",{className:"working-title",children:a.title})]}):(0,s.jsxs)("div",{className:"header-picture",children:[s.jsx(o(),{src:a.headerPicture.mediaItemUrl,alt:a.headerPicture.altText,style:{layout:"fill",objectFit:"cover"},fill:!0}),s.jsx("h1",{className:"working-title",children:a.title})]}),(0,s.jsxs)("div",{className:"work-intro",children:[s.jsx("p",{children:a.intro}),s.jsx("p",{children:a.intro2})]}),(0,s.jsxs)("div",{className:"work-labels",children:[(0,s.jsxs)("div",{children:[s.jsx("p",{className:"work-label",children:"Category"}),s.jsx("p",{children:a.category})]}),(0,s.jsxs)("div",{children:[s.jsx("p",{className:"work-label",children:"Client"}),s.jsx("p",{children:a.client})]}),(0,s.jsxs)("div",{children:[s.jsx("p",{className:"work-label",children:"Location"}),s.jsx("p",{children:a.location})]})]}),s.jsx("div",{className:"work-images",children:p.map((e,r)=>s.jsx(o(),{src:e.url,alt:e.alt,fill:!0},r))}),(0,s.jsxs)("div",{className:"previous-edition-section",children:[!!m&&s.jsx("h2",{children:"Previous Editions"}),!!m&&s.jsx(u.Z,{previousWorks:m})]}),(0,s.jsxs)("div",{className:"related-projects-section",children:[!!d&&s.jsx("h2",{children:"Related Projects"}),s.jsx("div",{children:!!d&&d.map(e=>s.jsx("div",{className:"related-projects",children:s.jsx(w.Z,{work:e})},e.slug))})]}),s.jsx(h.Z,{})]})};i()}catch(e){i(e)}})},9114:e=>{e.exports=require("@apollo/client")},8028:e=>{e.exports=require("@apollo/client/dev")},1820:e=>{e.exports=require("@apollo/client/react")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},2905:e=>{e.exports=import("html-react-parser")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")},5205:(e,r,t)=>{t.d(r,{n:()=>getImageData});let getImageData=e=>{let r=[],t=1;for(;e[`image${t}`];){let i=e[`image${t}`];i.mediaItemUrl&&i.altText&&r.push({url:i.mediaItemUrl,alt:i.altText}),t++}return r}},496:(e,r,t)=>{t.d(r,{W:()=>transformVimeoLink});let transformVimeoLink=e=>{if(!(e&&e.includes("vimeo.com")))return e;{let r=e.split("/").pop(),t=`https://player.vimeo.com/video/${r}`;return t}}}};var r=require("../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[761,29,859,450,158,546,567],()=>__webpack_exec__(9947));module.exports=t})();