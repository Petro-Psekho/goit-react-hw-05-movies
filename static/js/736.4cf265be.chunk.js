"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{2736:function(e,n,t){t.r(n);var r=t(9439),a=t(2791),u=t(7689),c=t(6979),i=t(1644),o=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],p=(0,u.UO)().movieId,f=(0,a.useState)(!1),l=(0,r.Z)(f,2),h=l[0],v=l[1];return(0,a.useEffect)((function(){v(!0),(0,c.tx)(p).then((function(e){s(e.results),v(!1)}))}),[p]),(0,o.jsxs)("ul",{children:[h&&(0,o.jsx)(i.c,{}),t.length>0?t.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:n}),(0,o.jsx)("p",{children:t})]},r)})):(0,o.jsx)("li",{children:"Something will appear here soon"})]})}},6979:function(e,n,t){t.d(n,{Hg:function(){return o},TP:function(){return s},XT:function(){return l},tx:function(){return f},zv:function(){return p}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="a148ed5961285512fd3954af576af4a0",o=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.4cf265be.chunk.js.map