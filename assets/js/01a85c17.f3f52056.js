"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13],{6165:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(3366),l=a(7294),n=a(6010),s=a(308),c=a(6742),i="sidebar_2ahu",m="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",u="sidebarItem_2UVv",b="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",g=a(4973);function E(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:b,activeClassName:d},e.title))}))))}var v=a(571),p=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,r.Z)(e,p),m=t&&t.items.length>0;return l.createElement(s.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(E,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&l.createElement("div",{className:"col col--2"},l.createElement(v.Z,{toc:a})))))}},94:function(e,t,a){a.r(t);var r=a(7294),l=a(6165),n=a(6584),s=a(941);t.default=function(e){var t=e.tags,a=e.sidebar,c=(0,s.MA)();return r.createElement(l.Z,{title:c,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,c),r.createElement(n.Z,{tags:Object.values(t)}))}},6584:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(7211),n=a(941),s="tag_21yA";function c(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(l.Z,e))}))),r.createElement("hr",null))}var i=function(e){var t=e.tags,a=(0,n.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(c,{key:e.letter,letterEntry:e})})))}}}]);