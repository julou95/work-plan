(this.webpackJsonpjulou=this.webpackJsonpjulou||[]).push([[0],{1:function(e,t,a){},14:function(e,t,a){},2:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(23),i=a.n(r),s=(a(34),a(4)),c=a.n(s),l=a(6),u=a.n(l),h=a(5),d=Object(h.a)(),m=a(8),f=a(14),p=a.n(f),y=function(e){var t=e.color,a={width:"5px",height:"5px",backgroundImage:"radial-gradient(circle at 0 0, rgba(0,0,255,0) 5px, ".concat(t," 5px)")},o={width:"5px",height:"5px",backgroundImage:"radial-gradient(circle at 100% 0, rgba(0,0,255,0) 5px, ".concat(t," 5px)")};return n.a.createElement("div",{className:p.a.knob,id:"knob"},n.a.createElement("div",{className:p.a.left,style:a},"\xa0"),n.a.createElement("div",{className:p.a.center,style:{backgroundColor:t}}),n.a.createElement("div",{className:p.a.right,style:o},"\xa0"))},v=a(12),g=a(15),b={user:n.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),calendar:n.a.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),shoppingCart:n.a.createElement("path",{d:"M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),check:n.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),arrowRight:n.a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),arrowLeft:n.a.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),reTry:n.a.createElement("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"})},w=32,E=40,k=48,I=function(e){var t=e.className,a=e.icon,o=e.size;return n.a.createElement("svg",{className:t,width:o,height:o,viewBox:"0 0 24 24",fill:"currentColor",focusable:"false"},a)},P=a(2),N=a.n(P),W=function(e){var t=e.active;return n.a.createElement("div",{className:N.a.innerWrapper},n.a.createElement(g.NavHashLink,{className:N.a.naviItem,smooth:!0,to:"#first",id:1===t?"active":void 0},n.a.createElement(I,{className:c()(N.a.icon,Object(v.a)({},N.a.active,1===t)),icon:b.calendar,size:E})),n.a.createElement(g.NavHashLink,{className:N.a.naviItem,smooth:!0,to:"#second",id:2===t?"active":void 0},n.a.createElement(I,{className:c()(N.a.icon,Object(v.a)({},N.a.active,2===t)),icon:b.shoppingCart,size:E})),n.a.createElement(g.NavHashLink,{className:N.a.naviItem,smooth:!0,to:"#third",id:3===t?"active":void 0},n.a.createElement(I,{className:c()(N.a.icon,Object(v.a)({},N.a.active,3===t)),icon:b.check,size:E})),n.a.createElement(g.NavHashLink,{className:N.a.naviItem,smooth:!0,to:"#fourth",id:4===t?"active":void 0},n.a.createElement(I,{className:c()(N.a.icon,Object(v.a)({},N.a.active,4===t)),icon:b.user,size:E})))},O=(N.a.ONE,N.a.TWO,N.a.THREE,N.a.FOUR,["#3c40c6","#4bcffa","#ffc048","#ff5e57"]),S=function(){Object(o.useEffect)((function(){document.getElementById("navWrapper").style.backgroundColor=O[i-1];var e=document.getElementById("active").getBoundingClientRect().x;console.log("activeOffset",e),document.getElementById("knob").style.left="".concat(e-15,"px")}));var e=Object(o.useState)("#first"),t=Object(m.a)(e,2),a=t[0],r=t[1];d.listen((function(e){""!==e.hash?r(e.hash):r(e.pathname)}));var i=1;switch(a){case"#/#second":i=2;break;case"#/#third":i=3;break;case"#/#fourth":i=4;break;default:i=1}return n.a.createElement("div",{id:"navWrapper",className:N.a.naviWrapper},n.a.createElement(y,{color:O[i-1]}),n.a.createElement(W,{active:i}))},j=a(26),C=a(27),D=a.n(C),x=function(e){return Object(j.a)(e),n.a.createElement("div",null,n.a.createElement("h1",null,"2nd section"),n.a.createElement(D.a,{as:"div",speed:-1,className:"adsf"},"this one goes slow"))};x.defaultProps={},x.displayName="";var z=x,M=a(28),T=a.n(M),A=function(){return n.a.createElement("div",{className:T.a.agbWrapper},n.a.createElement("h2",null,"Privacy policy"),n.a.createElement("p",null,'This privacy policy ("Policy") describes how Website Operator ("Website Operator", "we", "us" or "our") collects, protects and uses the personally identifiable information ("Personal Information") you ("User", "you" or "your") may provide on the ',n.a.createElement("a",{target:"_blank",rel:"nofollow",href:"https://julou.ch"},"julou.ch"),' website and any of its products or services (collectively, "Website" or "Services").'),n.a.createElement("p",null,"It also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage."),n.a.createElement("h2",null,"Automatic collection of information"),n.a.createElement("p",null,"Our top priority is customer data security and, as such, we exercise the no logs policy. We process only minimal user data, only as much as it is absolutely necessary to maintain the Website or Services. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding Website usage. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system."),n.a.createElement("h2",null,"Collection of personal information"),n.a.createElement("p",null,"You can visit the Website without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the Website's features, you will be asked to provide certain Personal Information (for example, your name and e-mail address). We receive and store any information you knowingly provide to us when you fill any online forms on the Website. You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the Website's features. Users who are uncertain about what information is mandatory are welcome to contact us."),n.a.createElement("h2",null,"Storing personal information"),n.a.createElement("p",null,"We will retain and use your Personal Information for the period necessary to comply with our legal obligations, resolve disputes, and enforce our agreements unless a longer retention period is required or permitted by law. We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after the expiration of the retention period."),n.a.createElement("h2",null,"Use and processing of collected information"),n.a.createElement("p",null,"In order to make our Website and Services available to you, or to meet a legal obligation, we need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services. Some of the information we collect is directly from you via our Website. However, we may also collect Personal Information about you from other sources. Any of the information we collect from you may be used to help us run and operate our Website and Services."),n.a.createElement("p",null,"Processing your Personal Information depends on how you interact with our Website, where you are located in the world and if one of the following applies: (i) You have given your consent for one or more specific purposes. This, however, does not apply, whenever the processing of Personal Information is subject to California Consumer Privacy Act or European data protection law; (ii) Provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof; (iii) Processing is necessary for compliance with a legal obligation to which you are subject; (iv) Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) Processing is necessary for the purposes of the legitimate interests pursued by us or by a third party."),n.a.createElement("p",null,"Note that under some legislations we may be allowed to process information until you object to such processing (by opting out), without having to rely on consent or any other of the following legal bases below. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract."),n.a.createElement("h2",null,"Information transfer and storage"),n.a.createElement("p",null,"Depending on your location, data transfers may involve transferring and storing your information in a country other than your own. You are entitled to learn about the legal basis of information transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by us to safeguard your information. If any such transfer takes place, you can find out more by checking the relevant sections of this document or inquire with us using the information provided in the contact section."),n.a.createElement("h2",null,"The rights of users"),n.a.createElement("p",null,"You may exercise certain rights regarding your information processed by us. In particular, you have the right to do the following: (i) you have the right to withdraw consent where you have previously given your consent to the processing of your information; (ii) you have the right to object to the processing of your information if the processing is carried out on a legal basis other than consent; (iii) you have the right to learn if information is being processed by us, obtain disclosure regarding certain aspects of the processing and obtain a copy of the information undergoing processing; (iv) you have the right to verify the accuracy of your information and ask for it to be updated or corrected; (v) you have the right, under certain circumstances, to restrict the processing of your information, in which case, we will not process your information for any purpose other than storing it; (vi) you have the right, under certain circumstances, to obtain the erasure of your Personal Information from us; (vii) you have the right to receive your information in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that your information is processed by automated means and that the processing is based on your consent, on a contract which you are part of or on pre-contractual obligations thereof."),n.a.createElement("h2",null,"The right to object to processing"),n.a.createElement("p",null,"Where Personal Information is processed for the public interest, in the exercise of an official authority vested in us or for the purposes of the legitimate interests pursued by us, you may object to such processing by providing a ground related to your particular situation to justify the objection. You must know that, however, should your Personal Information be processed for direct marketing purposes, you can object to that processing at any time without providing any justification. To learn, whether we are processing Personal Information for direct marketing purposes, you may refer to the relevant sections of this document."),n.a.createElement("h2",null,"How to exercise these rights"),n.a.createElement("p",null,"Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible."),n.a.createElement("h2",null,"California privacy rights"),n.a.createElement("p",null,"In addition to the rights as explained in this Privacy Policy, California residents who provide Personal Information (as defined in the statute) to obtain products or services for personal, family, or household use are entitled to request and obtain from us, once a calendar year, information about the Personal Information we shared, if any, with other businesses for marketing uses. If applicable, this information would include the categories of Personal Information and the names and addresses of those businesses with which we shared such personal information for the immediately prior calendar year (e.g., requests made in the current year will receive information about the prior year). To obtain this information please contact us."),n.a.createElement("h2",null,"Privacy of children"),n.a.createElement("p",null,"We do not knowingly collect any Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any Personal Information through our Website or Service. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through our Website or Service without their permission."),n.a.createElement("p",null,"If you have reason to believe that a child under the age of 13 has provided Personal Information to us through our Website or Service, please contact us. You must also be at least 16 years of age to consent to the processing of your Personal Information in your country (in some countries we may allow your parent or guardian to do so on your behalf)."),n.a.createElement("h2",null,"Cookies"),n.a.createElement("p",null,'The Website uses "cookies" to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.'),n.a.createElement("p",null,"We may use cookies to collect, store, and track information for statistical purposes to operate our Website and Services. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the features of the Website and Services. To learn more about cookies and how to manage them, visit ",n.a.createElement("a",{target:"_blank",href:"https://www.internetcookies.org"},"internetcookies.org")),n.a.createElement("h2",null,"Do Not Track signals"),n.a.createElement("p",null,"Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. How browsers communicate the Do Not Track signal is not yet uniform. As a result, this Website is not yet set up to interpret or respond to Do Not Track signals communicated by your browser. Even so, as described in more detail throughout this Policy, we limit our use and collection of your personal information."),n.a.createElement("h2",null,"Links to other websites"),n.a.createElement("p",null,"Our Website contains links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other websites or third-parties. We encourage you to be aware when you leave our Website and to read the privacy statements of each and every website that may collect Personal Information."),n.a.createElement("h2",null,"Information security"),n.a.createElement("p",null,"We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and our Website cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third-party, despite best efforts."),n.a.createElement("h2",null,"Data breach"),n.a.createElement("p",null,"In the event we become aware that the security of the Website has been compromised or users Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the user as a result of the breach or if notice is otherwise required by law. When we do, we will post a notice on the Website."),n.a.createElement("h2",null,"Changes and amendments"),n.a.createElement("p",null,"We may update this Privacy Policy from time to time in our discretion and will notify you of any material changes to the way in which we treat Personal Information. When changes are made, we will post a notification on the main page of our Website. We may also provide notice to you in other ways in our discretion, such as through contact information you have provided. Any updated version of this Privacy Policy will be effective immediately upon the posting of the revised Privacy Policy unless otherwise specified. Your continued use of the Website or Services after the effective date of the revised Privacy Policy (or such other act specified at that time) will constitute your consent to those changes. However, we will not, without your consent, use your Personal Data in a manner materially different than what was stated at the time your Personal Data was collected. Policy was created with ",n.a.createElement("a",{target:"_blank",title:"Generate privacy policy",href:"https://www.websitepolicies.com/privacy-policy-generator"},"WebsitePolicies"),"."),n.a.createElement("h2",null,"Acceptance of this policy"),n.a.createElement("p",null,"You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to use or access the Website and its Services."),n.a.createElement("h2",null,"Contacting us"),n.a.createElement("p",null,"If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to louis.jungo@gmail.com"),n.a.createElement("p",null,"This document was last updated on March 2, 2020"))},L=a(10),H=function(e){var t=e.children,a=Object(o.useState)(!1),n=Object(m.a)(a,2),r=n[0],i=n[1],s=Object(o.useState)([]),c=Object(m.a)(s,2),l=c[0],u=c[1],h="tabd1e9rihfje6233bfcbb4uhs@group.calendar.google.com",d=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],f=function(){console.log("inside init"),window.gapi.client.init({apiKey:"AIzaSyACtDuYiuNtazwRpNq0DLiCI-8UZZc32m8",clientId:"1057548890410-u1ekak0br6g17up454flvtd8g8b83put.apps.googleusercontent.com",discoveryDocs:d,scope:"https://www.googleapis.com/auth/calendar"}).then((function(){window.gapi.auth2.getAuthInstance().isSignedIn.listen(p),p(window.gapi.auth2.getAuthInstance().isSignedIn.get())}))},p=function(e){i(e)},y=function(e){return("0"+e).slice(-2)},v=function(e){var t=function(e){var t=new Date,a=new Date(t.getFullYear(),e,1),o=a.getFullYear(),n=y(e+1),r=y(a.getDate());return new Date("".concat(o,"-").concat(n,"-").concat(r)).toISOString()}(e-1),a=function(e){var t=new Date,a=new Date(t.getFullYear(),e,0),o=a.getFullYear(),n=y(e),r=y(a.getDate());return new Date("".concat(o,"-").concat(n,"-").concat(r,"T23:59:59")).toISOString()}(e);window.gapi.client.calendar.events.list({calendarId:h,timeMin:new Date(t).toISOString(),timeMax:new Date(a).toISOString(),showDeleted:!1,singleEvents:!0,orderBy:"startTime"}).then((function(e){var t=e.result.items;t.length>0?u(function(e){return e.map((function(e){return{date:e.start.date,shift:e.summary,id:e.id}}))}(t)):console.log("No upcoming events found.")}))};return Object(o.cloneElement)(t,{handleClientLoad:function(){window.gapi&&(console.log("load gapi"),window.gapi.load("client:auth2",f))},isSignedIn:r,handleAuthClick:function(e){window.gapi.auth2.getAuthInstance().signIn()},handleSignoutClick:function(e){window.gapi.auth2.getAuthInstance().signOut()},listUpcomingEvents:v,events:l,addEvent:function(e,t){return new Promise((function(a,o){window.gapi.client.calendar.events.insert({calendarId:h,resource:{summary:t,start:{date:e},end:{date:e}}}).execute((function(){v((new Date).getMonth()+1),a(!0)}))}))},updateEvent:function(e,t,a){return new Promise((function(o,n){window.gapi.client.calendar.events.insert({calendarId:h,eventId:a,summary:t,start:{date:e},end:{date:e}}).execute((function(){v((new Date).getMonth()+1),o(!0)}))}))}})},Y=a(1),q=a.n(Y),F=["1A","1H","2A","5A","P1","P2"],B=function(e){var t=e.addEvent,a=e.date,o=e.shift,r=void 0===o?"":o,i=e.closeModal,s=e.setSelectedShift;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:q.a.overlay,onClick:i}),n.a.createElement("div",{className:q.a.addEventModal},n.a.createElement("h2",null,a),n.a.createElement("hr",null),n.a.createElement("div",{className:q.a.shiftContainer},F.map((function(e){return n.a.createElement("div",{className:c()(q.a.shift,Object(v.a)({},q.a.selected,r===e)),onClick:function(){return s(e)}},e)}))),n.a.createElement("div",{className:q.a.buttonContainer},n.a.createElement("button",{disabled:""===r,className:c()(q.a.switchButton,q.a.save),onClick:function(){return t(a,r)}},"Speichern"))))},U=["SO","MO","DI","MI","DO","FR","SA"],R=function(e){var t=e.events,a=void 0===t?[]:t,r=e.addEvent,i=e.updateEvent,s=Object(o.useState)(!1),c=Object(m.a)(s,2),l=c[0],u=c[1],h=Object(o.useState)(),d=Object(m.a)(h,2),f=d[0],p=d[1],y=Object(o.useState)(),v=Object(m.a)(y,2),g=v[0],b=v[1],w=Object(o.useState)(""),E=Object(m.a)(w,2),k=E[0],I=E[1];if(a.length<=0)return null;var P=function(e){var t=new Date(e).getUTCDay();return console.log("newDate",t,e,U[t]),U[t]},N=function(){u(!1),b(),p(),I("")};return n.a.createElement("div",{className:q.a.calendarList},l&&n.a.createElement(B,{closeModal:N,addEvent:function(e,t){""!==k?i(e,t,k).then((function(){return N()})):r(e,t).then((function(){return N()}))},date:f,shift:g,setSelectedShift:b}),function(e){var t=e[0];return n.a.createElement("div",{className:q.a.eventRow},t.map((function(e){return n.a.createElement("div",{key:P(e.date),className:q.a.day},P(e.date))})))}(a),a.map((function(e,t){return n.a.createElement("div",{key:t,className:q.a.eventRow},e.map((function(e){return n.a.createElement("div",{key:e.date,className:q.a.day,onClick:function(){return function(e){I(e.id),p(e.date),b(e.shift),u(!0)}(e)}},null===e||void 0===e?void 0:e.shift)})))})))},V=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],J=function(e){var t=e.actualMonth,a=e.setMonth,o=(new Date).getUTCMonth()+1;return n.a.createElement("div",{className:q.a.monthSwitch},n.a.createElement("button",{className:q.a.switchButton,onClick:function(){return a(t-1)}},n.a.createElement(I,{icon:b.arrowLeft,size:w})),n.a.createElement("div",{onClick:function(){return a(o)},className:q.a.monthLabel},V[t-1]),n.a.createElement("button",{className:q.a.switchButton,onClick:function(){return a(t+1)}},n.a.createElement(I,{icon:b.arrowRight,size:w})))},_=function(e){var t=e.handleClientLoad,a=e.isSignedIn,r=(e.handleAuthClick,e.handleSignoutClick,e.listUpcomingEvents),i=e.events,s=e.addEvent,c=e.updateEvent,l=(new Date).getMonth()+1,u=Object(o.useState)(l),h=Object(m.a)(u,2),d=h[0],f=h[1];Object(o.useEffect)((function(){t()})),a&&!i.length&&r(d);var p,y,v=function(e){return("0"+e).slice(-2)};return n.a.createElement(n.a.Fragment,null,a?n.a.createElement("div",{className:q.a.calendarWrap},n.a.createElement(J,{actualMonth:d,setMonth:f}),n.a.createElement(R,{events:(p=function(e){for(var t=new Date,a=new Date(t.getFullYear(),d,0).getDate(),o=[],n=function(a){var n,r="".concat(t.getFullYear(),"-").concat(v(d),"-").concat(v(a)),i=null===(n=e.filter((function(e){return e.date==="".concat(t.getFullYear(),"-").concat(v(d),"-").concat(v(a))})))||void 0===n?void 0:n[0];o.push({date:r,shift:(null===i||void 0===i?void 0:i.shift)||"",id:(null===i||void 0===i?void 0:i.id)||""})},r=1;r<=a;r++)n(r);return o}(i),y=7,Array.from({length:Math.ceil(p.length/y)},(function(e,t){return p.slice(t*y,t*y+y)}))),addEvent:s,updateEvent:c})):n.a.createElement("button",{className:q.a.switchButton,onClick:t},n.a.createElement(I,{icon:b.reTry,size:k})))},Z=function(){return document.addEventListener("scroll",(function(){switch(window.pageXOffset/window.innerWidth){case 0:return void d.push({hash:"/#first"});case 1:return void d.push({hash:"/#second"});case 2:return void d.push({hash:"/#third"});case 3:return void d.push({hash:"/#fourth"});default:return}})),n.a.createElement("div",null,n.a.createElement(L.g,null,n.a.createElement(L.d,{exact:!0,path:"/agb"},n.a.createElement(A,null)),n.a.createElement(L.d,{path:"/"},n.a.createElement("div",{className:u.a.App},n.a.createElement(S,null),n.a.createElement("div",{id:"first",className:c()(u.a.section,u.a.first)},n.a.createElement("div",{className:u.a.container},n.a.createElement(H,null,n.a.createElement(_,null)))),n.a.createElement("div",{id:"second",className:c()(u.a.section,u.a.second)},n.a.createElement("div",{className:u.a.container},n.a.createElement(z,null))),n.a.createElement("div",{id:"third",className:c()(u.a.section,u.a.third)},n.a.createElement("div",{className:u.a.container},n.a.createElement("h1",null,"3rd section"))),n.a.createElement("div",{id:"fourth",className:c()(u.a.section,u.a.fourth)},n.a.createElement("div",{className:u.a.container},n.a.createElement("h1",null,"4th section")))))))},G=a(16);i.a.render(n.a.createElement(G.HashRouter,{history:d},n.a.createElement(Z,null)),document.getElementById("root"))},6:function(e,t,a){}},[[29,1,2]]]);
//# sourceMappingURL=main.5e100ad2.chunk.js.map