(this["webpackJsonpposts-app"]=this["webpackJsonpposts-app"]||[]).push([[0],{25:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(17),s=n.n(c),o=(n(25),n(3)),i=n.n(o),l=n(5),u=n(4),f=n(13),m=function(e){return e?{_id:e._id,active:e.active,comments:e.comments,created:e.createdAt,description:e.description,history:e.history,image:e.image,likes:e.likes,title:e.title,updated:e.updatedAt,user:e.user.username}:null},p="https://posts-pw2021.herokuapp.com/api/v1",d={};d.login=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/auth/signin"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:t,password:n})});case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:return e.abrupt("return",{});case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),d.verifyToken=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/auth/whoami"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 3:if(!(n=e.sent).ok){e.next=9;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:return e.abrupt("return",{});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),d.createPost=function(){var e=Object(l.a)(i.a.mark((function e(t,n,r){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/post/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify({title:t,description:n,image:r})});case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d.getOwn=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,r=void 0===n?0:n,e.prev=1,e.next=4,fetch("".concat(p,"/post/owned?limit=10&page=").concat(r),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,a.json();case 8:return c=e.sent,s=c.data.map(m),e.abrupt("return",s);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(1),console.error({error:e.t0}),e.abrupt("return",{status:!1,posts:[]});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),d.getAll=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,r=void 0===n?0:n,e.prev=1,e.next=4,fetch("".concat(p,"/post/all?limit=10&page=").concat(r),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:if(!(a=e.sent).ok){e.next=12;break}return e.next=8,a.json();case 8:return c=e.sent,s=c.data.map(m),localStorage.setItem("pages",c.pages),e.abrupt("return",s);case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(1),console.error({error:e.t0}),e.abrupt("return",{status:!1,posts:[]});case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),d.getLikes=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/post/like/").concat(t),{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:if(!(n=e.sent).ok){e.next=9;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{status:!1,likes:[]});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),d.getComments=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/post/comment/").concat(t),{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify({description:n})});case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{status:!1,comments:[]});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),d.setFavorite=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/post/fav/").concat(t),{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:if(!(n=e.sent).ok){e.next=9;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{status:!1,favorite:[]});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),d.getAllFavorites=Object(l.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/post/fav"),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return n=e.sent,r=n.favorites,e.abrupt("return",r);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{status:!1,posts:[]});case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),d.setToggle=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/post/toggle/").concat(t),{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:return r=e.sent,console.log(r),e.abrupt("return",r);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{status:!1,posts:[]});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),d.UpdatePost=function(){var e=Object(l.a)(i.a.mark((function e(t,n,r,a){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/post/update/").concat(a),{method:"PUT",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify({title:t,description:n,image:r})});case 2:if(!(c=e.sent).ok){e.next=8;break}return e.next=6,c.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d.getOne=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/post/one/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:if(!(n=e.sent).ok){e.next=9;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{status:!1,post:[]});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();var x=d,b=n(1),j=a.a.createContext(),h="token",g=function(e){var t=Object(r.useState)(void 0),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(void 0),o=Object(u.a)(s,2),m=o[0],p=o[1],d=Object(r.useState)(void 0),g=Object(u.a)(d,2),O=g[0],k=g[1];Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=w(),v(),!t){e.next=9;break}return e.next=5,x.verifyToken(t);case 5:n=e.sent,r=n.username,a=n.role,r&&a&&(p({username:r,role:a}),N(t),y(a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var N=function(e){localStorage.setItem(h,e),c(e)},y=function(e){localStorage.setItem("role_name",e),k(e)},S=Object(r.useCallback)((function(e,t){var n=function(){var n=Object(l.a)(i.a.mark((function n(){var r,a,c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!1,n.prev=1,n.next=4,x.login(e,t);case 4:a=n.sent,(c=a.token)&&(N(c),y(O),r=!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.error(n.t0),console.error("Error in login");case 13:return n.prev=13,n.abrupt("return",r);case 16:case"end":return n.stop()}}),n,null,[[1,9,13,16]])})));return function(){return n.apply(this,arguments)}}();return n()}),[]),C=Object(r.useCallback)((function(){p(void 0),N(void 0),y(void 0)}),[]),I=Object(r.useMemo)((function(){return{token:a,user:m,login:S,logout:C,role:O}}),[a,m,S,C,O]);return Object(b.jsx)(j.Provider,Object(f.a)({value:I},e))},O=function(){var e=a.a.useContext(j);if(!e)throw new Error("useUserContext() must be inside of UserProvider");return e},w=function(){return localStorage.getItem(h)},v=function(){return localStorage.getItem("role_name")},k=n(6),N=n(9);function y(){var e=O(),t=e.login,n=e.token,a=e.role,c=Object(r.useState)(""),s=Object(u.a)(c,2),o=s[0],f=s[1],m=Object(r.useState)(""),p=Object(u.a)(m,2),d=p[0],x=p[1],j=Object(r.useState)(!1),h=Object(u.a)(j,2),g=h[0],w=h[1],v=function(e,t){t(e.target.value)},y=function(){var e=Object(l.a)(i.a.mark((function e(n){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t(o,d);case 3:r=e.sent,w(!r),f(""),x(""),c=a,console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n&&a?(console.log("Ya se loggea"),Object(b.jsx)(k.a,{replace:!0,to:"/redirect"})):Object(b.jsxs)("div",{className:"flex flex-col justify-center items-center h-screen bg-purple-500 lg:flex-row",children:[Object(b.jsxs)("div",{className:"bg-purple-500 h-1/4 w-full flex flex-col items-center justify-center content-center md:flex-row md:w-1/2 lg:w-2/5 lg:flex-col",children:[Object(b.jsx)(N.a,{className:"text-white h-1/2 w-1/2"}),Object(b.jsx)("h1",{className:"text-white text-4xl font-semibold font-inter m-2 md:w-1/2 lg:w-auto",children:"BIENVENIDO"})]}),Object(b.jsx)("main",{className:"w-full h-3/4 p-8 md:p-10 flex flex-col justify-center items-center bg-gray-100 rounded-tr-lg rounded-tl-lg shadow lg:w-2/5 lg:h-4/5 lg:justify-between",children:Object(b.jsxs)("form",{onSubmit:y,className:"flex flex-col gap-4 items-center justify-center lg:h-full",children:[Object(b.jsx)("h2",{className:"uppercase text-purple-600 font-monserrat font-semibold text-2xl m-4",children:"Iniciar Sesi\xf3n"}),g&&Object(b.jsx)("p",{className:"w-full rounded p-3 text-center text-white font-roboto bg-red-700 select-none",children:"Un error ha ocurrido en el inicio de sesi\xf3n"}),Object(b.jsxs)("div",{className:"flex flex-row h-1/2",children:[Object(b.jsx)(N.d,{className:"w-1/3 h-1/2 items-center justify-center md:h-3/4 lg:h-2/4"}),Object(b.jsx)("input",{className:"font-medium w-full h-1/2 text-gray-900 focus:outline-none p-2 rounded bg-pink-50 focus:ring text-center ring-pink-200 md:h-3/4 lg:h-2/4 lg:text-xl",type:"text",value:o,placeholder:"usuario",onChange:function(e){return v(e,f)}})]}),Object(b.jsxs)("div",{className:"flex flex-row h-1/2",children:[Object(b.jsx)(N.b,{className:"w-1/3 h-1/2 items-center justify-center md:h-3/4 lg:h-2/4"}),Object(b.jsx)("input",{className:"font-medium w-full h-1/2 text-gray-900 focus:outline-none p-2 rounded bg-pink-50 focus:ring ring-pink-200 text-center md:h-3/4 lg:h-2/4 lg:text-xl",type:"password",placeholder:"contrase\xf1a",onChange:function(e){return v(e,x)},value:d})]}),Object(b.jsxs)("button",{className:"mt-6 w-full lg:w-3/4 transition duration-300 ease-in-out rounded text-lg text-extrabold uppercase bg-purple-500 hover:bg-purple-700 py-2 px-4 text-white",children:["Iniciar Sesi\xf3n"," "]})]})})]})}var S=n(8),C=function(e){var t=e.role,n=e.children,r=O().user;return r&&r.role===t?n:Object(b.jsx)("div",{className:"flex  flex-col lg:flex-row justify-center items-center w-screen h-screen bg-purple-500",children:Object(b.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(b.jsx)("h1",{className:"text-9xl font-Monaco font-medium text-center mb-6 text-white",children:"404"}),Object(b.jsx)("h3",{className:"text-xl font-Monaco font-medium text-center text-white",children:"P\xe1gina no encontrada"}),Object(b.jsx)("p",{className:"text-lg font-Monaco font-medium text-center text-white",children:"La p\xe1gina que buscas requiere de autenticaci\xf3n"})]})})},I={admin:"/admin",user:"/user"},T=function(){var e,t=O().user;return t?Object(b.jsx)(k.a,{replace:!0,to:null!==(e=I[t.role])&&void 0!==e?e:"/"}):Object(b.jsx)("div",{className:"bg-yellow-50 min-h-screen flex items-center min-w-full",children:Object(b.jsx)("h2",{className:"font-Georgia font-bold text-5xl lg:text-6xl text-gray-800 text-center",children:"No se puede redireccionar"})})},A=n.p+"static/media/user.285266fe.png",P=function(e){var t=e.title,n=e.onButton,r=void 0===n?function(){}:n;return Object(b.jsx)("button",{onClick:function(){r()},className:"px-2 py-1 bg-indigo-500 rounded",style:{color:"#fff",fontVariantCaps:"small-caps"},children:t})},E=function(){return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target),n=Object.fromEntries(t.entries());localStorage.getItem("token");if(console.log(n),n.title.length<8||n.title.length>32)return alert("The title must be between 8 and 32 characters");if(n.description.length<8)return alert("The description must be at least 8 characters long");if(!n.image.startsWith("https://"))return alert("The image must be imported through a url");var r=x.createPost(n.title,n.description,n.image);console.log(r)},className:"flex flex-col items-center justify-center w-full h-full p-2 m-2 md:h-full md:p-1 md:m-1 lg:h-3/4",children:[Object(b.jsx)("input",{type:"text",placeholder:"Titulo",name:"title",id:"title",className:"font-medium h-1/2 text-gray-900 focus:outline-none p-2 rounded-lg bg-pink-50 focus:ring text-center ring-pink-200 w-1/2 p-2 m-2 md:p-1 md:m-1"}),Object(b.jsx)("input",{type:"text",placeholder:"Descripci\xf3n",name:"description",id:"description",className:"break-words resize-y whitespace-normal overscroll-y-auto overflow-ellipsis font-medium h-1/2 text-gray-900 focus:outline-none p-2 rounded-lg bg-pink-50 focus:ring text-center ring-pink-200 w-1/2 p-2 m-2 md:m-1 lg:p-4 lg:h-4/6"}),Object(b.jsx)("input",{type:"text",placeholder:"URL Imagen",name:"image",id:"image",className:"font-medium h-1/2 text-gray-900 focus:outline-none p-2 rounded-lg bg-pink-50 focus:ring text-center ring-pink-200 w-1/2 p-2 m-2 md:p-1 md:m-1"}),Object(b.jsx)("button",{className:"mt-6 w-full lg:w-3/4 transition duration-300 ease-in-out rounded-lg text-lg text-extrabold uppercase bg-purple-500 hover:bg-purple-700 py-2 px-4 text-white",children:"A\xf1adir"})]})},B=n(10),z=n(16),F=n.p+"static/media/Man.46bcb7f3.png";function D(){var e=Object(k.g)(),t=O().logout,n=localStorage.getItem("role_name"),a=Object(r.useState)(!1),c=Object(u.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(!1),l=Object(u.a)(i,2),f=l[0],m=l[1],p=Object(r.useState)(!1),d=Object(u.a)(p,2),x=d[0],j=d[1],h=Object(r.useState)(!1),g=Object(u.a)(h,2),w=g[0],v=g[1],y=Object(r.useState)(!1),S=Object(u.a)(y,2),C=S[0],I=S[1],T=Object(r.useState)(!1),A=Object(u.a)(T,2),P=A[0],D=A[1];return Object(b.jsxs)("header",{className:"flex flex-col h-1/5 w-full justify-around items-center font-inter sticky top-0 relative text-white ",children:[Object(b.jsxs)("div",{className:"flex flex-row h-auto w-full bg-purple-400 justify-between p-2 font-bold md:p-1 text-center",children:[Object(b.jsx)("button",{className:" w-1/4 h-1/6 cursor-pointer text-bold align-middle",children:Object(b.jsx)(N.c,{className:" ".concat(s?"transition duration-500 origin-center transform rotate-90 scale-75 bg-purple-500 rounded-xl ":"transition duration-500 "," text-white w-1/2 h-1/2 md:h-14 md:h-14 lg:h-16 lg:w-16 lg:ml-2"),onClick:function(){0==s?(o(!0),j(!1)):(o(!1),m(!1),v(!1))}})}),Object(b.jsx)("button",{className:" w-1/4 h-1/6 cursor-pointer text-center text-bold align-middle ",onClick:function(){e("/")},children:Object(b.jsx)(N.a,{className:"text-white w-1/2 h-1/2 md:h-14 md:h-14 lg:h-16 lg:w-16"})}),Object(b.jsx)("button",{className:"  w-1/4 h-1/6 cursor-pointer text-center flex flex-row text-white text-bold text-xl align-middle",children:Object(b.jsx)("img",{className:" ".concat(x?"bg-pink-600 border-pink-500 transition duration-500":"transition duration-500"," w-1/2 h-1/2 shadow-lg rounded-full border-4 border-pink-200 bg-pink-100 md:h-1/4 md:w-1/4 lg:h-1/5 lg:w-1/5"),src:F,onClick:function(){0==x?(j(!0),o(!1)):j(!1)}})})]}),s&&Object(b.jsxs)("div",{className:"text-center bg-blue-300  w-5/6 rounded-b-lg h-auto absolute left-0 top-full text-xl md:w-2/3 lg:w-1/5 ",children:["admin"==n&&Object(b.jsxs)("div",{className:" ".concat(f?" transition duration-500 bg-blue-500 rounded-lg ":"transition duration-500"," m-2 p-4 flex flex-row justify-center items-center md:p-2 md:m-1 lg:p-4 lg:m-2"),children:[Object(b.jsx)(B.d,{className:" ".concat(f?"transition duration-500 origin-center transform rotate-90":"transition duration-500 "," w-1/6 h-1/6 md:h-14 md:h-14 lg:m-2 ")}),Object(b.jsx)("button",{className:" w-1/2 text-semibold h-1/6 lg:m-2 lg:p-2",onClick:function(){0==f?(m(!0),v(!1)):m(!1)},children:"Crear Post"})]}),"admin"==n&&Object(b.jsxs)("div",{className:" ".concat(P?" transition duration-500 bg-blue-500 rounded-lg":"transition duration-500"," m-2 p-4 flex flex-row justify-center items-center md:p-2 md:m-1 lg:p-4 lg:m-2"),children:[Object(b.jsx)(B.a,{className:" ".concat(P?"transition duration-500 origin-center transform rotate-90":"transition duration-500 "," w-1/6 h-1/6 md:h-14 md:h-14 lg:m-2")}),Object(b.jsx)("button",{className:"w-1/2 text-semibold h-1/2 lg:m-2 lg:p-2",onClick:function(){e("/Posts"),D(0==P)},children:"Mis Posts"})]}),Object(b.jsxs)("div",{className:" ".concat(C?" transition duration-500 bg-blue-500 rounded-lg":"transition duration-500"," m-2 p-4 flex flex-row justify-center items-center md:p-2 md:m-1 lg:p-4 lg:m-2"),children:[Object(b.jsx)(z.b,{className:" ".concat(C?"transition duration-500 origin-center transform rotate-90":"transition duration-500 "," w-1/6 h-1/6 md:h-14 md:h-14 lg:m-2")}),Object(b.jsx)("button",{className:"w-1/2 text-semibold h-1/2 lg:m-2 lg:p-2",onClick:function(){e("/Favorites"),I(0==C)},children:"Favoritos"})]}),Object(b.jsxs)("div",{className:" ".concat(w?" transition duration-500 bg-blue-500 rounded-lg":"transition duration-500"," m-2 p-4 flex flex-row justify-center items-center md:p-2 md:m-1 lg:p-4 lg:m-2 lg:relative "),children:[Object(b.jsx)(z.a,{className:" ".concat(w?"transition duration-500 origin-center transform rotate-90 lg:-rotate-90":"transition duration-500 "," w-1/6 h-1/6 md:h-14 md:h-14 lg:m-2")}),Object(b.jsx)("button",{className:" w-1/2 text-semibold h-1/2 lg:m-2 lg:p-2",onClick:function(){0==w?(v(!0),m(!1)):v(!1)},children:"Cerrar Sesi\xf3n"})]})]}),f&&Object(b.jsxs)("div",{className:"w-full lg:w-1/4 bg-purple-300 h-1/2 rounded-br-xl md:h-1/5 lg:absolute lg:left-1/4 lg:w-4/6 lg:h-auto lg:top-full",children:[Object(b.jsx)("h4",{className:"font-inter font-bold text-xl lg:text-6xl text-gray-800 text-center m-2",children:"Nuevo Post"}),Object(b.jsx)(E,{className:"w-full "})]}),x&&Object(b.jsx)("div",{className:"w-full bg-purple-300 h-auto rounded-br-xl rounded-bl-xl md:h-3/5 lg:absolute lg:right-0 lg:w-1/2 lg:h-3/5  lg:top-full text-white absolute right-0 top-full  md:w-1/2",children:Object(b.jsxs)("h4",{className:"font-inter font-bold text-xl lg:text-2xl text-white text-center m-2",children:[" \xa1Bienvenido ",n,"!"]})}),w&&Object(b.jsx)("button",{onClick:function(){t(),e("/login")},className:" w-full lg:w-3/4 h-3/4 transition duration-300 ease-in-out rounded-br-xl text-lg text-extrabold bg-purple-500 hover:bg-purple-700 text-white p-4 lg:absolute  lg:w-1/5 lg:h-auto lg:left-0",children:"Cerrar Sesi\xf3n"})]})}var M=n(20),V=n(18),L=n.n(V),_=function(e){var t=e.comment,n=t.user,r=t.description;return Object(b.jsxs)("div",{className:"m-1",children:[Object(b.jsx)("p",{children:n.username}),Object(b.jsx)("p",{children:r})]})},G=function(e){var t=e.id,n=e.isSubmit,a=Object(r.useState)(""),c=Object(u.a)(a,2),s=c[0],o=c[1];function f(){return(f=Object(l.a)(i.a.mark((function e(r){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),a=s,e.next=4,x.getComments(t,a);case 4:c=e.sent,console.log(c),o(""),n(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},className:"flex flex-row",children:[Object(b.jsx)("input",{value:s,onChange:function(e){o(e.target.value)},type:"text",className:"font-medium h-1/2 text-gray-900 focus:outline-none p-2 rounded-lg bg-pink-200 focus:ring text-center ring-pink-200 w-3/4 p-2 m-2 md:p-1 md:m-1"}),Object(b.jsx)("button",{children:"Comentar"})]})},U=function(e){e.pageNumber;var t=e.username,n=e.post,a=n._id,c=n.title,s=n.description,o=n.image,m=n.user,p=n.likes,d=n.comments,j=localStorage.getItem("role_name"),h=Object(r.useState)(p.some((function(e){return e.username===t}))),g=Object(u.a)(h,2),O=g[0],w=g[1],v=Object(r.useState)(!1),k=Object(u.a)(v,2),N=k[0],y=k[1],S=Object(r.useState)(p.length),C=Object(u.a)(S,2),I=C[0],T=C[1],P=Object(r.useState)(d),E=Object(u.a)(P,2),z=E[0],F=E[1],D=Object(r.useState)(!1),V=Object(u.a)(D,2),U=V[0],J=V[1],H=Object(r.useState)(!1),q=Object(u.a)(H,2),W=q[0],R=q[1],Y=Object(r.useState)(!1),K=Object(u.a)(Y,2),Q=K[0],X=K[1];Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.map((function(e){e.username===t&&w(!0)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:1==localStorage.getItem("favState".concat(a))&&y(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),n()}));var Z=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getLikes(a);case 3:O?(w(!1),T(I-1)):(w(!0),T(I+1)),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.setFavorite(a);case 3:N?N&&y(!1):y(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.setToggle(a);case 3:R(!W),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new FormData(t.target),e.next=4,x.getOne(a);case 4:if(r=e.sent,c=Object.fromEntries(n.entries()),localStorage.getItem("token"),!(c.title.length<8||c.title.length>32)){e.next=9;break}return e.abrupt("return",alert("The title must be between 8 and 32 characters"));case 9:if(!(c.description.length<8)){e.next=11;break}return e.abrupt("return",alert("The description must be at least 8 characters long"));case 11:if(c.image.startsWith("https://")){e.next=13;break}return e.abrupt("return",alert("The image must be imported through a url"));case 13:s=x.UpdatePost(c.title,c.description,c.image,r._id),console.log(s),X(!1);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"flex flex-col border w-screen bg-white m-4 h-1/2 rounded h-auto content-center items-center p-4 font-inter lg:w-full md:w-full",children:[Object(b.jsx)("div",{className:"flex flex-row justify-between items-center  p-1 w-full",children:Object(b.jsxs)("div",{className:"flex flex-row w-1/2 p-2 items-center p-1",children:[Object(b.jsx)("img",{className:"w-1/6 h-1/6 rounded-full border-4 border-pink-200 bg-pink-100",src:A}),Object(b.jsx)("p",{className:" p-2 font-bold",children:m}),"admin"==j&&m==t&&Object(b.jsx)("button",{onClick:ee,className:" ".concat(W?"bg-green-200":"bg-pink-300"," w-1/2 lg:w-1/4 transition duration-300 ease-in-out rounded-xl text-lg text-semibold  hover:bg-pink-500 p-1 text-white"),children:"Activo"}),"admin"===j&&m===t&&Object(b.jsx)("button",{onClick:function(){X(!Q)},className:" m-1 w-1/2 lg:w-2/3 transition duration-300 ease-in-out rounded-xl text-lg text-semibold bg-blue-500 hover:bg-blue-600 p-1 text-white ",children:"Actualizar"}),Q&&Object(b.jsxs)("form",{onSubmit:te,className:"flex flex-col items-center justify-center w-full h-full md:h-full md:p-1 md:m-1 lg:w-3/4 ",children:[Object(b.jsx)("input",{type:"text",name:"title",id:"title",placeholder:"Titulo",className:"font-medium h-1/2 text-gray-900 focus:outline-none rounded-lg bg-pink-50 focus:ring text-center ring-pink-200 w-full p-1 m-1 md:p-1 md:m-1"}),Object(b.jsx)("input",{type:"text",name:"description",id:"description",placeholder:"Descripcion",className:"font-medium h-1/2 text-gray-900 focus:outline-none p-2 rounded-lg bg-pink-50 focus:ring text-center ring-pink-200 w-full p-1 m-1 md:p-1 md:m-1"}),Object(b.jsx)("input",{type:"text",name:"image",id:"image",placeholder:"Imagen",className:"font-medium h-1/2 text-gray-900 focus:outline-none p-2 rounded-lg bg-pink-50 focus:ring text-center ring-pink-200 w-full p-1 m-1 md:p-1 md:m-1"}),Object(b.jsx)("button",{className:" m-1 w-full lg:w-full transition duration-300 ease-in-out rounded-xl text-lg text-semibold bg-blue-500 hover:bg-blue-600 p-1 text-white md:w-full",children:"Actualizar"})]})]})}),Object(b.jsx)("div",{className:"w-11/12  flex justify-center items-center",children:Object(b.jsx)("img",{src:o,className:"  h-full object-contain shadow  lg:w-3/4",alt:"imagen del post"})}),Object(b.jsxs)("div",{className:"flex flex-col w-11/12 justify-start items-start h-full",children:[Object(b.jsx)("p",{className:"font-bold p-1 ml-1 font-montserrat w-full",children:c}),Object(b.jsx)("p",{className:"w-full p-1 ml-1 whitespace-normal h-5/6 overflow-auto p-2 break-words text-justify",children:s})]}),Object(b.jsxs)("div",{className:"flex flex-row justify-around h-full items-center p-1 m-1 w-full",children:[Object(b.jsx)("button",{onClick:Z,type:"button",className:" flex flex-row justify-center items-center rounded p-1 m-1 w-1/5 ",children:Object(b.jsx)(B.c,{className:" ".concat(O?"text-red-400 transition duration-500 rotate-360":"transition duration-500","  w-1/3 h-1/3 text-gray-400 cursor-pointer")})}),Object(b.jsxs)("p",{children:[I," "]}),Object(b.jsx)("button",{type:"button",className:" flex flex-row justify-center items-center rounded p-1 m-1 w-1/5",onClick:function(){J(0==U)},children:Object(b.jsx)(B.b,{className:"w-1/3 h-1/3 text-gray-400 cursor-pointer"})}),Object(b.jsx)("p",{children:z.length}),Object(b.jsx)("button",{onClick:$,className:"flex flex-row justify-center items-center rounded p-1 m-1 w-1/5",children:Object(b.jsx)(B.e,{className:" ".concat(N&&"text-yellow-400"," text-xl w-1/3 h-1/3 text-gray-400 cursor-pointer")})})]}),U&&Object(b.jsx)("div",{className:"flex flex-col justify-center p-1 w-full bg-gray-50",children:z.map((function(e){return Object(b.jsxs)("div",{className:"flex flex-row w-3/4 p-2 items-center p-1",children:[Object(b.jsx)("img",{className:"w-1/6 h-1/6 rounded-full border-4 border-pink-200 bg-pink-100",src:A}),Object(b.jsx)(_,{comment:e,className:"w-3/4"},L.a.generate())," "]})}))}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)(G,{id:a,isSubmit:function(e){var n=[].concat(Object(M.a)(z),[Object(f.a)(Object(f.a)({},e),{},{user:{username:t}})]);F(n)}})})]})},J=function(e){var t=e.posts,n=void 0===t?[]:t,a=e.pageNumber,c=void 0===a?0:a,s=localStorage.getItem("token"),o=Object(r.useState)(),f=Object(u.a)(o,2),m=f[0],p=f[1],d=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.verifyToken(s);case 2:t=e.sent,p(t.username);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d(),Object(b.jsx)("div",{className:"w-screen flex flex-col items-center justify-center lg:w-5/6 md:w-5/6",children:n.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(U,{postNumber:c,username:m,post:e},e.id)})}))})};function H(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(0),s=Object(u.a)(c,2),o=s[0],f=s[1],m=localStorage.getItem("pages");Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={page:o},e.next=4,x.getAll(t);case 4:if(n=e.sent){e.next=7;break}throw new Error("Something was wrong");case 7:a(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]);return Object(b.jsxs)("section",{className:"flex gap-4 flex-col w-full justify-center items-center  min-h-screen bg-gray-100",children:[Object(b.jsx)(D,{className:"w-full"}),Object(b.jsxs)("div",{className:"w-4/5 md:w-2/3 lg:w-2/3 gap-6 h-full flex flex-col justify-center items-center lg:min-h-screen",children:[Object(b.jsx)(J,{posts:n,className:"w-full"}),Object(b.jsxs)("div",{className:"flex flex-row",children:[Object(b.jsx)(P,{title:"Previous",onButton:function(){o>=0?f(o-1):console.log("Valor minimo")}}),Object(b.jsx)(P,{title:"Next",onButton:function(){o<m?f(o+1):console.log("Valor maximo")}})]})]})]})}n.p;function q(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(0),s=Object(u.a)(c,2),o=s[0],f=s[1],m=localStorage.getItem("pages");Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={page:o},e.next=4,x.getAll(t);case 4:if(n=e.sent){e.next=7;break}throw new Error("Something was wrong");case 7:a(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]);return Object(b.jsxs)("section",{className:"flex gap-4 flex-col w-full justify-center items-center  min-h-screen bg-gray-100",children:[Object(b.jsx)(D,{className:"w-full"}),Object(b.jsxs)("div",{className:"w-4/5 md:w-2/3 lg:w-2/3 gap-6 h-full flex flex-col justify-center items-center lg:min-h-screen",children:[Object(b.jsx)(J,{posts:n,pageNumber:o,className:""}),Object(b.jsxs)("div",{className:"flex flex-row",children:[Object(b.jsx)(P,{title:"Previous",onButton:function(){o>=0?f(o-1):console.log("Valor minimo")}}),Object(b.jsx)(P,{title:"Next",onButton:function(){o<m?f(o+1):console.log("Valor maximo")}})]})]})]})}var W=n(19),R=function(){var e=Object(k.g)();return Object(b.jsxs)("div",{className:"flex  flex-col lg:flex-row justify-center items-center w-screen h-screen bg-purple-500",children:[Object(b.jsx)(W.a,{className:"m-4 lg:h-1/2 lg:w-1/6 text-white text-9xl"}),Object(b.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(b.jsx)("h1",{className:"text-9xl font-Monaco font-medium text-center mb-6 text-white",children:"404"}),Object(b.jsx)("h3",{className:"text-xl font-Monaco font-medium text-center text-white",children:"P\xe1gina no encontrada"}),Object(b.jsx)("p",{className:"text-lg font-Monaco font-medium text-center text-white",children:"La p\xe1gina que buscas no existe u otro error ha ocurrido"}),Object(b.jsx)("button",{className:" font-inter mt-6 w-full lg:w-3/4 transition duration-300 ease-in-out rounded text-lg text-extrabold uppercase bg-pink-200 hover:bg-pink-600 py-2 px-4 text-black",onClick:function(t){e("/login")},children:"Go to Login"})]})]})};function Y(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=(t[1],Object(r.useState)([])),c=Object(u.a)(a,2),s=c[0],o=c[1],f=Object(r.useState)(0),p=Object(u.a)(f,2),d=p[0],j=p[1],h=localStorage.getItem("pages");Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getAllFavorites();case 3:if(t=e.sent){e.next=6;break}throw new Error("Something was wrong");case 6:return console.log(t),n=t.map(function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getOne(t);case 3:if(n=e.sent){e.next=8;break}console.log("Este post se encuentra desactivado"),e.next=9;break;case 8:return e.abrupt("return",n);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),e.next=10,Promise.all(n);case 10:r=e.sent,a=r.filter((function(e){return void 0!==e})),c=a.map(m),console.log(c),o(c),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);return Object(b.jsxs)("div",{className:"flex gap-4 flex-col w-full justify-center items-center  min-h-screen bg-gray-100",children:[Object(b.jsx)(D,{className:"w-full"}),Object(b.jsxs)("div",{className:"w-3/5 md:w-2/3 lg:w-2/3 h-full flex flex-col justify-center items-center lg:min-h-screen",children:[Object(b.jsx)(J,{posts:s,className:"w-full"}),Object(b.jsxs)("div",{className:"flex flex-row",children:[Object(b.jsx)("button",{onClick:function(){d<h?j(d+1):console.log("Valor maximo")},children:"Siguiente"}),Object(b.jsx)("button",{onClick:function(){d>=0?j(d-1):console.log("Valor minimo")},children:"Anterior"})]})]})]})}function K(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=(t[1],Object(r.useState)(0)),c=Object(u.a)(a,2),s=c[0],o=c[1],f=localStorage.getItem("pages"),m=Object(r.useState)([]),p=Object(u.a)(m,2),d=p[0],j=p[1];Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={page:s},e.next=4,x.getOwn(t);case 4:if(n=e.sent){e.next=7;break}throw new Error("Something was wrong");case 7:console.log(n),j(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[s,n]);return Object(b.jsxs)("div",{className:"flex gap-4 flex-col w-full justify-center items-center  min-h-screen bg-gray-100",children:[Object(b.jsx)(D,{className:"w-full"}),Object(b.jsxs)("div",{className:"w-3/5 md:w-2/3 lg:w-2/3 gap-6 h-full flex flex-col justify-center items-center lg:min-h-screen",children:[Object(b.jsx)(J,{posts:d,className:"w-full"}),Object(b.jsxs)("div",{className:"flex flex-row",children:[Object(b.jsx)("button",{onClick:function(){s<f?o(s+1):console.log("Valor maximo")},children:"Siguiente"}),Object(b.jsx)("button",{onClick:function(){s>=0?o(s-1):console.log("Valor minimo")},children:"Anterior"})]})]})]})}var Q=function(){return Object(b.jsx)(S.a,{children:Object(b.jsxs)(k.d,{children:[Object(b.jsx)(k.b,{path:"/",element:Object(b.jsx)(k.a,{replace:!0,to:"/login"})}),Object(b.jsx)(k.b,{path:"/login",element:Object(b.jsx)(y,{})}),Object(b.jsx)(k.b,{path:"/redirect",element:Object(b.jsx)(T,{})}),Object(b.jsx)(k.b,{path:"/Favorites",element:Object(b.jsx)(Y,{})}),Object(b.jsx)(k.b,{path:"/Posts",element:Object(b.jsx)(C,{role:"admin",children:Object(b.jsx)(K,{})})}),Object(b.jsx)(k.b,{path:"/user",element:Object(b.jsx)(C,{role:"user",children:Object(b.jsx)(H,{})})}),Object(b.jsx)(k.b,{path:"/admin",element:Object(b.jsx)(C,{role:"admin",children:Object(b.jsx)(q,{})})}),Object(b.jsx)(k.b,{path:"/*",element:Object(b.jsx)(R,{})})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{children:Object(b.jsx)(Q,{})})}),document.getElementById("root")),X()}},[[36,1,2]]]);
//# sourceMappingURL=main.71018658.chunk.js.map