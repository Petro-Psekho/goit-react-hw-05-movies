"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{1134:function(e,t,n){n.r(t);var r=n(1413),a=n(9439),u=n(887),c=n(2791),i=n(1087),s=n(7689),o=n(6979),f=n(2709),p=n(184);t.default=function(){var e=(0,u.cI)(),t=e.register,n=e.handleSubmit,l=e.formState.errors,d=e.reset,h=(0,c.useState)([]),v=(0,a.Z)(h,2),m=v[0],x=v[1],g=(0,i.lr)(),y=(0,a.Z)(g,2),k=y[0],w=y[1],Z=k.get("query"),b=(0,s.TH)(),j=(0,c.useState)(!1),S=(0,a.Z)(j,2),_=S[0],q=S[1];(0,c.useEffect)((function(){Z&&(q(!0),(0,o.XT)(Z).then((function(e){x(e.results),q(!1)})).catch((function(e){return console.log(e)})))}),[Z]);return(0,p.jsxs)("main",{children:[(0,p.jsxs)("form",{onSubmit:n((function(e){e=Object.values(e),w({query:e}),d()})),children:[(0,p.jsx)("input",(0,r.Z)({autoComplete:"off"},t("query",{required:!0}))),l.query&&(0,p.jsx)("span",{children:"This field is required"}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),(0,p.jsxs)("ul",{children:[_&&(0,p.jsx)(f.c,{}),m.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"".concat(e.id),state:{from:b},children:(0,p.jsx)("p",{children:e.title})})},e.id)}))]})]})}},6979:function(e,t,n){n.d(t,{Hg:function(){return s},TP:function(){return o},XT:function(){return l},tx:function(){return p},zv:function(){return f}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="a148ed5961285512fd3954af576af4a0",s=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.b039e81c.chunk.js.map