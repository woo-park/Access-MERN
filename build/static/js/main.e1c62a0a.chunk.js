(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/logo.cd312f1c.png"},35:function(e,t,a){e.exports=a.p+"static/media/alt-tag-example.55204d64.png"},39:function(e,t,a){e.exports=a(68)},44:function(e,t,a){},45:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r);a(44),a(45);var o=function(){return l.a.createElement("div",{className:"myComponent"},l.a.createElement("div",{id:"about_page"},l.a.createElement("div",{className:"about_sections"},l.a.createElement("h1",null,"About The Alt Tags"),l.a.createElement("h3",null,"Open Access at The Met"),l.a.createElement("p",null,"On February 7, 2017, The Met made all images of public-domain works in its collection available under Creative Commons Zero (CC0)."),l.a.createElement("p",null,"You now have more than 406,000 images of artworks from The Met collection to use, share, and remix\u2014without restriction. This policy change to Open Access is an important statement about The Met's commitment to increasing access to the collection in a digital age."),l.a.createElement("p",null,l.a.createElement("em",null,"-From the Met-"))),l.a.createElement("div",{className:"about_sections"},l.a.createElement("h3",null,"What is ALT tag?"),l.a.createElement("h5",null,"Alt tag is the first principle of web accessibility"),l.a.createElement("p",null,"1. ALT tag is shorten term for alternative text. For many years, alt tags have been used for visually impaired users to understand the image."),l.a.createElement("p",null,"2. Alt tags are also useful when the image cannot be loaded due to connection error or other reasons. In these cases, the alt tags are usually shown instead of the pictures."),l.a.createElement("p",null,"3. Recently, alt tags have been kept short because they were used to enhance search engine optimization. But, that is not our interest at all. Our goal is to have better alt tags for visually impaired community who uses screen readers. With our detailed descriptions, we will not allow the community to understand better but also we will start new conversation with these artworks, bringing new perspectives."))))},s=a(6),i=a(32),m=a.n(i);var u=function(){var e={color:"black"};return l.a.createElement("div",{className:"nav"},l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(s.b,{style:e,to:"/"},l.a.createElement("span",{className:"glass"},"Home"))),l.a.createElement("li",null,l.a.createElement(s.b,{style:e,to:"/about"},l.a.createElement("span",{className:"glass"},"About"))),l.a.createElement("li",{className:"nav_logo"},l.a.createElement(s.b,{style:{color:"white"},to:"/"},l.a.createElement("img",{className:"logo_img",src:m.a,width:"110px"}))),l.a.createElement("li",null,l.a.createElement(s.b,{style:e,to:"/gallery"},l.a.createElement("span",{className:"glass"},"Gallery"))),l.a.createElement("li",{className:"nav_lastchild"},l.a.createElement(s.b,{style:e,to:"/mywork"},l.a.createElement("span",{className:"glass"},"Completed"))))))},p=a(9),h=a(8),d=a.n(h),g=a(13),f=a(2),E=a(10),b=a.n(E);var y=function(e){Object(n.useEffect)((function(){E()}),[]);var t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],c=a[1],o=[],i=Object(n.useState)(""),m=Object(f.a)(i,2),u=m[0],h=m[1],E=function(){var e=Object(g.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===u&&(u="ocean"),e.next=3,fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=".concat(u));case 3:return t=e.sent,e.next=6,t.json();case 6:if(null!==(a=e.sent).objectIDs){e.next=11;break}return e.abrupt("return");case 11:for(n=0;n<10;n++)o.push(a.objectIDs[n]);y();case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.forEach(function(){var e=Object(g.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log("10 new retrieved artworks",n),c((function(e){return[].concat(Object(p.a)(e),[{img:n.primaryImageSmall,uuid:n.objectID,alt:n.tags,title:n.title,period:n.period,artist:n.artistDisplayName,medium:n.medium}])}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"myComponent"},l.a.createElement("div",{className:"gallery"},l.a.createElement("form",{className:"field_box",onSubmit:function(e){e.preventDefault(),E(),document.getElementById("message").textContent=u,h("")}},l.a.createElement("h3",null,"Welcome to the Met Museum Gallery!"),l.a.createElement("br",null),l.a.createElement("legend",null,"Search Images from Met Museum:"),l.a.createElement("input",{id:"searchBox",type:"text",name:"search",value:u,onChange:function(e){h(e.target.value)},placeholder:"anything!"}),l.a.createElement("button",null,"Submit"),l.a.createElement("p",{id:"message"})),r.map((function(e,t){return l.a.createElement("div",{key:b()()},l.a.createElement(s.b,{key:b()(),to:"/artwork/".concat(e.uuid)},l.a.createElement("img",{src:e.img,alt:e.alt}),l.a.createElement("p",null,""!==e.img?"":"image does not exist for this artwork or error"),l.a.createElement("div",{className:"glass"},l.a.createElement("p",null,e.title," ",e.artist?"by ".concat(e.artist):""),l.a.createElement("p",null,""!==e.alt?"alt TAGS! : ".concat(e.alt):"No alt tags on this artwork"))))}))))},v=a(11),w=Object(n.createContext)(),k=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){fetch("https://wooyongpark.com/api/altpost").then((function(e){var t;return console.log("Where client state, and db just polled"),e!=[]&&(t=e.json(),console.log(t,"result here")),t})).then((function(e){e.forEach((function(e){console.log(e,"EACH"),c((function(t){return[].concat(Object(p.a)(t),[e])}))}))}))}),[]),console.log(r,"when first begins"),l.a.createElement(w.Provider,{value:[r,c]},e.children)},N=a(16),j=a.n(N),x=function(){var e=Object(n.useContext)(w),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(f.a)(c,2),s=o[0],i=o[1],m=Object(n.useState)(""),u=Object(f.a)(m,2),h=u[0],d=u[1];return l.a.createElement("form",{method:"POST",action:"http://localhost:8080/api/altpost",className:"field_box",onSubmit:function(e){e.preventDefault();var t=a.pop();t.name=s,t.tags=h,t.description=h,console.log(s,h);var n={type:"artwork",name:s,description:h,artistDisplayName:t.artistDisplayName,medium:t.medium,id:t.id,primaryImage:t.primaryImage};j.a.post("https://wooyongpark.com/api/altpost",n).then((function(e){return console.log(e.data)})).then((function(e){r((function(e){return[].concat(Object(p.a)(e),[t])})),console.log(a,"state after adding")})).catch((function(e){console.log(e)}))}},l.a.createElement("div",null,l.a.createElement("label",null,"Do you have a better title?"),l.a.createElement("input",{type:"text",name:"name",value:s,onChange:function(e){i(e.target.value)},placeholder:"Text Title",id:"textTitle"})),l.a.createElement("div",null,l.a.createElement("label",null,"We need better Alt Tags!!"),l.a.createElement("input",{type:"text",name:"description",value:h,onChange:function(e){d(e.target.value)},placeholder:"description",id:"textBox"})),l.a.createElement("button",null,"Submit"))},O=function(e){return console.log(e.each.tags,"tags alt!!!!!"),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("span",{className:"left_align"},"Title")," : ",e.each.name),l.a.createElement("p",null,l.a.createElement("span",{className:"left_align"},"Alt Tags")," : ",e.each.tags),l.a.createElement("p",null,l.a.createElement("span",{className:"left_align"},"description")," : ",e.each.description),l.a.createElement("p",null,l.a.createElement("span",{className:"left_align"},"Object ID number(MET)")," : ",e.each.id))},T=function(){var e=Object(n.useContext)(w),t=Object(f.a)(e,2),a=t[0];t[1];return l.a.createElement("div",{className:"imageText"},a.length>0?l.a.createElement(O,{each:a[a.length-1],key:b()()}):"")};var C=function(e){var t=e.match;Object(n.useEffect)((function(){u()}),[]);var a=Object(n.useContext)(w),r=Object(f.a)(a,2),c=(r[0],r[1]),o=Object(n.useState)([]),s=Object(f.a)(o,2),i=s[0],m=s[1],u=function(){var e=Object(g.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/".concat(parseInt(t.params.id)));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,m(n),c((function(e){return[].concat(Object(p.a)(e),[{name:n.title,artistDisplayName:n.artistDisplayName,artistNationality:n.artistNationality,objectDate:n.objectDate,tags:n.tags,medium:n.medium,objectName:n.objectName,primaryImage:n.primaryImage,id:t.params.id}])}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(t,"match"),l.a.createElement("div",{className:"myComponent"},l.a.createElement("h1",null,"Artwork"),l.a.createElement("p",{className:"paras"},"The artwork you've chosen is called ",""!=i.title?"".concat(i.title,". "):"Unknown",""!=i.artistDisplayName?"This was made by an artist (or artists) named ".concat(i.artistDisplayName,". "):"The artist of this work is unknown. ",""!=i.artistNationality?"The artist is from  ".concat(i.artistNationality,". "):"",""!=i.objectDate?"It was created in (or around)  ".concat(i.objectDate,". "):"",""!=i.medium?"Medium of this work is  ".concat(i.medium,". "):"",""!=i.objectName?"Please take a close look at  ".concat(i.objectName," and add (detailed) description to this artwork. "):""),l.a.createElement("div",{className:"imageContainer"},l.a.createElement("img",{src:i.primaryImage,alt:i.tags,className:"largeImage"}),l.a.createElement(T,{key:b()()}),l.a.createElement(x,{key:b()()})))};var I=function(){var e=Object(n.useContext)(w),t=Object(f.a)(e,2),a=t[0];return t[1],l.a.createElement("div",{className:"myComponent"},l.a.createElement("h1",null,"My accomplishment"),a.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("img",{src:e.primaryImage}),l.a.createElement("p",null,e.name," ",""!==e.artistDisplayName?"by ".concat(e.artistDisplayName):""),l.a.createElement("p",null,""!==e.description?"Alt created by you and the community!":""),l.a.createElement("p",null,""!==e.description?"".concat(e.description):""))})))},D=a(35),A=a.n(D),S=a(36),M=a(37),_=a(38),B=a.n(_);a(30);function W(e){var t,a;e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.displayHeight)},e.setup=function(){e.createCanvas(e.windowWidth,e.displayHeight),t=e.loadImage("./logo.png"),a=new n(100,100),console.log(a)},e.draw=function(){e.background(100),a.display(),a.move()};var n=function(){function a(t,n){Object(S.a)(this,a),this.x=t,this.y=n,this.xNoiseOffset=e.random(0,1e3),this.yNoiseOffset=e.random(1e3,2e3)}return Object(M.a)(a,[{key:"display",value:function(){e.fill(255),e.image(t,this.x,this.y,100,50),this.x>e.width&&(this.x=0),this.x<0&&(this.x=e.width),this.y>e.height&&(this.y=0),this.y<0&&(this.y=e.height)}},{key:"move",value:function(){var t=e.map(e.noise(this.xNoiseOffset),0,1,-1,1),a=e.map(e.noise(this.yNoiseOffset),0,1,-1,1);this.x+=t,this.y+=a,this.xNoiseOffset+=.01,this.yNoiseOffset+=.01}}]),a}()}var H=function(e){return l.a.createElement("div",{className:"mySketch"},l.a.createElement(B.a,{sketch:W}))};var F=function(){return l.a.createElement("div",{className:"myComponent"},l.a.createElement("h1",null,"Welcome!"),l.a.createElement("div",null,l.a.createElement("p",null,"The goal of this page is to make artworks more accessible to all. In the gallery, you have the access to the Met Gallery. You can look up any artworks that meet your interest. After finding artworks, you can start add description to the images. Your work will be saved, and the whole community will have the access to these descriptions, just like how you can check out other participants' contributions. Take a look at the completed to see community-generated alt tags.")),l.a.createElement("h2",null,"Here are some instructions on how to generate a good Alt tags"),l.a.createElement("div",{className:"paras"},l.a.createElement("p",null,"Be specific. Describe the artwork to yourself. "),l.a.createElement("p",null,"Some say that alt tags should be kept short. But, not here! It can be as long as you want."),l.a.createElement("p",null,"Full sentence is better than keywords. But, keywords are still helpful as well. "),l.a.createElement("p",null,'"image of" and "picture of" in alt tags are not so helpful for the community. ')),l.a.createElement("img",{src:A.a}),l.a.createElement("div",{className:"paras"},l.a.createElement("p",null,'Okay alt text: alt="man on escalator"'),l.a.createElement("p",null,'Better alt text:  alt="man walking down a long escalator"'),l.a.createElement("p",null,'Even better alt text:  alt="Asian man wearing a black backpack holds on to the rail and walks down the escalator. The person is on focus while others are blurred out."')))},G=function(){return l.a.createElement(k,null,l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement(H,null),l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/about",component:o}),l.a.createElement(v.a,{exact:!0,path:"/",component:F}),l.a.createElement(v.a,{exact:!0,path:"/gallery",component:y}),l.a.createElement(v.a,{path:"/artwork/:id",component:C}),l.a.createElement(v.a,{path:"/mywork",component:I})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e1c62a0a.chunk.js.map