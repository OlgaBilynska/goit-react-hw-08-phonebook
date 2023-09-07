"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[870],{1870:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,a,o,i,c,s,d,l,u,p=t(4270),m=t(2791),x=t(5705),h=t(5984),f=t(6727),b=t(9434),g=t(168),v=t(7686),Z=t(1413),j=t(4925),w=v.Z.button(r||(r=(0,g.Z)(["\n  display: block;\n  background-color: var(--accent);\n  color: var(--text);\n  font-weight: 500;\n  font-size: 15px;\n  padding: 10px;\n  border: transparent;\n  border-radius: 25px;\n\n  &:focus,\n  &:hover {\n    background-color: var(--text);\n    color: var(--accent);\n    outline: none;\n  }\n"]))),y=t(184),k=["children"],C=function(n){var e=n.children,t=(0,j.Z)(n,k);return(0,y.jsx)(w,(0,Z.Z)((0,Z.Z)({},t),{},{children:e}))},q=(0,v.Z)(x.l0)(a||(a=(0,g.Z)(["\n  margin-top: 10px;\n"]))),z=(0,v.Z)(C)(o||(o=(0,g.Z)(["\n  font-size: 20px;\n  padding: 10px 20px;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),A=v.Z.label(i||(i=(0,g.Z)(["\n  color: var(--section);\n\n  &:hover,\n  &:focus {\n    color: var(--accent);\n  }\n"]))),F=(0,v.Z)(x.Bc)(c||(c=(0,g.Z)(["\n  color: var(--accent);\n  font-weight: 600;\n  background-color: var(--section);\n  border-radius: 20px;\n  padding: 5px;\n  margin-bottom: 10px;\n"]))),N=(0,v.Z)(x.gN)(s||(s=(0,g.Z)(["\n  display: block;\n  width: inherit;\n  margin-bottom: 10px;\n  margin-top: 7px;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 20px;\n  color: var(--text);\n  border: var(--text);\n  background-color: var(--section);\n  outline: transparent;\n  border-radius: 20px;\n  padding: 10px 20px;\n\n  &:hover,\n  &:focus {\n    outline: 2px solid var(--accent);\n    box-shadow: 1px 1px 1px var(--accent);\n  }\n"]))),_=t(8361),B=function(n){return n.contacts.items},I=function(n){return n.contacts.isLoading},J=function(n){return n.filter},L={name:"",number:""},P=f.Ry({name:f.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:f.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Phone number is required")}),M=function(){var n=(0,h.x0)(),e=(0,h.x0)(),t=(0,b.I0)();return(0,y.jsx)(x.J9,{initialValues:L,validationSchema:P,onSubmit:function(n,e){var r=e.resetForm;t(_.addContact(n)),r()},children:(0,y.jsxs)(q,{children:[(0,y.jsxs)(A,{htmlFor:n,children:["Name",(0,y.jsx)(N,{name:"name",id:n,type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,y.jsx)(F,{name:"name",component:"div"})]}),(0,y.jsxs)(A,{htmlFor:e,children:["Number",(0,y.jsx)(N,{name:"number",id:e,type:"tel",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,y.jsx)(F,{name:"number",component:"div"})]}),(0,y.jsx)(z,{type:"submit",children:"Add contact"})]})})},R=v.Z.div(d||(d=(0,g.Z)(["\n  color: var(--text);\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),S=v.Z.li(l||(l=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: inherit;\n  background-color: var(--section);\n  border: 1px solid var(--section);\n  border-radius: 20px;\n  padding: 10px 20px;\n  min-width: fit-content;\n"]))),$=function(){var n=(0,b.v9)(B),e=(0,b.v9)(J),t=(0,b.I0)(),r=function(n,e){if(e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}return n}(n,e);return r.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,y.jsxs)(S,{children:[(0,y.jsxs)(R,{children:[r," : ",a]}),(0,y.jsx)(C,{type:"button",onClick:function(){return t(_.deleteContact(e))},children:"Delete"})]},e)}))},D=v.Z.ul(u||(u=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),E=function(){return(0,y.jsx)(D,{children:(0,y.jsx)($,{})})};function V(){var n=(0,b.I0)(),e=(0,b.v9)(I);return(0,m.useEffect)((function(){return n((0,_.fetchContacts)())}),[n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.q,{children:(0,y.jsx)("title",{children:"Your contacts"})}),(0,y.jsx)(M,{}),e&&(0,y.jsx)("p",{children:"Request in progress..."}),(0,y.jsx)(E,{})]})}}}]);
//# sourceMappingURL=870.27a35b52.chunk.js.map