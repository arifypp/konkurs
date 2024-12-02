import{b as p,V as w,K as u,i as T,r as v,o as A,g as M,c as s,u as E,w as i,h as N,Z as V,f as h,P as q,e as B,I,J as U,s as $,N as c,M as j,O as b}from"./app-7cf50586.js";import{_ as F}from"./AuthenticatedLayout-441ba220.js";import J from"./EmailDrawer-3206cbde.js";import"./UserOutlined-48362d9a.js";const G={__name:"Index",setup(K){const d=p(!1),m=p("add"),f=p({}),r=p(!0),l=p([]),R=[{title:"Email",dataIndex:"email",key:"email"},{title:"Action",key:"action",slots:{customRender:"action"}}],C=()=>{m.value="add",f.value={},d.value=!0},x=o=>{m.value="edit",d.value=!0;const a=l.value.find(e=>e.id===o);f.value={id:o,email:a.email}},D=o=>{const a=$({email:o.email});r.value=!0,m.value==="add"?a.post(route("user.email-restrictions.store"),{preserveScroll:!0,onSuccess:e=>{r.value=!1,d.value=!1,c.success("Email Restriction Added Successfully"),l.value=e.props.konkursEmailRestrictions||[]},onError:()=>{r.value=!1;const e=a.errors;Object.keys(e).forEach(t=>{c.error(e[t])}),document.querySelectorAll(".ant-form-item-explain-error")}}):m.value==="edit"&&(r.value=!0,a.put(route("user.email-restrictions.update",f.value.id),{_method:"PUT",preserveScroll:!0,onSuccess:e=>{d.value=!1,c.success("Email Restriction Updated Successfully"),l.value=e.props.konkursEmailRestrictions||[],r.value=!1},onError:()=>{r.value=!1;const e=a.errors;Object.keys(e).forEach(t=>{c.error(e[t])}),document.querySelectorAll(".ant-form-item-explain-error")}}))},O=o=>{const a=route("user.email-restrictions.destroy",o);r.value=!0,j.confirm({title:"Are you sure delete this Email?",okText:"Yes",okType:"danger",cancelText:"No",onOk:()=>{b.delete(a,{preserveScroll:!0,onSuccess:e=>{r.value=!1,l.value=e.props.konkursEmailRestrictions,c.success("Email Restriction Deleted Successfully")},onError:()=>{r.value=!1,c.error("Something Went Wrong")}})},onCancel:()=>{r.value=!1,c.error("Deletion Cancelled")}})},_=w({current:u().props.konkursEmailRestrictions.current_page||1,pageSize:u().props.konkursEmailRestrictions.per_page||10,total:u().props.konkursEmailRestrictions.total||0,showSizeChanger:!0,showQuickJumper:!0,pageSizeOptions:["10","20","50","100"]}),z=(o,a,e)=>{r.value=!0,b.get(route("user.email-restrictions.index"),{page:o.current,per_page:o.pageSize,...a,...e},{preserveState:!0,preserveScroll:!0,onFinish:()=>{if(r.value=!1,_.current=o.current,_.pageSize=o.pageSize,_.total=u().props.konkursEmailRestrictions.total,e.field&&e.order){const t=e.field,n=e.order==="ascend"?"asc":"desc";l.value=u().props.konkursEmailRestrictions.data||[],l.value.sort((k,g)=>k[t]<g[t]?n==="asc"?-1:1:k[t]>g[t]?n==="asc"?1:-1:0)}a&&(l.value=u().props.konkursEmailRestrictions.data||[],Object.keys(a).forEach(t=>{a[t]&&(l.value=l.value.filter(n=>n[t]===a[t]))}))}})};return T(()=>{setTimeout(()=>{l.value=u().props.konkursEmailRestrictions.data||[],r.value=!1},1e3)}),(o,a)=>{const e=v("a-breadcrumb-item"),t=v("a-button"),n=v("a-tooltip"),k=v("a-space"),g=v("a-table");return A(),M(N,null,[s(E(V),{title:"Manage Email Restrictions"}),s(F,null,{header:i(()=>[s(e,null,{default:i(()=>[h("Manage Email Restrictions")]),_:1}),s(t,{type:"primary",style:{float:"right"},onClick:C},{default:i(()=>[s(E(q)),h(" Add Konkurs Category ")]),_:1})]),default:i(()=>[s(g,{columns:R,"data-source":l.value,loading:r.value,pagination:_,"row-key":"email",onChange:z},{action:i(({record:y})=>[B("span",null,[s(k,{size:"middle"},{default:i(()=>[s(n,{title:"Edit"},{default:i(()=>[s(t,{type:"primary",size:"medium",shape:"square",onClick:S=>x(y.id)},{icon:i(()=>[s(E(I))]),_:2},1032,["onClick"])]),_:2},1024),s(n,{title:"Delete"},{default:i(()=>[s(t,{type:"danger",size:"medium",shape:"square",onClick:S=>O(y.id)},{icon:i(()=>[s(E(U))]),_:2},1032,["onClick"])]),_:2},1024),s(J,{visible:d.value,mode:m.value,"initial-data":f.value,"onUpdate:visible":a[0]||(a[0]=S=>d.value=S),onSubmit:D},null,8,["visible","mode","initial-data"])]),_:2},1024)])]),_:1},8,["data-source","loading","pagination"])]),_:1})],64)}}};export{G as default};
