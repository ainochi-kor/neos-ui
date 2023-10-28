import{r as g}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var B={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=g,k=Symbol.for("react.element"),R=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,C=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function O(t,e,o){var r,n={},l=null,d=null;o!==void 0&&(l=""+o),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(d=e.ref);for(r in e)j.call(e,r)&&!N.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:k,type:t,key:l,ref:d,props:n,_owner:C.current}}c.Fragment=R;c.jsx=O;c.jsxs=O;B.exports=c;var P=B.exports;const p=P.jsx,u=({children:t,href:e,...o})=>e?p("a",{href:e,children:t}):p("button",{...o,children:t});try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const i=({...t})=>p(u,{...t,children:"Button"}),S=i;try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const w={title:"Components/Button",component:S},v={children:"Button",disabled:!1},b=t=>{const[e,o]=g.useState(!1);return p(S,{...t,onClick:()=>{o(n=>!n)},children:e?"Close":"Open"})},s={args:{...v}},a={render:b,args:{...v}};var _,f,m;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var y,h,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: StateTemplate,
  args: {
    ...defaultProps
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const D=["Default","WithState"];export{s as Default,a as WithState,D as __namedExportsOrder,w as default};
//# sourceMappingURL=Button.stories-f3a0676c.js.map
