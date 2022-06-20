"use strict";(self.webpackChunkscintigraphy_documentation=self.webpackChunkscintigraphy_documentation||[]).push([[9173],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?i.createElement(d,l(l({ref:t},u),{},{components:n})):i.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(7294),r=n(6010),a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(7462),r=n(7294),a=n(6010),l=n(2389),o=n(7392),c=n(7094),s=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,n,l=e.lazy,f=e.block,m=e.defaultValue,d=e.values,h=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,c.U)(),w=x.tabGroupChoices,T=x.setTabGroupChoices,O=(0,r.useState)(y),C=O[0],Z=O[1],j=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=w[h];null!=E&&E!==C&&k.some((function(e){return e.value===E}))&&Z(E)}var R=function(e){var t=e.currentTarget,n=j.indexOf(t),i=k[n].value;i!==C&&(P(t),Z(i),null!=h&&T(h,String(i)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i,r=j.indexOf(e.currentTarget)+1;n=null!=(i=j[r])?i:j[0];break;case"ArrowLeft":var a,l=j.indexOf(e.currentTarget)-1;n=null!=(a=j[l])?a:j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":f},g)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return j.push(e)},onKeyDown:A,onFocus:R,onClick:R},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(f,(0,i.Z)({key:String(t)},e))}},1320:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),l=(n(5488),n(5162),["components"]),o={sidebar_position:3},c="Nuclear Medicine",s={unversionedId:"Principal_Use/Nuclear-Medicine",id:"Principal_Use/Nuclear-Medicine",title:"Nuclear Medicine",description:"To begin the view of examination",source:"@site/docs/Principal_Use/Nuclear-Medicine.md",sourceDirName:"Principal_Use",slug:"/Principal_Use/Nuclear-Medicine",permalink:"/docs/Principal_Use/Nuclear-Medicine",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarDocs",previous:{title:"PET-CT",permalink:"/docs/Principal_Use/PET-CT"},next:{title:"Main View",permalink:"/docs/Petct/Main-View"}},u={},p=[{value:"To begin the view of examination",id:"to-begin-the-view-of-examination",level:3},{value:"Select exam type",id:"select-exam-type",level:3},{value:"An exemple (Gastric Emptying Solid) to show the process",id:"an-exemple-gastric-emptying-solid-to-show-the-process",level:2},{value:"Delimit the range",id:"delimit-the-range",level:3},{value:"Repeated Steps",id:"repeated-steps",level:4},{value:"Results",id:"results",level:3}],f={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nuclear-medicine"},"Nuclear Medicine"),(0,a.kt)("h3",{id:"to-begin-the-view-of-examination"},"To begin the view of examination"),(0,a.kt)("p",null,"Once the images are opened, ",(0,a.kt)("strong",{parentName:"p"},"right-click 99Tc")," in the bar."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4933).Z,width:"606",height:"107"})),(0,a.kt)("p",null,"Then select your processing software tool."),(0,a.kt)("h3",{id:"select-exam-type"},"Select exam type"),(0,a.kt)("p",null," In this example we will select ",(0,a.kt)("strong",{parentName:"p"},"Castric Emptying Solid"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(768).Z,width:"871",height:"453"})),(0,a.kt)("p",null,"Then it will list all the images you read before."),(0,a.kt)("kbd",{class:"key"},"Ctrl"),"+",(0,a.kt)("span",{class:"key"},(0,a.kt)("img",{src:"https://upload.wikimedia.org/\nwikipedia/commons/2/27/LMB_click.svg",width:"20"})," Left Click ")," to select many images you want :",(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5916).Z,width:"684",height:"289"})),(0,a.kt)("h2",{id:"an-exemple-gastric-emptying-solid-to-show-the-process"},"An exemple (Gastric Emptying Solid) to show the process"),(0,a.kt)("p",null,"Then you'll have some specific properties of the examination that the doctor need to\nfill. Then click at ",(0,a.kt)("strong",{parentName:"p"},"Validate"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1717).Z,width:"522",height:"714"})),(0,a.kt)("h3",{id:"delimit-the-range"},"Delimit the range"),(0,a.kt)("p",null,"Left-click to delimit the range of stomach, right-click to close the range."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4800).Z,width:"522",height:"712"})),(0,a.kt)("p",null,"Click at ",(0,a.kt)("strong",{parentName:"p"},"next")," at bottom : "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5222).Z,width:"461",height:"126"})),(0,a.kt)("p",null,"Then delimit the range of intestine."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2328).Z,width:"519",height:"715"})),(0,a.kt)("h4",{id:"repeated-steps"},"Repeated Steps"),(0,a.kt)("p",null,"Click at ",(0,a.kt)("strong",{parentName:"p"},"next")," to ajust the range of stomach of a new image."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5757).Z,width:"519",height:"713"})),(0,a.kt)("p",null,"Click at next to ajust the range of intestine in of this image."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7369).Z,width:"520",height:"713"})),(0,a.kt)("p",null,"Repeat ",(0,a.kt)("strong",{parentName:"p"},"the 2 steps above")," until the range of all images are adjusted."),(0,a.kt)("h3",{id:"results"},"Results"),(0,a.kt)("p",null,"At top left you have two options to view the result."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3682).Z,width:"1030",height:"165"})),(0,a.kt)("p",null,"Gastric only:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2157).Z,width:"838",height:"513"})),(0,a.kt)("p",null,"Intragastric distribution:"),(0,a.kt)("p",null,"You have the bouton ",(0,a.kt)("strong",{parentName:"p"},"Capture")," at bottom right to save the result."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7880).Z,width:"275",height:"63"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(968).Z,width:"356",height:"280"})))}m.isMDXComponent=!0},4933:function(e,t,n){t.Z=n.p+"assets/images/99tc-386cfed64eae7bbb06ce1bbbe0676458.png"},7880:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAA/CAYAAADDsCxBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAlgSURBVHhe7Z1hb1PXGcf/7doPwJshqJ00KO37amXUSyEFaq2qVnWsoyQUgmozqHnXqUSbq1rIo9B5rO+qMLYYCGG4Q9OQhrQi09LggCu1nwAMduK8hg8ASfacc49J4lzb98b3Bt/y/4knzrnnOc+5Pr7nf55zg+2n7t27Nw9CCGkTigmx5cQ/LprfOoOP9u80v5FOhWJCbFFi8unhA6b0eLl//z7WrFmjH0nn8rR5JKRj6bQsidhDMSGEeALFhBDiCRQTQognOBSTKoqZBKLRqGWJBHLFqqlrQjGj/TNFU14JLmJUizlkcu105gyv+lkSx4uxcsFqjVVHscpj/KThQEyqyCViSJX7kc7mkc9nke4HRlPHkHOgJ6tHERdSo8hPm6JveNVPXZzIsIxtHsMRU/aV1RqrDmNVx/jJo7WYFC9gtAREhwYQCasDYUQGRuRFGcGALovc5DJIqIxFW0JWvAYqU5XVMGHjZ1aMhCkXM6o+I5f8cuz7UoKXQl455FOSOeXkiHZe6C+RaSB+RWR0fcLElX51SLu2LvuR4ypmIpMx9Y3Pd9mq6TrmcpyOVaCpXTuPxkP9nkPx0XNffp3pMXYxjsQZLcWkOlWWn73oClnlZciLcmy0jH6dteSRjpaQH71gIwQyaWOyGvakkRW/bLpH/GLuUs6GfYUxMJJGVPlE08iPDCCsLhbpr9yfFV/JpnryGI3ZC5Sm1IMhiZnPDyOCRm1X1k+p3IXBkSzivY3Pdyl1Y9VflpiytVx0rS+PWYeLsfoxYI2HjFW8F6X8KFLTm5Fc8rztaTmONlRzi7b8i6y2GD6ptBSTmWlJS9CDbpOFLCM8gJF8Et031EqaQEoveWVM1Y9rsaBXw+jmiFzO0mwlKafTvoTqjQmURAT7+3RviGxW0yePQqOrJbpZRMTCTVsnvr39fVITRnePOdCCam5MIvQiPmjGqq9fSiVM3Fh4oi1juhirHwPWeMjTNgNSu85CXb3ys/HzdvvaKMI6M7dEerGN1FL1J5SWYtLqxVArYCIaQ2piGl1DSVkJzPE6rAynTRz2tUBJVnSzclizCWXHs8lN23b6cUC4W+RcepmescpOcD1WxCnMTOxpKSaW0pfQ6Dqurczx5DAGrJsqwvJMprZitIPTvhYQX5Pmu1893LRtpx8HVKdEzqWXhnvN5bgfK+IU15mJuVejTd1nqy8bt6DT+gZsZFD2k5K4j+WsG5Py1ItGmRfudxixqRZRaJRORzbrfXpe8n8rjFo5jZqHuuSyr1GL0QgHfQn1WwNrNVl636ERbtq2008jajFHL1hjtXQr5QZnY0V8xmzptan7bPVl4xZ0WouJPNUBdYOqZwIpncqr1BmIp7P6fkd4IGmJTUrqYmOyWVWyYJfJRDCcjSNaTiGmFDk2qm8AajWX/f2QtCuNxkSpC3LcNKmjeV8RDFqVco4ZFNU9A5Xbq5jSn9Xdwl+gmtK0rVf9LI2zBBVz0VjFJnok83F47gY3Y0WIF/Bdw8SWTnrX8Md/OaXPhe8a7mwcZCaEENIaigkhxBO4zSG2qG2O+nSzTvksEW5zOh+KCWmI+nSzToJi0tlQTAghnsB7JoQQT6CYEEI8gWJCCPEEigkhxBMoJoQQT6CYEEI8gWJCCPEEigkhxBMoJoQQT6CYEEI8gf+dngQWfqH5ylFv4vQaigkJLEpMPnh/jykRp5w8Pe6LmHCbQwLNs888RXNpfkExIYHm2Z88TXNpfkExIYHmGZkcNHfmFxQTEmjsVl5ac/MLigkJNHb3BGjNzS8oJiTQ2K28tObmFxQTEmgezM7RXJpfUExIoHnwcN4Dq+DbI3sR2fRzy/buxZmJio2fO7szcRZHzly3rXuc5hcUExJo7FZed1bBufffxR/vbMfR8SK+vv4ljm4F/jb8Cc6V7fyd2nWcHf4CV+7KBLatf3zmFxQTEmgeyuRoywpn8PdbwOv73sPG59SxEDYOZHHlWha/1eU5VMbTOLglgu3a9uH4eMW0TetjB48u1B/UdRWcjx+G/q74K4exPT624GvaTh5V/mlM6vMo4LhqH99n4sjxihyvjOF43Iq7PZ7GeXVM+7dnfkExIYHGbuV1Y+XyHYnyIkLr7esfVM7h2Kk7ePV0AZevFpCK3sLVU2dxQ9XNWVuG0t1ufCR1J/e/iNKpQfx5MoTfjHyGbaoy+hkuj+x+5Ds/Z8Wd1cV5zJp+9BS/vQG7Jc7lq0n8bPYcDg2NoNx/XsrnkXr+f8gO/cnqt03zC4oJCTR29wTc2HRF0hL0YP06+/oH63bjxFcprC+M48QHcaR1unEX5YrUWYqADVtexVrxXfvKVmyQcqU8pdvqaTtv4hjfeREVVZZ/qoSHqq7m+3o/XjLlSuEb3BGR+8UrYSmH8VLfL8XhK1yfNPHaML+gmJBAY7fyurGfhl6QKHdRmbKvfzA1jt+/sQfHJipYv/sTDOt0w2QUZpEPhUKW77puhKR8tzItZSMQSjwW+WoxkfJDU1bbjmW+ul5N+ls4t38LdrwhduSK8sBURYTK+KzU/IJiQgLNrEy6dmxtuEei3EZ1xr6+evMayngBg4f/gLc2hqxJrzKZ9VIvWYdiemra8q9WMC3l58MhXTa5iFVnfOflUZWtOPKo6up9tb8qS78nr+HCfxfs2DtW7HbMLygmJNDYTRZX9vJ72CV7k8L5f+L7qjo2je8vHsDgW1vxxXcy2fXcE7FRddWb+O4bVS5bZbPIVwoFzIjjjAhPRQRg0yY14ZU0CPJD9yNZS7cqajGpxZFkRJ9Hna/Y2k2vif9t3LxpCdWMPqcDuKT7bc/8gmJCAs3s3Fyb9hze/Otp7Oy6hs8PbcOet/fh88l57Eyexu9elm3QjiR2ithMfip1h05j/rVe6fU2Zmakrck2ursquPThNhwem0ff3iTeXKfibsKv9orvtY8l5nH8sG4XdkjbqbF92PPhtxJHtVSZiXUelpjUzklM/NPJKKD83zaxkyMmdnvmF/xwJBJY1Icj7XrX+w/5ccwPGcSO59G1J4sjO8LmYOfz5b8u8sORCKnHLo1fTdPIg11dp5pfMDMhgUVlJr/e8Y4pEadc+s+/mZkQUo/dyktrbn5BMSGBxm6y0JqbX1BMSKCx+2sFrbn5BcWEBBq7lZfW3PyCN2BJYOGXcK0cfgkXIaRj4TaHEOIJFBNCiCdQTAghnkAxIYR4APB/K3haqupyIHgAAAAASUVORK5CYII="},2328:function(e,t,n){t.Z=n.p+"assets/images/delimitIntestine-c39f4b86ccbd5566182014d23867e94e.png"},7369:function(e,t,n){t.Z=n.p+"assets/images/delimitIntestine2-dae0552c7f24d48ff93a20ad43c52384.png"},4800:function(e,t,n){t.Z=n.p+"assets/images/delimitStomach-156418dab2b24ce7159907a8c6f99167.png"},5757:function(e,t,n){t.Z=n.p+"assets/images/delimitStomach2-01737ad6b422c69102056813b4326ab0.png"},768:function(e,t,n){t.Z=n.p+"assets/images/gastric-ff015bc2476d09fd6d14dbc8e764d716.png"},2157:function(e,t,n){t.Z=n.p+"assets/images/gastricOnly-f71c33b3df1971ece61eef600ef067d6.png"},1717:function(e,t,n){t.Z=n.p+"assets/images/ingestionTime-83a23856045df7b254e6cbf79c47b2f5.png"},5222:function(e,t,n){t.Z=n.p+"assets/images/next-f92905af5acef1cc7bf5b4ea3d692333.png"},3682:function(e,t,n){t.Z=n.p+"assets/images/resultOptions-81f515fc5d80f0bba90d0cc635bba264.png"},968:function(e,t,n){t.Z=n.p+"assets/images/saveDicom-019a3c3c863068eb859c67d889a3bf84.png"},5916:function(e,t,n){t.Z=n.p+"assets/images/selectDICOM-16ffdc50c85a18d369dfb89a83a791a4.png"}}]);