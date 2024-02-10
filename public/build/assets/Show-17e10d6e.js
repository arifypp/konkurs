import{L as x,U as K,b as k,G as M,r as i,o as N,a as B,w as n,R as j,N as u,c as o,f as t,e as p,t as l,z as v}from"./app-29aaa455.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{S as I}from"./SaveOutlined-6c3d2f97.js";const z={components:{CloseOutlined:x,SearchOutlined:K,SaveOutlined:I},props:{konkurs:Object},setup(C){const s=k({}),g=k(null),e=k(!1),c=k(!1),y=k("md"),a=k(!1),m=()=>{a.value=!1},f=()=>{e.value=!0,c.value=!0;const r=route("user.konkurs.customSending",{id:s.value.id});j.get(r).then(d=>{e.value=!1,c.value=!1,u.success(d.message),a.value=!1}).catch(d=>{e.value=!1,c.value=!1,u.error(d.response.message),a.value=!1})};return M(()=>C.konkurs,r=>{s.value=r}),{loading:e,disabled:c,size:y,ShowKonkursVisible:a,onClose:m,ShowKonkursId:g,konkurs:s,MailCopied:r=>{r.preventDefault(),navigator.clipboard.writeText(s.value.konkurs_advocate_email),u.success("Email copied to clipboard")},KonkursMailSend:f,CopyMailBody:r=>{r.preventDefault(),document.querySelector("textarea").select(),document.execCommand("copy"),u.success("Mail body copied to clipboard")},NameCopied:r=>{r.preventDefault(),navigator.clipboard.writeText(s.value.konkurs_name),u.success("Name copied to clipboard")},subjectCopy:r=>{r.preventDefault(),navigator.clipboard.writeText("Konkursboet til "+s.value.konkurs_name),u.success("Subject copied to clipboard")}}},mounted(){console.log("Konkurs data:",this.konkurs)}},D={href:"{{ konkurs.konkurs_website }}",target:"_blank"};function V(C,s,g,e,c,y){const a=i("a-col"),m=i("a-divider"),f=i("a-input"),w=i("a-row"),S=i("close-outlined"),b=i("a-button"),h=i("save-outlined"),r=i("a-space"),d=i("a-drawer");return N(),B(d,{title:e.konkurs.konkurs_name,size:e.size,visible:e.ShowKonkursVisible,onClose:e.onClose,width:"50%","footer-style":{textAlign:"right"},maskClosable:!0,id:e.ShowKonkursId,konkurs:e.konkurs},{footer:n(()=>[o(r,null,{default:n(()=>[o(b,{style:{"margin-right":"8px"},onClick:e.onClose},{icon:n(()=>[o(S)]),default:n(()=>[t(" Cancel ")]),_:1},8,["onClick"]),o(b,{type:"primary",loading:e.loading,disabled:e.disabled,onClick:e.KonkursMailSend},{icon:n(()=>[o(h)]),default:n(()=>[t(" Konkurs Mail Send ")]),_:1},8,["loading","disabled","onClick"])]),_:1})]),default:n(()=>[o(w,{gutter:15},{default:n(()=>[o(a,{span:12},{default:n(()=>[t(" Konkurs Name: "),p("strong",{onClick:s[0]||(s[0]=v((..._)=>e.NameCopied&&e.NameCopied(..._),["prevent"]))},l(e.konkurs.konkurs_name),1)]),_:1}),o(a,{span:12},{default:n(()=>[t(" Konkurs Website: "),p("a",D,l(e.konkurs.konkurs_website),1)]),_:1}),o(a,{span:12},{default:n(()=>[t(" Konkurs Phone: "+l(e.konkurs.konkurs_phone),1)]),_:1}),o(a,{span:12},{default:n(()=>[t(" Industry or position: "+l(e.konkurs.konkurs_industry_position),1)]),_:1}),o(a,{span:12},{default:n(()=>[t(" State: "+l(e.konkurs.konkurs_state),1)]),_:1}),o(a,{span:12},{default:n(()=>[t(" Post Code: "+l(e.konkurs.konkurs_zip),1)]),_:1}),o(a,{span:24},{default:n(()=>[t(" Address: "+l(e.konkurs.konkurs_address),1)]),_:1}),o(m),o(a,{span:12},{default:n(()=>[t(" Advocate Name: "+l(e.konkurs.konkurs_advocate),1)]),_:1}),o(a,{span:12},{default:n(()=>[t(" Advocate Email: "),p("a",{href:"mailto:{{ konkurs.konkurs_advocate_email }}",onClick:s[1]||(s[1]=v((..._)=>e.MailCopied&&e.MailCopied(..._),["prevent"]))},l(e.konkurs.konkurs_advocate_email),1)]),_:1}),o(m,{title:"Konkurs Description"}),o(a,{span:24},{default:n(()=>[o(f,{type:"text",class:"mb-3",value:"Konkursboet til "+e.konkurs.konkurs_name,readonly:"",style:{width:"100%","margin-bottom":"10px"},onClick:v(e.subjectCopy,["prevent"])},null,8,["value","onClick"]),p("textarea",{rows:"15",style:{width:"100%"},readonly:"",onClick:s[2]||(s[2]=v((..._)=>e.CopyMailBody&&e.CopyMailBody(..._),["prevent"]))},"Hei "+l(e.konkurs.konkurs_advocate)+`,\r
\r
Jeg ser at du er oppnevnt som bobestyrer i boet til `+l(e.konkurs.konkurs_name)+`. I den forbindelse lurer jeg på om det er eiendeler/fordringer eller varelager som skal selges? Om det er tilfelle så er vi interessert i å komme med et bud. Vi sørger for at penger overføres samme dag som avtalen skrives. Sabba Invest AS kjøper konkursbo fra kr 1 000 til kr 5 000 000\r
\r
Mvh\r
Espen Holmstrand\r
Sales Manager\r
Sabba Invest AS\r
www.ksalg.no\r
Phone: +47 955 55 531\r
Ksalg.no eies og driftes av selskapet Sabba Invest AS org: 929 2554 6135\r
                    `,1)]),_:1})]),_:1})]),_:1},8,["title","size","visible","onClose","id","konkurs"])}const P=A(z,[["render",V]]);export{P as default};
