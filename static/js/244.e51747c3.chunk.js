"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[244],{1704:function(n,t,e){e.d(t,{x:function(){return o}});var r,u=e(168),c=e(6444),a=e(407),o=c.ZP.div(r||(r=(0,u.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),a.bK,a.GQ,a.Dh,a.FK,a.$_,a.Lz,a.AF)},6244:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,u,c,a=e(885),o=e(470),i=e(2791),s=e(8016),p=e(9832),f=e(1704),h=e(168),l=e(6444),E=l.ZP.li(r||(r=(0,h.Z)(["\n  :not(:first-child) {\n    margin-top: ",";\n  }\n"])),(function(n){return n.theme.space[3]})),d=l.ZP.p(u||(u=(0,h.Z)(["\n  font-weight: ",";\n"])),(function(n){return n.theme.fontWeights.heading})),v=l.ZP.p(c||(c=(0,h.Z)(["\n  margin-top: ",";\n"])),(function(n){return n.theme.space[2]})),m=e(6393),w=e(184);function _(){var n=(0,o.UO)().movieId,t=(0,i.useState)(),e=(0,a.Z)(t,2),r=e[0],u=e[1],c=(0,i.useState)(m.Q_.IDLE),h=(0,a.Z)(c,2),l=h[0],_=h[1],x=(0,i.useState)(),Z=(0,a.Z)(x,2),D=Z[0],I=Z[1];return(0,i.useEffect)((function(){I(null),_(m.Q_.PENDING),(0,p.Sg)(n,"reviews").then((function(n){u(n.results),_(m.Q_.RESOLVED)})).catch((function(n){_(m.Q_.REJECTED),I(n.message)}))}),[n]),l===m.Q_.PENDING?(0,w.jsx)(f.x,{display:"flex",justifyContent:"center",pt:3,children:(0,w.jsx)(s.Z,{color:"#E51B36"})}):l===m.Q_.RESOLVED?(0,w.jsx)(f.x,{as:"ul",px:1,py:3,children:r.length?r.map((function(n){var t=n.id,e=n.content,r=n.author_details.name;return(0,w.jsxs)(E,{children:[(0,w.jsxs)(d,{children:["Author: ",r]}),(0,w.jsx)(v,{children:e})]},t)})):(0,w.jsx)("p",{children:"We don't have any reviews for this movie."})}):l===m.Q_.REJECTED?(0,w.jsx)("p",{children:D}):void 0}},6393:function(n,t,e){e.d(t,{EU:function(){return a},Q_:function(){return c},mf:function(){return r},ou:function(){return u}});var r="https://api.themoviedb.org/3",u={TRENDING_MOVIES:"/trending/movie/day",SEARCH_MOVIE:"/search/movie",MOVIE_DETAILS:"/movie/"},c={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},a="Oops! Sorry, something went wrong."},9832:function(n,t,e){e.d(t,{AR:function(){return i},Jx:function(){return p},Sg:function(){return h}});var r=e(5861),u=e(7757),c=e.n(u),a=e(1044),o=e(6393);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,a.ZP)(o.ou.TRENDING_MOVIES);case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(o.EU);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="?query=".concat(t),n.prev=1,n.next=4,(0,a.ZP)("".concat(o.ou.SEARCH_MOVIE).concat(e));case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:throw n.prev=8,n.t0=n.catch(1),new Error(o.EU);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function n(t){var e,r,u,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:"",r=e?"/".concat(e):"",n.prev=2,n.next=5,(0,a.ZP)("".concat(o.ou.MOVIE_DETAILS).concat(t).concat(r));case 5:return u=n.sent,n.abrupt("return",u.data);case 9:throw n.prev=9,n.t0=n.catch(2),new Error(o.EU);case 12:case"end":return n.stop()}}),n,null,[[2,9]])}))),l.apply(this,arguments)}a.ZP.defaults.baseURL=o.mf,a.ZP.defaults.params={api_key:"f1e0643ba0f8e011cd13dc7de1c10e82"}}}]);
//# sourceMappingURL=244.e51747c3.chunk.js.map