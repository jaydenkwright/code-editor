(this["webpackJsonpcode-editor"]=this["webpackJsonpcode-editor"]||[]).push([[0],{39:function(e,t,n){e.exports=n(72)},44:function(e,t,n){},46:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),o=n.n(c),l=(n(44),n(2)),u=n.n(l),i=n(5),s=n(1),m=(n(46),n(12)),d=n(3),p=n(34),f=n.n(p).a.create({baseURL:"http://localhost:5000/api/"}),v=(n(63),n(64),n(65),n(66),n(67),n(35)),g=function(e){var t=e.language,n=e.value,a=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"editor-container"},r.a.createElement(v.Controlled,{onBeforeChange:function(e,t,n){a(n)},value:n,className:"editor-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,lineNumbers:!0,theme:"material"}})))},h=function(e){var t=e.srcDoc,n=e.setSrcDoc,c=e.html,o=e.css,l=e.javascript;return Object(a.useEffect)((function(){var e=setTimeout((function(){n("\n            <html>\n                <body>".concat(c,"</body>\n                <style>").concat(o,"</style>\n                <script>").concat(l,"<\/script>\n            </html>\n            "))}),1e3);return function(){return clearTimeout(e)}}),[c,o,l]),r.a.createElement("div",{className:"window display"},r.a.createElement("iframe",{srcDoc:t,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"}))},b=function(e,t){var n="CODE_EDITOR_"+e,r=Object(a.useState)((function(){var e=localStorage.getItem(n);return e?JSON.parse(e):"function"===typeof t?t():t})),c=Object(s.a)(r,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(o))}),[n,o]),[o,l]},j=n(10),E=n(11);function O(){var e=Object(j.a)(["\n    width: 20vw;\n    padding: .5em;\n    background-color: #E53E3E;\n    margin: auto auto 1em auto;\n    color: #F7FAFC;\n    font-family: Arial, Helvetica, sans-serif;\n"]);return O=function(){return e},e}function w(){var e=Object(j.a)(["\n    width: 20vw;\n    color: #2D3748;\n    background-color: #CBD5E0;\n"]);return w=function(){return e},e}function C(){var e=Object(j.a)(["\n    width: 20vw;\n    height: 5vh;\n    color: #2D3748;\n    background-color: #CBD5E0;\n    margin: auto auto 1em auto;\n    border:none;\n    display: block;\n    outline: none;\n    padding: .5em .2em;\n"]);return C=function(){return e},e}function x(){var e=Object(j.a)(["\n    background-color: #CBD5E0;\n    color: #2D3748;\n    margin: auto auto 1em auto;\n    width: 20vw;\n    height: 10vh;\n    border: none;\n    display: block;\n    outline: none;\n    padding: .5em .2em;\n    font-family: Arial, Helvetica, sans-serif;\n"]);return x=function(){return e},e}function k(){var e=Object(j.a)(["\n    background-color: #CBD5E0;\n    color: #2D3748;\n    margin: auto auto 1em auto;\n    width: 20vw;\n    height: 5vh;\n    border: none;\n    display: block;\n    outline: none;\n    padding: 0em .2em;\n"]);return k=function(){return e},e}function S(){var e=Object(j.a)(["\n    color: #E2E8F0;\n    text-decoration: none;\n    &:visited {\n        color: #E2E8F0;\n    }\n\n    &:hover {\n        color: #EDF2F7;\n    }\n"]);return S=function(){return e},e}function y(){var e=Object(j.a)(["\n    color: #A0AEC0;\n    font-family: Arial, Helvetica, sans-serif;\n"]);return y=function(){return e},e}function N(){var e=Object(j.a)(["\n    color: #E2E8F0;\n    font-family: Arial, Helvetica, sans-serif;\n"]);return N=function(){return e},e}function D(){var e=Object(j.a)(["\n    background: #38A169;\n    color: #F7FAFC;\n    border: none;\n    outline: none;\n    font-size: 1em;\n    padding: 0em .5em;\n    width: ",";\n    height: 5vh;\n    margin: 0em 0em .5em 0em;\n    display: ",";\n    &:hover {\n        background-color: #2F855A;\n    }\n"]);return D=function(){return e},e}function F(){var e=Object(j.a)(["\n    background: ",";\n    color: ",";\n    border: none;\n    outline: none;\n    padding: .5em;\n    margin: 0em 0em .5em 0em;\n    display: ",";\n    &:hover {\n        background-color: ",";\n    }\n"]);return F=function(){return e},e}var L=E.a.button(F(),(function(e){return e.active?"#333":"#999"}),(function(e){return e.active?"#fff":"#000"}),(function(e){return e.block?"block":"inline-block"}),(function(e){return e.active?"#333":"#888"})),I=E.a.button(D(),(function(e){return e.noWidth?" ":"20vw"}),(function(e){return e.block?"block":"inline-block"})),A=E.a.h1(N()),P=E.a.h3(y()),B=Object(E.a)(m.b)(S()),H=E.a.input(k()),J=E.a.textarea(x()),T=E.a.select(C()),W=E.a.option(w()),R=E.a.div(O()),M=r.a.createContext({}),U=M.Provider,_=(M.Consumer,M),z=function(){var e=Object(d.f)(),t=Object(d.g)().id,n=Object(a.useContext)(_).loggedIn,c=b("html","test"),o=Object(s.a)(c,2),l=o[0],m=o[1],p=b("css",""),v=Object(s.a)(p,2),j=v[0],E=v[1],O=b("javascript",""),w=Object(s.a)(O,2),C=w[0],x=w[1],k=Object(a.useState)(""),S=Object(s.a)(k,2),y=S[0],N=S[1],D=Object(a.useState)(""),F=Object(s.a)(D,2),B=F[0],H=F[1],J=Object(a.useState)(""),T=Object(s.a)(J,2),W=T[0],R=T[1],M=Object(a.useState)(""),U=Object(s.a)(M,2),z=U[0],G=U[1],K=Object(a.useState)("html"),$=Object(s.a)(K,2),q=$[0],Q=$[1],V=Object(a.useState)(),X=Object(s.a)(V,2),Y=X[0],Z=X[1],ee=Object(a.useState)(),te=Object(s.a)(ee,2),ne=(te[0],te[1]),ae={html:{language:"xml",displayName:"HTML",value:l,onChange:m},css:{language:"css",displayName:"CSS",value:j,onChange:E},javascript:{language:"javascript",displayName:"Javascript",value:C,onChange:x}};return Object(a.useEffect)((function(){var n=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/project/".concat(t),{withCredentials:!0});case 3:n=e.sent,Z(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response.data?ne(e.t0.response.data.msg):ne("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),a=function(){var t=Object(i.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.get("/code/project/".concat(n),{withCredentials:!0});case 3:(a=t.sent).data&&a.data.length>0?(m(a.data.filter((function(e){return"html"===e.lang}))[0].code),N(a.data.filter((function(e){return"html"===e.lang}))[0].code),E(a.data.filter((function(e){return"css"===e.lang}))[0].code),H(a.data.filter((function(e){return"css"===e.lang}))[0].code),x(a.data.filter((function(e){return"javascript"===e.lang}))[0].code),R(a.data.filter((function(e){return"javascript"===e.lang}))[0].code)):e.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response.data?ne(t.t0.response.data.msg):ne("Something went wrong!");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),r=function(){var e=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.put("/code/update/".concat(t,"/").concat(n),{code:ae[t].value},{withCredentials:!0});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response.data.msg?ne(e.t0.response.data.msg):ne("Something went wrong!");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}();if(t&&!Y&&(n(t),a(t)),t){var c=setInterval((function(){console.log("update"),l!==y&&(N((function(){return l})),r("html",t)),j!==B&&(H((function(){return j})),r("css",t)),C!==W&&(R((function(){return C})),r("javascript",t))}),6e4);return function(){return clearInterval(c)}}}),[l,j,C,y,B,W]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"window-container"},r.a.createElement("div",{className:"window code-window"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{onClick:function(){return e.push("/")}},"Home"),t&&Y?Y.title?r.a.createElement(A,null,Y.title):r.a.createElement(A,null,"Untitled"):null):r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{block:!0,onClick:function(){return e.push("/getStarted")},noWidth:!0},"Get Started")),r.a.createElement(L,{active:"html"===q,onClick:function(){return Q("html")}},"HTML"),r.a.createElement(L,{active:"css"===q,onClick:function(){return Q("css")}},"CSS"),r.a.createElement(L,{active:"javascript"===q,onClick:function(){return Q("javascript")}},"Javascript"),r.a.createElement(g,{language:ae[q].language,displayName:ae[q].displayName,value:ae[q].value,onChange:ae[q].onChange})),r.a.createElement("div",{className:"window display"},r.a.createElement(h,{srcDoc:z,setSrcDoc:G,html:l,css:j,javascript:C}))))},G=function(){var e=Object(a.useContext)(_).setLoggedIn,t=Object(d.f)(),n=Object(a.useState)(""),c=Object(s.a)(n,2),o=c[0],l=c[1],m=Object(a.useState)(""),p=Object(s.a)(m,2),v=p[0],g=p[1],h=Object(a.useState)(""),b=Object(s.a)(h,2),j=b[0],E=b[1];return r.a.createElement("div",{className:"loginContainer"},j?r.a.createElement(R,null,j):null,r.a.createElement("form",{onSubmit:function(n){(n.preventDefault(),o&&v)&&function(){var n=Object(i.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.post("/user/login",{email:o,password:v},{withCredentials:!0});case 3:n.sent.data&&(e(!0),t.push("/")),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),E(n.t0.response.data.msg);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()()}},r.a.createElement(H,{type:"email",placeholder:"Email Address",onChange:function(e){return l(e.target.value)},maxLength:200}),r.a.createElement(H,{type:"password",placeholder:"Password",onChange:function(e){return g(e.target.value)},maxLength:300}),r.a.createElement(I,{active:!0},"Login")))},K=function(){var e=Object(d.f)(),t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),m=Object(s.a)(l,2),p=m[0],v=m[1],g=Object(a.useState)(""),h=Object(s.a)(g,2),b=h[0],j=h[1],E=Object(a.useState)(""),O=Object(s.a)(E,2),w=O[0],C=O[1],x=Object(a.useState)(""),k=Object(s.a)(x,2),S=k[0],y=k[1],N=Object(a.useState)(null),D=Object(s.a)(N,2),F=D[0],L=D[1];return F&&e.push("/login"),r.a.createElement("div",{className:"registrationContainer"},S?r.a.createElement(R,null,S):null,r.a.createElement("form",{onSubmit:function(e){(e.preventDefault(),c&&p&&b&&w)&&function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.post("/user/register",{name:c,username:p,email:b,password:w},{withCredentials:!0});case 3:t=e.sent,L(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),y(e.t0.response.data.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}},r.a.createElement(H,{type:"text",placeholder:"Name",maxLength:50,onChange:function(e){return o(e.target.value)}}),r.a.createElement(H,{type:"text",placeholder:"Username",maxLength:100,onChange:function(e){return v(e.target.value)}}),r.a.createElement(H,{type:"email",placeholder:"Email Address",maxLength:200,onChange:function(e){return j(e.target.value)}}),r.a.createElement(H,{type:"password",placeholder:"Password",maxLength:300,onChange:function(e){return C(e.target.value)}}),r.a.createElement(I,{active:!0},"Register")))},$=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"loginRegistrationContainer"},r.a.createElement(G,null),r.a.createElement(K,null)))},q=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"loginRegistrationContainer"},r.a.createElement(G,null)))},Q=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(),l=Object(s.a)(o,2),m=l[0],p=l[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/project/user/",{withCredentials:!0});case 3:t=e.sent,c(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.t0.response?p(e.t0.response.data.msg):p("Something went wrong!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=Object(d.f)();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"homeContainer"},r.a.createElement("div",{className:"title"},r.a.createElement(A,null,"Hello, Kyle")),m?r.a.createElement(R,null,m):null,r.a.createElement("div",{className:"projectContainer"},n&&n.length>0?n.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(A,null,r.a.createElement(B,{to:"/project/".concat(e.id)},e.title)),r.a.createElement(P,null,e.description))})):null),r.a.createElement("div",{className:"createProjectContainer"},r.a.createElement(I,{noWidth:!0,onClick:function(){return v.push("/project/create")}},"Create New Project"))))},V=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),m=l[0],p=l[1],v=Object(a.useState)("Private"),g=Object(s.a)(v,2),h=g[0],b=g[1],j=Object(a.useState)(null),E=Object(s.a)(j,2),O=E[0],w=E[1],C=Object(d.f)();return r.a.createElement("div",{className:"container"},O?r.a.createElement(R,null,O):null,r.a.createElement("form",{onSubmit:function(e){(e.preventDefault(),n&&m)&&function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.post("/project/create",{title:n,description:m,privacy:"Private"===h},{withCredentials:!0});case 3:if(!(t=e.sent).data){e.next=15;break}return e.next=7,f.post("/code/create",{projectId:t.data.id,lang:"html",code:""},{withCredentials:!0});case 7:return a=e.sent,e.next=10,f.post("/code/create",{projectId:t.data.id,lang:"css",code:""},{withCredentials:!0});case 10:return r=e.sent,e.next=13,f.post("/code/create",{projectId:t.data.id,lang:"javascript",code:""},{withCredentials:!0});case 13:c=e.sent,a&&r&&c&&C.push("/project/".concat(t.data.id));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),w(e.t0.response.data.msg);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}()()}},r.a.createElement(H,{type:"text",placeholder:"Title",maxLength:100,onChange:function(e){return c(e.target.value)}}),r.a.createElement(J,{placeholder:"Description",maxLength:200,onChange:function(e){return p(e.target.value)}}),r.a.createElement(T,{value:h,onChange:function(e){return b(e.target.value)}},r.a.createElement(W,{value:"Private"},"Private"),r.a.createElement(W,{value:"Public"},"Public")),r.a.createElement(I,null,"Submit")))};var X=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/user/isLoggedIn",{withCredentials:!0});case 3:e.sent,c(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),console.log(n),r.a.createElement(U,{value:{loggedIn:n,setLoggedIn:c}},n?r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0},r.a.createElement(Q,null)),r.a.createElement(d.a,{path:"/project/create",exact:!0},r.a.createElement(V,null)),r.a.createElement(d.a,{path:"/project/:id",exact:!0},r.a.createElement(z,null)))):r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0},r.a.createElement(z,null)),r.a.createElement(d.a,{path:"/getStarted",exact:!0},r.a.createElement($,null)),r.a.createElement(d.a,{path:"/login",exact:!0},r.a.createElement(q,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.476c16b6.chunk.js.map