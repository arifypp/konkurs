import{L as O,S as L,s as N,b as f,K as E,r as l,o as y,a as h,w as o,U as j,N as S,O as z,c as e,f as g,g as I,R as T,h as V,t as B}from"./app-2d5eabb0.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{S as M}from"./SaveOutlined-ae8c6ea0.js";const F={components:{CloseOutlined:O,SearchOutlined:L,SaveOutlined:M},setup(){const s=N({name:"",category:"",website:"",phone:"",industry_position:"",state:"",post_code:"",address:"",advocateemail:"",advocaname:""}),n=f({name:[{required:!0,message:"Please input Konkurs Category Name"}],category:[{required:!0,message:"Please select Konkurs Category"}],phone:[{required:!0,pattern:/^[0-9]*$/,onInput:d=>{d.target.value=d.target.value.replace(/[^0-9]/g,"")},message:"Please input Konkurs Phone"}],industry_position:[{required:!0,message:"Please input Konkurs Industry / Position"}],state:[{required:!0,message:"Please input Konkurs State"}],post_code:[{required:!0,message:"Please input Konkurs Post Code"}],address:[{required:!0,message:"Please input Konkurs Address"}],advocateemail:[{required:!0,message:"Please input Konkurs Advocate Email"}],advocaname:[{required:!0,message:"Please input Konkurs Advocate Phone"}]}),C=f({required:"This field is required"}),a=f(!1),v=f(!1),_=f(!1),m=f("md"),r=f(!1),u=()=>{r.value=!1},p=(d,c)=>c.children.toLowerCase().indexOf(d.toLowerCase())>=0,k=f(E().props.konkursCategories);return{form:s,rules:n,validateMessages:C,loading:a,disabled:_,size:m,AddKonkursVisible:r,onClose:u,onSearch:()=>{v.value=!0;const d=s.phone;j.get("https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer="+d).then(c=>{const i=c.data._embedded.enheter[0];s.name=i.navn,s.status="active",s.website=i.hjemmeside??"",s.phone=i.organisasjonsnummer,s.industry_position=i.naeringskode1.beskrivelse,s.state=i.forretningsadresse.kommune,s.post_code=i.forretningsadresse.postnummer,s.address=i.forretningsadresse.adresse[0],s.advocateemail=i.konkursboetAdvokat[0].epostadresse,s.advocaname=i.konkursboetAdvokat[0].telefonnummer,v.value=!1}).catch(c=>{console.log(c),v.value=!1})},SearchLoading:v,categories:k,CreateKonkurs:()=>{a.value=!0,_.value=!0,s.post(route("user.konkurs.store"),{preserveScroll:!0,onSuccess:()=>{a.value=!1,_.value=!1,r.value=!1,S.success("Konkurs Created Successfully"),s.reset(),z.push({name:"user.konkurs.index"}),setTimeout(()=>{location.reload()},1e3)},onError:()=>{_.value=!1,a.value=!1;const d=s.errors;Object.keys(d).forEach(c=>{S.error(d[c])}),document.querySelectorAll(".ant-form-item-explain-error")}})},filterOption:p}}};function R(s,n,C,a,v,_){const m=l("a-input"),r=l("a-form-item"),u=l("a-col"),p=l("a-select-option"),k=l("a-select"),K=l("search-outlined"),b=l("a-button"),d=l("a-input-group"),c=l("a-textarea"),i=l("a-divider"),w=l("a-row"),A=l("a-form"),P=l("close-outlined"),x=l("save-outlined"),q=l("a-space"),U=l("a-drawer");return y(),h(U,{title:"Add Konkurs",size:a.size,visible:a.AddKonkursVisible,onClose:a.onClose,width:"50%","footer-style":{textAlign:"right"},maskClosable:!1},{footer:o(()=>[e(q,null,{default:o(()=>[e(b,{style:{"margin-right":"8px"},onClick:a.onClose},{icon:o(()=>[e(P)]),default:o(()=>[g(" Cancel ")]),_:1},8,["onClick"]),e(b,{type:"primary","html-type":"submit",loading:a.loading,disabled:a.disabled,onClick:a.CreateKonkurs},{icon:o(()=>[e(x)]),default:o(()=>[g(" Create Konkurs ")]),_:1},8,["loading","disabled","onClick"])]),_:1})]),default:o(()=>[e(A,{layout:"vertical","validate-messages":a.validateMessages,model:a.form,rules:a.rules},{default:o(()=>[e(w,{gutter:15},{default:o(()=>[e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs Name",name:"name"},{default:o(()=>[e(m,{value:a.form.name,"onUpdate:value":n[0]||(n[0]=t=>a.form.name=t)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs type",name:"category"},{default:o(()=>[e(k,{value:a.form.category,"onUpdate:value":n[1]||(n[1]=t=>a.form.category=t),allowClear:"",placeholder:"Select Category",ShowSearch:""},{default:o(()=>[(y(!0),I(V,null,T(a.categories,t=>(y(),h(p,{key:t.id,value:t.id},{default:o(()=>[g(B(t.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs Status",name:"status"},{default:o(()=>[e(k,{value:a.form.status,"onUpdate:value":n[2]||(n[2]=t=>a.form.status=t),allowClear:"",placeholder:"Select Status"},{default:o(()=>[e(p,{value:"active"},{default:o(()=>[g("Active")]),_:1}),e(p,{value:"inactive"},{default:o(()=>[g("Inactive")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs website",name:"website"},{default:o(()=>[e(m,{value:a.form.website,"onUpdate:value":n[3]||(n[3]=t=>a.form.website=t)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs phone",name:"phone"},{default:o(()=>[e(d,{compact:""},{default:o(()=>[e(m,{style:{width:"70%"},value:a.form.phone,"onUpdate:value":n[4]||(n[4]=t=>a.form.phone=t)},null,8,["value"]),e(b,{type:"primary",style:{width:"30%"},onClick:a.onSearch,loading:a.SearchLoading},{icon:o(()=>[e(K)]),_:1},8,["onClick","loading"])]),_:1})]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Industry / Position",name:"industry_position"},{default:o(()=>[e(m,{value:a.form.industry_position,"onUpdate:value":n[5]||(n[5]=t=>a.form.industry_position=t)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"State",name:"state"},{default:o(()=>[e(m,{value:a.form.state,"onUpdate:value":n[6]||(n[6]=t=>a.form.state=t)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Post code",name:"post_code"},{default:o(()=>[e(m,{value:a.form.post_code,"onUpdate:value":n[7]||(n[7]=t=>a.form.post_code=t)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:24},{default:o(()=>[e(r,{label:"Konkurs Address",name:"address"},{default:o(()=>[e(c,{value:a.form.address,"onUpdate:value":n[8]||(n[8]=t=>a.form.address=t)},null,8,["value"])]),_:1})]),_:1}),e(i),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs Advocate Name",name:"advocaname"},{default:o(()=>[e(m,{value:a.form.advocaname,"onUpdate:value":n[9]||(n[9]=t=>a.form.advocaname=t)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs Advocate Email",name:"advocateemail"},{default:o(()=>[e(m,{value:a.form.advocateemail,"onUpdate:value":n[10]||(n[10]=t=>a.form.advocateemail=t)},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["validate-messages","model","rules"])]),_:1},8,["size","visible","onClose"])}const Q=D(F,[["render",R]]);export{Q as default};
