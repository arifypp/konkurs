import{o as d,g as f,l as u,D as g,i as h,j as w,k as b,a as v,c as n,w as r,m as l,v as i,e as a,T as c,n as x,q as _,E as k}from"./app-25a6ff75.js";const B=["type"],T={__name:"DangerButton",props:{type:{type:String,default:"submit"}},setup(e){return(s,t)=>(d(),f("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"},[u(s.$slots,"default")],8,B))}},$={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},E=a("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"},null,-1),S=[E],V={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:s}){const t=e;g(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const m=()=>{t.closeable&&s("close")},y=o=>{o.key==="Escape"&&t.show&&m()};h(()=>document.addEventListener("keydown",y)),w(()=>{document.removeEventListener("keydown",y),document.body.style.overflow=null});const p=b(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(o,D)=>(d(),v(k,{to:"body"},[n(c,{"leave-active-class":"duration-200"},{default:r(()=>[l(a("div",$,[n(c,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:r(()=>[l(a("div",{class:"fixed inset-0 transform transition-all",onClick:m},S,512),[[i,e.show]])]),_:1}),n(c,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[l(a("div",{class:x(["mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",p.value])},[e.show?u(o.$slots,"default",{key:0}):_("",!0)],2),[[i,e.show]])]),_:3})],512),[[i,e.show]])]),_:3})]))}},C=["type"],W={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(e){return(s,t)=>(d(),f("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"},[u(s.$slots,"default")],8,C))}};export{T as _,V as a,W as b};
