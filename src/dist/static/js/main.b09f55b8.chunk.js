(this["webpackJsonprohell-web"]=this["webpackJsonprohell-web"]||[]).push([[0],{157:function(e,t,s){},158:function(e,t,s){},273:function(e,t,s){},277:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(26),r=s.n(a),c=(s(157),s(284)),i=(s(158),s(67)),o=s(97),l=s(286),u=s(287),j=s(288),d=s(6);var b=function(){var e=function(e){window.location.assign(e)};return Object(d.jsxs)("div",{className:"action-panel",children:[Object(d.jsx)(i.a,{placement:"left",title:"Home",children:Object(d.jsx)(o.a,{icon:Object(d.jsx)(l.a,{}),shape:"circle",onClick:function(){return e("#home")}})}),Object(d.jsx)(i.a,{placement:"left",title:"Register",children:Object(d.jsx)(o.a,{icon:Object(d.jsx)(u.a,{}),shape:"circle",onClick:function(){return e("#register")}})}),Object(d.jsx)(i.a,{placement:"left",title:"Download",children:Object(d.jsx)(o.a,{icon:Object(d.jsx)(j.a,{}),shape:"circle",onClick:function(){return e("#download")}})})]})},h=s(281).a.Title;var O=function(){return Object(d.jsxs)("div",{className:"download-content",id:"download",children:[Object(d.jsx)("h1",{className:"neonTitle",style:{fontSize:46},children:"Download"}),Object(d.jsxs)("div",{className:"download-box",children:[Object(d.jsx)(h,{level:3,children:"ROHell.zip (2021-04-21)"}),Object(d.jsx)(j.a,{style:{fontSize:128}}),Object(d.jsx)(o.a,{href:"https://bit.ly/3dfil96",size:"large",type:"primary",children:"Download"})]})]})};var p=function(){return Object(d.jsxs)("div",{className:"home-content",id:"home",children:[Object(d.jsx)("h1",{className:"neonTitle",children:"Raghell (Ragnarok)"}),Object(d.jsxs)("div",{className:"home-action",children:[Object(d.jsxs)("a",{href:"#register",className:"neonBtn",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),"Register"]}),Object(d.jsxs)("a",{href:"#download",className:"neonBtn",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),"Download"]})]})]})},m=s(73),x=s.n(m),f=s(111),g=s(55),v=s(282),y=s(280),w=s(285),P=s(283),S=s(279),T=s(139),E=s(140),C=s(141),R=s.n(C),I=new(function(){function e(t){Object(T.a)(this,e),this.axiosInstance=void 0,this.axiosInstance=R.a.create({baseURL:t,timeout:12e4}),this.axiosInstance.defaults.headers["Content-Type"]="application/json",this.axiosInstance.interceptors.request.use((function(e){return e}),(function(e){return e.response})),this.axiosInstance.interceptors.response.use((function(e){return e}),(function(e){return e.response}))}return Object(E.a)(e,[{key:"setHeader",value:function(e){this.axiosInstance.defaults.headers.common[e.key]=e.value}},{key:"get",value:function(e,t){return this.axiosInstance.get(e,t)}},{key:"post",value:function(e,t,s){return this.axiosInstance.post(e,t,s)}},{key:"put",value:function(e,t,s){return this.axiosInstance.put(e,t,s)}},{key:"delete",value:function(e,t){return this.axiosInstance.delete(e,t)}}]),e}())("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROHELL_API)||"http://localhost:3001/api"),_=s(144),k=s(96),N=v.a.Option;var D=function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)(""),c=Object(g.a)(r,2),i=(c[0],c[1]),l=Object(n.useState)(!1),u=Object(g.a)(l,2),j=u[0],b=u[1],h=Object(n.useState)(!1),O=Object(g.a)(h,2),p=O[0],m=O[1],T=y.a.useForm(),E=Object(g.a)(T,1)[0],C=Object(k.b)(),R=Object(n.useState)(!1),D=Object(g.a)(R,2),F=D[0],A=D[1];Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C.executeRecaptcha){e.next=7;break}return e.next=3,C.executeRecaptcha("register_page");case 3:t=e.sent,a(!0),A(!1),i(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}A(!0),function(){e.apply(this,arguments)}()}),[C]);var H=function(){var e=Object(f.a)(x.a.mark((function e(t){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.next=3,I.post("/register",t);case 3:s=e.sent,console.log(s.status),200===s.status?(E.resetFields(),m(!0),b(!1)):409===s.status&&(console.log("your id is already used"),b(!0),E.validateFields()),A(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return F?Object(d.jsxs)("div",{className:"register-content",id:"register",children:[Object(d.jsx)("h1",{className:"neonTitle",style:{fontSize:46},children:"Register"}),Object(d.jsx)("div",{className:"register-form",style:{justifyContent:"center",display:"flex",alignItems:"center"},children:Object(d.jsx)(_.RingLoader,{size:80,color:"#228dff"})})]}):p?Object(d.jsxs)("div",{className:"register-content",id:"register",children:[Object(d.jsx)("h1",{className:"neonTitle",style:{fontSize:46},children:"Register"}),Object(d.jsx)("div",{className:"register-form",children:Object(d.jsx)(w.a,{status:"success",title:"Successfully for registation!",subTitle:"Welcome to ROHELL !!",extra:[Object(d.jsx)(o.a,{onClick:function(){return window.location.assign("#download")},type:"primary",children:"Download"},"download"),Object(d.jsx)(o.a,{onClick:function(){return m(!1)},children:"Back to register"},"back")]})})]}):Object(d.jsxs)("div",{className:"register-content",id:"register",children:[Object(d.jsx)("h1",{className:"neonTitle",style:{fontSize:46},children:"Register"}),Object(d.jsxs)(y.a,{form:E,layout:"vertical",className:"register-form",onFinish:H,children:[Object(d.jsx)(y.a.Item,{name:"id",label:"ID",rules:[{required:!0,message:"Please input your ID"},function(){return{validator:function(){return j?Promise.reject(new Error("Your username has already used.")):Promise.resolve()}}}],children:Object(d.jsx)(P.a,{onChange:function(){b(!1)},placeholder:"Please input your ID"})}),Object(d.jsx)(y.a.Item,{name:"password",label:"Password",hasFeedback:!0,rules:[{required:!0,message:"Please input your password!"},{pattern:/^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/,message:"Minimum eight characters, at least one letter and one number"}],children:Object(d.jsx)(P.a.Password,{placeholder:"Please input your password"})}),Object(d.jsx)(y.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,s){return s&&t("password")!==s?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(d.jsx)(P.a.Password,{placeholder:"Please input your confirm password"})}),Object(d.jsx)(y.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(d.jsx)(P.a,{placeholder:"Please input your email"})}),Object(d.jsx)(y.a.Item,{rules:[{required:!0,message:"Please input your birth date"}],label:"Birth Date",name:"birthDate",children:Object(d.jsx)(S.a,{style:{width:"100%"},placeholder:"1998-01-01"})}),Object(d.jsx)(y.a.Item,{name:"gender",label:"Gender",rules:[{required:!0,message:"Please Select Gender"}],children:Object(d.jsxs)(v.a,{placeholder:"Select a option and change input text above",allowClear:!0,children:[Object(d.jsx)(N,{value:"M",children:"Male"}),Object(d.jsx)(N,{value:"F",children:"Female"})]})}),Object(d.jsx)(o.a,{block:!0,disabled:!s,size:"large",type:"primary",style:{marginTop:16},htmlType:"submit",children:"Register"})]})]})};s(273);var F=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)(p,{}),Object(d.jsx)(D,{}),Object(d.jsx)(O,{}),Object(d.jsx)(c.a,{onClick:function(){return window.location.assign("#home")}})]})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,289)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))},H=s(150);r.a.render(Object(d.jsx)(H.a,{children:Object(d.jsx)(k.a,{reCaptchaKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_RECAPTCHA_KEY,useEnterprise:!0,language:"en",children:Object(d.jsx)(F,{})})}),document.getElementById("root")),A()}},[[277,1,2]]]);
//# sourceMappingURL=main.b09f55b8.chunk.js.map