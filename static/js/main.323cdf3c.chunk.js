(this.webpackJsonpholomap=this.webpackJsonpholomap||[]).push([[0],{21:function(e,t,n){},31:function(e,t){},58:function(e,t,n){},59:function(e,t){var n=document.createElement("canvas");n.width=window.innerWidth,n.height=window.innerHeight;var a,c,i,r,s,o=n.getContext("2d");o.fillStyle="rgb(0,0,0)",o.fillRect(0,0,n.width,n.height);for(var l=0;l<2400;l++){a=Math.floor(128*Math.random()),c=Math.floor(50*Math.random()+1),l%2==0?c=a:l%3==0?c+=a:c=a-c,i=l%25==0?Math.floor(2*Math.random())+1:1;var d="rgba("+a+","+a+","+c+",255)";o.fillStyle=d,r=Math.random()*n.width,s=Math.random()*n.height,o.fillRect(r,s,i,i)}document.body.style.background="url("+n.toDataURL("image/png")+")"},60:function(e,t,n){},61:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(12),r=n.n(i),s=(n.p,n.p,n(38),n(32)),o=n(3),l=n(4),d=n(11),j=n.n(d),b=function(){return j.a.get("/api/character")},m=function(){return j.a.get("/api/planet")},u=function(e){return j.a.get("/api/planet/"+e)},h=n(0);var f=function(e){var t=e.name,n=e.image,a=(e.description,e.birth_year);return Object(h.jsx)("div",{className:"",style:{textAlign:"center"},children:n?Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"/".concat(n),alt:""}),Object(h.jsxs)("h3",{children:["Name: ",t]})," ",Object(h.jsx)("br",{}),"Birth year: ",a," ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}):Object(h.jsx)("div",{})})};var O=function(e){var t=e.name,n=(e.characters,e.diameter,e.rotation_period,e.orbital_period,e.planet_info),a=e.img,c=e.surface;return Object(h.jsxs)("div",{className:"planet-data row",children:[c?Object(h.jsx)("div",{}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:t})," ",Object(h.jsx)("br",{}),n," ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),a&&!c?Object(h.jsx)("img",{src:"/".concat(a),class:"",style:{width:"600px",margin:"0 auto",textAlign:"center",display:"flex"},alt:""}):Object(h.jsx)("img",{src:"/".concat(c),alt:"",style:{backgroundImage:"/".concat(c),zIndex:-1}})]})};n(58);var x=function(e){return Object(h.jsxs)("div",{className:"",children:[Object(h.jsxs)("div",{className:"galaxy row justify-content-around p-2",children:[Object(h.jsx)("div",{className:"tatooine","data-name":"Tatooine",onClick:e.handlePlanetClick}),Object(h.jsx)("div",{className:"coruscant","data-name":"Coruscant",onClick:e.handlePlanetClick}),Object(h.jsx)("div",{className:"endor","data-name":"Naboo",onClick:e.handlePlanetClick}),Object(h.jsx)("div",{className:"bespin","data-name":"Death Star",onClick:e.handlePlanetClick})]}),Object(h.jsx)("div",{className:"row justify-content-around pt-3",children:Object(h.jsx)("button",{id:"visit-btn",style:{zIndex:100},onClick:e.handleSurfaceClick,children:"Visit Planet"})})]})},p=n(17),g=n(2),v=n(18),w=n(30),T=(n(59),n(21),function(){return Object(a.useEffect)((function(){var e=document.createElement("canvas");e.width=window.innerWidth,e.height=window.innerHeight;var t,n,a,c,i,r=e.getContext("2d");r.fillStyle="rgb(0,0,0)",r.fillRect(0,0,e.width,e.height);for(var s=0;s<2400;s++){t=Math.floor(128*Math.random()),n=Math.floor(50*Math.random()+1),s%2==0?n=t:s%3==0?n+=t:n=t-n,a=s%25==0?Math.floor(2*Math.random())+1:1;var o="rgba("+t+","+t+","+n+",255)";r.fillStyle=o,c=Math.random()*e.width,i=Math.random()*e.height,r.fillRect(c,i,a,a)}document.body.style.background="url("+e.toDataURL("image/png")+")"}),[]),Object(h.jsx)("div",{style:{position:"",alignItems:"",marginTop:"27em"},children:Object(h.jsxs)("div",{className:"starwars-demo ",children:[Object(h.jsx)("img",{src:"//cssanimation.rocks/demo/starwars/images/star.svg",alt:"Star",className:"star"}),Object(h.jsx)("img",{src:"//cssanimation.rocks/demo/starwars/images/wars.svg",alt:"Wars",className:"wars"})]})})}),y=c.a.lazy((function(){return n.e(3).then(n.bind(null,71))})),N=function(){return Object(h.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("a",{href:"/profile",children:Object(h.jsx)("button",{className:"btn btn-outline-warning",children:"Profile"})}),Object(h.jsx)("a",{href:"/Holodex",children:Object(h.jsx)("button",{className:"btn btn-outline-warning",children:"Holodex"})}),Object(h.jsx)("a",{href:"/Archive",children:Object(h.jsx)("button",{className:"btn btn-outline-warning",children:"Archives"})})]}),Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)("div",{children:"A long time ago, in a galaxy far, far away..."}),children:Object(h.jsx)(y,{})}),Object(h.jsx)(T,{})]})},S={position:"absolute",width:"100%",HEIGHT:"100%",zIndex:1e3},A={position:"fixed",backgroundColor:"rgba(0, 0, 0, .7)",zIndex:-1e3},E=window,C=E.TweenMax,k=(E._,function(e,t){return Math.floor(Math.random()*(e-t+1))+t}),_=1.01,P=1.025,M=1.01,H=Math.PI/180,I=[[197,239,247],[25,181,254],[77,5,232],[165,55,253],[255,255,255]],L=function e(){var t=this;Object(v.a)(this,e),this.STATE={alpha:Math.random(),angle:k(0,360)*H},this.reset=function(){var e=k(0,360)*(Math.PI/180),n=Math.cos(e),a=Math.sin(e),c=Math.random()>.5?Math.random()*Math.max(window.innerWidth,window.innerHeight)+Math.random()*(.24*window.innerWidth):Math.random()*(.25*window.innerWidth);t.STATE=Object(g.a)(Object(g.a)({},t.STATE),{},{iX:void 0,iY:void 0,active:!!c,x:Math.floor(n*c)+window.innerWidth/2,vX:n,y:Math.floor(a*c)+window.innerHeight/2,vY:a,size:1})},this.reset()},W=function(e){return new Array(e).fill().map((function(){return new L}))};function X(e){var t=e.open,n=e.children,a=e.onClose;return t?r.a.createPortal(Object(h.jsxs)("div",{className:"row p-5",children:[Object(h.jsx)("div",{className:"",style:A}),Object(h.jsxs)("div",{className:"",style:S,children:[Object(h.jsx)("button",{className:"btn btn-outline-warning",onClick:a,children:"Close Holodex"}),n]})]}),document.getElementById("portal")):null}window.myJump=new function e(){var t=this;Object(v.a)(this,e),this.STATE={stars:W(300),bgAlpha:0,sizeInc:M,velocity:_},this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.render=function(){var e=t.STATE,n=e.bgAlpha,a=e.velocity,c=e.sizeInc,i=e.initiating,r=e.jumping,s=e.stars,o=t.context,d=t.render;o.clearRect(0,0,window.innerWidth,window.innerHeight),n>0&&(o.fillStyle="rgba(31, 58, 157, ".concat(n,")"),o.fillRect(0,0,window.innerWidth,window.innerHeight));var j=s.filter((function(e){return!e.STATE.active}));!i&&j.length>0&&(j[0].STATE.active=!0);var b,m=Object(p.a)(s.filter((function(e){return e.STATE.active})));try{for(m.s();!(b=m.n()).done;){var u=b.value,h=u.STATE,f=h.active,O=h.x,x=h.y,v=h.iX,w=h.iY,T=h.iVX,y=h.iVY,N=h.size,S=h.vX,A=h.vY;if(((v||O)<0||(v||O)>window.innerWidth||(w||x)<0||(w||x)>window.innerHeight)&&f&&!i)u.reset(!0);else if(f){var E=i?v:v+T,C=i?w:w+y,_=O+S,H=x+A,L=S<0&&E<O||S>0&&E>O||A<0&&C<x||A>0&&C>x;u.STATE=Object(g.a)(Object(g.a)({},u.STATE),{},{iX:L?void 0:E,iY:L?void 0:C,iVX:L?void 0:T*P,iVY:L?void 0:y*P,x:_,vX:u.STATE.vX*a,y:H,vY:u.STATE.vY*a,size:i?N:N*(v||w?M:c)});var W="rgba(255, 255, 255, ".concat(u.STATE.alpha,")");if(r){var X=Object(l.a)(I[k(0,I.length)],3),z=X[0],Y=X[1],D=X[2];W="rgba(".concat(z,", ").concat(Y,", ").concat(D,", ").concat(u.STATE.alpha,")")}o.strokeStyle=W,o.lineWidth=N,o.beginPath(),o.moveTo(u.STATE.iX||O,u.STATE.iY||x),o.lineTo(u.STATE.x,u.STATE.y),o.stroke()}}}catch(J){m.e(J)}finally{m.f()}requestAnimationFrame(d)},this.initiate=function(){if(!t.STATE.jumping&&!t.STATE.initiating){t.STATE=Object(g.a)(Object(g.a)({},t.STATE),{},{initiating:!0,initiateTimestamp:(new Date).getTime()}),C.to(t.STATE,.25,{velocity:P,bgAlpha:.3});var e,n=Object(p.a)(t.STATE.stars.filter((function(e){return e.STATE.active})));try{for(n.s();!(e=n.n()).done;){var a=e.value;a.STATE=Object(g.a)(Object(g.a)({},a.STATE),{},{iX:a.STATE.x,iY:a.STATE.y,iVX:a.STATE.vX,iVY:a.STATE.vY})}}catch(c){n.e(c)}finally{n.f()}}},this.jump=function(){t.STATE=Object(g.a)(Object(g.a)({},t.STATE),{},{bgAlpha:0,jumping:!0}),C.to(t.STATE,.25,{velocity:1.25,bgAlpha:.75,sizeInc:1.15}),setTimeout((function(){t.STATE=Object(g.a)(Object(g.a)({},t.STATE),{},{jumping:!1}),C.to(t.STATE,.25,{bgAlpha:0,velocity:_,sizeInc:M})}),2e3)},this.enter=function(){if(!t.STATE.jumping){var e=t.STATE.initiateTimestamp;t.STATE=Object(g.a)(Object(g.a)({},t.STATE),{},{initiating:!1,initiateTimestamp:void 0}),(new Date).getTime()-e>600?t.jump():C.to(t.STATE,.25,{velocity:_,bgAlpha:0})}},this.bind=function(){t.canvas.addEventListener("mousedown",t.initiate),t.canvas.addEventListener("touchstart",t.initiate),t.canvas.addEventListener("mouseup",t.enter),t.canvas.addEventListener("touchend",t.enter)},this.setup=function(){t.context.lineCap="round",t.canvas.height=window.innerHeight,t.canvas.width=window.innerWidth},this.reset=function(){t.STATE=Object(g.a)(Object(g.a)({},t.STATE),{},{stars:W(300)}),t.setup()},this.click=function(e){t.canvas.addEventListener("click",t.initiate)},this.bind(),this.setup(),document.body.appendChild(this.canvas),this.render()},window.addEventListener("visit-btn",Object(w.debounce)((function(){window.myJump.reset()}),250));n(60);var z=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),r=Object(l.a)(i,2),s=r[0],o=r[1],d=Object(a.useState)([]),j=Object(l.a)(d,2),b=j[0],m=j[1],p=Object(a.useState)(""),g=Object(l.a)(p,2),v=g[0],w=g[1],T=Object(a.useState)(!1),y=Object(l.a)(T,2),N=y[0],S=y[1];Object(a.useEffect)((function(){A(),E()}),[n]);var A=function(){u(n).then((function(e){o(e.data)})).catch((function(){return o([])}))},E=function(){u(n).then((function(e){m(e.data.characters),console.log(e.data.characters)})).catch((function(){return m([])}))};return Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"p-5",onClick:function(){return console.log("clicked")},children:[Object(h.jsx)("button",{className:"btn btn-outline-warning",onClick:function(){return S(!0)},children:"HOLODEX"}),Object(h.jsx)("a",{href:"/profile",children:Object(h.jsx)("button",{className:"btn btn-outline-warning",children:"Profile"})}),Object(h.jsx)("a",{href:"/archive",children:Object(h.jsx)("button",{className:"btn btn-outline-warning",children:"Archives"})}),Object(h.jsx)(X,{open:N,onClose:function(){return S(!1)},children:Object(h.jsx)("div",{className:"viewport container border border-5 border-info mt-3 p-2 shadow-lg",children:Object(h.jsxs)("div",{className:"row m-3 justify-content-between",children:[Object(h.jsx)("main",{className:"One border border-info rounded-top col-12",children:Object(h.jsx)(O,{img:s.img,surface:v,characters:b})}),Object(h.jsx)("div",{className:"Two border border-info rounded-pill p-2 mt-3 col-6 ",children:Object(h.jsx)(x,{handlePlanetClick:function(e){var t=e.target.getAttribute("data-name");console.log(t),c(t),w(null)},handleSurfaceClick:function(){w(s.surface_img),console.log(s)}})}),Object(h.jsxs)("div",{className:"Three border border-info overflow-auto p-3 mt-3  col-5",children:[Object(h.jsx)(O,{name:s.name,diameter:s.diameter,rotation_period:s.rotation_period,orbital_period:s.orbital_period,planet_info:s.planet_info}),b?b.map((function(e){return Object(h.jsx)(f,{name:e.name,image:e.image,birth_year:e.birth_year},e.name)})):Object(h.jsx)("div",{})]})]})})})]})})};var Y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){i(),console.log()}),[]);var i=function(){u().then((function(e){console.log(e),c(e.data)})).catch((function(){return c([])}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{img:n.img}),Object(h.jsx)(O,{name:n.name,planet_info:n.planet_info})]})};var D=function(){return Object(h.jsx)(N,{})};var J=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){i(),console.log("where u at")}),[]);var i=function(){console.log("dis tim"),u("").then((function(e){console.log(e),c(e.data.characters)})).catch((function(){return c([])}))};return console.log(n),Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)(f,{name:e.name,image:e.image},e.name)}))})};n(61);var R=function(){return Object(h.jsx)("a",{role:"button",className:"btn btn-outline-warning",href:"/signup",children:"Sign Up"})};var U=function(){return Object(h.jsx)("a",{type:"button",className:"btn btn-outline-warning",href:"/login",children:"Login"})};var V=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"Profile"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(h.jsxs)("form",{className:"d-flex",children:[Object(h.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(h.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})}),Object(h.jsxs)("div",{className:"card bg-dark text-white",children:[Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("div",{className:"d-flex flex-column align-items-center text-center",children:[Object(h.jsx)("img",{src:"",alt:"Admin",className:"img-fluid img-thumbnail"}),Object(h.jsxs)("div",{className:"file btn btn-lg btn-primary",children:["Change Photo",Object(h.jsx)("input",{type:"file",name:"file"})]}),Object(h.jsxs)("div",{className:"mt-3",children:[Object(h.jsx)("h4",{children:"Wookie Man 420"}),Object(h.jsx)("p",{className:"text-secondary mb-1",children:"Jedi Master"}),Object(h.jsx)("p",{className:"text-muted font-size-sm",children:"Bay Area, San Francisco, CA"}),Object(h.jsx)("button",{className:"align-center mb-3",onClick:function(){console.log("Logging out user!"),fetch("/api/users/logout",{method:"POST",body:JSON.stringify({}),headers:{"Content-Type":"application/json"}}).then((function(e){return e})).then((function(e){return document.location.replace("/profile"),e}))},children:"Log Out"})]})]})}),Object(h.jsx)(R,{}),Object(h.jsx)(U,{})]}),Object(h.jsxs)("form",{className:"row g-3",children:[Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("label",{for:"inputEmail4",className:"form-label",children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control",id:"inputEmail4"})]}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("label",{for:"inputPassword4",className:"form-label",children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",id:"inputPassword4"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("label",{for:"inputAddress",className:"form-label",children:"Address"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"inputAddress",placeholder:"1234 Main St"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("label",{for:"inputAddress2",className:"form-label",children:"Address 2"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"inputAddress2",placeholder:"Apartment, studio, or floor"})]}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("label",{for:"inputCity",className:"form-label",children:"City"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"inputCity"})]}),Object(h.jsxs)("div",{className:"col-md-2",children:[Object(h.jsx)("label",{for:"inputZip",className:"form-label",children:"Zip"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"inputZip"})]}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Edit Information"})})]})]})},B=n(31),F=n.n(B);var Z=function(){var e=Object(a.useState)({username:"",password:"",confirmPassword:"",email:""}),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column mb-1",children:[Object(h.jsx)("h3",{className:"mt-3",children:"Sign Up"}),Object(h.jsxs)("form",{className:"form d-flex justify-content-center align-items-center flex-column mb-1",children:[Object(h.jsx)("input",{name:"username",type:"text",placeholder:"Username",className:"text-center",onChange:function(e){c(Object(g.a)(Object(g.a)({},n),{},{username:e.target.value}))}}),Object(h.jsx)("input",{name:"email",type:"text",placeholder:"Email",className:"text-center",onChange:function(e){c(Object(g.a)(Object(g.a)({},n),{},{email:e.target.value}))}}),Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",className:"text-center",onChange:function(e){c(Object(g.a)(Object(g.a)({},n),{},{password:e.target.value}))}}),Object(h.jsx)("input",{name:"confirmPassword",type:"password",placeholder:"Confirm password",className:"text-center",onChange:function(e){c(Object(g.a)(Object(g.a)({},n),{},{confirmPassword:e.target.value}))}}),Object(h.jsx)("button",{className:"mb-3 mt-2 btn btn-outline-warning",onClick:function(e){if(e.preventDefault(),""!==n.username)if(""!==n.email)if(""!==n.password)if(""!==n.confirmPassword)if(n.password===n.confirmPassword){var t={username:n.username,password:n.password,email:n.email};fetch("/api/users",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t;console.log(e),t=e,console.log("Logging new user!"),console.log(t),fetch("/api/users/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e),422===e.status||400===e.status?alert("Failed to login!"):200===e.status&&(console.log("User logged in!"),document.location.replace("/profile")),e})).then((function(e){return e}))}))}else alert("Please make sure your passwords match");else alert("Please re-enter your password");else alert("Please enter an password");else alert("Please enter an email");else alert("Please enter a username")},children:"Sign Up"})]})]})};var G=function(){var e=Object(a.useState)({email:"",password:""}),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){}),[n]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",children:[Object(h.jsx)("h3",{className:"mt-3",children:"Login"}),Object(h.jsxs)("form",{className:"form d-flex justify-content-center align-items-center flex-column mb-1",children:[Object(h.jsx)("input",{name:"username",type:"text",placeholder:"Email",className:"text-center",onChange:function(e){c(Object(g.a)(Object(g.a)({},n),{},{email:e.target.value}))}}),Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",className:"text-center",onChange:function(e){c(Object(g.a)(Object(g.a)({},n),{},{password:e.target.value}))}}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("Logging in user."),console.log(n),fetch("/api/users/login",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e),422===e.status||400===e.status?alert("Failed to login!"):200===e.status&&(console.log("User logged in!"),document.location.replace("/profile")),e})).then((function(e){return e}))},className:"mb-3 mt-2 btn btn-outline-warning",children:"Login"})]})]})})};var q=function(e){var t=e.name,n=e.image,a=e.description,c=e.birth_year,i=e.mass,r=e.height,s=e.planet_name,o=e.eye_color,l=e.skin_color,d=e.hair_color;return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsxs)("h3",{children:["Name: ",t]})," ",Object(h.jsx)("br",{}),n?Object(h.jsx)("img",{src:"/".concat(n),style:{height:"500px",width:"250px"},alt:""}):Object(h.jsx)("div",{}),Object(h.jsx)("br",{}),"Birth year: ",c," ",Object(h.jsx)("br",{}),a," ",Object(h.jsx)("br",{}),"Mass: ",i,Object(h.jsx)("br",{}),"Tracked Location: ",s," ",Object(h.jsx)("br",{}),"Height: ",r," ",Object(h.jsx)("br",{}),"Eye Color: ",o,Object(h.jsx)("br",{}),"Skin Color: ",l,Object(h.jsx)("br",{}),"Hair Color: ",d,Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})};var K=function(e){var t=e.name,n=e.description,a=e.rotation_period,c=e.orbital_period,i=e.diameter,r=e.climate,s=e.gravity,o=e.terrain,l=e.surface_water,d=e.population,j=e.planet_info,b=e.img;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Planet Name: ",t]}),Object(h.jsx)("br",{}),b?Object(h.jsx)("img",{src:"/".concat(b),style:{height:"200px",width:"200px"},alt:""}):Object(h.jsx)("div",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Rotation Period: ",a,Object(h.jsx)("br",{}),"Orbital Period: ",c,Object(h.jsx)("br",{}),"Diameter: ",i,Object(h.jsx)("br",{}),"Climate: ",r,Object(h.jsx)("br",{}),"Gravity: ",s,Object(h.jsx)("br",{}),"Terrain: ",o,Object(h.jsx)("br",{}),"Surface Water: ",l,Object(h.jsx)("br",{}),"Population: ",d,Object(h.jsx)("br",{}),"Description: ",n,Object(h.jsx)("br",{}),"Planet Info: ",j,Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})};var Q=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=(t[1],Object(a.useState)([])),i=Object(l.a)(c,2),r=i[0],s=i[1],o=Object(a.useState)([]),d=Object(l.a)(o,2),j=d[0],u=d[1],f=Object(a.useState)(!1),O=Object(l.a)(f,2),x=O[0],p=O[1];Object(a.useEffect)((function(){g(),v()}),[n]);var g=function(){m().then((function(e){s(e.data),console.log(e.data)})).catch((function(){return s([])}))},v=function(){b().then((function(e){u(e.data),console.log(e.data)})).catch((function(){return u([])}))};return Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsxs)("div",{className:"p-5",onClick:function(){return console.log("clicked")},children:[Object(h.jsx)("button",{className:"btn btn-outline-warning",onClick:function(){return p(!0)},children:"Access Archives"}),Object(h.jsx)("a",{href:"/holodex",children:Object(h.jsx)("button",{className:"btn btn-outline-warning",children:"Holodex"})}),Object(h.jsx)(X,{open:x,onClose:function(){return p(!1)},children:Object(h.jsx)("div",{className:"viewport container border border-5 border-info mt-3 p-2 shadow-lg",children:Object(h.jsxs)("div",{className:"row m-3 justify-content-between",children:[Object(h.jsxs)("main",{className:"One border border-info rounded-top col-12",style:{color:"white",textAlign:"center"},children:[j?j.map((function(e){return Object(h.jsx)(q,{name:e.name,image:e.image,description:e.description,birth_year:e.birth_year,mass:e.mass,planet_name:e.planet_name,skin_color:e.skin_color,hair_color:e.hair_color,eye_color:e.eye_color,height:e.height},e.name)})):Object(h.jsx)("div",{}),r?r.map((function(e){return Object(h.jsx)(K,{name:e.name,rotation_period:e.rotation_period,orbital_period:e.orbital_period,diameter:e.diameter,climate:e.climate,gravity:e.gravity,terrain:e.terrain,surface_water:e.surface_water,population:e.population,description:e.description,planet_info:e.planet_info,img:e.img},e.name)})):Object(h.jsx)("div",{})]}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})})]})})};var $=function(){return Object(h.jsx)(s.a,{children:Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/Holodex",component:z}),Object(h.jsx)(o.a,{exact:!0,path:"/",component:D}),Object(h.jsx)(o.a,{exact:!0,path:"/planet/leveltwo/:name",component:Y}),Object(h.jsx)(o.a,{exact:!0,path:"/planet/levelthree/:name",component:J}),Object(h.jsx)(o.a,{exact:!0,path:"/profile",component:V}),Object(h.jsx)(o.a,{exact:!0,path:"/Archive",component:Q}),Object(h.jsx)(o.a,{exact:!0,path:"/Trials",component:F.a}),Object(h.jsx)(o.a,{exact:!0,path:"/login",component:G}),Object(h.jsx)(o.a,{exact:!0,path:"/Signup",component:Z})]})})})};r.a.render(Object(h.jsx)($,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.323cdf3c.chunk.js.map