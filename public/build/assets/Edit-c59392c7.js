import{U as I,L,b as f,K as h,s as N,r as l,o as b,a as w,w as o,R as O,N as U,c as e,f as k,g as j,S as z,h as V,t as B}from"./app-29aaa455.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{S as D}from"./SaveOutlined-6c3d2f97.js";const M={components:{SearchOutlined:I,CloseOutlined:L,SaveOutlined:D},setup(){const K=f({name:[{required:!0,message:"Please input Konkurs Category Name"}],category:[{required:!0,message:"Please select Konkurs Category"}],phone:[{required:!0,pattern:/^[0-9]*$/,onInput:i=>{i.target.value=i.target.value.replace(/[^0-9]/g,"")},message:"Please input Konkurs Phone"}],industry_position:[{required:!0,message:"Please input Konkurs Industry / Position"}],state:[{required:!0,message:"Please input Konkurs State"}],post_code:[{required:!0,message:"Please input Konkurs Post Code"}],address:[{required:!0,message:"Please input Konkurs Address"}],advocateemail:[{required:!0,message:"Please input Konkurs Advocate Email"}],advocaname:[{required:!0,message:"Please input Konkurs Advocate Phone"}]}),n=f({required:"This field is required"}),v=f(!1),a=f(!1),_=f(!1),y=f("md"),u=f(!1),r=()=>{u.value=!1},d=h().props.EditKonkursId,s=N({name:"",category:"",website:"",phone:"",industry_position:"",state:"",post_code:"",address:"",advocateemail:"",advocaname:""}),g=i=>{alert(i)},E=(i,c)=>c.children.toLowerCase().indexOf(i.toLowerCase())>=0,p=f(h().props.konkursCategories);return{Editform:s,rules:K,validateMessages:n,loading:v,disabled:_,size:y,EditKonkursVisible:u,onClose:r,onSearch:()=>{a.value=!0;const i=s.phone;O.get("https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer="+i).then(c=>{const m=c.data._embedded.enheter[0];s.name=m.navn,s.status="active",s.website=m.hjemmeside??"",s.phone=m.organisasjonsnummer,s.industry_position=m.naeringskode1.beskrivelse,s.state=m.forretningsadresse.kommune,s.post_code=m.forretningsadresse.postnummer,s.address=m.forretningsadresse.adresse[0],s.advocateemail=m.konkursboetAdvokat[0].epostadresse,s.advocaname=m.konkursboetAdvokat[0].telefonnummer,a.value=!1}).catch(c=>{console.log(c),a.value=!1})},SearchLoading:a,categories:p,UpdateKonkurs:()=>{v.value=!0,_.value=!0,s.post(route("user.konkurs.store"),{preserveScroll:!0,onSuccess:()=>{v.value=!1,_.value=!1,u.value=!1,U.success("Konkurs Created Successfully")},onError:()=>{_.value=!1,v.value=!1;const i=s.errors;Object.keys(i).forEach(c=>{U.error(i[c])}),document.querySelectorAll(".ant-form-item-explain-error")}})},filterOption:E,EditKonkurs:g,EditKonkursId:d}}};function F(K,n,v,a,_,y){const u=l("a-input"),r=l("a-form-item"),d=l("a-col"),s=l("a-select-option"),g=l("a-select"),E=l("search-outlined"),p=l("a-button"),C=l("a-input-group"),S=l("a-textarea"),i=l("a-divider"),c=l("a-row"),m=l("a-form"),P=l("close-outlined"),q=l("save-outlined"),x=l("a-space"),A=l("a-drawer");return b(),w(A,{title:"Edit Konkurs",size:a.size,visible:a.EditKonkursVisible&&a.EditKonkursId!==null,id:a.EditKonkursId,onClose:a.onClose,width:"50%","footer-style":{textAlign:"right"},maskClosable:!1},{footer:o(()=>[e(x,null,{default:o(()=>[e(p,{style:{"margin-right":"8px"},onClick:a.onClose},{icon:o(()=>[e(P)]),default:o(()=>[k(" Cancel")]),_:1},8,["onClick"]),e(p,{type:"primary","html-type":"submit",loading:a.loading,disabled:a.disabled,onClick:a.UpdateKonkurs},{icon:o(()=>[e(q)]),default:o(()=>[k(" Update Konkurs ")]),_:1},8,["loading","disabled","onClick"])]),_:1})]),default:o(()=>[e(m,{layout:"vertical","validate-messages":a.validateMessages,model:a.Editform,rules:a.rules},{default:o(()=>[e(c,{gutter:15},{default:o(()=>[e(d,{span:12},{default:o(()=>[e(r,{label:"Konkurs Name",name:"name"},{default:o(()=>[e(u,{value:a.Editform.name,"onUpdate:value":n[0]||(n[0]=t=>a.Editform.name=t)},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(r,{label:"Konkurs type",name:"category"},{default:o(()=>[e(g,{value:a.Editform.category,"onUpdate:value":n[1]||(n[1]=t=>a.Editform.category=t),allowClear:"",placeholder:"Select Category",ShowSearch:""},{default:o(()=>[(b(!0),j(V,null,z(a.categories,t=>(b(),w(s,{key:t.id,value:t.id},{default:o(()=>[k(B(t.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(r,{label:"Konkurs Status",name:"status"},{default:o(()=>[e(g,{value:a.Editform.status,"onUpdate:value":n[2]||(n[2]=t=>a.Editform.status=t),allowClear:"",placeholder:"Select Status"},{default:o(()=>[e(s,{value:"active"},{default:o(()=>[k("Active")]),_:1}),e(s,{value:"inactive"},{default:o(()=>[k("Inactive")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(r,{label:"Konkurs website",name:"website"},{default:o(()=>[e(u,{value:a.Editform.website,"onUpdate:value":n[3]||(n[3]=t=>a.Editform.website=t)},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(r,{label:"Konkurs phone",name:"phone"},{default:o(()=>[e(C,{compact:""},{default:o(()=>[e(u,{style:{width:"70%"},value:a.Editform.phone,"onUpdate:value":n[4]||(n[4]=t=>a.Editform.phone=t)},null,8,["value"]),e(p,{type:"primary",style:{width:"30%"},onClick:a.onSearch,loading:a.SearchLoading},{icon:o(()=>[e(E)]),_:1},8,["onClick","loading"])]),_:1})]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(r,{label:"Industry / Position",name:"industry_position"},{default:o(()=>[e(u,{value:a.Editform.industry_position,"onUpdate:value":n[5]||(n[5]=t=>a.Editform.industry_position=t)},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(r,{label:"State",name:"state"},{default:o(()=>[e(u,{value:a.Editform.state,"onUpdate:value":n[6]||(n[6]=t=>a.Editform.state=t)},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(r,{label:"Post code",name:"post_code"},{default:o(()=>[e(u,{value:a.Editform.post_code,"onUpdate:value":n[7]||(n[7]=t=>a.Editform.post_code=t)},null,8,["value"])]),_:1})]),_:1}),e(d,{span:24},{default:o(()=>[e(r,{label:"Konkurs Address",name:"address"},{default:o(()=>[e(S,{value:a.Editform.address,"onUpdate:value":n[8]||(n[8]=t=>a.Editform.address=t)},null,8,["value"])]),_:1})]),_:1}),e(i),e(d,{span:12},{default:o(()=>[e(r,{label:"Konkurs Advocate Name",name:"advocaname"},{default:o(()=>[e(u,{value:a.Editform.advocaname,"onUpdate:value":n[9]||(n[9]=t=>a.Editform.advocaname=t)},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:o(()=>[e(r,{label:"Konkurs Advocate Email",name:"advocateemail"},{default:o(()=>[e(u,{value:a.Editform.advocateemail,"onUpdate:value":n[10]||(n[10]=t=>a.Editform.advocateemail=t)},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["validate-messages","model","rules"])]),_:1},8,["size","visible","id","onClose"])}const J=T(M,[["render",F]]);export{J as default};