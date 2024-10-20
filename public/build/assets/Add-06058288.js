import{L,U as N,s as O,b as f,K as E,r as l,o as C,a as S,w as o,R as I,N as h,c as e,f as g,g as j,S as z,h as T,t as V}from"./app-58ea7a43.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{S as D}from"./SaveOutlined-d9ae29db.js";const M={components:{CloseOutlined:L,SearchOutlined:N,SaveOutlined:D},setup(){const s=O({name:"",category:"",website:"",phone:"",industry_position:"",state:"",post_code:"",address:"",advocateemail:"",advocaname:""}),t=f({name:[{required:!0,message:"Please input Konkurs Category Name"}],category:[{required:!0,message:"Please select Konkurs Category"}],phone:[{required:!0,pattern:/^[0-9]*$/,onInput:d=>{d.target.value=d.target.value.replace(/\s/g,"")},message:"Please input Konkurs Phone"}],industry_position:[{required:!0,message:"Please input Konkurs Industry / Position"}],state:[{required:!0,message:"Please input Konkurs State"}],post_code:[{required:!0,message:"Please input Konkurs Post Code"}],address:[{required:!0,message:"Please input Konkurs Address"}],advocateemail:[{required:!0,message:"Please input Konkurs Advocate Email"}],advocaname:[{required:!0,message:"Please input Konkurs Advocate Phone"}]}),y=f({required:"This field is required"}),a=f(!1),v=f(!1),p=f(!1),m=f("md"),r=f(!1),u=()=>{r.value=!1},_=(d,c)=>c.children.toLowerCase().indexOf(d.toLowerCase())>=0,k=f(E().props.konkursCategories);return{form:s,rules:t,validateMessages:y,loading:a,disabled:p,size:m,AddKonkursVisible:r,onClose:u,onSearch:()=>{v.value=!0;const d=s.phone;I.get("https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer="+d).then(c=>{const i=c.data._embedded.enheter[0];s.name=i.navn,s.status="active",s.website=i.hjemmeside??"",s.phone=i.organisasjonsnummer,s.industry_position=i.naeringskode1.beskrivelse,s.state=i.forretningsadresse.kommune,s.post_code=i.forretningsadresse.postnummer,s.address=i.forretningsadresse.adresse[0],s.advocateemail=i.konkursboetAdvokat[0].epostadresse,s.advocaname=i.konkursboetAdvokat[0].telefonnummer,v.value=!1}).catch(c=>{console.log(c),v.value=!1})},SearchLoading:v,categories:k,CreateKonkurs:()=>{a.value=!0,p.value=!0,s.post(route("user.konkurs.store"),{preserveScroll:!0,onSuccess:()=>{a.value=!1,p.value=!1,r.value=!1,h.success("Konkurs Created Successfully"),s.reset(),setTimeout(()=>{location.reload()},1e3)},onError:()=>{p.value=!1,a.value=!1;const d=s.errors;Object.keys(d).forEach(c=>{h.error(d[c])}),document.querySelectorAll(".ant-form-item-explain-error")}})},filterOption:_}}};function F(s,t,y,a,v,p){const m=l("a-input"),r=l("a-form-item"),u=l("a-col"),_=l("a-select-option"),k=l("a-select"),K=l("search-outlined"),b=l("a-button"),d=l("a-input-group"),c=l("a-textarea"),i=l("a-divider"),w=l("a-row"),A=l("a-form"),P=l("close-outlined"),q=l("save-outlined"),x=l("a-space"),U=l("a-drawer");return C(),S(U,{title:"Add Konkurs",size:a.size,visible:a.AddKonkursVisible,onClose:a.onClose,width:"50%","footer-style":{textAlign:"right"},maskClosable:!1},{footer:o(()=>[e(x,null,{default:o(()=>[e(b,{style:{"margin-right":"8px"},onClick:a.onClose},{icon:o(()=>[e(P)]),default:o(()=>[g(" Cancel ")]),_:1},8,["onClick"]),e(b,{type:"primary","html-type":"submit",loading:a.loading,disabled:a.disabled,onClick:a.CreateKonkurs},{icon:o(()=>[e(q)]),default:o(()=>[g(" Create Konkurs ")]),_:1},8,["loading","disabled","onClick"])]),_:1})]),default:o(()=>[e(A,{layout:"vertical","validate-messages":a.validateMessages,model:a.form,rules:a.rules},{default:o(()=>[e(w,{gutter:15},{default:o(()=>[e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs Name",name:"name"},{default:o(()=>[e(m,{value:a.form.name,"onUpdate:value":t[0]||(t[0]=n=>a.form.name=n)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs type",name:"category"},{default:o(()=>[e(k,{value:a.form.category,"onUpdate:value":t[1]||(t[1]=n=>a.form.category=n),allowClear:"",placeholder:"Select Category",ShowSearch:""},{default:o(()=>[(C(!0),j(T,null,z(a.categories,n=>(C(),S(_,{key:n.id,value:n.id},{default:o(()=>[g(V(n.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs Status",name:"status"},{default:o(()=>[e(k,{value:a.form.status,"onUpdate:value":t[2]||(t[2]=n=>a.form.status=n),allowClear:"",placeholder:"Select Status"},{default:o(()=>[e(_,{value:"active"},{default:o(()=>[g("Active")]),_:1}),e(_,{value:"inactive"},{default:o(()=>[g("Inactive")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs website",name:"website"},{default:o(()=>[e(m,{value:a.form.website,"onUpdate:value":t[3]||(t[3]=n=>a.form.website=n),autocomplete:"off"},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs phone",name:"phone",autocomplete:"off"},{default:o(()=>[e(d,{compact:""},{default:o(()=>[e(m,{style:{width:"70%"},value:a.form.phone,"onUpdate:value":t[4]||(t[4]=n=>a.form.phone=n),onInput:t[5]||(t[5]=n=>a.form.phone=a.form.phone.replace(/\D/g,"").replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3")),allowClear:"",autocomplete:"off"},null,8,["value"]),e(b,{type:"primary",style:{width:"30%"},onClick:a.onSearch,loading:a.SearchLoading},{icon:o(()=>[e(K)]),_:1},8,["onClick","loading"])]),_:1})]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Industry / Position",name:"industry_position"},{default:o(()=>[e(m,{value:a.form.industry_position,"onUpdate:value":t[6]||(t[6]=n=>a.form.industry_position=n)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"State",name:"state"},{default:o(()=>[e(m,{value:a.form.state,"onUpdate:value":t[7]||(t[7]=n=>a.form.state=n)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Post code",name:"post_code"},{default:o(()=>[e(m,{value:a.form.post_code,"onUpdate:value":t[8]||(t[8]=n=>a.form.post_code=n)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:24},{default:o(()=>[e(r,{label:"Konkurs Address",name:"address"},{default:o(()=>[e(c,{value:a.form.address,"onUpdate:value":t[9]||(t[9]=n=>a.form.address=n)},null,8,["value"])]),_:1})]),_:1}),e(i),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs Advocate Name",name:"advocaname",autocomplete:"off"},{default:o(()=>[e(m,{value:a.form.advocaname,"onUpdate:value":t[10]||(t[10]=n=>a.form.advocaname=n),autocomplete:"off"},null,8,["value"])]),_:1})]),_:1}),e(u,{span:12},{default:o(()=>[e(r,{label:"Konkurs Advocate Email",name:"advocateemail",autocomplete:"off"},{default:o(()=>[e(m,{value:a.form.advocateemail,"onUpdate:value":t[11]||(t[11]=n=>a.form.advocateemail=n),autocomplete:"off"},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["validate-messages","model","rules"])]),_:1},8,["size","visible","onClose"])}const J=B(M,[["render",F]]);export{J as default};
