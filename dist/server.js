!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("querystring")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("nano")},function(e,t,n){n(8),e.exports=n(10)},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("babel-register")},function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(3),i=n.n(o),l=n(4),c=n(0),u=n.n(c);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,f(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,u.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props.query,t=e.page?Number(e.page):0,n=function(t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){m(e,t,n[t])})}return e}({},e);return n.page=t,Object.keys(n).map(function(e){return e+"="+n[e]}).join("&")},a=function(e,t){return e<0?null:u.a.createElement("li",{className:"paginationLink"},u.a.createElement("a",{itemProp:"url",href:"/?"+n(e),target:"_parent"},u.a.createElement("span",{itemProp:"name"},t)))};return u.a.createElement(u.a.Fragment,null,u.a.createElement("nav",{role:"navigation","aria-label":"Pagination Navigation"},u.a.createElement("p",null,"Navigate through results"),u.a.createElement("ul",{className:"pagination",role:"navigation",itemScope:!0,itemType:"http://schema.org/SiteNavigationElement"},a(t-1,"< Previous"),u.a.createElement("li",null,"  ",u.a.createElement("strong",null,"●")," "),a(t+1,"Next >"))))}}])&&p(n.prototype,a),r&&p(n,r),t}(),g=n(1),y=n.n(g);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=_(t).call(this,e))||"object"!==b(r)&&"function"!=typeof r?w(a):r).state={showSearchForm:!0},n.onToggleSearchForm=n.onToggleSearchForm.bind(w(n)),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,u.a.Component),n=t,(a=[{key:"onToggleSearchForm",value:function(){this.setState({showSearchForm:!this.state.showSearchForm})}},{key:"render",value:function(){var e=this.state.showSearchForm?"Hide Search":"Show Search";return u.a.createElement("div",{className:"searchForm",role:"search"},u.a.createElement("form",{method:"GET",action:"/",target:"_parent"},!this.props.serverSide&&u.a.createElement("p",{className:"SearchToggler","aria-hidden":"true"},u.a.createElement("button",{type:"button",onClick:this.onToggleSearchForm},e)),u.a.createElement("fieldset",null,u.a.createElement("legend",null,"Search In Patient Data"),this.state.showSearchForm&&u.a.createElement("div",{className:"formWrapper"},u.a.createElement("h3",null,"Total Discharges"),u.a.createElement("div",{className:"doubleField"},u.a.createElement("p",{className:"inputfield"},u.a.createElement("label",{htmlFor:"max_discharges"},"Maximum"),u.a.createElement("input",{type:"text",name:"max_discharges",id:"max_discharges"})),u.a.createElement("p",{className:"inputfield"},u.a.createElement("label",{htmlFor:"min_discharges"},"Minimum"),u.a.createElement("input",{type:"text",name:"min_discharges",id:"min_discharges"}))),u.a.createElement("h3",null,"Average Covered Charges"),u.a.createElement("div",{className:"doubleField"},u.a.createElement("p",{className:"inputfield"},u.a.createElement("label",{htmlFor:"max_average_covered_charges"},"Maximum"),u.a.createElement("input",{type:"text",name:"max_average_covered_charges",id:"max_average_covered_charges"})),u.a.createElement("p",{className:"inputfield"},u.a.createElement("label",{htmlFor:"min_average_covered_charges"},"Minimum"),u.a.createElement("input",{type:"text",name:"min_average_covered_charges",id:"min_average_covered_charges"}))),u.a.createElement("h3",null,"Average Medicare Payment"),u.a.createElement("div",{className:"doubleField"},u.a.createElement("p",{className:"inputfield"},u.a.createElement("label",{htmlFor:"max_average_medicare_payments"},"Maximum "),u.a.createElement("input",{type:"text",name:"max_average_medicare_payments",id:"max_average_medicare_payments"})),u.a.createElement("p",{className:"inputfield"},u.a.createElement("label",{htmlFor:"min_average_medicare_payments"},"Minimum"),u.a.createElement("input",{type:"text",name:"min_average_medicare_payments",id:"min_average_medicare_payments"}))),u.a.createElement("p",null,u.a.createElement("label",{htmlFor:"state"},"State"),u.a.createElement("select",{name:"state",id:"state"},u.a.createElement("option",{value:"AL"},"Alabama"),u.a.createElement("option",{value:"AK"},"Alaska"),u.a.createElement("option",{value:"AZ"},"Arizona"),u.a.createElement("option",{value:"AR"},"Arkansas"),u.a.createElement("option",{value:"CA"},"California"),u.a.createElement("option",{value:"CO"},"Colorado"),u.a.createElement("option",{value:"CT"},"Connecticut"),u.a.createElement("option",{value:"DE"},"Delaware"),u.a.createElement("option",{value:"DC"},"District Of Columbia"),u.a.createElement("option",{value:"FL"},"Florida"),u.a.createElement("option",{value:"GA"},"Georgia"),u.a.createElement("option",{value:"HI"},"Hawaii"),u.a.createElement("option",{value:"ID"},"Idaho"),u.a.createElement("option",{value:"IL"},"Illinois"),u.a.createElement("option",{value:"IN"},"Indiana"),u.a.createElement("option",{value:"IA"},"Iowa"),u.a.createElement("option",{value:"KS"},"Kansas"),u.a.createElement("option",{value:"KY"},"Kentucky"),u.a.createElement("option",{value:"LA"},"Louisiana"),u.a.createElement("option",{value:"ME"},"Maine"),u.a.createElement("option",{value:"MD"},"Maryland"),u.a.createElement("option",{value:"MA"},"Massachusetts"),u.a.createElement("option",{value:"MI"},"Michigan"),u.a.createElement("option",{value:"MN"},"Minnesota"),u.a.createElement("option",{value:"MS"},"Mississippi"),u.a.createElement("option",{value:"MO"},"Missouri"),u.a.createElement("option",{value:"MT"},"Montana"),u.a.createElement("option",{value:"NE"},"Nebraska"),u.a.createElement("option",{value:"NV"},"Nevada"),u.a.createElement("option",{value:"NH"},"New Hampshire"),u.a.createElement("option",{value:"NJ"},"New Jersey"),u.a.createElement("option",{value:"NM"},"New Mexico"),u.a.createElement("option",{value:"NY"},"New York"),u.a.createElement("option",{value:"NC"},"North Carolina"),u.a.createElement("option",{value:"ND"},"North Dakota"),u.a.createElement("option",{value:"OH"},"Ohio"),u.a.createElement("option",{value:"OK"},"Oklahoma"),u.a.createElement("option",{value:"OR"},"Oregon"),u.a.createElement("option",{value:"PA"},"Pennsylvania"),u.a.createElement("option",{value:"RI"},"Rhode Island"),u.a.createElement("option",{value:"SC"},"South Carolina"),u.a.createElement("option",{value:"SD"},"South Dakota"),u.a.createElement("option",{value:"TN"},"Tennessee"),u.a.createElement("option",{value:"TX"},"Texas"),u.a.createElement("option",{value:"UT"},"Utah"),u.a.createElement("option",{value:"VT"},"Vermont"),u.a.createElement("option",{value:"VA"},"Virginia"),u.a.createElement("option",{value:"WA"},"Washington"),u.a.createElement("option",{value:"WV"},"West Virginia"),u.a.createElement("option",{value:"WI"},"Wisconsin"),u.a.createElement("option",{value:"WY"},"Wyoming"))),u.a.createElement("input",{className:"submit",type:"submit",value:"Search"})))))}}])&&E(n.prototype,a),r&&E(n,r),t}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,j(t).call(this,e))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,u.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props.providerData.map(function(e,t){return u.a.createElement("li",{key:t,className:"searchResult"},u.a.createElement("section",null,u.a.createElement("p",{className:"ProviderId"},"Provider ",e["Provider Id"]," : ",e["Provider Name"]),u.a.createElement("div",{className:"ProviderLocation"},u.a.createElement("h3",null,"Located at"),u.a.createElement("p",null,e["Provider Street Address"],", ",e["Provider City"]," - ",e["Provider Zip Code"],", ",e["Provider State"]),u.a.createElement("p",null," Referral Region: ",e["Hospital Referral Region Description"])),u.a.createElement("p",{className:"discharges"},"Total Discharges: ",e["Total Discharges"]),u.a.createElement("p",{className:"covered"},"Average Covered Charges: ",e["Average Covered Charges"]),u.a.createElement("p",{className:"medicate"},"Average Medicare Payments: ",e["Average Medicare Payments"]),u.a.createElement("p",{className:"totalpayments"},"Average Total Payments: ",e["Average Total Payments"])))}),t=this.props.query?this.props.query:y.a.parse(window.location.href,!0).query,n=u.a.createElement(v,{query:t});return u.a.createElement(u.a.Fragment,null,u.a.createElement("header",null,u.a.createElement("h1",null,"Patient Data")),u.a.createElement(x,{serverside:this.props.serverside}),u.a.createElement("main",null,e.length>0&&u.a.createElement(u.a.Fragment,null,n,u.a.createElement("ol",null,e),n),0===e.length&&u.a.createElement("p",null,"There were no results returned from the search")))}}])&&P(n.prototype,a),r&&P(n,r),t}(),C=function(e,t,n){return u.a.createElement(k,{serverSide:e,providerData:t,query:n})},q=function(e){return'\n    <head>\n      <meta charset="utf-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1">\n      <link rel="icon" href="/favicon.ico" />\n      <link rel=\'stylesheet\' href=\'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.css\'>\n      <style type\n      ="text/css">\n        body {\n            max-width: auto;\n        }\n        .appiframe {\n            position: fixed;\n            top: 0px;\n            bottom: 0px;\n            right: 0px;\n            width: 100%;\n            border: none;\n            margin: 0;\n            padding: 0;\n            overflow: hidden;\n            z-index: 999999;\n            height: 100%;\n        }\n        header {\n            margin-left: -10px;\n        }\n        .searchForm {\n            width: 40%;\n            background-color: beige;\n            color: darkblue;\n            position: fixed;\n            right: 10px;\n            height: 300px;\n            overflow: auto;\n        }\n        .searchForm h3 {\n            color: darkblue;\n            margin-bottom: .5rem;\n        }\n        .searchForm input, .searchform select, .SearchToggler button{\n            border: 1px solid darkblue;\n            background-color: white;\n            color: darkblue;\n            max-width: 75px;\n            width: 50&;\n        }\n        .SearchToggler button {\n            max-width: 100px;\n        }\n        .submit {\n            background-color: darkblue;\n            min-width: 100px;\n        }\n        .submit:hover {\n            color: white;\n        }\n\n        .searchResult {\n            padding-left: 1rem;\n            width: 57%;\n            min-width: 250px\n        }\n\n        .searchResult::before {\n            font-weight: bold;\n            font-size: 1.5rem;\n            margin-right: 0.5rem;\n            line-height: 1;\n        }\n        \n        .doubleField {\n            display: flex;\n        }\n        .pagination {\n            display: flex;\n            list-style: none\n        }\n        .paginationLink {\n            margin-left: 1rem;\n            margin-right: 1rem;\n        }\n        .SearchToggler {display: none}\n        @media only screen and (max-width: 750px) {\n            .searchForm {\n                position: relative;\n                width: 100%;\n                right: inherit;\n                height: auto;\n            }\n\n            .SearchToggler {\n                display: block;\n                width: 50%;\n                margin-left: auto;\n                margin-right: auto;\n            }\n        }\n      </style>\n      <title>'.concat(e,"</title>\n    </head>\n")},M=function(e){var t=e.q;return'\n  <!DOCTYPE html>\n  <html lang="en">\n  '.concat(q("Patient Data Overview"),'\n    <body>\n      <noscript><iframe id="app" class="appiframe" src="/serverside?').concat(t,'"/></noscript>\n      <div id="clientSideApp">\n      </div>\n      <script src="/script/client.js"><\/script>\n    </body>\n  </html>\n')},A=function(e){var t=e.message;return'\n  <!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="utf-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1">\n      <link rel=\'stylesheet\' href=\'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.css\'>\n      <title>Query Analysis</title>\n    </head>\n    <body>\n      '.concat(JSON.stringify(t,null," "),"\n    </body>\n  </html>\n")},D=function(e){var t=e.body;return'\n  <!DOCTYPE html>\n  <html lang="en">\n    '.concat(q("Patient Data Overview"),'\n    <body>\n      <div id="app">').concat(t,"</div>\n    </body>\n  </html>\n")},F=n(5),R=n.n(F),I=n(6);n(9)({presets:["es2015","react"]});var L=Object({NODE_ENV:"production"}).PORT||3e3,W=r()(),H=function(e,t){for(var n=I("http://localhost:5984").use("patient_data"),a={max_discharges:{field:"Total Discharges",query:{$lte:null}},min_discharges:{field:"Total Discharges",query:{$gte:null}},max_average_covered_charges:{field:"coveredCharges",query:{$lte:null}},min_average_covered_charges:{field:"coveredCharges",query:{$gte:null}},max_average_medicare_payments:{field:"medicare",query:{$lte:null}},min_average_medicare_payments:{field:"medicare",query:{$gte:null}},state:{field:"Provider State",query:{$eq:null}}},r={selector:{},fields:["DRG Definition","Provider Id","Provider Name","Provider Street Address","Provider City","Provider State","Provider Zip Code","Hospital Referral Region Description","Total Discharges","Average Covered Charges","Average Total Payments","Average Medicare Payments"],limit:51},o={},i=0,l=Object.keys(e.query);i<l.length;i++){var c=l[i],u=e.query[c],s=a[c];if(s&&u){for(var m=Object.entries(s.query),p=o[s.field]||{},d=0,f=m;d<f.length;d++){var h=f[d][0];p[h]="$eq"===h?u:Number(u)}o[s.field]=p}}r.selector=o,e.query.page&&(r.skip=50*Number(e.query.page)),n.find(r).then(function(e){t(e.docs,r)})};W.get("/script/*",function(e,t){var n=e.url.substring("/script/".length);-1===["server.js"].indexOf(n)&&(t.type(".js"),R.a.readFile("./dist/"+n,{encoding:"utf-8"},function(e,n){e?t.send('throw "Could not load requested script";'):t.send(n)}))}),W.get("/providers",function(e,t){H(e,function(e){t.type("json"),t.send(e)})}),W.get("/analyzeQuery",function(e,t){H(e,function(e,n){var a={query:n,result:e};t.send(A({title:title,message:a}))})}),W.get("/",function(e,t){var n=i.a.stringify(e.query);t.send(M({q:n}))}),W.get("/serverside",function(e,t){H(e,function(n){var a=Object(l.renderToString)(C(!0,n,e.query));t.send(D({body:a}))})}),W.listen(L),console.log("Serving at http://localhost:".concat(L))}]);