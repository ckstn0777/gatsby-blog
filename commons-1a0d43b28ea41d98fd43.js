(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6aPS":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("q1tI");var r=n("YwZP"),a=n("Wbzz"),c=n("AeFk");function i(e){var t,n=e.totalCount,i=Object(r.useLocation)(),o="/"===(t=i.pathname)?1:parseInt(t.split("/")[2])?parseInt(t.split("/")[2]):1,l=Math.ceil(n/5),d=5*(Math.ceil(o/5)-1)+1,u=d+4>l?l:d+4;return Object(c.c)("div",{css:s},Object(c.c)("ul",null,1!==d?Object(c.c)(a.a,{to:"/pages/"+(d-1)},"👈"):null,function(e,t){for(var n=[],r=e;r<=t;r++)n.push(r);return n}(d,u).map((function(e,t){return 1===e?Object(c.c)("li",{key:t},Object(c.c)(a.a,{to:"/",activeClassName:"active"},e)):Object(c.c)("li",{key:t},Object(c.c)(a.a,{to:"/pages/"+e,activeClassName:"active"},e))})),d+4<l?Object(c.c)(a.a,{to:"/pages/"+(u+1)},"👉"):null))}var s={name:"zgz25h",styles:"margin:2rem 0 4rem;ul{display:flex;flex-wrap:wrap;list-style:none;align-items:center;justify-content:center;}li{background:#81d4fa;border-radius:50px;width:3.3rem;height:3.3rem;text-align:center;color:white;margin:0 1rem;cursor:pointer;}a{font-size:2rem;padding:0.4rem 1.2rem;}a.active{background:#03a9f4;border-radius:50px;}img{padding:0 1rem;}"}},BXkO:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("q1tI");var r=n("AeFk");function a(e){var t=e.mainText,n=e.subText;return Object(r.c)("div",{css:c},Object(r.c)("div",{css:i},Object(r.c)("h3",null,t),n&&Object(r.c)("p",null,n)))}var c={name:"1cw7mp7",styles:"background-image:linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0.5)\n    ),url(/Image/Thumbnail.jpg);background-size:cover;background-position:center;height:30vh;position:absolute;width:100%;left:0"},i={name:"gsdiyl",styles:"color:white;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;font-size:2.5rem"}},"Pqh/":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("q1tI");var r=n("Wbzz"),a=n("AeFk");function c(){var e=Object(r.c)("441456035").allMarkdownRemark.group;return Object(a.c)("div",{css:i},Object(a.c)("h2",null,"Tags"),Object(a.c)("div",{css:s},e.map((function(e,t){var n=e.totalCount,r=e.fieldValue;return Object(a.c)("div",{key:t,className:"tag"},Object(a.c)("span",{className:"tag__count"},n),Object(a.c)("span",{className:"tag__name"},r))}))))}var i={name:"nm9c9l",styles:"background:#ffffff;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);border-radius:10px;padding:2rem;font-size:1.2rem;h2{text-align:center;margin-bottom:1rem;}"},s={name:"2tif17",styles:"display:flex;flex-wrap:wrap;font-size:1.3rem;.tag{background:#e1f5fe;border-radius:15px;padding:6px;}.tag__count{background:#81d4fa;border-radius:10px;padding:2px 5px;margin-right:3px;}.tag__name{}"}},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d})),n.d(t,"globalStyle",(function(){return u}));n("q1tI");var r=n("AeFk"),a=n("VXBa"),c=n("BXkO"),i=n("jnMK"),s=n("xZQq"),o=n("Pqh/"),l=n("6aPS");function d(e){var t=e.data,n=t.allMarkdownRemark.totalCount;return Object(r.c)(a.a,null,Object(r.c)("section",{css:b},Object(r.c)(c.a,{mainText:"방문해주셔서 감사합니다.",subText:"소설읽는 개발자 입니다."}),Object(r.c)("div",{css:m},Object(r.c)("div",{className:"content"},Object(r.c)(i.a,{post:t}),Object(r.c)(l.a,{totalCount:n})),Object(r.c)("div",{className:"side"},Object(r.c)(s.a,null),Object(r.c)(o.a,null)))),Object(r.c)(r.a,{styles:u}))}var u={name:"1i4lx3e",styles:"*,*::before,*::after{margin:0;padding:0;box-sizing:inherit;}a{color:inherit;text-decoration:none;}html{box-sizing:border-box;font-size:62.5%;}body{background:linear-gradient(139.17deg, #f5f5f5 0%, #bdbdbd 100%),#bdbdbd;font-weight:300;line-height:1.6;}::-webkit-scrollbar{width:1.6rem;}::-webkit-scrollbar-thumb{background:rgba(147, 161, 161, 0.75);border-radius:5px;}::-webkit-scrollbar-track{background:none;}"},b={name:"1ysiike",styles:"grid-column:center-start/center-end;min-height:100rem"},m={name:"aqtzm5",styles:"margin-top:33vh;display:flex;.side{flex-basis:50%;padding:1rem;height:100%;position:sticky;top:100px;}"}},VXBa:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("q1tI");var r=n("Wbzz"),a=n("AeFk");function c(){return Object(a.c)("header",{css:i},Object(a.c)("div",{css:s},Object(a.c)(r.a,{to:"/"},Object(a.c)("img",{src:"/Image/Logo.png",css:o})),Object(a.c)("ul",{css:l},Object(a.c)("li",null,"Home"),Object(a.c)("li",null,"Categoies"),Object(a.c)("li",null,"Tags"),Object(a.c)("li",null,"About")),Object(a.c)("input",null)))}var i={name:"nc8ihk",styles:"grid-column:full-start/full-end;height:8vh;position:sticky;top:0px;z-index:10;box-shadow:rgb(0 0 0 / 8%) 0px 0px 8px;backdrop-filter:blur(3px);background-color:rgba(255, 255, 255, 0.562)"},s={name:"1nnwfh3",styles:"display:flex;flex-direction:row;justify-content:space-between;align-items:center;max-width:120rem;height:100%;margin:0 auto"},o={name:"1pxv85h",styles:"max-height:10rem;max-width:25rem"},l={name:"bi55r4",styles:"flex:1 0 0;list-style:none;font-size:1.8rem;display:flex;justify-content:space-around;padding:0 10rem"};function d(){return Object(a.c)("footer",{css:u},Object(a.c)("div",{css:b},Object(a.c)("div",{css:m},Object(a.c)("img",{src:"/Image/User.jpg"}),Object(a.c)("div",{css:g},Object(a.c)("h3",null,"소설읽는 개발자"),Object(a.c)("p",null,"개발을 잘하기 위해서가 아닌 개발을 즐기기 위해 노력하는 개발자입니다. 사소한 생각 정리부터 튜토리얼, 삽질기 정도를 주로 끄적이고 있습니다."),Object(a.c)("div",{className:"icon_box"},Object(a.c)("img",{src:"/svg/github.svg"}),Object(a.c)("img",{src:"/svg/email.svg"}),Object(a.c)("img",{src:"/svg/blogger.svg"}),Object(a.c)("img",{src:"/svg/notion.svg"})))),Object(a.c)("p",{className:"copyright"},"© 2021 소설읽는개발자 Powered by Gatsby")))}var u={name:"15lxrg7",styles:"grid-column:full-start/full-end;background-color:#37474f;color:white;font-size:1.4rem"},b={name:"xob3wh",styles:"max-width:120rem;margin:0 auto;padding:3rem;.copyright{letter-spacing:2px;text-align:center;}"},m={name:"e2b2np",styles:"display:flex;flex-direction:row;margin-bottom:2rem;img{border-radius:15px;}"},g={name:"12cius2",styles:"padding:0 2rem;display:flex;flex-direction:column;justify-content:space-between;h3{font-size:2rem;}p{flex-basis:50%;}"};function p(e){var t=e.children;return Object(a.c)("div",{css:f},Object(a.c)(c,null),t,Object(a.c)(d,null))}var f={name:"14kf3v8",styles:"display:grid;grid-template-columns:[full-start] minmax(6rem, 1fr) [center-start] repeat(\n      8,\n      [col-start] minmax(min-content, 15rem) [col-end]\n    ) [center-end] minmax(6rem, 1fr) [full-end];min-height:100vh"}},jnMK:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("q1tI");var r=n("Wbzz"),a=n("AeFk");function c(e){var t=e.post;return Object(a.c)("div",{css:i},t.allMarkdownRemark.edges.map((function(e){var t,n,c,i,l,d,u,b=e.node;return Object(a.c)(r.a,{to:null===(t=b.fields)||void 0===t?void 0:t.slug,key:b.id},Object(a.c)("article",{css:s,key:b.id},Object(a.c)("img",{src:null===(n=b.frontmatter)||void 0===n||null===(c=n.featuredImage)||void 0===c||null===(i=c.childImageSharp)||void 0===i||null===(l=i.fluid)||void 0===l?void 0:l.src}),Object(a.c)("div",{css:o},Object(a.c)("h2",null,null===(d=b.frontmatter)||void 0===d?void 0:d.title),Object(a.c)("p",null,b.excerpt),Object(a.c)("p",null,null===(u=b.frontmatter)||void 0===u?void 0:u.date))))})))}var i={name:"1dvcxr3",styles:"padding:1rem"},s={name:"2oha3f",styles:"background:#ffffff;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);border-radius:20px;padding:2rem;margin-bottom:1.5rem;display:flex"},o={name:"e4ek6h",styles:"padding:0 1.5rem;font-size:1.2rem;>*{margin-bottom:0.6rem;}"}},xZQq:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("q1tI");var r=n("Wbzz"),a=n("AeFk");function c(){var e=Object(r.c)("1295995800").allMarkdownRemark.group;return Object(a.c)("div",{css:i},Object(a.c)("h2",null,"카테고리"),e.map((function(e,t){var n=e.totalCount,c=e.fieldValue;return Object(a.c)(r.a,{to:"/category/"+c,key:t,css:s},Object(a.c)("p",{className:"category__name"},c),Object(a.c)("p",{className:"category__count"},n))})))}var i={name:"1nlk8wd",styles:"background:#ffffff;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);border-radius:10px;padding:2rem;margin-bottom:3rem;font-size:1.2rem;h2{text-align:center;margin-bottom:1rem;}"},s={name:"14kp0rd",styles:"display:flex;font-size:1.6rem;padding:0.5rem;&:hover{text-decoration:none;background-color:rgba(0, 0, 0, 0.04);}.category__name{flex:1 0 0;}.category__count{background:#81d4fa;border-radius:25px;width:25px;height:25px;text-align:center;color:white;}"}}}]);
//# sourceMappingURL=commons-1a0d43b28ea41d98fd43.js.map