"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[701],{9596:function(n,e,i){i.d(e,{Z:function(){return c}});var t,r=i(9439),o=i(2791),s=i(8820),a=i(168),l=i(6444).ZP.div(t||(t=(0,a.Z)(["\n    position: relative;\n\n    input {\n        width: 280px;\n        height: 40px;\n        margin-bottom: 28px;\n        padding: 10px 42px 10px 12px;\n        box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n        border-radius: 20px;\n        border: none;\n        \n        font-weight: 500;\n        font-size: 16px;\n        line-height: 1,4;\n        letter-spacing: 0.04em;\n        color: #535353;\n    }\n\n    button {\n        position: absolute;\n        top: 6px;\n        right: 12px;\n\n        height: 28px;\n        padding: 0;\n        \n        background-color: #ffffff;\n        border: none;\n\n        cursor: pointer;\n    }\n\n    @media (min-width: 768px) {\n        text-align: center;\n\n        input {\n            width: 608px;\n            height: 44px;\n            \n            margin-bottom: 40px;\n            padding: 8px 48px 8px 20px;            \n            border-radius: 40px;\n            \n            \n            font-weight: 500;\n            font-size: 20px;\n        }\n        \n        button {           \n            top: 8px;\n            right: 60px;\n        }\n    }\n\n    @media (min-width: 1280px) {        \n        button {             \n            right: 330px;\n        }\n    }\n"]))),d=i(184),c=function(n){var e=n.getValueMethod,i=(0,o.useState)(""),t=(0,r.Z)(i,2),a=t[0],c=t[1];return(0,o.useEffect)((function(){e(a)}),[a]),(0,d.jsxs)(l,{children:[(0,d.jsx)("input",{type:"text",placeholder:"Search",value:a,onChange:function(n){return c(n.target.value)}}),(0,d.jsx)("button",{type:"button",onClick:function(){return c("")},children:a?(0,d.jsx)(s.SV5,{size:28,color:"#111111"}):(0,d.jsx)(s.RB5,{size:24,color:"#111111"})})]})}},8701:function(n,e,i){i.r(e),i.d(e,{default:function(){return O}});var t,r,o,s,a,l=i(7689),d=i(168),c=i(6444),x=c.ZP.div(t||(t=(0,d.Z)(["    \n    padding-top: 40px;\n    padding-bottom: 68px;\n\n    h1 {\n        margin-bottom: 28px;\n        font-size: 24px;\n        line-height: 1.4;\n        text-align: center;\n        color: #111111;\n    }\n\n    @media (min-width: 768px) {\n        h1 {\n            margin-bottom: 40px;\n            font-size: 48px;\n        }               \n    }\n"]))),h=i(2791),p=i(8149),u=i(9434),m=i(887),g=i(9596),j=i(3171),f=i(9439),b=i(1413),v=i(5705),y=i(5282),w=/^[a-zA-Z\s]*$/,C=y.object().shape({title:y.string().trim(!0).min(2,"Too short!").max(48,"Too long!").matches(w,"Must contain only letters and spaces").required("Title is required"),name:y.string().trim(!0).min(2,"Too short!").max(16,"Too long!").matches(w,"Must contain only letters and spaces"),breed:y.string().trim().min(2,"Too short!").max(24,"Too long!").matches(w,"Must contain only letters and spaces").required("Breed is required")}),Z=["image/jpg","image/jpeg","image/png"],F=y.object().shape({location:y.string().trim().matches(/[A-Z][a-z]*,\s[A-Z][a-z]*/,'For example, "Brovary, Kyiv" or "Dubno, Rivne"').required("Location is required"),comments:y.string().min(8,"Too short!").max(120,"Too long!").required("Comments is required"),price:y.number().min(1,"Price has to be more than 0"),sex:y.string().required("Choose sex"),image:y.mixed().test("FILE_SIZE","Uploaded file is too big",(function(n){return!n||n&&n.size<=5242880})).test("FILE_FORMAT","Uploaded file unsupported format",(function(n){return!n||n&&Z.includes(null===n||void 0===n?void 0:n.type)}))}),N=i(184),k=[{name:"lost",value:"lost",id:"1"},{name:"found",value:"found",id:"2"},{name:"In good hands",value:"for-free",id:"3"},{name:"sell",value:"sell",id:"4"}],S=function(n){var e=n.onClose,i=n.setStepIndex,t=n.setFormData,r=n.formData;return(0,N.jsx)(v.J9,{initialValues:{title:"",name:"",birthday:"",breed:"",category:""},validationSchema:C,onSubmit:function(n){var e=(0,b.Z)((0,b.Z)({},r),n);t(e),i(1)},children:function(n){var i=n.values,t=n.errors,r=n.touched,o=n.handleChange,s=n.handleSubmit,a=n.handleBlur,l=n.isValid,d=n.dirty;return(0,N.jsxs)("form",{onSubmit:s,children:[(0,N.jsx)("h1",{children:"Add pet"}),(0,N.jsx)("ul",{children:k.map((function(n){return(0,N.jsx)("li",{children:(0,N.jsxs)("label",{className:i.category===n.value?"active":"",children:[n.name,(0,N.jsx)(v.gN,{type:"radio",name:"category",value:n.value})]})},n.id)}))}),(0,N.jsx)("div",{children:t.category}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("label",{children:[(0,N.jsxs)("div",{children:["Tittle of ad",(0,N.jsx)("span",{children:"*"})]}),(0,N.jsx)(v.gN,{name:"title",type:"text",placeholder:"Type name",value:i.title,onChange:o,onBlur:a})]}),(0,N.jsx)("div",{children:t.title})]}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("label",{children:[(0,N.jsx)("div",{children:"Name pet"}),(0,N.jsx)(v.gN,{name:"name",type:"text",placeholder:"Type name pet",value:i.name,onChange:o,onBlur:a})]}),(0,N.jsx)("div",{children:t.name})]}),(0,N.jsx)("div",{children:(0,N.jsxs)("label",{children:[(0,N.jsx)("div",{children:"Date of birth"}),(0,N.jsx)("input",{name:"date",type:"text",placeholder:"Type date of birth",value:i.birthday,onChange:o,onBlur:a})]})}),(0,N.jsxs)("div",{className:"label",children:[(0,N.jsxs)("label",{children:[(0,N.jsx)("div",{children:"Breed"}),(0,N.jsx)(v.gN,{name:"breed",type:"text",placeholder:"Type breed",value:i.breed,onChange:o,onBlur:a})]}),(0,N.jsx)("div",{children:t.breed&&r.breed})]}),(0,N.jsxs)("div",{children:[(0,N.jsx)("button",{type:"button",onClick:e,children:"Cancel"}),d&&l?(0,N.jsx)("button",{className:"activeNext",type:"submit",children:"Next"}):(0,N.jsx)("button",{className:"inactiveNext",disabled:!0,children:"Next"})]})]})}})},T=i(4066),z=function(n){var e=n.setStepIndex,i=n.formData,t=(n.onClose,(0,u.I0)());return(0,N.jsx)("div",{children:(0,N.jsx)(v.J9,{initialValues:{sex:"",location:"",price:"",image:null,comments:""},validationSchema:F,onSubmit:function(n){!function(n){console.log(n),t((0,T.Fy)({data:n}))}((0,b.Z)((0,b.Z)({},i),n))},children:function(n){var t=n.values,r=n.errors,o=n.handleChange,s=n.handleBlur,a=n.handleSubmit,l=n.setFieldValue,d=n.isValid,c=n.dirty;return(0,N.jsxs)("form",{onSubmit:a,children:[(0,N.jsx)("h1",{children:"Add pet"}),(0,N.jsxs)("label",{children:["The sex",(0,N.jsx)("span",{children:"*"}),":"]}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("label",{className:"male"===t.sex?"active":"",children:[(0,N.jsx)(v.gN,{type:"radio",name:"sex",value:"male"}),(0,N.jsx)("div",{children:"icon"}),(0,N.jsx)("span",{children:"Male"})]}),(0,N.jsxs)("label",{className:"female"===t.sex?"active":"",children:[(0,N.jsx)(v.gN,{type:"radio",name:"sex",value:"female"}),(0,N.jsx)("div",{children:"icon"}),(0,N.jsx)("span",{children:"Female"})]})]}),(0,N.jsx)("div",{children:r.sex}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("label",{children:[(0,N.jsxs)("div",{children:["Location",(0,N.jsx)("span",{children:"*"}),":"]}),(0,N.jsx)(v.gN,{name:"location",type:"text",placeholder:"City, Region",value:t.location,onChange:o,onBlur:s})]}),(0,N.jsx)("div",{children:r.location})]}),"sell"===i.category&&(0,N.jsxs)("div",{children:[(0,N.jsxs)("label",{children:[(0,N.jsxs)("div",{children:["Price",(0,N.jsx)("span",{children:"*"}),":"]}),(0,N.jsx)(v.gN,{name:"price",type:"text",value:t.price,placeholder:"Type price",onChange:o,onBlur:s})]}),(0,N.jsx)("div",{children:r.price})]}),(0,N.jsxs)("div",{className:"file",children:[(0,N.jsx)("div",{children:"Load the pet\u2019s image:"}),(0,N.jsx)("div",{children:(0,N.jsx)("label",{children:(0,N.jsx)("input",{type:"file",name:"image",onChange:function(n){l("upload",n.currentTarget.files)}})})}),(0,N.jsx)("div",{children:r.image})]}),(0,N.jsxs)("label",{children:[(0,N.jsxs)("div",{children:["Comments",(0,N.jsx)("span",{children:"*"})]}),(0,N.jsx)("textarea",{type:"text",name:"comments",placeholder:"Type comment",defaultValue:t.comments,onChange:o,onBlur:s})]}),(0,N.jsx)("div",{children:r.comments}),(0,N.jsxs)("div",{children:[c&&d?(0,N.jsx)("button",{className:"activeDone",type:"submit",children:"Done"}):(0,N.jsx)("button",{className:"inactiveDone",disabled:!0,children:"Done"}),(0,N.jsx)("button",{type:"button",onClick:function(){e(0)},children:"Back"})]})]})}})})},D=function(n){var e=n.onClose,i=(0,h.useState)(0),t=(0,f.Z)(i,2),r=t[0],o=t[1],s=(0,h.useState)({}),a=(0,f.Z)(s,2),l=a[0],d=a[1];return(0,N.jsxs)("div",{children:[0===r&&(0,N.jsx)(S,{onClose:e,setStepIndex:o,formData:l,setFormData:d}),1===r&&(0,N.jsx)(z,{setStepIndex:o,formData:l,onClose:e})]})},B=i(8820),I=i(1087),L=c.ZP.ul(r||(r=(0,d.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 8px;\n    margin: 0;\n    padding: 0;\n    margin-bottom: 30px;\n    list-style: none;\n\n    @media (min-width: 768px) {\n        margin-bottom: 60px;\n        gap: 12px;\n    }\n"]))),A=(0,c.ZP)(I.OL)(o||(o=(0,d.Z)(["\n    display: flex;\n    padding: 8px 28px;\n    /* margin-right: 10px; */\n    border: 2px solid #F59256;\n    border-radius: 40px;\n    text-decoration: none;\n\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.35;\n    letter-spacing: 0.04em;\n    color: #111111;\n    background: #FFFFFF;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n                \n\n    :hover,\n    :focus {\n        background-color: rgb(245, 146, 86, 0.5);\n    }\n\n    &.active {\n        background-color: #F59256;\n        color: #ffffff;\n        pointer-events: none;\n    }\n\n    @media (min-width: 768px) {\n        padding: 10px 28px;\n        font-size: 20px;\n        line-height: 1.35;\n        letter-spacing: 0.04em;\n    }\n"]))),V=c.ZP.button(s||(s=(0,d.Z)(["\n    position: fixed;\n    bottom: 40px;\n    right: 20px;\n    z-index: 10;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n\n    width: 80px;\n    height: 80px;\n    padding: 16px;\n    border-radius: 50%;\n    border: none;\n    color: #ffffff;\n    background: #F59256;\n    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n    font-size: 12px;\n    line-height: 1.33;\n\n    cursor: pointer;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n                \n\n    :hover,\n    :focus {\n        background-color: rgb(245, 146, 86, 0.5);\n    }\n\n    @media (min-width: 768px) {\n        position: static;\n        z-index: 0;\n\n        flex-direction: row-reverse;\n        flex-wrap: nowrap;\n\n        margin-left: auto;\n        width: 129px;\n        height: 44px;\n        padding: 0;\n        border-radius: 40px;\n        background-color: #FDF7F2;\n        box-shadow: none;\n        \n        \n\n        span {\n            display: block;\n            width: 73px;\n            font-weight: 500;\n            font-size: 20px;\n            line-height: 1.35;\n            color: #111111;\n        }\n\n        div {\n            margin-left: 12px;\n            height: 32px;\n            background-color: #f06b19;\n            border-radius: 50%;\n            \n        }\n        \n    }\n"]))),q=c.ZP.div(a||(a=(0,d.Z)(["\n    @media (min-width: 768px) {\n        display: flex;\n        justify-content: space-between;\n    }\n"]))),R=function(){var n=(0,p.a)().isLoggedIn,e=(0,p.O)(),i=e.isOpen,t=e.open,r=e.close;return(0,N.jsxs)(q,{children:[(0,N.jsxs)(L,{children:[(0,N.jsx)("li",{children:(0,N.jsx)(A,{to:"lost-found",children:"lost/found"})}),(0,N.jsx)("li",{children:(0,N.jsx)(A,{to:"in-good-hands",children:"in good hands"})}),(0,N.jsx)("li",{children:(0,N.jsx)(A,{to:"sell",children:"sell"})}),n&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("li",{children:(0,N.jsx)(A,{to:"favorite-ads",children:"favorite ads"})}),(0,N.jsx)("li",{children:(0,N.jsx)(A,{to:"my-ads",children:"my ads"})})]})]}),(0,N.jsxs)(V,{type:"button",onClick:t,children:[(0,N.jsx)("div",{children:(0,N.jsx)(B.Lfi,{size:32})})," ",(0,N.jsx)("span",{children:"Add pet"})]}),n&&(0,N.jsx)(j.u,{isOpen:i,onClose:r,children:(0,N.jsx)(D,{onClose:r})})]})},M=i(5002),O=function(){var n=(0,l.s0)(),e=(0,l.UO)().categoryName,i=(0,p.a)().isLoggedIn,t=(0,u.I0)();(0,h.useEffect)((function(){i||e!==M.R.FAVORITE_ADS&&e!==M.R.MY_ADS||n("/login"),Object.values(M.R).includes(e)||n(M.R.SELL)}),[e,i]);return(0,N.jsxs)(x,{children:[(0,N.jsx)("h1",{children:"Find your favorite pet"}),(0,N.jsx)(g.Z,{getValueMethod:function(n){return t((0,m.b)(n))}}),(0,N.jsx)(R,{}),(0,N.jsx)(l.j3,{})]})}}}]);
//# sourceMappingURL=701.5d7bd6ed.chunk.js.map