(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(3),i=n.n(s),o=(n(15),n(16),n(4)),l=n(5),d=n(6),u=n(9),b=n(8),j=function(e){var t=e.options,n=e.onLeaveFeedback,a=Object.keys(t);return Object(c.jsx)("ul",{className:"btnList",children:a.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("button",{type:"button",className:"btn",onClick:function(){return n(e)},children:e.slice(0,1).toUpperCase()+e.slice(1)})},e)}))})},h=function(e){var t=e.good,n=void 0===t?0:t,a=e.neutral,r=void 0===a?0:a,s=e.bad,i=void 0===s?0:s,o=e.total,l=void 0===o?0:o,d=e.positivePercentage,u=void 0===d?0:d;return Object(c.jsxs)("ul",{className:"resultList",children:[Object(c.jsxs)("li",{children:["Good:",Object(c.jsx)("span",{children:n})]}),Object(c.jsxs)("li",{children:["Neutral:",Object(c.jsx)("span",{children:r})]}),Object(c.jsxs)("li",{children:["Bad:",Object(c.jsx)("span",{children:i})]}),Object(c.jsxs)("li",{children:["Total:",Object(c.jsx)("span",{children:l})]}),Object(c.jsxs)("li",{children:["Positive feedback:",Object(c.jsxs)("span",{children:[u,"%"]})]})]})};var p=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[t&&Object(c.jsx)("h2",{children:t}),n]})},O=n(7),v=n.n(O),x=function(e){var t=e.message;return t&&Object(c.jsx)("p",{className:v.a.main,children:t})},f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.updateCount=function(t){return e.setState((function(e){var n=e[t];return Object(o.a)({},t,n+1)}))},e.countTotalFeedback=function(){var t=0;for(var n in e.state)t+=e.state[n];return t},e.countPositiveFeedbackPercentage=function(){return e.countTotalFeedback()?(e.state.good/e.countTotalFeedback()*100).toFixed(0):"0"},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,r=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{title:"Please leave feedback",children:Object(c.jsx)(j,{options:this.state,onLeaveFeedback:this.updateCount})}),r?Object(c.jsx)(p,{title:"Statistics",children:Object(c.jsx)(h,{good:t,neutral:n,bad:a,total:r,positivePercentage:s})}):Object(c.jsx)(x,{message:"No feedback given"})]})}}]),n}(a.Component);f.defaultProps={good:0,neutral:0,bad:0},i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.querySelector("#root"))},7:function(e,t,n){e.exports={main:"Notification_main__lZumC"}}},[[17,1,2]]]);
//# sourceMappingURL=main.38123822.chunk.js.map