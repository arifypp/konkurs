import{Q as B,J as F,P as H,Z as j,p as q,b as i,K as O,r as s,o as A,g as U,c as o,w as t,h as J,N as m,M as D,O as N,f as c,e as I,t as h,z as Q,a as V}from"./app-7cf50586.js";import{_ as Z}from"./AuthenticatedLayout-441ba220.js";import G from"./Add-41bc0b82.js";import X from"./Show-dbe6110c.js";import{M as $,h as ee}from"./moment-d5be7c6e.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import{S as ne,F as te,E as ae}from"./SendOutlined-3bd21027.js";import"./UserOutlined-48362d9a.js";import"./SaveOutlined-9790fbee.js";const se={components:{AuthenticatedLayout:Z,MailOutlined:$,CalendarOutlined:B,SendOutlined:ne,FileExcelOutlined:te,ExportOutlined:ae,DeleteOutlined:F,PlusOutlined:H,Head:j,Link:q,Add:G,Show:X},setup(){const _=i(null),d=i(null),T=O().props.konkursData,a=i(!1),K=i(!1),x=i(O().props.konkursCategories),p=i(!1),S=e=>{const n=x.value.find(l=>l.id==e);return n?n.name:""},w=i([{title:"Company Name",dataIndex:"konkurs_name",key:"konkurs_name",slots:{customRender:"konkurs_name"}},{title:"Ad. Name",dataIndex:"konkurs_advocate",key:"konkurs_advocate",slots:{customRender:"konkurs_advocate"}},{title:"Ad. Email",dataIndex:"konkurs_advocate_email",key:"konkurs_advocate_email",slots:{customRender:"konkurs_advocate_email"}},{title:"Org Number",dataIndex:"konkurs_phone",key:"konkurs_phone",slots:{customRender:"konkurs_phone"}},{title:"Location",dataIndex:"konkurs_category_id",key:"konkurs_category_id",slots:{customRender:"konkurs_category_id"}},{title:"Email Status",dataIndex:"email_send",key:"email_send",slots:{customRender:"email_send"}},{title:"Date",dataIndex:"created_at",key:"created_at",slots:{customRender:"created_at"}},{title:"Action",dataIndex:"action",key:"action",slots:{customRender:"action"}}]),v=()=>{K.value=!0},u=e=>{console.log("click ",e),g.value=e.key,y.value=e.keyPath},g=i([]),y=i(["sub1"])??[],C=e=>{const n=e.find(l=>this.openKeys.indexOf(l)===-1);this.rootSubmenuKeys.indexOf(n)===-1?this.openKeys=e:this.openKeys=n?[n]:[]},k=i({onChange:(e,n)=>{k.value.selectedRowKeys=e,console.log(`selectedRowKeys: ${e}`,"selectedRows: ",n)},onSelect:(e,n,l)=>{console.log(e,n,l)},onSelectAll:(e,n,l)=>{console.log(e,n,l)}});return{ShowKonkursVisible:p,ShowKonkur:e=>{p.value=!0,_.value=e,axios.get(route("user.konkurs.show",{id:e})).then(n=>{console.log(n.data),d.value=n.data}).catch(n=>{console.log(n)})},konkurs:d,AddKonkursVisible:K,AddKonkursDrawer:v,handleClick:u,selectedKeys:g,openKeys:y,onOpenChange:C,TodayKonkurs:T,columns:w,loading:a,moment:ee,categories:x,getCategoryName:S,rowSelection:k,SendKonkursMail:e=>{const n=route("user.konkurs.sendmail",{id:e});D.confirm({title:"Are you sure you want to send mail?",content:"When clicked the OK button, this dialog will be closed after 1 second",okText:"OK",cancelText:"Cancel",onOk:()=>{a.value=!0,N.get(n,{onSuccess:()=>{a.value=!1,m.success("Mail Sent Successfully")},onError:()=>{a.value=!1,m.error("Something Went Wrong")}})}})},ExportToExcel:()=>{if(k.value.selectedRowKeys&&k.value.selectedRowKeys.length>0){const e=k.value.selectedRowKeys,n=route("user.konkurs.export",{id:e}),l=document.createElement("a");l.href=n,l.download="konkursdata.xlsx",l.click(),l.remove(),m.success("Exported Successfully")}else m.error("Please Select At Least One Row")},deleteKonkurs:e=>{const n=route("user.konkurs.destroy",{id:e});D.confirm({title:"Are you sure delete this Konkurs Category?",okText:"Yes",okType:"danger",cancelText:"No",onOk:()=>{N.delete(n,{preserveScroll:!0,onSuccess:l=>{l.value=O().props.konkursData,m.success("Konkurs Deleted Successfully")},onError:()=>{m.error("Something Went Wrong")}})}})}}}},le=["href","onClick"];function re(_,d,T,a,K,x){const p=s("Head"),S=s("Add"),w=s("a-breadcrumb-item"),v=s("PlusOutlined"),u=s("a-button"),g=s("a-alert"),y=s("a-card-meta"),C=s("a-divider"),k=s("file-excel-outlined"),M=s("export-outlined"),b=s("a-space"),E=s("a-tag"),R=s("send-outlined"),e=s("a-tooltip"),n=s("delete-outlined"),l=s("a-table"),L=s("Show"),P=s("a-card"),Y=s("a-col"),z=s("a-row"),W=s("AuthenticatedLayout");return A(),U(J,null,[o(p,{title:"Today Konkkurs"}),o(W,null,{header:t(()=>[o(w,null,{default:t(()=>[c("Manage Konkurs")]),_:1}),o(u,{type:"primary",style:{float:"right"},onClick:a.AddKonkursDrawer},{icon:t(()=>[o(v)]),default:t(()=>[c(" Add Konkurs ")]),_:1},8,["onClick"])]),default:t(()=>[o(S,{visible:a.AddKonkursVisible,onClose:d[0]||(d[0]=r=>a.AddKonkursVisible=!1)},null,8,["visible"]),o(z,{type:"flex",gutter:"16"},{default:t(()=>[o(Y,{span:24,order:2},{default:t(()=>[o(g,{message:"গুরুত্বপূর্ণ তথ্যবিবরণী",description:"Troms, Finnmark, Trøndelag, Nordland এইগুলো থাকলে ঐ সকল কুনকরস অ্যাড করার প্রয়োজন নেই। এবং কুনকোর্সের কোম্পানির শেষে যদি, AS, LTD থাকে শুধুমাত্র সেগুলো সিলেক্ট করতে হবে, অন্যান্যগুলো নির্বাচন করা যাবে না। ",type:"info",style:{"margin-bottom":"16px"},closable:""}),o(P,{style:{width:"100%",height:"100%",padding:"0px"},loading:a.loading},{default:t(()=>[o(y,{title:"Today Konkurs List",description:"https://w2.brreg.no/kunngjoring/index.jsp"}),o(C),o(b,{style:{"margin-bottom":"16px"}},{default:t(()=>[o(u,{type:"primary",onClick:a.ExportToExcel},{icon:t(()=>[o(k)]),default:t(()=>[c(" Export to Excel ")]),_:1},8,["onClick"]),o(u,{type:"primary",onClick:_.ExportToCSV},{icon:t(()=>[o(M)]),default:t(()=>[c(" Export to CSV ")]),_:1},8,["onClick"])]),_:1}),o(l,{columns:a.columns,"data-source":a.TodayKonkurs,pagination:_.pagination,loading:a.loading,showSizeChanger:"true","row-selection":a.rowSelection,rowKey:r=>r.id,onChange:_.handleTableChange},{konkurs_name:t(({text:r,record:f})=>[I("a",{href:"#"+f.id,onClick:Q(ie=>a.ShowKonkur(f.id),["prevent"])},h(r)+" "+h(r.length>10?"...":""),9,le)]),created_at:t(({text:r})=>[c(h(a.moment(r).format("DD MMMM, YYYY")),1)]),konkurs_category_id:t(({text:r})=>[c(h(a.getCategoryName(r)),1)]),email_send:t(({text:r})=>[r==1?(A(),V(E,{key:0,color:"green"},{default:t(()=>[c("Yes")]),_:1})):(A(),V(E,{key:1,color:"red"},{default:t(()=>[c("No")]),_:1}))]),action:t(({record:r})=>[I("span",null,[o(b,{size:"middle"},{default:t(()=>[o(e,{title:"Send Mail"},{default:t(()=>[o(u,{type:"primary",size:"medium",shape:"square",onClick:f=>a.SendKonkursMail(r.id)},{icon:t(()=>[o(R)]),_:2},1032,["onClick"])]),_:2},1024),o(e,{title:"Delete"},{default:t(()=>[o(u,{type:"danger",size:"medium",shape:"square",onClick:f=>a.deleteKonkurs(r.id)},{icon:t(()=>[o(n)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:1},8,["columns","data-source","pagination","loading","row-selection","rowKey","onChange"]),o(L,{visible:a.ShowKonkursVisible,onClose:d[1]||(d[1]=r=>a.ShowKonkursVisible=!1),id:_.ShowKonkursId,konkurs:a.konkurs},null,8,["visible","id","konkurs"])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})],64)}const fe=oe(se,[["render",re]]);export{fe as default};
