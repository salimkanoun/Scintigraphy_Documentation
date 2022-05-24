"use strict";(self.webpackChunkscintigraphy_documentation=self.webpackChunkscintigraphy_documentation||[]).push([[643],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(6010),r="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),i=n(7294),r=n(2389),o=n(7392),l=n(7094),s=n(2466),u=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,h=e.block,m=e.defaultValue,b=e.values,f=e.groupId,g=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,l.U)(),O=T.tabGroupChoices,x=T.setTabGroupChoices,E=(0,i.useState)(w),j=E[0],P=E[1],I=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=O[f];null!=Z&&Z!==j&&y.some((function(e){return e.value===Z}))&&P(Z)}var S=function(e){var t=e.currentTarget,n=I.indexOf(t),a=y[n].value;a!==j&&(D(t),P(a),null!=f&&x(f,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var i=I.indexOf(e.currentTarget)-1;n=I[i]||I[I.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,u.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":h},g)},y.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return I.push(e)},onKeyDown:C,onFocus:S,onClick:S},r,{className:(0,u.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),d?(0,i.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function h(e){var t=(0,r.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},4248:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(9877),l=n(2360),s=["components"],u={sidebar_position:1},c=void 0,p={unversionedId:"Utilisation/Principe-utilization/The-main-window",id:"Utilisation/Principe-utilization/The-main-window",title:"The-main-window",description:"",source:"@site/docs/Utilisation/Principe-utilization/The-main-window.md",sourceDirName:"Utilisation/Principe-utilization",slug:"/Utilisation/Principe-utilization/The-main-window",permalink:"/Scintigraphy_Documentation/docs/Utilisation/Principe-utilization/The-main-window",draft:!1,editUrl:"https://github.com/salimkanoun/Scintigraphy_Documentation/docs/Utilisation/Principe-utilization/The-main-window.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarDocs",previous:{title:"Update",permalink:"/Scintigraphy_Documentation/docs/Utilisation/Update"},next:{title:"Export-Image",permalink:"/Scintigraphy_Documentation/docs/Utilisation/Principe-utilization/Export-Image"}},d={},h=[{value:"The search bar",id:"the-search-bar",level:2},{value:"Results",id:"results",level:3},{value:"Categories",id:"categories",level:3},{value:"Search Options",id:"search-options",level:3},{value:"Details",id:"details",level:3},{value:"Action Buttons",id:"action-buttons",level:3},{value:"The menu bar",id:"the-menu-bar",level:2},{value:"The tool bar",id:"the-tool-bar",level:2},{value:"The status bar",id:"the-status-bar",level:2}],m={toc:h};function b(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After starting the program, you will see the main window:"),(0,r.kt)("img",{src:"https://imagej.net/media/learn/fiji-main-window.png"}),(0,r.kt)("p",null,"On macOS, the menu bar will appear on the top of the screen (as with all macOS\napplications)."),(0,r.kt)("h2",{id:"the-search-bar"},"The search bar"),(0,r.kt)("p",null,"The search bar is a convenient way to quickly find and launch commands, search for\ndocumentation, and more. The search panel can be brought up by clicking and typing\ninto the search bar, or via the keyboard shortcut\n",(0,r.kt)("strong",{parentName:"p"},"Ctrl")," + ",(0,r.kt)("strong",{parentName:"p"},"L")),(0,r.kt)("img",{src:"https://imagej.net/media/learn/fiji-search-window.png"}),(0,r.kt)("h3",{id:"results"},"Results"),(0,r.kt)("p",null,"These are the plugins/commands that match your search query, sorted by type of\nresult. Results can be navigated with the mouse or arrow keys, and the highlighted\ncommand can be executed with \u21b5 Enter or double-clicking."),(0,r.kt)("h3",{id:"categories"},"Categories"),(0,r.kt)("p",null,"Categories can be (de)selected as desired to expand or restrict the scope of your\nsearch, as desired."),(0,r.kt)("h3",{id:"search-options"},"Search Options"),(0,r.kt)("img",{src:"https://imagej.net/media/learn/fiji-search-options.png"}),(0,r.kt)("p",null,"The ",(0,r.kt)("code",{class:"language-plaintext highlighter-rouge"},"...")," button opens a panel with more options for controlling your search behavior."),(0,r.kt)("h3",{id:"details"},"Details"),(0,r.kt)("p",null,"The details panel provides more information about the selected search result."),(0,r.kt)("h3",{id:"action-buttons"},"Action Buttons"),(0,r.kt)("p",null,"These buttons can be used to take alternative actions (beyond just running a given command) such as opening the plugin\u2019s source or wiki page."),(0,r.kt)("h2",{id:"the-menu-bar"},"The menu bar"),(0,r.kt)("p",null,"In the menu bar, you will find most of the functionality, such as loading/saving files, processing them, and plugins will be installed into the menus, too."),(0,r.kt)("p",null,"The menus have different purposes:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"File",label:"File",mdxType:"TabItem"},"File input/output, new files"),(0,r.kt)(l.Z,{value:"Edit",label:"Edit",mdxType:"TabItem"},"Selection/ROI handling"),(0,r.kt)(l.Z,{value:"Image",label:"Image",mdxType:"TabItem"},"Visualization, stack manipulation"),(0,r.kt)(l.Z,{value:"Process",label:"Process",mdxType:"TabItem"},"Image filters"),(0,r.kt)(l.Z,{value:"Analyze",label:"Analyze",mdxType:"TabItem"},"Statistics"),(0,r.kt)(l.Z,{value:"Plugins",label:"Plugins",mdxType:"TabItem"},"Plugins, Macros and Utilities"),(0,r.kt)(l.Z,{value:"Window",label:"Window",mdxType:"TabItem"},"Windows"),(0,r.kt)(l.Z,{value:"Help",label:"Help",mdxType:"TabItem"},"Help & Links")),(0,r.kt)("h2",{id:"the-tool-bar"},"The tool bar"),(0,r.kt)("p",null,"The toolbar mostly contains selection tools: the rectangle, ellipse, polygon,\nfreehand and straight line selection tool. By clicking on the icon, you activate the\ntool."),(0,r.kt)("p",null,"Some tools offer option dialogs which you can open by double clicking the icon. This\nexample shows the option dialog of the Oval Tool:"),(0,r.kt)("img",{src:"https://imagej.net/media/learn/oval-tool-option-dialog.png"}),(0,r.kt)("p",null,"If there is a small red arrow in the lower right corner of the tool icon, you can right-click (",(0,r.kt)("kbd",{class:"key"},"\u2303 Ctrl"),"+",(0,r.kt)("span",{class:"key"},(0,r.kt)("img",{src:"https://upload.wikimedia.org/\nwikipedia/commons/2/27/LMB_click.svg",width:"20"})," Left Click "),"on an Apple mouse) and select an alternative selection tool (e.g. a circular brush selection tool which shares the icon with the ellipse selection tool). Example:"),(0,r.kt)("img",{src:"https://imagej.net/media/learn/alternative-tools.png"}),(0,r.kt)("h2",{id:"the-status-bar"},"The status bar"),(0,r.kt)("p",null,"The status bar displays useful information at startup, and when running plugins. It also shows a progress bar on the right side for long-running processes:"),(0,r.kt)("img",{src:"https://imagej.net/media/learn/status-bar-with-progress.png"}),(0,r.kt)("p",null,"A single mouse click on the status bar will show the information about ImageJ and Java version as well as about memory consumption:"),(0,r.kt)("img",{src:"https://imagej.net/media/learn/default-status-message.png"}))}b.isMDXComponent=!0}}]);