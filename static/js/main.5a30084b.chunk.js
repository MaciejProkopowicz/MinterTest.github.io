(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{128:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return h}));var a=n(2),r=n.n(a),i=n(3),o=n(29),c=n(59),s=new o.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new o.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new o.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a){var o,c,s,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=d.length>3&&void 0!==d[3]?d[3]:"recent",c=d.length>4&&void 0!==d[4]&&d[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(r.a.mark((function e(d,m){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),m({timeout:!0}))}),n);try{l=a.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),m(u)):(console.log("Resolved via websocket",e),d(u))}),o)}catch(f){s=!0,console.error("WS error in setup",t,f)}case 2:if(s||!c){e.next=8;break}return Object(i.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,m(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,a._signatureSubscriptions[l]&&a.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=function(t,n,a,r){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:o.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:c.b,isSigner:!1,isWritable:!1},{pubkey:o.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new o.d.TransactionInstruction({keys:i,programId:u,data:e.from([])})},f=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a){var i,c,u,l,d,m,f,p,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new o.b(a,t,{preflightCommitment:"recent"}),e.next=3,o.a.fetchIdl(s,i);case 3:return c=e.sent,u=new o.a(c,s,i),l={id:n,connection:a,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return d=e.sent,m=d.data.itemsAvailable.toNumber(),f=d.itemsRedeemed.toNumber(),p=m-f,b=d.data.goLiveDate.toNumber(),b=new Date(1e3*b),console.log({itemsAvailable:m,itemsRedeemed:f,itemsRemaining:p,goLiveDate:b}),e.abrupt("return",{candyMachine:l,itemsAvailable:m,itemsRedeemed:f,itemsRemaining:p,goLiveDate:b});case 16:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.PublicKey.findProgramAddress([t.toBuffer(),c.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){var s,u,d,f,y,h,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.d.Keypair.generate(),e.next=3,g(a,s.publicKey);case 3:return u=e.sent,d=t.connection,f=t.program,e.next=7,b(s.publicKey);case 7:return y=e.sent,e.next=10,p(s.publicKey);case 10:return h=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(c.a.span);case 13:return v=e.sent,e.next=16,f.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:a,wallet:i,mint:s.publicKey,metadata:y,masterEdition:h,mintAuthority:a,updateAuthority:a,tokenMetadataProgram:l,tokenProgram:c.b,systemProgram:o.d.SystemProgram.programId,rent:o.d.SYSVAR_RENT_PUBKEY,clock:o.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[o.d.SystemProgram.createAccount({fromPubkey:a,newAccountPubkey:s.publicKey,space:c.a.span,lamports:v,programId:c.b}),c.c.createInitMintInstruction(c.b,s.publicKey,0,a,a),m(u,a,a,s.publicKey),c.c.createMintToInstruction(c.b,s.publicKey,u,a,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},v=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(9).Buffer)},173:function(e,t,n){},342:function(e,t,n){e.exports=n(562)},347:function(e,t,n){},350:function(e,t){},352:function(e,t){},359:function(e,t){},370:function(e,t){},371:function(e,t){},396:function(e,t){},399:function(e,t){},405:function(e,t){},461:function(e,t){},463:function(e,t){},477:function(e,t){},481:function(e,t){},483:function(e,t){},493:function(e,t){},495:function(e,t){},526:function(e,t){},528:function(e,t){},535:function(e,t){},536:function(e,t){},561:function(e,t){},562:function(e,t,n){"use strict";n.r(t);var a,r,i,o,c=n(0),s=n.n(c),u=n(26),l=n.n(u),d=(n(173),n(347),n(18)),m=n(2),f=n.n(m),p=n(3),b=n(12),g=n(127),y=n(129),h=n(303),v=n(589),x=n(594),E=n(598),O=n(597),w=n(304),j=n.n(w),S=n(7),T=n(8),C=n(16),A=n(17),k=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={days:0,hours:0,minutes:0,seconds:0},a}return Object(T.a)(n,[{key:"componentWillMount",value:function(){this.getTimeUntil(this.props.deadline)}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.getTimeUntil(e.props.deadline)}),1e3)}},{key:"leading0",value:function(e){return e<10?"0"+e:e}},{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date);if(t<0)!0,this.setState({days:0,hours:0,minutes:0,seconds:0});else{var n=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60),r=Math.floor(t/36e5%24),i=Math.floor(t/864e5);this.setState({days:i,hours:r,minutes:a,seconds:n})}}},{key:"render",value:function(){return s.a.createElement("div",{style:{fontSize:"0.6rem",marginBottom:"14px"}},s.a.createElement("div",null,s.a.createElement("p",{style:{display:"flex",justifyContent:"center",marginBottom:5}},"TIME LEFT TO START MINTING:")),s.a.createElement("div",{style:{height:"1rem",display:"flex",justifyContent:"center",flexFlow:"row",marginBottom:0}},s.a.createElement("div",{className:"Clock-days"},this.leading0(this.state.days)," DAYS \xa0"),s.a.createElement("div",{className:"Clock-hours"},this.leading0(this.state.hours)," HOURS \xa0"),s.a.createElement("div",{className:"Clock-minutes"},this.leading0(this.state.minutes)," MINUTES \xa0"),s.a.createElement("div",{className:"Clock-seconds"},this.leading0(this.state.seconds)," SECONDS")))}}]),n}(c.Component),M=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={deadline:"DECEMBER, 07, 2021, 05:30:00 EST"},a}return Object(T.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"App",id:"timerText"},s.a.createElement(k,{deadline:this.state.deadline}))}}]),n}(c.Component),R=n(6),L=n(47),P=n(166),I=n(128),N=Object(y.a)(P.a)(a||(a=Object(g.a)([""]))),B=y.a.span(r||(r=Object(g.a)([""]))),D=y.a.div(i||(i=Object(g.a)([""]))),K=Object(y.a)(v.a)(o||(o=Object(g.a)([""]))),W=function(e){var t=e.days,n=e.hours,a=e.minutes,r=e.seconds;e.completed;return s.a.createElement(B,null,n+24*(t||0)," hours, ",a," minutes, ",r," seconds")},U=function(e){var t=Object(c.useState)(),n=Object(b.a)(t,2),a=(n[0],n[1]),r=Object(c.useState)(!1),i=Object(b.a)(r,2),o=i[0],u=i[1],l=Object(c.useState)(!1),m=Object(b.a)(l,2),g=m[0],y=m[1],v=Object(c.useState)(!1),w=Object(b.a)(v,2),S=w[0],T=w[1],C=Object(c.useState)(!1),A=Object(b.a)(C,2),k=A[0],P=A[1],B=Object(c.useState)(!1),U=Object(b.a)(B,2),q=U[0],H=U[1],F=Object(c.useState)(!1),z=Object(b.a)(F,2),Y=z[0],V=z[1],_=Object(c.useState)(0),J=Object(b.a)(_,2),G=J[0],Z=J[1],X=Object(c.useState)(0),Q=Object(b.a)(X,2),$=Q[0],ee=Q[1],te=Object(c.useState)(0),ne=Object(b.a)(te,2),ae=(ne[0],ne[1]),re=Object(c.useState)({open:!1,message:"",severity:void 0}),ie=Object(b.a)(re,2),oe=ie[0],ce=ie[1],se=Object(c.useState)(new Date(e.startDate)),ue=Object(b.a)(se,2),le=ue[0],de=ue[1],me=Object(L.c)(),fe=Object(c.useState)(),pe=Object(b.a)(fe,2),be=pe[0],ge=pe[1];function ye(){var e=new Audio("https://docs.google.com/uc?export=open&id=1Ta3HBeLrKBAN6MiwpJIp0bw7N2KAaeD6");e.play(),e.loop=!1,q||(V(!0),H(!0),console.log("confetti finished: "+q),setTimeout((function(){H(!1),console.log("confetti finished: "+q)}),5e3),setTimeout((function(){V(!1),console.log("confetti finished show: "+Y)}),12e3))}function he(){var e=new Audio("https://docs.google.com/uc?export=open&id=1W9YaojgV3B1j0g_1jiJ5En48yQOrOa1u");e.play(),e.loop=!1}var ve=Math.floor(Date.now()/1e3);var xe=function(){Object(p.a)(f.a.mark((function t(){var n,a,r,i,o,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(me){t.next=2;break}return t.abrupt("return");case 2:return!0,t.next=5,Object(I.b)(me,e.candyMachineId,e.connection);case 5:n=t.sent,a=n.candyMachine,r=n.goLiveDate,i=n.itemsAvailable,o=n.itemsRemaining,c=n.itemsRedeemed,Z(i),ae(o),ee(c),y(0===o),de(r),ge(a);case 17:case"end":return t.stop()}}),t)})))()},Ee=function(){var t=Object(p.a)(f.a.mark((function t(){var n,r,i,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,T(!0),!me||!(null===be||void 0===be?void 0:be.program)){t.next=10;break}return t.next=5,Object(I.c)(be,e.config,me.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(I.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?(ce({open:!0,message:"Mint failed! Please try again!",severity:"error"}),he()):(ce({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),ye());case 10:t.next=18;break;case 12:t.prev=12,t.t0=t.catch(0),he(),i=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(i="SOLD OUT!",y(!0)):312===t.t0.code&&(i="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?i="SOLD OUT!":t.t0.message.indexOf("0x135")&&(i="Insufficient funds to mint. Please fund your wallet.")),ce({open:!0,message:i,severity:"error"});case 18:if(t.prev=18,!me){t.next=24;break}return t.next=22,e.connection.getBalance(me.publicKey);case 22:o=t.sent,a(o/R.LAMPORTS_PER_SOL);case 24:return T(!1),xe(),t.finish(18);case 27:case"end":return t.stop()}}),t,null,[[0,12,18,27]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){Object(p.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!me){t.next=6;break}return t.next=3,e.connection.getBalance(me.publicKey);case 3:n=t.sent,a(n/R.LAMPORTS_PER_SOL),ve>=1638873e3?(P(!0),console.log("TODAY TIMESTAMP: "+ve),console.log("MATCH OR ABOVE TIMESTAMP TO HIDE CLOCK: 1638873000"),console.log("Switch isReleaseDate: "+k)):(P(!1),console.log("TODAY TIMESTAMP: "+ve),console.log("MATCH OR ABOVE TIMESTAMP TO HIDE CLOCK: 1638873000"),console.log("Switch isReleaseDate: "+k));case 6:case"end":return t.stop()}}),t)})))()}),[me,e.connection]),Object(c.useEffect)(xe,[me,e.candyMachineId,e.connection]),s.a.createElement("main",{style:{display:"flex",height:"100%"}},Y?s.a.createElement(j.a,{recycle:q}):"",s.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo"},s.a.createElement("source",{src:"https://docs.google.com/uc?export=open&id=1ucl678oBuxbqP2W2BL0hiKKaep_UzF1A",type:"video/mp4"})),s.a.createElement("div",{style:{padding:30,display:"flex",flex:1,flexDirection:"column"}},s.a.createElement("div",{style:{backgroundColor:"rgba(52, 52, 52, 0.8)",borderStyle:"solid",borderColor:"rgba(18, 19, 18, 0.8)",borderTopWidth:"3px",borderBottomWidth:"0px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",display:"flex",justifyContent:"space-between",alignContent:"center",alignItems:"center",verticalAlign:"center"}},me&&s.a.createElement("div",{className:"walletP",style:{display:"flex",justifyContent:"center",alignContent:"center",whiteSpace:"normal",flexDirection:"row",marginTop:"5px",marginLeft:"5px"}},s.a.createElement("div",{style:{width:155,height:45,backgroundColor:"rgba(0, 0, 0, 0.4)",borderRadius:10,display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}},s.a.createElement("svg",{style:{paddingRight:10,paddingLeft:0,color:"yellowgreen",fontWeight:"bold"},xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",className:"bi bi-wallet2",viewBox:"0 0 16 16"},s.a.createElement("path",{d:"M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"})),s.a.createElement("span",{className:"walletText"}," "+Object(I.d)(me.publicKey.toBase58()||"")))),s.a.createElement("div",null,me&&s.a.createElement("div",{style:{width:300,height:45,backgroundColor:"rgba(0, 0, 0, 0.4)",borderRadius:10,display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",marginTop:"5px"}},s.a.createElement(M,null))),s.a.createElement(N,{id:"connectButtonStyle",style:me?{backgroundColor:"rgb(106, 139, 16)",animation:"null",marginTop:"5px",marginRight:"5px",fontFamily:"Aclonica"}:{marginTop:"5px",marginRight:"5px"}},me?"CHANGE WALLET":"CONNECT SOLANA WALLET")),s.a.createElement("div",{style:{backgroundColor:"rgba(52, 52, 52, 0.8)",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderStyle:"solid",borderColor:"rgba(18, 19, 18, 0.8)",borderBottomWidth:"5px",borderTopWidth:"0px",flex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},s.a.createElement("img",{src:"https://picsum.photos/450/200",alt:"Some Description",className:"mainPicture"}),s.a.createElement(D,{style:{marginBottom:15,display:"flex",justifyContent:"center",flexDirection:"column"}},s.a.createElement(K,{id:o&&me&&!g?"mintButtonStyle":"noStyle",disabled:g||S||!o||!me||!k,onClick:Ee,variant:"contained",style:{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",verticalAlign:"center",fontWeight:"normal",fontFamily:"Aclonica",lineHeight:1.2,fontSize:"1.2rem"}},me?g?"SOLD OUT !":k?o?S?s.a.createElement(x.a,null):"MINT ME !":s.a.createElement(h.a,{date:le,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:W}):"MINTING PERIOD NOT STARTED YET !":"WAITING FOR SOLANA WALLET CONNECTION"),s.a.createElement("p",{style:{userSelect:"none",display:"flex",justifyContent:"center",marginTop:10,marginBottom:0,fontSize:"0.7rem",color:"aquamarine"}},"CHRISTMAS PRICE: 0.25 SOL \xa0",s.a.createElement("span",{style:{textDecoration:"line-through",color:"violet"}},"NORMAL PRICE: 0.50 SOL"),"\xa0")),s.a.createElement("div",{style:{display:"flex",justifyContent:"center",userSelect:"none"}},me&&s.a.createElement("p",{className:"supplyText"},"TOTAL COLLECTION SUPPLY REDEEMED: ",$,"/",G)),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("div",{style:{width:"80%"}},s.a.createElement("p",{style:{userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",lineHeight:1.28}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna id volutpat lacus laoreet. Venenatis urna cursus eget nunc scelerisque. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Lacus laoreet non curabitur gravida arcu ac tortor. Porttitor eget dolor morbi non arcu risus quis. Id diam maecenas ultricies mi eget mauris pharetra. Netus et malesuada fames ac turpis. At tempor commodo ullamcorper a lacus vestibulum sed. Ac felis donec et odio pellentesque. aucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Nunc vel risus commodo viverra maecenas accumsan lacus. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. A lacus vestibulum sed arcu non odio euismod lacinia at. Proin sed libero enim sed faucibus turpis in eu. Vel pretium lectus quam id leo in vitae. Eu volutpat odio facilisis mauris sit."))),s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"roundedFooterSocial"},s.a.createElement("a",{href:"http://discord.com",style:{color:"white",display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-discord footerButtonDiscord",viewBox:"0 0 16 16"},s.a.createElement("path",{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"})))),s.a.createElement("div",{className:"roundedFooterSocial"},s.a.createElement("a",{href:"http://twitter.com",style:{color:"white",display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-twitter footerButtonTwitter",viewBox:"0 0 16 16"},s.a.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})))),s.a.createElement("div",{className:"roundedFooterSocial"},s.a.createElement("a",{href:"http://telegram.com",style:{color:"white",display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-telegram footerButtonTelegram",viewBox:"0 0 16 16"},s.a.createElement("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"})))))),s.a.createElement(E.a,{open:oe.open,autoHideDuration:6e3,onClose:function(){return ce(Object(d.a)(Object(d.a)({},oe),{},{open:!1}))}},s.a.createElement(O.a,{onClose:function(){return ce(Object(d.a)(Object(d.a)({},oe),{},{open:!1}))},severity:oe.severity},oe.message))))},q=n(29),H=n(110),F=n(333),z=n(595),Y=new q.d.PublicKey("8SwhGUrtMvqAnL1LHkJkWEpt9dh9ZfkThSpyXFfhyPyR"),V=new q.d.PublicKey("Hu7qWoXmZ2yip6tcez2VfncdDJLmT1nevJqNhmiELe4d"),_=new q.d.PublicKey("3ADJemZS74pzBnCA4SbXMkwYyv31cM2jrCMyx6NvvxUa"),J=new q.d.Connection("https://explorer-api.devnet.solana.com"),G=parseInt("1638873000",10),Z=Object(F.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),X=function(){var e=Object(c.useMemo)((function(){return Object(R.clusterApiUrl)("devnet")}),[]),t=Object(c.useMemo)((function(){return[Object(H.a)(),Object(H.b)(),Object(H.c)(),Object(H.e)({network:"devnet"}),Object(H.d)({network:"devnet"})]}),[]);return s.a.createElement(z.a,{theme:Z},s.a.createElement(L.a,{endpoint:e},s.a.createElement(L.b,{wallets:t,autoConnect:!0},s.a.createElement(P.b,null,s.a.createElement(U,{candyMachineId:_,config:V,connection:J,startDate:G,treasury:Y,txTimeout:3e4})))))},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,599)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(X,null),","),document.getElementById("root")),Q()}},[[342,1,2]]]);
//# sourceMappingURL=main.5a30084b.chunk.js.map