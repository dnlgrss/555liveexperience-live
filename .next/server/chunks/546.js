"use strict";exports.id=546,exports.ids=[546],exports.modules={1372:(e,s,r)=>{r.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=r(997);r(6689);let __WEBPACK_DEFAULT_EXPORT__=()=>(0,a.jsxs)("div",{className:"credits-area",children:[(0,a.jsxs)("span",{children:["Ⓒ ",new Date().getFullYear()]}),a.jsx("p",{style:{fontSize:0},children:"nophone"}),a.jsx("p",{children:"555 Live Experience"})]})},6099:(e,s,r)=>{r.d(s,{Z:()=>Layout_Header});var a=r(997),n=r(6689),l=r(4079);let UI_Hamburger=({onClick:e,isOpen:s})=>(0,a.jsxs)("div",{className:"hamburger-menu",onClick:e,children:[a.jsx("span",{className:`line ${s?"hidden":""}`}),a.jsx("span",{className:`line ${s?"open":""}`}),a.jsx("span",{className:`line ${s?"hidden":""}`})]});var i=r(1664),c=r.n(i);let Layout_Sidebar=({isOpen:e,toggleSidebar:s})=>(0,a.jsxs)("div",{className:`sidebar ${e?"open":""}`,children:[(0,a.jsxs)("div",{className:"menu",children:[a.jsx(c(),{href:"/why-us",children:a.jsx("p",{className:"menu-item",children:"Why us?"})}),(0,a.jsxs)(c(),{href:"/our-works",children:[" ",(0,a.jsxs)("p",{className:"menu-item",style:{lineHeight:"55px"},children:["Our ",a.jsx("br",{})," Works"]})]}),a.jsx(c(),{href:"/our-network",children:(0,a.jsxs)("p",{className:"menu-item shorter",style:{lineHeight:"55px"},children:["Our ",a.jsx("br",{})," Network"]})}),a.jsx(c(),{href:"/contacts",children:a.jsx("p",{className:"menu-item no-line",children:"Contacts"})})]}),(0,a.jsxs)("div",{className:"social-media",children:[a.jsx("p",{className:"follow-us",children:"Follow us"}),a.jsx("a",{href:"https://www.linkedin.com/company/555-live-events/",className:"social-link",children:"Linkedin"}),a.jsx("a",{href:"https://www.instagram.com/555.live/",className:"social-link",children:"Instagram"}),a.jsx("a",{href:"https://vimeo.com/user214578179",className:"social-link",children:"Vimeo"})]})]}),Layout_DesktopMenu=()=>(0,a.jsxs)("div",{className:"desktop-menu",children:[a.jsx(c(),{href:"/why-us",children:a.jsx("p",{className:"desktop-menu-item",children:"Why us?"})}),(0,a.jsxs)(c(),{href:"/our-works",children:[" ",a.jsx("p",{className:"desktop-menu-item",children:"Our Works"})]}),a.jsx(c(),{href:"/our-network",children:a.jsx("p",{className:"desktop-menu-item",children:"Our Network"})}),a.jsx(c(),{href:"/contacts",children:a.jsx("p",{className:"desktop-menu-item",children:"Contacts"})})]}),Layout_Header=({isHome:e})=>{let[s,r]=(0,n.useState)(!1),toggleSidebar=()=>{r(!s)};return(0,n.useEffect)(()=>{s?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}),(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:`overlay ${s?"active":""}`,onClick:toggleSidebar}),a.jsx(Layout_Sidebar,{isOpen:s,toggleSidebar:toggleSidebar}),a.jsx(UI_Hamburger,{onClick:toggleSidebar,isOpen:s}),(0,a.jsxs)("div",{className:"header transparent",style:{background:`${e&&"transparent"}`},children:[a.jsx(l.Z,{}),a.jsx(Layout_DesktopMenu,{})," "]})]})}},2084:(e,s,r)=>{r.r(s),r.d(s,{default:()=>Document});var a=r(997),n=r(6859);function Document(){return(0,a.jsxs)(n.Html,{lang:"en",children:[a.jsx(n.Head,{}),(0,a.jsxs)("body",{children:[a.jsx(n.Main,{}),a.jsx(n.NextScript,{})]})]})}}};