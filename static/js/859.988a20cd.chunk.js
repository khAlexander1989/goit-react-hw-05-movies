"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{1704:function(n,t,e){e.d(t,{x:function(){return a}});var r,c=e(168),o=e(6444),u=e(407),a=o.ZP.div(r||(r=(0,c.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),u.bK,u.GQ,u.Dh,u.FK,u.$_,u.Lz,u.AF)},606:function(n,t,e){e.d(t,{Z:function(){return d}});var r,c,o=e(1704),u=e(470),a=e(168),i=e(6444),s=e(6731),f=(0,i.ZP)(s.OL)(r||(r=(0,a.Z)(["\n  font-size: ",";\n  color: ",";\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.colors.textBlack}),(function(n){return n.theme.colors.red})),l=e(184);function p(n){var t=n.id,e=n.title,r=(0,u.TH)(),c="/"===r.pathname?"movies/":"";return(0,l.jsx)(f,{to:"".concat(c).concat(t),state:{from:r},children:e})}var h=i.ZP.li(c||(c=(0,a.Z)(["\n  list-style: disc;\n  color: ",";\n  padding: "," 0;\n\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.red}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.colors.lightRed}));function d(n){var t=n.movies;return(0,l.jsx)(o.x,{as:"ul",ml:3,children:t.map((function(n){var t=n.id,e=n.title;return(0,l.jsx)(h,{children:(0,l.jsx)(p,{title:e,id:t})},t)}))})}},4859:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(885),c=e(2791),o=e(8016),u=e(606),a=e(9832),i=e(6393),s=e(1704),f=e(184);function l(){var n=(0,c.useState)(),t=(0,r.Z)(n,2),e=t[0],l=t[1],p=(0,c.useState)(i.Q_.IDLE),h=(0,r.Z)(p,2),d=h[0],E=h[1],v=(0,c.useState)(null),m=(0,r.Z)(v,2),x=m[0],Z=m[1];return(0,c.useEffect)((function(){E(i.Q_.PENDING),(0,a.AR)().then((function(n){l(n),E(i.Q_.RESOLVED)})).catch((function(n){E(i.Q_.REJECTED),Z(n.message)}))}),[]),d===i.Q_.PENDING?(0,f.jsx)(s.x,{display:"flex",pl:4,pt:2,children:(0,f.jsx)(o.Z,{size:10,color:"#E51B36"})}):d===i.Q_.RESOLVED?e.length?(0,f.jsx)(u.Z,{movies:e}):(0,f.jsx)("p",{children:"There isn't any movie on this page."}):d===i.Q_.REJECTED?(0,f.jsx)("p",{children:x}):void 0}},6393:function(n,t,e){e.d(t,{EU:function(){return u},Q_:function(){return o},mf:function(){return r},ou:function(){return c}});var r="https://api.themoviedb.org/3",c={TRENDING_MOVIES:"/trending/movie/day",SEARCH_MOVIE:"/search/movie",MOVIE_DETAILS:"/movie/"},o={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},u="Oops! Sorry, something went wrong."},9832:function(n,t,e){e.d(t,{AR:function(){return i},Jx:function(){return f},Sg:function(){return p}});var r=e(5861),c=e(7757),o=e.n(c),u=e(1044),a=e(6393);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.ZP)(a.ou.TRENDING_MOVIES);case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(a.EU);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="?query=".concat(t),n.prev=1,n.next=4,(0,u.ZP)("".concat(a.ou.SEARCH_MOVIE).concat(e));case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:throw n.prev=8,n.t0=n.catch(1),new Error(a.EU);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(o().mark((function n(t){var e,r,c,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:"",r=e?"/".concat(e):"",n.prev=2,n.next=5,(0,u.ZP)("".concat(a.ou.MOVIE_DETAILS).concat(t).concat(r));case 5:return c=n.sent,n.abrupt("return",c.data);case 9:throw n.prev=9,n.t0=n.catch(2),new Error(a.EU);case 12:case"end":return n.stop()}}),n,null,[[2,9]])}))),h.apply(this,arguments)}u.ZP.defaults.baseURL=a.mf,u.ZP.defaults.params={api_key:"f1e0643ba0f8e011cd13dc7de1c10e82"}}}]);
//# sourceMappingURL=859.988a20cd.chunk.js.map