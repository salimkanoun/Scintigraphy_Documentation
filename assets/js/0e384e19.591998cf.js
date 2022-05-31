"use strict";(self.webpackChunkscintigraphy_documentation=self.webpackChunkscintigraphy_documentation||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),i=n(6010),a="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),i=n(7294),a=n(6010),o=n(2389),u=n(7392),l=n(7094),c=n(2466),s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.U)(),T=k.tabGroupChoices,j=k.setTabGroupChoices,O=(0,i.useState)(w),E=O[0],x=O[1],I=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=T[v];null!=P&&P!==E&&y.some((function(e){return e.value===P}))&&x(P)}var Z=function(e){var t=e.currentTarget,n=I.indexOf(t),r=y[n].value;r!==E&&(D(t),x(r),null!=v&&j(v,String(r)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,i=I.indexOf(e.currentTarget)+1;n=null!=(r=I[i])?r:I[0];break;case"ArrowLeft":var a,o=I.indexOf(e.currentTarget)-1;n=null!=(a=I[o])?a:I[I.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},b)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},o,{className:(0,a.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return i.createElement(p,(0,r.Z)({key:String(t)},e))}},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(5488),u=n(5162),l=["components"],c={sidebar_position:1},s="Introduction",d={unversionedId:"intro",id:"intro",title:"Introduction",description:"",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Scintigraphy_Documentation/docs/intro",draft:!1,editUrl:"https://github.com/salimkanoun/Scintigraphy_Documentation/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarDocs",next:{title:"Download",permalink:"/Scintigraphy_Documentation/docs/Getting_started/Download"}},p={},m=[{value:"What is Fiji?",id:"what-is-fiji",level:2},{value:"What does Fiji provide?",id:"what-does-fiji-provide",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"what-is-fiji"},"What is Fiji?"),(0,a.kt)("img",{src:"https://imagej.net/media/icons/fiji.svg",width:"100",height:"100"}),"Fiji Is Just ImageJ\u2014a \u201cbatteries-included\u201d distribution of ImageJ and ImageJ2 which includes many useful plugins contributed by the community.",(0,a.kt)("h2",{id:"what-does-fiji-provide"},"What does Fiji provide?"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"Application",label:"Application",mdxType:"TabItem"},"A user interface with functions to load, display, and save images."),(0,a.kt)(u.Z,{value:"Techniques",label:"Techniques",mdxType:"TabItem"},"mage processing, colocalization, deconvolution, registration, segmentation, tracking, visualization and much more."),(0,a.kt)(u.Z,{value:"Plugins",label:"Plugins",mdxType:"TabItem"},"A powerful mechanism for extending ImageJ in all kinds of useful ways."),(0,a.kt)(u.Z,{value:"Scripting",label:"Scripting",mdxType:"TabItem"},"Automated, reproducible workflows via scripts and macros."),(0,a.kt)(u.Z,{value:"Forum",label:"Forum",mdxType:"TabItem"},"A vibrant, diverse, and helpful user community.")),(0,a.kt)("p",null,"Fiji\u2019s extensibility is the root of its effectiveness: many advanced\nimage-processing methods are not provided by the core application, but rather are\nplugins written by specialists in specific fields."))}v.isMDXComponent=!0}}]);