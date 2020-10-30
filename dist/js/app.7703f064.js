(function(e){function t(t){for(var n,o,c=t[0],s=t[1],l=t[2],u=0,v=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"MedAkcess Logo",contain:"",src:a("cf05"),transition:"scale-transition",width:"40"}}),n("h3",{staticClass:"ar-4"},[e._v("MedAkcess")])],1),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[n("span",{staticClass:"mr-2"},[e._v("Playground")]),n("v-icon",[e._v("mdi-cloud-outline")])],1)],1),n("v-main",[n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"mr-2"},[e._v("Playground")])]),n("v-card-subtitle",[e._v(" Coming Soon ")]),n("v-card-text",[e._v(" Playground is an option that will allow end users to test and play with the development AI models built by MedAkcess ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"info",attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1),n("HomePage")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{cols:"12"}},[a("v-carousel",{attrs:{cycle:"",height:"400","show-arrows":"","hide-delimiters":""}},e._l(e.slider,(function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e.image}})})),1)],1),a("v-row",{attrs:{cols:"12"}}),a("v-row",[a("Services")],1),a("v-row",[a("About")],1),a("v-footer",[a("Footer")],1)],1)},c=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card",[n("v-card-title",[e._v(" AI Assisted Diagnostics ")]),n("PneumoniaPage",{attrs:{img:"../../assets/IM-0359-0001.jpeg"}})],1)],1),n("v-col",{attrs:{cols:"6",md:"4"}},[n("v-card",[n("v-card-title",[e._v(" Radiography Diagnostics with AI ")]),n("v-img",{attrs:{src:a("ac35")}}),n("v-card-text",[e._v(" Diagnosing diseases in real time with high levels of accuracy in. ")])],1)],1)],1)],1)},l=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-dialog",{attrs:{"max-width":"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[e._v(" Diagnostic results ")]),a("v-card-text",[e._v(" "+e._s(e.result)+" ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("video",{attrs:{id:"webcam"}})]),a("v-col",{attrs:{cols:"6"}},[a("canvas",{ref:"webcam_copy"})])],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-btn",{attrs:{text:"",color:"info"},on:{click:function(t){return e.startVideo()}}},[e._v(" "+e._s(e.videoState)+" ")])],1),a("v-col",{attrs:{cols:"4"}},[e.canDiagnose?a("v-btn",{attrs:{text:"",color:"green"},on:{click:function(t){return e.diagnose()}}},[e._v(" Diagnose ")]):e._e()],1),a("v-col",{attrs:{cols:"4"}},[a("input",{ref:"img_inf",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.imgChange}}),a("v-btn",{attrs:{text:"",color:"warn"},on:{click:function(t){return e.select_img()}}},[e._v(" Image ")])],1)],1)],1)},u=[],v=(a("4160"),a("b0c0"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),g=a("ce1a"),f={name:"PneumoniaPage",props:{img:{type:String,required:!1}},mounted:function(){console.debug("ENV: MedAkcess")},data:function(){return{canDiagnose:!1,videoState:"Start WebCam",model:{},result:"",dialog:!1,img_url:"",app_name:"MedAkcess"}},methods:{initModel:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var n,r,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=location.protocol+"//"+location.host+"/model/model.json",console.log("Loading model for inference"),a.next=4,g["b"](n);case 4:return r=a.sent,console.log("Model loaded"),i=g["a"].fromPixels(e).resizeNearestNeighbor([250,250]).toFloat().expandDims(),a.prev=7,a.next=10,r.predict(i).data();case 10:o=a.sent,console.log(o),t.result=0==o?"No pnuemonia detected in the image":1==o?"Pneumonia detected in the snapshot":"The diagnosis is inconclusive",t.dialog=!0,a.next=20;break;case 16:a.prev=16,a.t0=a["catch"](7),t.result="An error ocurred in: "+a.t0,t.dialog=!0;case 20:case"end":return a.stop()}}),a,null,[[7,16]])})))()},startVideo:function(){var e=this,t=document.querySelector("#webcam");navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(a){t.srcObject=a,"Start WebCam"==e.videoState?(t.play(),e.canDiagnose=!0,e.videoState="Stop WebCam"):(a.getTracks().forEach((function(e){"live"==e.readyState&&e.stop()})),e.canDiagnose=!1,e.videoState="Start WebCam")}))},diagnose:function(){var e=document.querySelector("#webcam");this.videoState="Stop WebCam",this.process_image(e),this.canDiagnose=!0},select_img:function(){this.$refs.img_inf.click()},imgChange:function(e){var t=e.target.files[0]||e.dataTransfer.files[0];if("undefined"==!t.name)this.dialog=!0,this.result="No files selected";else{this.dialog=!0,this.result="Processing Image";var a=this.$refs.img_inf.files[0],n=new Image;n.src=URL.createObjectURL(a),this.process_image(n)}},process_image:function(e){var t=this.$refs.webcam_copy,a=t.getContext("2d");t.height=250,t.width=250,a.drawImage(e,0,0,t.width,t.height);for(var n=a.getImageData(0,0,t.width,t.height),r=n.data,i=0;i<r.length;i+=4){var o=.34*r[i]+.5*r[i+1]+.16*r[i+2];r[i]=o,r[i+1]=o,r[i+2]=o}a.putImageData(n,0,0);var c=t.toDataURL(),s=document.createElement("img");s.setAttribute("src",c),t.appendChild(s),this.dialog=!1,this.initModel(s)}}},p=f,m=a("2877"),h=a("6544"),b=a.n(h),_=a("8336"),w=a("b0af"),y=a("99d9"),C=a("62ad"),x=a("a523"),V=a("169a"),k=a("0fd9"),S=Object(m["a"])(p,d,u,!1,null,null,null),A=S.exports;b()(S,{VBtn:_["a"],VCard:w["a"],VCardText:y["c"],VCardTitle:y["d"],VCol:C["a"],VContainer:x["a"],VDialog:V["a"],VRow:k["a"]});var j={name:"Services",components:{PneumoniaPage:A}},P=j,M=a("adda"),I=Object(m["a"])(P,s,l,!1,null,null,null),D=I.exports;b()(I,{VCard:w["a"],VCardText:y["c"],VCardTitle:y["d"],VCol:C["a"],VContainer:x["a"],VImg:M["a"],VRow:k["a"]});var O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("h1",[e._v(" MedAkcess ")])]),a("v-row",[a("v-card",[a("v-card-text",[a("p",[e._v(" We created MedAkcess with very audacious goals. Below are some of the things we hope to achive from this project ")]),a("br"),a("p",[a("b",[e._v("• Enhanced Diagnosis")]),e._v(" – Building tools for doctors to augment their own diagnosis with more data, experience, precision and accuracy (e.g. radiology image analysis, Journal of Medicine Association papers on retina scan for diabetic retinopathy, skin lesion classification to recognize melanoma with high accuracy, medical history scraping, treatment outcome predictions) "),a("br"),a("b",[e._v("• Drug Discovery")]),e._v(" – Computational drug discovery that intelligently hones in on the most promising treatments (e.g. speeding pharma drug development) "),a("br"),a("b",[e._v("• Patient Care")]),e._v(" – Machines that aid with monitoring, treatment, and/or recovery of patients (e.g. visual patient monitoring, autonomous robotic surgery, friendly medication and/or physical therapy robots)"),a("br"),a("b",[e._v("• Research")]),e._v(" – Instantly sifting through hundreds of new research papers and clinical trials that are published each day to make new connections (e.g. AI at University of North Carolina’s Lineberger Comprehensive Cancer Center)"),a("br"),a("b",[e._v("• Sensory Aids")]),e._v(" – Filling in for various senses that are absent or challenged (e.g. visual aid, audio aid)"),a("br")])])],1)],1)],1)},T=[],R=(a("b91e"),{}),E=Object(m["a"])(R,O,T,!1,null,"69d9ff60",null),$=E.exports;b()(E,{VCard:w["a"],VCardText:y["c"],VContainer:x["a"],VRow:k["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("p",[e._v(" MedAkcess, A Goglyn Tech Initiative")])])},N=[],W=(a("78df"),{}),B=Object(m["a"])(W,L,N,!1,null,"49aff9ba",null),F=B.exports;b()(B,{VContainer:x["a"]});var U={name:"HomePage",components:{Services:D,About:$,Footer:F},data:function(){return{slider:[{name:"AI in Medicine",image:a("fe80")},{name:"Can AI change Medicine",image:a("7de2")},{name:"Tech powered diagnostics",image:a("f9ed")}]}}},q=U,H=a("5e66"),J=a("3e35"),z=a("553a"),G=Object(m["a"])(q,o,c,!1,null,null,null),K=G.exports;b()(G,{VCarousel:H["a"],VCarouselItem:J["a"],VContainer:x["a"],VFooter:z["a"],VRow:k["a"]});var Q={name:"App",components:{HomePage:K},data:function(){return{dialog:!1}}},X=Q,Y=(a("5c0b"),a("7496")),Z=a("40dc"),ee=a("132d"),te=a("f6c4"),ae=a("2fa4"),ne=Object(m["a"])(X,r,i,!1,null,null,null),re=ne.exports;b()(ne,{VApp:Y["a"],VAppBar:Z["a"],VBtn:_["a"],VCard:w["a"],VCardActions:y["a"],VCardSubtitle:y["b"],VCardText:y["c"],VCardTitle:y["d"],VDialog:V["a"],VIcon:ee["a"],VImg:M["a"],VMain:te["a"],VSpacer:ae["a"]});var ie=a("f309");n["a"].use(ie["a"]);var oe=new ie["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:oe,render:function(e){return e(re)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"78df":function(e,t,a){"use strict";var n=a("e41f"),r=a.n(n);r.a},"7de2":function(e,t,a){e.exports=a.p+"img/AI-hype.bb339afa.jpg"},"9c0c":function(e,t,a){},"9e24":function(e,t,a){},ac35:function(e,t,a){e.exports=a.p+"img/IM-0359-0001.69465122.jpeg"},b91e:function(e,t,a){"use strict";var n=a("9e24"),r=a.n(n);r.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.df2b78db.png"},e41f:function(e,t,a){},f9ed:function(e,t,a){e.exports=a.p+"img/shutterstock_390198256.c6281cd8.jpg"},fe80:function(e,t,a){e.exports=a.p+"img/artificial-intelligence-in-medicine-ai-in-medicine.6ed4a9ac.jpg"}});
//# sourceMappingURL=app.7703f064.js.map