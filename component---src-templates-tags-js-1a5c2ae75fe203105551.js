(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{FZxV:function(n,t,e){"use strict";var r=e("MUpH"),a=e("5D9J"),o=e("Wbzz"),i=e("q1tI"),l=e.n(i),c=e("ckOl"),u=e("sH8X");function m(){var n=Object(r.a)(["\n  ",";\n  text-decoration: none;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap;\n  padding: 0.4rem 0.8rem;\n  color: var(--primary-color);\n\n  &:hover {\n    color: var(--secondary-color);\n    text-decoration: underline;\n  }\n\n  & > svg {\n    height: 0.8rem;\n    fill: currentColor;\n    margin-left: 0.25rem;\n    transition: margin-left var(--transition-fast) ease;\n  }\n\n  &:hover > svg {\n    margin-left: 0.5rem;\n  }\n"]);return m=function(){return n},n}var f=Object(a.a)(o.Link)(m(),u.b);t.a=function(n){var t=n.label,e=n.link;return l.a.createElement(l.a.Fragment,null,t&&e&&l.a.createElement(f,{to:e||"#"},t,l.a.createElement(c.a,{icon:"arrow-right"})))}},"I/mr":function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return c}));var r=e("MUpH"),a=e("5D9J");function o(){var n=Object(r.a)(["\n  color: var(--title-color);\n  margin: 20px 0;\n  position: relative;\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]);return o=function(){return n},n}function i(){var n=Object(r.a)(["\n  width: 100%;\n  position: relative;\n  font-weight: 800;\n  margin: 20px 0;\n\n  &:first-letter {\n    color: var(--primary-color);\n  }\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -30px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]);return i=function(){return n},n}var l=a.a.h1(i()),c=a.a.h2(o())},MN1z:function(n,t,e){"use strict";e.r(t),e.d(t,"pageQuery",(function(){return h}));var r=e("MUpH"),a=e("5D9J"),o=e("Wbzz"),i=e("q1tI"),l=e.n(i),c=e("Bl7J"),u=e("FZxV"),m=e("Q+NF"),f=e("I/mr"),s=e("sH8X"),p=e("cDEv");function v(){var n=Object(r.a)(["\n  margin-top: 3rem;\n"]);return v=function(){return n},n}function g(){var n=Object(r.a)(["\n  ",";\n  width: 100%;\n  margin: 2.5rem 0;\n"]);return g=function(){return n},n}var d=a.a.div(g(),s.b),b=Object(a.a)(f.a)(v());t.default=function(n){var t=n.pageContext,e=n.data,r=t.tag,a=e.allMarkdownRemark,i=a.edges,s=a.totalCount,v="A collection of "+s+" post"+(1===s?"":"s");return l.a.createElement(c.a,{menuLinks:m.a},l.a.createElement(p.a,null,l.a.createElement(b,null,r),l.a.createElement(d,null,l.a.createElement(u.a,{label:"View All Tags",link:"/tags"})),l.a.createElement(f.b,null,v),l.a.createElement("ul",null,i.map((function(n){var t=n.node,e=t.fields.slug,r=t.frontmatter.title;return l.a.createElement("li",{key:e},l.a.createElement(o.Link,{to:"blog/"+e},r))})))))};var h="26862813"}}]);
//# sourceMappingURL=component---src-templates-tags-js-1a5c2ae75fe203105551.js.map