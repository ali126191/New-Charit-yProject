(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),l=a(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(55),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),l=a(4),s=a.n(l),c=a(158),o=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},151:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),l=a(4),s=a.n(l),c=a(152),o=a(153),u=(a(154),a(7)),m=a.n(u),d=(a(155),a(32)),p=a.n(d),E=(a(146),i.a.createContext({})),f=function(e){return i.a.createElement(E.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var h=function(e){function t(){return e.apply(this,arguments)||this}return m()(t,e),t.prototype.render=function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("a",{href:"#",class:"logo"},"logo"),i.a.createElement("ul",{className:"main-nav",id:"js-menu"},i.a.createElement("li",null,i.a.createElement(p.a,{to:"#",className:"nav-links"},"home")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"#",className:"nav-links"},"about us")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"#",className:"nav-links"},"our services")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"#",className:"nav-links"},"contact Us")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"#",className:"nav-links"},"events"))))},t}(r.Component),y=function(e,t){e.siteTitle;return i.a.createElement("header",null,i.a.createElement(h,null),i.a.createElement("h3",null,"- Established 1996 -"),i.a.createElement("h1",null,"Shri Vitthal Hindu Mandir"),i.a.createElement(o.a,{icon:c.a}))};y.propTypes={siteTitle:s.a.string},y.defaultProps={siteTitle:""};var g=y,T=(a(156),a(157),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",null,i.a.createElement("h3",null,"HELPING THE PEOPLE OF THE GREATER TORONTO AREA COME TOGETHER, GROW IN FAITH, AND TO CELEBRATE WHAT MAKES CANADA GREAT - OUR DIVERSITY."),i.a.createElement("a",{href:"https://us4.list-manage.com/subscribe?u=08406db9cc49d8dd58bd3a28a&id=f70b74727c",target:"_blank"},"Join us")))}),b=function(e,t){var a=e.children;return i.a.createElement(f,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1140,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,a)),i.a.createElement(T,null))},data:n})};b.propTypes={children:s.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-js-a60f07b70802b67c65bb.js.map