(this["webpackJsonpflat-earth"]=this["webpackJsonpflat-earth"]||[]).push([[0],{281:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(320),i=n(34),o=n(10),c=n(32),u=n(76),s=n(21),l=n(6),d=n.n(l),b=n(17),h="FILE_UPLOAD",p="FILE_UPLOAD_SUCCESS",j="FILE_UPLOAD_FAIL",f="ENQUEUE_SNACKBAR",O="CLOSE_SNACKBAR",g="REMOVE_SNACKBAR",x="UPDATE_GRID",m=function(e){return{type:f,payload:Object(b.a)(Object(b.a)({},e),{},{key:e.key||(new Date).getTime()+Math.random()})}},v=function(){var e=Object(r.useRef)([]),t=Object(c.b)(),n=Object(c.c)((function(e){return e.snackbarReducer.notifications})),a=Object(u.b)(),i=a.enqueueSnackbar,o=a.closeSnackbar;return Object(r.useEffect)((function(){n.forEach((function(n){var r,a=n.key,c=n.message,u=n.type,l=void 0===u?"default":u,d=n.dismissed;void 0!==d&&d?o(a):e.current.includes(a)||(i(c,{key:a,variant:l,onExited:function(n,r){var a;t(function(e){return{type:g,payload:{key:e}}}(r)),a=r,e.current=Object(s.a)(e.current.filter((function(e){return a!==e})))}}),r=a,e.current=[].concat(Object(s.a)(e.current),[r]))}))}),[n,i,o,t]),null};v.propTypes={notifications:d.a.array};var y,w,k,C,S,M=n(37),A=n(144),E=n(77),R=n(30),U=n(31),L=n(7),B=n(323),T=n(321),I="white",z="#ff0000",F="#4487c7",N="#c2c2c2",_=U.a.div(y||(y=Object(R.a)(["\n  width: 100%;\n  margin: 10px 0;\n  padding: 20px;\n"]))),D=Object(L.a)((function(){return{root:{backgroundColor:F,color:I,width:"90%",margin:"10px 5%",fontSize:"1rem",border:"1px solid ".concat(F)}}}))(B.a),P=Object(L.a)((function(){return{root:{width:"100%",display:"block",margin:"10px 0",fontSize:"1rem","& .Mui-disabled":{color:N},"& .MuiInputBase-input":{color:N}}}}))(T.a),W=Object(L.a)((function(){return{root:{width:"40%",margin:"10px 10px",fontSize:"1rem","& label":{color:N},"& label.Mui-focused":{color:I},"& input:valid + fieldset":{borderColor:N,borderWidth:1},"& input:invalid + fieldset":{borderColor:z,borderWidth:1},"& input:valid:focus + fieldset":{borderColor:I},"& .MuiOutlinedInput-input":{color:I},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:z},"&:hover fieldset":{borderColor:I}}}}}))(T.a),q=n(8),K={grid:{type:"grid",label:"Current grid size".toUpperCase(),error:"Please insert a valid number"},height:{type:"height",label:"Height"},width:{type:"width",label:"Width"},updateButton:{text:"Update grid"}},V=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){var t=e.missionReducer;return[t.grid.width,t.grid.height]})),n=Object(M.a)(t,2),r=n[0],a=n[1],i=Object(A.a)({initialValues:{width:r,height:a},validationSchema:E.a({width:E.b().required("Must be at least 1 digit").matches(/[0-9]+$/,"Must be only digits").max(3,"Mars too big!"),height:E.b().required("Must be at least 1 digit").matches(/[0-9]+$/,"Must be only digits").max(3,"Mars too big!")}),onSubmit:function(t){e({type:x,payload:t})}}),o=i.values,u=i.errors,s=i.handleSubmit,l=i.handleChange;return Object(q.jsxs)(_,{children:[Object(q.jsx)(P,{name:K.grid.type,disabled:!0,label:u.width?u.width:u.height?u.height:K.grid.label,error:Boolean(u.width||u.height),fullWidth:!0,value:"".concat(r," x ").concat(a)}),Object(q.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:s,children:[Object(q.jsx)(W,{name:K.width.type,error:Boolean(u.width),label:K.width.label,value:o.width,onChange:l,variant:"outlined"}),Object(q.jsx)(W,{name:K.height.type,error:Boolean(u.height),label:K.height.label,value:o.height,onChange:l,variant:"outlined"})]}),Object(q.jsx)(D,{variant:"contained",disabled:Boolean(u.width||u.height),onClick:s,children:K.updateButton.text})]})},G={NasaInsignia:n.p+"static/media/nasa.c8f782fb.png",Think:n.p+"static/media/think.b396b49b.jpg",Mars:n.p+"static/media/mars.79d6e93a.jpg"},J=n(318),$=n(319),H=Object(L.a)((function(){return{root:{backgroundColor:F,color:I,width:"90%",margin:"10px 5%",fontSize:"1rem",border:"1px solid ".concat(F)}}}))(B.a),Q=Object(L.a)((function(){return{root:{backgroundColor:z,color:I,width:"90%",margin:"10px 5%",fontSize:"1rem",border:"1px solid ".concat(z)}}}))(B.a),X=U.a.div(w||(w=Object(R.a)(["\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  display: grid;\n  grid-template-rows: 170px 100px auto 60px 60px;\n  border-left: 3px solid ",";\n  background: ",";\n"])),F,"linear-gradient(45deg,  rgba(1, 27, 52, 1) 0%,rgba(65, 132, 196, 1) 100%)"),Y=Object(L.a)((function(){return{root:{color:I,width:"200px",height:"150px",margin:"10px auto"}}}))(J.a),Z=Object(L.a)((function(){return{root:{textAlign:"center",fontSize:"2rem",fontWeight:"900",color:I}}}))($.a),ee="/home",te="/cake-is-a-lie",ne={text:"Launch Mission"},re={text:"Upload routes"},ae="NASA",ie="Mission to MARS",oe=function(){var e=Object(c.b)(),t=Object(a.e)(),n=Object(r.useState)(null),i=Object(M.a)(n,2),o=i[0],u=i[1],s=function(e){u(e.target.files[0])},l=function(){console.log("Upload",o);e({type:h,payload:o})};return Object(q.jsxs)(X,{children:[Object(q.jsx)(Y,{onClick:function(){return t.push(te)},image:G.NasaInsignia,title:ae}),Object(q.jsx)(Z,{children:ie}),Object(q.jsx)(V,{}),Object(q.jsx)(H,{variant:"contained","aria-label":"upload",onClick:o?function(){return l()}:null,component:"label",children:(console.log("conditional",o),o?"Upload ".concat(o.name.substring(0,8),"..."):Object(q.jsxs)(q.Fragment,{children:[re.text,Object(q.jsx)("input",{type:"file",hidden:!0,onChange:s})]}))}),Object(q.jsx)(Q,{variant:"contained","aria-label":"launch",onClick:o?function(){return u(null)}:function(){return console.log("Launching")},children:o?"clear selected":ne.text})]})},ce=U.a.div(k||(k=Object(R.a)(["\n  width: 100%;\n  background-image: url(",");\n"])),(function(e){return e.src})),ue=function(){return Object(q.jsx)(ce,{src:G.Mars})},se=U.a.div(C||(C=Object(R.a)(["\n  display: grid;\n  grid-template-columns: auto 300px;\n  height: 100%;\n  width: 100%;\n"]))),le=U.a.div(S||(S=Object(R.a)(["\n  height: 100%;\n  width: 100%;\n"]))),de=Object(L.a)((function(){return{root:{backgroundColor:z,color:I,width:"90%",margin:"10px 5%",fontSize:"1rem",border:"1px solid ".concat(z)}}}))(B.a),be=Object(L.a)((function(){return{root:{color:I,width:"200px",height:"150px",margin:"10px auto"}}}))(J.a),he=Object(L.a)((function(){return{root:{textAlign:"center",fontSize:"2rem",fontWeight:"900",color:N}}}))($.a),pe="Back to the conspiracy",je="The cake is a lie",fe="The earth is flat",Oe="Flat earthers rule, Globers drool",ge="Think!",xe=n(28),me=n(145),ve=n(141),ye={numberOfRovers:0,error:null,grid:{height:400,width:400}},we={notifications:[]},ke=Object(xe.combineReducers)({missionReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(b.a)(Object(b.a)({},e),{},{numberOfRovers:t.payload});case j:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload});case x:return Object(b.a)(Object(b.a)({},e),{},{grid:t.payload});default:return e}},snackbarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(b.a)(Object(b.a)({},e),{},{notifications:[].concat(Object(s.a)(e.notifications),[t.payload])});case O:var n=function(){e.notifications.map((function(e){return t.payload.dismissAll||e.key===t.payload.key?Object(b.a)(Object(b.a)({},e),{},{dismissed:!0}):e}))};return Object(b.a)(Object(b.a)({},e),{},{notifications:n()});case g:var r=function(){return e.notifications.filter((function(e){return e.key!==t.payload.key}))};return Object(b.a)(Object(b.a)({},e),{},{notifications:r()});default:return e}}}),Ce=n(20),Se=n.n(Ce),Me=n(24),Ae=n(142),Ee=n(143),Re="http://localhost:54210",Ue=n.n(Ee).a.create({baseURL:Re+"/api",responseType:"json"});Ue.interceptors.request.use((function(e){return e.url.includes(Re)&&(e.withCredentials=!1,e.baseURL=Re),e})),Ue.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var Le=Ue,Be=["/upload"],Te={upload:{postNewMovementFile:function(){var e=Object(Ae.a)(Se.a.mark((function e(t){var n;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Le({method:"POST",url:Be[0],data:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},Ie=Se.a.mark(ze);function ze(e){var t;return Se.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Me.call)(Te.upload.postNewMovementFile,e.payload);case 3:return t=n.sent,n.next=6,Object(Me.put)({type:p,payload:t});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(Me.put)((r=n.t0,{type:j,payload:r}));case 12:case"end":return n.stop()}var r}),Ie,null,[[0,8]])}var Fe=ze,Ne=Se.a.mark(De),_e=n(24).put;function De(){var e,t,n,r,a,i=arguments;return Se.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:for(console.log("wooot"),e=i.length,t=new Array(e),n=0;n<e;n++)t[n]=i[n];return r=t[0],a=t[1],o.next=5,_e(m({message:r,type:a}));case 5:case"end":return o.stop()}}),Ne)}var Pe=De,We=Se.a.mark(Ke),qe=Se.a.mark(Ve);function Ke(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Me.all)([Object(Me.takeLatest)(h,Fe)]);case 2:case"end":return e.stop()}}),We)}function Ve(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Me.takeEvery)(j,Pe,"File could not be uploaded!","error");case 2:return e.next=4,Object(Me.takeEvery)([p,x],Pe,"Changes have been saved successfully!","success");case 4:case"end":return e.stop()}}),qe)}var Ge=Se.a.mark(Je);function Je(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Me.fork)(Ke);case 2:return e.next=4,Object(Me.fork)(Ve);case 4:case"end":return e.stop()}}),Ge)}var $e=Je,He=Object(me.a)(),Qe=Object(xe.createStore)(ke,Object(ve.composeWithDevTools)(Object(xe.applyMiddleware)(He)));He.run($e);var Xe=Qe,Ye=(n(281),Object(q.jsx)(c.a,{store:Xe,children:Object(q.jsxs)(u.a,{maxSnack:3,children:[Object(q.jsx)(v,{}),Object(q.jsx)(a.c,{history:Object(i.a)(),children:Object(q.jsxs)(a.d,{children:[Object(q.jsx)(a.b,{path:ee,component:function(){return Object(q.jsxs)(se,{children:[Object(q.jsx)(ue,{}),Object(q.jsx)(oe,{})]})}}),Object(q.jsx)(a.b,{path:te,component:function(){var e=Object(a.e)();return Object(q.jsxs)(le,{children:[Object(q.jsx)(de,{onClick:function(){return e.push(ee)},children:pe}),Object(q.jsx)(he,{children:je}),Object(q.jsx)(he,{children:fe}),Object(q.jsx)(he,{children:Oe}),Object(q.jsx)(be,{image:G.Think,title:ge})]})}}),Object(q.jsx)(a.a,{to:ee})]})})]})})),Ze=document.querySelector("#here");Object(o.render)(Ye,Ze)}},[[282,1,2]]]);
//# sourceMappingURL=main.12d27a8e.chunk.js.map