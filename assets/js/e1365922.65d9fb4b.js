"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6],{9333:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return k}});var a=n(7462),r=n(3366),l=n(7294),o=n(3905),u=n(9443);var i=function(){var e=(0,l.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),c="tabItem_1uMI",m="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,a=e.block,r=e.defaultValue,o=e.values,u=e.groupId,p=e.className,d=l.Children.toArray(e.children),f=null!=o?o:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=r?r:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),h=b.tabGroupChoices,k=b.setTabGroupChoices,w=(0,l.useState)(v),g=w[0],y=w[1],x=[];if(null!=u){var T=h[u];null!=T&&T!==g&&f.some((function(e){return e.value===T}))&&y(T)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;y(a),null!=u&&(k(u,a),setTimeout((function(){var e,n,a,r,l,o,u,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,o=window,u=o.innerHeight,i=o.innerWidth,n>=0&&l<=i&&r<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m),setTimeout((function(){return t.classList.remove(m)}),2e3))}),150))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.target)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},p)},f.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,l.cloneElement)(d.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var d=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},f=["components"],v={slug:"\u652f\u6301",title:"\u652f\u6301",tags:["\u652f\u6301"]},b=void 0,h={type:"mdx",permalink:"/support",source:"@site/src/pages/support.mdx"},k=[],w={toc:k};function g(e){var t=e.components,n=(0,r.Z)(e,f);return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u60a8\u7684\u6350\u52a9\u5c06\u7528\u4e8e\u670d\u52a1\u5668\u7ef4\u62a4\u548c\u5347\u7ea7\u3002  "),(0,o.kt)("a",{href:"https://afdian.net/@ykmc25565"},"\u6765\u7231\u53d1\u7535\u4e3b\u9875\u4e3a\u6211\u53d1\u7535"),(0,o.kt)(p,{defaultValue:"wechat",values:[{label:"\u5fae\u4fe1\u652f\u4ed8",value:"wechat"},{label:"\u652f\u4ed8\u5b9d",value:"alipay"}],mdxType:"Tabs"},(0,o.kt)(d,{value:"wechat",mdxType:"TabItem"},(0,o.kt)("img",{src:"https://s1.ax1x.com/2020/09/07/wKmOyV.png",width:"30%"})),(0,o.kt)(d,{value:"alipay",mdxType:"TabItem"},(0,o.kt)("img",{src:"https://s1.ax1x.com/2020/09/07/wKmveU.jpg",width:"30%"}))))}g.isMDXComponent=!0}}]);