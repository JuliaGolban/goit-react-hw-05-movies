"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{9779:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,i,p,s=t(4165),c=t(5861),o=t(885),u=t(2791),d=t(7689),l=t(8917),h=t(168),f=t(6444),x=f.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: stretch;\n  gap: 15px;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 768px) {\n    display: grid;\n    grid-auto-rows: 260px;\n    grid-gap: 15px;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-auto-rows: auto;\n    grid-gap: 20px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    grid-gap: 32px 16px;\n  }\n"]))),g=f.ZP.li(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n  background-color: rgba(240, 240, 242, 0.7);\n  border: 3px solid rgba(132, 132, 132, 0.5);\n  border-radius: 4px;\n  box-shadow: 5px 7px 10px -2px rgba(132, 132, 132, 0.5);\n"]))),m=f.ZP.p(i||(i=(0,h.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n"]))),w=f.ZP.p(p||(p=(0,h.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  font-style: italic;\n  width: 240px;\n  max-height: 100px;\n  overflow-y: scroll;\n\n  @media screen and (min-width: 320px) {\n    width: 260px;\n    max-height: 120px;\n    overflow-y: scroll;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 360px;\n  }\n"]))),v=t(184),Z=function(){var n=(0,d.UO)().movieId,e=(0,u.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1],i=(0,u.useState)(null),p=(0,o.Z)(i,2),h=p[0],f=p[1];return(0,u.useEffect)((function(){function e(){return(e=(0,c.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.a)(n,"reviews");case 3:t=e.sent,r=t.data,a(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),r?(0,v.jsxs)(v.Fragment,{children:[0===r.length&&(0,v.jsx)("div",{children:"We don't have any reviews for this movie"}),r.length>0&&!h&&(0,v.jsx)(x,{children:r.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,v.jsxs)(g,{children:[(0,v.jsxs)(m,{children:["Author: ",t]}),(0,v.jsx)(w,{children:r})]},e)}))},n)]}):null}},8917:function(n,e,t){t.d(e,{a:function(){return l},r:function(){return u}});var r=t(4165),a=t(5861),i=t(1044),p=t(2007),s=t.n(p),c="https://api.themoviedb.org/3/",o="6d6a84090fff66fc1fd25eac643a37be";function u(n){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.ZP.create({baseURL:"".concat(c).concat(e),headers:{"Content-Type":"application/json"},params:{api_key:o}}),n.next=3,t.get();case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function n(e,t){var a,p,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t?"/".concat(t):"",p="movie/".concat(e).concat(a),s=i.ZP.create({baseURL:"".concat(c).concat(p),headers:{"Content-Type":"application/json"},params:{api_key:o}}),n.next=5,s.get();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.propTypes={pathParams:s().string.isRequired},l.propTypes={id:s().string.isRequired,path:s().string}}}]);
//# sourceMappingURL=779.fae5665c.chunk.js.map