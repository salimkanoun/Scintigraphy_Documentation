"use strict";(self.webpackChunkscintigraphy_documentation=self.webpackChunkscintigraphy_documentation||[]).push([[6292],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||r;return n?i.createElement(d,l(l({ref:t},u),{},{components:n})):i.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(7294),a=n(6010),r="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(7462),a=n(7294),r=n(2389),l=n(7392),o=n(7094),c=n(2466),s=n(6010),u="tabList_uSqn",p="tabItem_LplD";function m(e){var t,n,r,m=e.lazy,f=e.block,d=e.defaultValue,h=e.values,b=e.groupId,g=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=y[0])?void 0:r.props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,o.U)(),Z=T.tabGroupChoices,O=T.setTabGroupChoices,S=(0,a.useState)(x),C=S[0],E=S[1],P=[],w=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var j=Z[b];null!=j&&j!==C&&v.some((function(e){return e.value===j}))&&E(j)}var R=function(e){var t=e.currentTarget,n=P.indexOf(t),i=v[n].value;i!==C&&(w(t),E(i),null!=b&&O(b,i))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=P.indexOf(e.currentTarget)+1;n=P[i]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;n=P[a]||P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":f},g)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:R,onClick:R},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),m?(0,a.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function f(e){var t=(0,r.Z)();return a.createElement(m,(0,i.Z)({key:String(t)},e))}},312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=n(9877),o=n(2360),c=["components"],s={sidebar_position:3},u=void 0,p={unversionedId:"Utilisation/Principes-utilization/Utilization",id:"Utilisation/Principes-utilization/Utilization",title:"Utilization",description:"",source:"@site/docs/Utilisation/Principes-utilization/Utilization.md",sourceDirName:"Utilisation/Principes-utilization",slug:"/Utilisation/Principes-utilization/Utilization",permalink:"/Scintigraphy_Documentation/docs/Utilisation/Principes-utilization/Utilization",draft:!1,editUrl:"https://github.com/salimkanoun/Scintigraphy_Documentation/docs/Utilisation/Principes-utilization/Utilization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarDocs",previous:{title:"Export-Image",permalink:"/Scintigraphy_Documentation/docs/Utilisation/Principes-utilization/Export-Image"},next:{title:"Intro",permalink:"/Scintigraphy_Documentation/docs/Scintigraphy/Generic/Intro"}},m={},f=[{value:"To begin the view of examination",id:"to-begin-the-view-of-examination",level:2},{value:"Select exam type",id:"select-exam-type",level:2},{value:"Specific properties",id:"specific-properties",level:2},{value:"Delimit the range",id:"delimit-the-range",level:2},{value:"Repeated Steps",id:"repeated-steps",level:3},{value:"Results",id:"results",level:2}],d={toc:f};function h(e){var t=e.components,s=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"to-begin-the-view-of-examination"},"To begin the view of examination"),(0,r.kt)("p",null,"Once the images are opened,\nyou can right-click ",(0,r.kt)("strong",{parentName:"p"},"99Tc")," in the right  of the bar."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3813).Z,width:"606",height:"107"})),(0,r.kt)("p",null,"Then you can select your exam type."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Generic",label:"Generic",mdxType:"TabItem"},"Dynamic Quantification",(0,r.kt)("br",null),"Static Quantification"),(0,r.kt)(o.Z,{value:"Bone",label:"Bone",mdxType:"TabItem"},"Bone Scintigraphy"),(0,r.kt)(o.Z,{value:"Cardiac",label:"Cardiac",mdxType:"TabItem"},"Amylose",(0,r.kt)("br",null),"MIBG Quant"),(0,r.kt)(o.Z,{value:"Endocrinology",label:"Endocrinology",mdxType:"TabItem"},"Thyroid : Tc Uptake",(0,r.kt)("br",null),"Parathyroid : Parathyroid"),(0,r.kt)(o.Z,{value:"Gastric",label:"Gastric",mdxType:"TabItem"},"Gastric Emptying Solid",(0,r.kt)("br",null),"Gastric Emptying Liquid",(0,r.kt)("br",null),"Esophageal Transit"),(0,r.kt)(o.Z,{value:"Lymphatic",label:"Lymphatic",mdxType:"TabItem"},"Lymphoscitigraphy"),(0,r.kt)(o.Z,{value:"Pulmonary",label:"Pulmonary",mdxType:"TabItem"},"Pulmonary Shunt"),(0,r.kt)(o.Z,{value:"Renal",label:"Renal",mdxType:"TabItem"},"Renogram",(0,r.kt)("br",null),"DMSA",(0,r.kt)("br",null),"Renogram Follow-Up"),(0,r.kt)(o.Z,{value:"Salyiary Glands",label:"Salyiary Glands",mdxType:"TabItem"},"Salyiary Glands"),(0,r.kt)(o.Z,{value:"Others",label:"Others",mdxType:"TabItem"},"Schaefer Calibration")),(0,r.kt)("h2",{id:"select-exam-type"},"Select exam type"),(0,r.kt)("p",null," In this example we will select ",(0,r.kt)("strong",{parentName:"p"},"Castric Emptying Solid"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6422).Z,width:"871",height:"453"})),(0,r.kt)("p",null,"Then it will open all the images you read before."),(0,r.kt)("p",null,"Click  ",(0,r.kt)("strong",{parentName:"p"},"Select All")," of :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8738).Z,width:"684",height:"289"})),(0,r.kt)("h2",{id:"specific-properties"},"Specific properties"),(0,r.kt)("p",null,"Then you'll have some specific properties of the examination that the doctor need to\nfill. Then click at ",(0,r.kt)("strong",{parentName:"p"},"Validate"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(918).Z,width:"522",height:"714"})),(0,r.kt)("h2",{id:"delimit-the-range"},"Delimit the range"),(0,r.kt)("p",null,"Left-click to delimit the range of stomach, right-click to close the range."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9516).Z,width:"522",height:"712"})),(0,r.kt)("p",null,"Click at next, then delimit the range of intestine."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3921).Z,width:"519",height:"715"})),(0,r.kt)("h3",{id:"repeated-steps"},"Repeated Steps"),(0,r.kt)("p",null,"Click at ",(0,r.kt)("strong",{parentName:"p"},"next")," to ajust the range of stomach of a new image."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1549).Z,width:"519",height:"713"})),(0,r.kt)("p",null,"Click at next to ajust the range of intestine in of this image."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8752).Z,width:"520",height:"713"})),(0,r.kt)("p",null,"Repeat ",(0,r.kt)("strong",{parentName:"p"},"the 2 steps above")," until the range of all images are adjusted."),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("p",null,"At top left you have two options to view the result."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1).Z,width:"1030",height:"165"})),(0,r.kt)("p",null,"Gastric only:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6367).Z,width:"838",height:"513"})),(0,r.kt)("p",null,"Intragastric distribution:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3729).Z,width:"912",height:"516"})),(0,r.kt)("p",null,"You have the bouton ",(0,r.kt)("strong",{parentName:"p"},"Capture")," at bottom right to save the result."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8388).Z,width:"275",height:"63"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9823).Z,width:"356",height:"280"})))}h.isMDXComponent=!0},3813:function(e,t,n){t.Z=n.p+"assets/images/99tc-386cfed64eae7bbb06ce1bbbe0676458.png"},8388:function(e,t){t.Z="data:image/png;base64,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"},3921:function(e,t,n){t.Z=n.p+"assets/images/delimitIntestine-c39f4b86ccbd5566182014d23867e94e.png"},8752:function(e,t,n){t.Z=n.p+"assets/images/delimitIntestine2-dae0552c7f24d48ff93a20ad43c52384.png"},9516:function(e,t,n){t.Z=n.p+"assets/images/delimitStomach-156418dab2b24ce7159907a8c6f99167.png"},1549:function(e,t,n){t.Z=n.p+"assets/images/delimitStomach2-01737ad6b422c69102056813b4326ab0.png"},6422:function(e,t,n){t.Z=n.p+"assets/images/gastric-ff015bc2476d09fd6d14dbc8e764d716.png"},6367:function(e,t,n){t.Z=n.p+"assets/images/gastricOnly-da0f8a3196b02ec0dc986a81a913a296.png"},918:function(e,t,n){t.Z=n.p+"assets/images/ingestionTime-83a23856045df7b254e6cbf79c47b2f5.png"},3729:function(e,t,n){t.Z=n.p+"assets/images/intragastricDistribution-79f9c41bf9fa4abc422b33c1fc3a3ee4.png"},1:function(e,t,n){t.Z=n.p+"assets/images/resultOptions-81f515fc5d80f0bba90d0cc635bba264.png"},9823:function(e,t,n){t.Z=n.p+"assets/images/saveDicom-019a3c3c863068eb859c67d889a3bf84.png"},8738:function(e,t,n){t.Z=n.p+"assets/images/selectDICOM-16ffdc50c85a18d369dfb89a83a791a4.png"}}]);