!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){const e=document.createElement("form");var t;return e.appendChild(function(){const e=document.createElement("h2");return e.textContent="New Task",e}()),t=e,function(){let e=[],t=function(){const e=document.createElement("p");e.textContent="Priority: ";const t=document.createElement("select"),n=document.createElement("option");n.textContent="Low",n.value="Low";const o=document.createElement("option");o.textContent="Medium",o.value="Medium";const r=document.createElement("option");return r.textContent="High",r.value="High",t.appendChild(r),t.appendChild(o),t.appendChild(n),{paraPriority:e,selectPriority:t}}();const n=document.createElement("input");e.push(n);const o=document.createElement("input");return e.push(o),e.push(t.paraPriority),e.push(t.selectPriority),n.type="text",n.placeholder="Title",o.type="text",o.placeholder="Description",e}().forEach(e=>{t.appendChild(e)}),e.appendChild(function(){const e=document.createElement("button");return e.textContent="Submit",e.id="submit",e.addEventListener("click",e=>{}),e}()),e}n.r(t);const r={addTodoButton:document.querySelector("#addTodo")};console.log(r.addTodoButton.textContent),function(){const e=document.querySelector("#addTodo"),t=document.querySelector("#project");e.addEventListener("click",e=>{console.log("CLICK"),t.appendChild(o())})}()}]);