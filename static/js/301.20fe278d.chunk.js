"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[301],{1704:function(n,e,t){t.d(e,{x:function(){return s}});var r,o=t(168),i=t(6444),c=t(407),s=i.ZP.div(r||(r=(0,o.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),c.bK,c.GQ,c.Dh,c.FK,c.$_,c.Lz,c.AF)},1301:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,o,i,c,s=t(885),a=t(470),u=t(2791),l=t(8016),d=t(7322),f=t(9832),p=t(1704),h=t(168),x=t(6444),m=x.ZP.img(r||(r=(0,h.Z)(["\n  height: 350px;\n  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);\n"]))),v=x.ZP.h2(o||(o=(0,h.Z)(["\n  font-size: ",";\n"])),(function(n){return n.theme.fontSizes[5]})),E=x.ZP.span(i||(i=(0,h.Z)(["\n  font-weight: ",";\n"])),(function(n){return n.theme.fontWeights.bold})),b=x.ZP.p(c||(c=(0,h.Z)(["\n  margin-top: ",";\n"])),(function(n){return n.theme.space[3]})),j=t(8481),g=t(184);function Z(n){var e=n.details,t=e.poster_path,r=void 0===t?"":t,o=e.title,i=void 0===o?"":o,c=e.release_date,s=void 0===c?"":c,a=e.vote_average,u=void 0===a?"":a,l=e.overview,d=void 0===l?"":l,f=e.genres,h=void 0===f?[]:f,x=r?"https://image.tmdb.org/t/p/w200".concat(r):j,Z=Math.round(10*u),w=h.map((function(n){return n.name})).join(", ");return(0,g.jsxs)(p.x,{display:"flex",my:3,children:[(0,g.jsx)(m,{src:x,alt:"".concat(i," poster")}),(0,g.jsxs)(p.x,{px:3,children:[(0,g.jsxs)(v,{children:[i," (",s.slice(0,4),")"]}),(0,g.jsxs)(b,{children:[(0,g.jsx)(E,{children:"User Score:"})," ",Z,"%"]}),(0,g.jsxs)(b,{children:[(0,g.jsx)(E,{children:"Overview:"})," ",d]}),(0,g.jsxs)(b,{children:[(0,g.jsx)(E,{children:"Genres:"})," ",w]})]})]})}var w,_,y,S,P=t(6731),k=x.ZP.button(w||(w=(0,h.Z)(["\n  position: fixed;\n  left: 0;\n  bottom: 50%;\n  transform: translateY(-50%);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0;\n\n  border: none;\n  background-color: transparent;\n  color: ",";\n\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.lightRed})),D=x.ZP.li(_||(_=(0,h.Z)(["\n  margin-top: ",";\n"])),(function(n){return n.theme.space[3]})),I=x.ZP.h2(y||(y=(0,h.Z)(["\n  font-size: ",";\n"])),(function(n){return n.theme.fontSizes[3]})),R=(0,x.ZP)(P.OL)(S||(S=(0,h.Z)(["\n  display: block;\n  padding: "," ",";\n  font-size: ",";\n  font-weight: ",";\n  text-decoration: none;\n  color: ",";\n\n  border: 1px solid;\n  border-color: transparent;\n\n  border-color: ",";\n\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.textWhite})),O=t(6393);function C(){var n,e,t=(0,a.UO)().movieId,r=(0,u.useState)(null),o=(0,s.Z)(r,2),i=o[0],c=o[1],h=(0,u.useState)(O.Q_.IDLE),x=(0,s.Z)(h,2),m=x[0],v=x[1],E=(0,u.useState)(null),b=(0,s.Z)(E,2),j=b[0],w=b[1],_=(0,a.s0)(),y=(0,a.TH)();(0,u.useEffect)((function(){w(null),v(O.Q_.PENDING),(0,f.Sg)(t).then((function(n){c(n),v(O.Q_.RESOLVED)})).catch((function(n){v(O.Q_.REJECTED),w(n.message)}))}),[t]);var S=null!==(n=null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return m===O.Q_.PENDING?(0,g.jsx)(p.x,{display:"flex",justifyContent:"center",pt:5,children:(0,g.jsx)(l.Z,{color:"#E51B36"})}):m===O.Q_.RESOLVED?(0,g.jsxs)(p.x,{as:"main",children:[(0,g.jsx)(k,{type:"button",onClick:function(){return _(S)},"aria-label":"Go back button",children:(0,g.jsx)(d.lrP,{size:"30"})}),(0,g.jsx)(Z,{details:i}),(0,g.jsxs)(p.x,{borderY:"default",borderColor:"borderPrimary",py:3,children:[(0,g.jsx)(I,{children:"Additional information"}),(0,g.jsxs)(p.x,{as:"ul",display:"Flex",children:[(0,g.jsx)(D,{children:(0,g.jsx)(R,{to:"cast",state:{from:S},children:"Cast"})}),(0,g.jsx)(D,{children:(0,g.jsx)(R,{to:"reviews",state:{from:S},children:"Reviews"})})]})]}),(0,g.jsx)(u.Suspense,{fallback:(0,g.jsx)("p",{children:"Loading additionl information..."}),children:(0,g.jsx)(a.j3,{})})]}):m===O.Q_.REJECTED?(0,g.jsx)("p",{children:j}):void 0}},6393:function(n,e,t){t.d(e,{EU:function(){return c},Q_:function(){return i},mf:function(){return r},ou:function(){return o}});var r="https://api.themoviedb.org/3",o={TRENDING_MOVIES:"/trending/movie/day",SEARCH_MOVIE:"/search/movie",MOVIE_DETAILS:"/movie/"},i={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},c="Oops! Sorry, something went wrong."},9832:function(n,e,t){t.d(e,{AR:function(){return a},Jx:function(){return l},Sg:function(){return f}});var r=t(5861),o=t(7757),i=t.n(o),c=t(1044),s=t(6393);function a(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.ZP)(s.ou.TRENDING_MOVIES);case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(s.EU);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="?query=".concat(e),n.prev=1,n.next=4,(0,c.ZP)("".concat(s.ou.SEARCH_MOVIE).concat(t));case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:throw n.prev=8,n.t0=n.catch(1),new Error(s.EU);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(i().mark((function n(e){var t,r,o,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",r=t?"/".concat(t):"",n.prev=2,n.next=5,(0,c.ZP)("".concat(s.ou.MOVIE_DETAILS).concat(e).concat(r));case 5:return o=n.sent,n.abrupt("return",o.data);case 9:throw n.prev=9,n.t0=n.catch(2),new Error(s.EU);case 12:case"end":return n.stop()}}),n,null,[[2,9]])}))),p.apply(this,arguments)}c.ZP.defaults.baseURL=s.mf,c.ZP.defaults.params={api_key:"f1e0643ba0f8e011cd13dc7de1c10e82"}},8481:function(n,e,t){n.exports=t.p+"static/media/no-image.5446d2ad72be56885bd0.jpg"}}]);
//# sourceMappingURL=301.20fe278d.chunk.js.map