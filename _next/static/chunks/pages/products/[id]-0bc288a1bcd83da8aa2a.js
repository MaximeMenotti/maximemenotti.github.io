_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{gt86:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[id]",function(){return t("wXvK")}])},wXvK:function(e,a,t){"use strict";t.r(a);var i=t("o0o1"),c=t.n(i),s=t("HaE+"),n=t("nKUr"),r=t("ATyU"),d=t("YFqc"),o=t.n(d),l=[.6,-.05,.01,.99],j={animate:{transition:{staggerChildren:.05}}},u={initial:{y:60,opacity:0,transition:{duration:.6,ease:l}},animate:{y:0,opacity:1,transition:{duration:.6,ease:l}}},p=function(e){return Object(n.jsx)(r.a.div,{initial:"initial",animate:"animate",exit:{opacity:0},children:Object(n.jsx)("div",{className:"fullscreen",children:Object(n.jsxs)("div",{className:"product",children:[Object(n.jsx)(r.a.div,{className:"img",animate:{opacity:1},initial:{opacity:0},children:Object(n.jsx)(r.a.img,{src:e.product.image,animate:{x:0,opacity:1},initial:{x:200,opacity:0},exit:{opacity:0},transition:{delay:.2}},e.product.image)}),Object(n.jsx)("div",{className:"product-details",children:Object(n.jsxs)(r.a.div,{variants:j,className:"inner",children:[Object(n.jsx)(o.a,{href:"/",children:Object(n.jsx)(r.a.div,{variants:u,children:Object(n.jsx)("a",{className:"go-back",children:"Back to products"})})}),Object(n.jsx)(r.a.div,{variants:u,children:Object(n.jsx)("span",{className:"category",children:"Protein"})}),Object(n.jsx)(r.a.h1,{variants:u,children:e.product.name}),Object(n.jsx)(r.a.p,{variants:u,children:e.product.details}),Object(n.jsxs)(r.a.div,{variants:u,className:"additonals",children:[Object(n.jsx)("span",{children:"Soy Free"}),Object(n.jsx)("span",{children:"Gluten Free"})]}),Object(n.jsxs)(r.a.div,{variants:u,className:"qty-price",children:[Object(n.jsxs)("div",{className:"qty",children:[Object(n.jsx)("div",{className:"minus",children:"-"}),Object(n.jsx)("div",{className:"amount",children:"1"}),Object(n.jsx)("div",{className:"add",children:"+"})]}),Object(n.jsx)("span",{className:"price",children:e.product.price})]}),Object(n.jsxs)(r.a.div,{variants:u,className:"btn-row",children:[Object(n.jsx)("button",{className:"add-to-cart",children:" Add to cart"}),Object(n.jsx)("button",{className:"subscribe",children:" Subscribe"})]})]})})]})})})};p.getInitialProps=function(){var e=Object(s.a)(c.a.mark((function e(a){var t,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.query.id,e.next=3,fetch("https://my-json-server.typicode.com/maximemenotti/demo/products/".concat(t));case 3:return i=e.sent,e.next=6,i.json();case 6:return s=e.sent,e.abrupt("return",{product:s});case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),a.default=p}},[["gt86",0,2,1,3,4]]]);