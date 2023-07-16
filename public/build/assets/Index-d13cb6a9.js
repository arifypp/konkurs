import{c as e,A as Z,L as G,H as X,P as $,Z as ee,p as te,M as I,b as i,s as oe,K as E,r as s,o as F,g as N,w as t,h as V,O as ne,J as Y,f as u,n as h,N as ae,t as v,e as re,a as se}from"./app-25a6ff75.js";import{_ as le}from"./AuthenticatedLayout-5a1cbb61.js";import{M as de,h as ue}from"./moment-4135710f.js";import ie from"./Add-21498130.js";import ce from"./Edit-6176aa0e.js";import{_ as me}from"./_plugin-vue_export-helper-c27b6911.js";import"./SaveOutlined-4997a77f.js";var _e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"};const ke=_e;function z(r){for(var n=1;n<arguments.length;n++){var l=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(l).filter(function(k){return Object.getOwnPropertyDescriptor(l,k).enumerable}))),o.forEach(function(k){fe(r,k,l[k])})}return r}function fe(r,n,l){return n in r?Object.defineProperty(r,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[n]=l,r}var M=function(n,l){var o=z({},n,l.attrs);return e(Z,z({},o,{icon:ke}),null)};M.displayName="FormOutlined";M.inheritAttrs=!1;const pe=M,ye={components:{AuthenticatedLayout:le,MailOutlined:de,CalendarOutlined:G,FormOutlined:pe,DeleteOutlined:X,PlusOutlined:$,Head:ee,Link:te,Add:ie,Edit:ce,Modal:I},setup(){const r=i(!1),n=i(!1),l=i(null),o=oe({from_date:null,to_date:null,category:null}),k=i("inline"),D=i("YYYY-MM-DD"),K=i([{title:"Company Name",dataIndex:"konkurs_name",key:"konkurs_name",slots:{customRender:"konkurs_name"}},{title:"Ad. Name",dataIndex:"konkurs_advocate",key:"konkurs_advocate",slots:{customRender:"konkurs_advocate"}},{title:"Ad. Email",dataIndex:"konkurs_advocate_email",key:"konkurs_advocate_email",slots:{customRender:"konkurs_advocate_email"}},{title:"Org Number",dataIndex:"konkurs_phone",key:"konkurs_phone",slots:{customRender:"konkurs_phone"}},{title:"Location",dataIndex:"konkurs_category_id",key:"konkurs_category_id",slots:{customRender:"konkurs_category_id"}},{title:"Date",dataIndex:"created_at",key:"created_at",slots:{customRender:"created_at"}},{title:"Action",dataIndex:"action",key:"action",slots:{customRender:"action"}}]),O=i(E().props.konkursData),b=i(E().props.konkursCategories),C=d=>{const m=b.value.find(c=>c.id==d);return m?m.name:""},y=i(!1),A=i({current:1,pageSize:10,total:0,showSizeChanger:!0,showQuickJumper:!0}),_=(d,m,c)=>{console.log(d),console.log(m),console.log(c)},f=d=>{console.log("Success:",d)},g=()=>{r.value=!0},w=i(null);return{AddKonkursVisible:r,form:o,formLayout:k,dateFormat:D,columns:K,data:O,loading:y,pagination:A,handleTableChange:_,onFinish:f,AddKonkursDrawer:g,moment:ue,getCategoryName:C,categories:b,EditKonkurs:d=>{n.value=!0,l.value=d,w.name="test"},EditKonkursVisible:n,EditKonkursId:l,deleteKonkurs:d=>{const m=route("user.konkurs.destroy",{id:d});I.confirm({title:"Are you sure delete this Konkurs Category?",okText:"Yes",okType:"danger",cancelText:"No",onOk:()=>{ne.delete(m,{preserveScroll:!0,onSuccess:c=>{c.value=E().props.konkursData,Y.success("Konkurs Deleted Successfully")},onError:()=>{Y.error("Something Went Wrong")}})}})}}}};function ge(r,n,l,o,k,D){const K=s("Head"),O=s("Add"),b=s("a-breadcrumb-item"),C=s("PlusOutlined"),y=s("a-button"),A=s("MailOutlined"),_=s("Link"),f=s("a-menu-item"),g=s("CalendarOutlined"),w=s("a-menu"),p=s("a-col"),L=s("a-card-meta"),d=s("a-divider"),m=s("a-date-picker"),c=s("a-form-item"),T=s("a-select-option"),R=s("a-select"),S=s("a-row"),j=s("a-form"),H=s("form-outlined"),P=s("a-tooltip"),U=s("delete-outlined"),q=s("a-space"),B=s("a-table"),x=s("Edit"),J=s("a-card"),W=s("AuthenticatedLayout");return F(),N(V,null,[e(K,{title:"Manage Category"}),e(W,null,{header:t(()=>[e(b,null,{default:t(()=>[u("Manage Konkurs")]),_:1}),e(y,{type:"primary",style:{float:"right"},onClick:o.AddKonkursDrawer},{icon:t(()=>[e(C)]),default:t(()=>[u(" Add Konkurs ")]),_:1},8,["onClick"])]),default:t(()=>[e(O,{visible:o.AddKonkursVisible,onClose:n[0]||(n[0]=a=>o.AddKonkursVisible=!1)},null,8,["visible"]),e(S,{type:"flex",gutter:"16"},{default:t(()=>[e(p,{span:5,order:1},{default:t(()=>[e(w,{openKeys:r.openKeys,"onUpdate:openKeys":n[1]||(n[1]=a=>r.openKeys=a),selectedKeys:r.selectedKeys,"onUpdate:selectedKeys":n[2]||(n[2]=a=>r.selectedKeys=a),mode:"vertical",style:{width:"100%",height:"100vh"}},{default:t(()=>[e(f,{key:"1",class:h({"ant-menu-item-selected":r.route().current("user.konkurs.index")})},{icon:t(()=>[e(A)]),default:t(()=>[e(_,{href:r.route("user.konkurs.index")},{default:t(()=>[u(" All Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"]),e(f,{key:"2",class:h({"ant-menu-item-selected":r.route().current("user.konkurs.today")})},{icon:t(()=>[e(g)]),default:t(()=>[e(_,{href:r.route("user.konkurs.today")},{default:t(()=>[u(" Today Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"]),e(f,{key:"3",class:h({"ant-menu-item-selected":r.route().current("user.konkurs.yesterday")})},{icon:t(()=>[e(g)]),default:t(()=>[e(_,{href:r.route("user.konkurs.yesterday")},{default:t(()=>[u(" Yesterday Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"]),e(f,{key:"4",class:h({"ant-menu-item-selected":r.route().current("user.konkurs.monthly")})},{icon:t(()=>[e(g)]),default:t(()=>[e(_,{href:r.route("user.konkurs.monthly")},{default:t(()=>[u(" Monthly Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"]),e(f,{key:"5",class:h({"ant-menu-item-selected":r.route().current("user.konkurs.yearly")})},{icon:t(()=>[e(g)]),default:t(()=>[e(_,{href:r.route("user.konkurs.yearly")},{default:t(()=>[u(" Yearly Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"])]),_:1},8,["openKeys","selectedKeys"])]),_:1}),e(p,{span:19,order:2},{default:t(()=>[e(J,{style:{width:"100%",height:"100%",padding:"0px"}},{default:t(()=>[e(L,{title:"Advanced search in announcements",description:"https://w2.brreg.no/kunngjoring/index.jsp"}),e(d),e(j,{model:o.form,layout:o.formLayout,onFinish:o.onFinish,span:24},{default:t(()=>[e(S,{gutter:16},{default:t(()=>[e(p,{span:6},{default:t(()=>[e(c,{label:"From Date",rules:[{required:!0,message:"Please input from date!"}]},{default:t(()=>[e(m,{value:o.form.from_date,"onUpdate:value":n[3]||(n[3]=a=>o.form.from_date=a),format:o.dateFormat,span:24},null,8,["value","format"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(c,{label:"To Date",name:"to_date",rules:[{required:!0,message:"Please input to date!"}]},{default:t(()=>[e(m,{value:o.form.to_date,"onUpdate:value":n[4]||(n[4]=a=>o.form.to_date=a),format:o.dateFormat,span:24},null,8,["value","format"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(c,{label:"Category",name:"category",rules:[{required:!0,message:"Please input category!"}],span:"24"},{default:t(()=>[e(R,{value:o.form.category,"onUpdate:value":n[5]||(n[5]=a=>o.form.category=a),placeholder:"Select a category",span:24},{default:t(()=>[(F(!0),N(V,null,ae(o.categories,a=>(F(),se(T,{key:a.id,value:a.id},{default:t(()=>[u(v(a.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(c,{label:" ",name:"submit"},{default:t(()=>[e(y,{type:"primary","html-type":"submit",span:24},{default:t(()=>[u("Filter Konkurs")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","layout","onFinish"]),e(d),e(B,{columns:o.columns,"data-source":o.data,pagination:o.pagination,loading:o.loading,rowKey:a=>a.id},{konkurs_name:t(({text:a})=>[e(_,{href:r.route("user.konkurs.show",a)},{default:t(()=>[u(v(a)+" "+v(a.length>10?"...":""),1)]),_:2},1032,["href"])]),created_at:t(({text:a})=>[u(v(o.moment(a).format("DD MMMM, YYYY")),1)]),konkurs_category_id:t(({text:a})=>[u(v(o.getCategoryName(a)),1)]),action:t(({record:a})=>[re("span",null,[e(q,{size:"middle"},{default:t(()=>[e(P,{title:"Edit"},{default:t(()=>[e(y,{type:"primary",size:"medium",shape:"square",onClick:Q=>o.EditKonkurs(a.id)},{icon:t(()=>[e(H)]),_:2},1032,["onClick"])]),_:2},1024),e(P,{title:"Delete"},{default:t(()=>[e(y,{type:"danger",size:"medium",shape:"square",onClick:Q=>o.deleteKonkurs(a.id)},{icon:t(()=>[e(U)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:1},8,["columns","data-source","pagination","loading","rowKey"]),e(x,{visible:o.EditKonkursVisible,id:o.EditKonkursId,onClose:n[6]||(n[6]=a=>o.EditKonkursVisible=!1)},null,8,["visible","id"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}const we=me(ye,[["render",ge]]);export{we as default};
