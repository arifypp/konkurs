import{P as F,L as j,H as q,Z as J,p as Z,K as S,b as m,r as n,o as O,g as G,c as o,w as e,h as Q,J as y,M as D,O as L,f as c,n as f,t as h,a as N,e as X}from"./app-25a6ff75.js";import{_ as $}from"./AuthenticatedLayout-5a1cbb61.js";import ee from"./Add-21498130.js";import{M as oe,h as te}from"./moment-4135710f.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{S as se,F as ae,E as re}from"./SendOutlined-250360d3.js";import"./SaveOutlined-4997a77f.js";const le={components:{AuthenticatedLayout:$,PlusOutlined:F,MailOutlined:oe,CalendarOutlined:j,SendOutlined:se,FileExcelOutlined:ae,ExportOutlined:re,DeleteOutlined:q,Head:J,Link:Z,Add:ee},setup(){const d=S().props.konkursData,i=m(!1),K=m(!1),a=m(S().props.konkursCategories),b=t=>{const s=a.value.find(l=>l.id==t);return s?s.name:""},E=m([{title:"Company Name",dataIndex:"konkurs_name",key:"konkurs_name",slots:{customRender:"konkurs_name"}},{title:"Ad. Name",dataIndex:"konkurs_advocate",key:"konkurs_advocate",slots:{customRender:"konkurs_advocate"}},{title:"Ad. Email",dataIndex:"konkurs_advocate_email",key:"konkurs_advocate_email",slots:{customRender:"konkurs_advocate_email"}},{title:"Org Number",dataIndex:"konkurs_phone",key:"konkurs_phone",slots:{customRender:"konkurs_phone"}},{title:"Location",dataIndex:"konkurs_category_id",key:"konkurs_category_id",slots:{customRender:"konkurs_category_id"}},{title:"Email Status",dataIndex:"email_send",key:"email_send",slots:{customRender:"email_send"}},{title:"Date",dataIndex:"created_at",key:"created_at",slots:{customRender:"created_at"}},{title:"Action",dataIndex:"action",key:"action",slots:{customRender:"action"}}]),C=m({current:1,pageSize:10,total:0,showSizeChanger:!0,showTotal:(t,s)=>`Showing ${s[0]}-${s[1]} of ${t} items`}),x=()=>{K.value=!0},v=t=>{console.log("click ",t),g.value=t.key,k.value=t.keyPath},g=m([]),k=m(["sub1"])??[],w=t=>{const s=t.find(l=>this.openKeys.indexOf(l)===-1);this.rootSubmenuKeys.indexOf(s)===-1?this.openKeys=t:this.openKeys=s?[s]:[]},u=m({onChange:(t,s)=>{u.value.selectedRowKeys=t,console.log(`selectedRowKeys: ${t}`,"selectedRows: ",s)},onSelect:(t,s,l)=>{console.log(t,s,l)},onSelectAll:(t,s,l)=>{console.log(t,s,l)}});return{AddKonkursVisible:K,AddKonkursDrawer:x,handleClick:v,selectedKeys:g,openKeys:k,onOpenChange:w,TodayKonkurs:d,columns:E,loading:i,pagination:C,moment:te,categories:a,getCategoryName:b,rowSelection:u,SendKonkursMail:t=>{const s=route("user.konkurs.sendmail",{id:t});D.confirm({title:"Are you sure you want to send mail?",content:"When clicked the OK button, this dialog will be closed after 1 second",okText:"OK",cancelText:"Cancel",onOk:()=>{i.value=!0,L.get(s,{onSuccess:()=>{i.value=!1,y.success("Mail Sent Successfully")},onError:()=>{i.value=!1,y.error("Something Went Wrong")}})}})},ExportToExcel:()=>{if(u.value.selectedRowKeys&&u.value.selectedRowKeys.length>0){const t=u.value.selectedRowKeys,s=route("user.konkurs.export",{id:t}),l=document.createElement("a");l.href=s,l.download="konkursdata.xlsx",l.click(),l.remove(),y.success("Exported Successfully")}else y.error("Please Select At Least One Row")},deleteKonkurs:t=>{const s=route("user.konkurs.destroy",{id:t});D.confirm({title:"Are you sure delete this Konkurs Category?",okText:"Yes",okType:"danger",cancelText:"No",onOk:()=>{L.delete(s,{preserveScroll:!0,onSuccess:l=>{l.value=S().props.konkursData,y.success("Konkurs Deleted Successfully")},onError:()=>{y.error("Something Went Wrong")}})}})}}}};function de(d,i,K,a,b,E){const C=n("Head"),x=n("Add"),v=n("a-breadcrumb-item"),g=n("PlusOutlined"),k=n("a-button"),w=n("MailOutlined"),u=n("Link"),_=n("a-menu-item"),p=n("CalendarOutlined"),A=n("a-menu"),t=n("a-col"),s=n("a-card-meta"),l=n("a-divider"),Y=n("file-excel-outlined"),I=n("export-outlined"),M=n("a-space"),T=n("a-tag"),V=n("send-outlined"),R=n("a-tooltip"),z=n("delete-outlined"),P=n("a-table"),W=n("a-card"),B=n("a-row"),H=n("AuthenticatedLayout");return O(),G(Q,null,[o(C,{title:"Yearly Konkkurs"}),o(H,null,{header:e(()=>[o(v,null,{default:e(()=>[c("Manage Konkurs")]),_:1}),o(k,{type:"primary",style:{float:"right"},onClick:a.AddKonkursDrawer},{icon:e(()=>[o(g)]),default:e(()=>[c(" Add Konkurs ")]),_:1},8,["onClick"])]),default:e(()=>[o(x,{visible:a.AddKonkursVisible,onClose:i[0]||(i[0]=r=>a.AddKonkursVisible=!1)},null,8,["visible"]),o(B,{type:"flex",gutter:"16"},{default:e(()=>[o(t,{span:5,order:1},{default:e(()=>[o(A,{openKeys:a.openKeys,"onUpdate:openKeys":i[1]||(i[1]=r=>a.openKeys=r),selectedKeys:a.selectedKeys,"onUpdate:selectedKeys":i[2]||(i[2]=r=>a.selectedKeys=r),mode:"vertical",style:{width:"100%",height:"100vh"}},{default:e(()=>[o(_,{key:"1",class:f({"ant-menu-item-selected":d.route().current("user.konkurs.index")})},{icon:e(()=>[o(w)]),default:e(()=>[o(u,{href:d.route("user.konkurs.index")},{default:e(()=>[c(" All Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"]),o(_,{key:"2",class:f({"ant-menu-item-selected":d.route().current("user.konkurs.today")})},{icon:e(()=>[o(p)]),default:e(()=>[o(u,{href:d.route("user.konkurs.today")},{default:e(()=>[c(" Today Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"]),o(_,{key:"3",class:f({"ant-menu-item-selected":d.route().current("user.konkurs.yesterday")})},{icon:e(()=>[o(p)]),default:e(()=>[o(u,{href:d.route("user.konkurs.yesterday")},{default:e(()=>[c(" Yesterday Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"]),o(_,{key:"4",class:f({"ant-menu-item-selected":d.route().current("user.konkurs.monthly")})},{icon:e(()=>[o(p)]),default:e(()=>[o(u,{href:d.route("user.konkurs.monthly")},{default:e(()=>[c(" Monthly Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"]),o(_,{key:"5",class:f({"ant-menu-item-selected":d.route().current("user.konkurs.yearly")})},{icon:e(()=>[o(p)]),default:e(()=>[o(u,{href:d.route("user.konkurs.yearly")},{default:e(()=>[c(" Yearly Konkurs ")]),_:1},8,["href"])]),_:1},8,["class"])]),_:1},8,["openKeys","selectedKeys"])]),_:1}),o(t,{span:19,order:2},{default:e(()=>[o(W,{style:{width:"100%",height:"100%",padding:"0px"}},{default:e(()=>[o(s,{title:"Today Konkurs List",description:"https://w2.brreg.no/kunngjoring/index.jsp"}),o(l),o(M,{style:{"margin-bottom":"16px"}},{default:e(()=>[o(k,{type:"primary",onClick:a.ExportToExcel},{icon:e(()=>[o(Y)]),default:e(()=>[c(" Export to Excel ")]),_:1},8,["onClick"]),o(k,{type:"primary",onClick:d.ExportToCSV},{icon:e(()=>[o(I)]),default:e(()=>[c(" Export to CSV ")]),_:1},8,["onClick"])]),_:1}),o(P,{columns:a.columns,"data-source":a.TodayKonkurs,pagination:a.pagination,loading:a.loading,"row-selection":a.rowSelection,rowKey:r=>r.id,onChange:d.handleTableChange},{konkurs_name:e(({text:r})=>[o(u,{href:d.route("user.konkurs.show",r)},{default:e(()=>[c(h(r)+" "+h(r.length>10?"...":""),1)]),_:2},1032,["href"])]),created_at:e(({text:r})=>[c(h(a.moment(r).format("DD MMMM, YYYY")),1)]),konkurs_category_id:e(({text:r})=>[c(h(a.getCategoryName(r)),1)]),email_send:e(({text:r})=>[r==1?(O(),N(T,{key:0,color:"green"},{default:e(()=>[c("Yes")]),_:1})):(O(),N(T,{key:1,color:"red"},{default:e(()=>[c("No")]),_:1}))]),action:e(({record:r})=>[X("span",null,[o(M,{size:"middle"},{default:e(()=>[o(R,{title:"Send Mail"},{default:e(()=>[o(k,{type:"primary",size:"medium",shape:"square",onClick:U=>a.SendKonkursMail(r.id)},{icon:e(()=>[o(V)]),_:2},1032,["onClick"])]),_:2},1024),o(R,{title:"Delete"},{default:e(()=>[o(k,{type:"danger",size:"medium",shape:"square",onClick:U=>a.deleteKonkurs(r.id)},{icon:e(()=>[o(z)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:1},8,["columns","data-source","pagination","loading","row-selection","rowKey","onChange"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}const pe=ne(le,[["render",de]]);export{pe as default};
