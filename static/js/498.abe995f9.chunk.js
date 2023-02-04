"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[498],{4498:function(n,e,i){i.r(e),i.d(e,{default:function(){return y}});var t,o,r,d,p,x,a=i(9439),s=i(2791),l=i(2134),c=i(168),h=i(6444),f=h.ZP.div(t||(t=(0,c.Z)(["\n    position: relative;\n\n    input {\n        width: 280px;\n        height: 40px;\n        margin-bottom: 28px;\n        padding: 10px 42px 10px 12px;\n        box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n        border-radius: 20px;\n        border: none;\n        \n        font-weight: 500;\n        font-size: 16px;\n        line-height: 1,4;\n        letter-spacing: 0.04em;\n        color: #535353;\n    }\n\n    button {\n        position: absolute;\n        top: 10px;\n        right: 12px;\n\n        padding: 0;\n        background-color: #ffffff;\n        border: none;\n    }\n\n    @media (min-width: 768px) {\n        text-align: center;\n\n        input {\n            width: 608px;\n            height: 44px;\n            \n            margin-bottom: 40px;\n            padding: 8px 48px 8px 20px;            \n            border-radius: 40px;\n            \n            \n            font-weight: 500;\n            font-size: 20px;\n        }\n        \n        button {           \n            top: 8px;\n            right: 60px;\n        }\n    }\n\n    @media (min-width: 1280px) {        \n        button {             \n            right: 330px;\n        }\n    }\n"]))),g=i(184),u=function(){var n=(0,s.useState)(""),e=(0,a.Z)(n,2),i=e[0],t=e[1];return(0,g.jsxs)(f,{children:[(0,g.jsx)("input",{type:"text",placeholder:"Search",value:i,onChange:function(n){return t(n.target.value)}}),(0,g.jsx)("button",{type:"button",onClick:function(){return console.log(i)},children:(0,g.jsx)(l.RB5,{size:24,color:"#111111"})})]})},b=i(6009),m=i(1087),w=h.ZP.ul(o||(o=(0,c.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 8px;\n    margin: 0;\n    padding: 0;\n    margin-bottom: 30px;\n    list-style: none;\n\n    @media (min-width: 768px) {\n        margin-bottom: 60px;\n        gap: 12px;\n    }\n"]))),j=(0,h.ZP)(m.OL)(r||(r=(0,c.Z)(["\n    display: flex;\n    padding: 8px 28px;\n    /* margin-right: 10px; */\n    border: 2px solid #F59256;\n    border-radius: 40px;\n    text-decoration: none;\n\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.35;\n    letter-spacing: 0.04em;\n    color: #111111;\n    background: #FFFFFF;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n                \n\n    :hover,\n    :focus {\n        background-color: #dcd1d1;\n    }\n\n    &.active {\n        background-color: #F59256;\n        color: #ffffff;\n        pointer-events: none;\n    }\n\n    @media (min-width: 768px) {\n        padding: 10px 28px;\n        font-size: 20px;\n        line-height: 1.35;\n        letter-spacing: 0.04em;\n    }\n"]))),v=h.ZP.button(d||(d=(0,c.Z)(["\n    position: fixed;\n    bottom: 40px;\n    right: 20px;\n    z-index: 10;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n\n    width: 80px;\n    height: 80px;\n    padding: 16px;\n    border-radius: 50%;\n    border: none;\n    color: #ffffff;\n    background: #F59256;\n    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n    font-size: 12px;\n    line-height: 1.33;\n\n    cursor: pointer;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n                \n\n    :hover,\n    :focus {\n        background-color: #f06b19;\n    }\n\n    @media (min-width: 768px) {\n        position: static;\n        z-index: 0;\n\n        flex-direction: row-reverse;\n\n        margin-left: 101px;\n        width: 129px;\n        height: 44px;\n        padding: 0;\n        border-radius: 40px;\n        background-color: #FDF7F2;\n        box-shadow: none;\n        \n        \n\n        span {\n            font-weight: 500;\n            font-size: 20px;\n            line-height: 1.35;\n            color: #111111;\n        }\n\n        div {\n            margin-left: 12px;\n            height: 32px;\n            background-color: #f06b19;\n            border-radius: 50%;\n            \n        }\n        \n    }\n"]))),k=h.ZP.div(p||(p=(0,c.Z)(["\n    @media (min-width: 768px) {\n        display: flex;\n        justify-content: space-between;\n    }\n"]))),z=function(){var n=(0,b.a)().isLoggedIn;return(0,g.jsxs)(k,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(j,{to:"sell",children:"sell"})}),(0,g.jsx)("li",{children:(0,g.jsx)(j,{to:"lost-found",children:"lost/found"})}),(0,g.jsx)("li",{children:(0,g.jsx)(j,{to:"for-free",children:"in good hands"})}),n&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(j,{to:"favorite",children:"favorite ads"})}),(0,g.jsx)("li",{children:(0,g.jsx)(j,{to:"own",children:"my ads"})})]})]}),(0,g.jsxs)(v,{children:[(0,g.jsx)("div",{children:(0,g.jsx)(l.Lfi,{size:32})})," ",(0,g.jsx)("span",{children:"Add pet"})]})]})},F=i(7689),Z=h.ZP.div(x||(x=(0,c.Z)(["    \n    padding-top: 40px;\n    padding-bottom: 68px;\n\n    h1 {\n        margin-bottom: 28px;\n        font-size: 24px;\n        line-height: 1.4;\n        text-align: center;\n        color: #111111;\n    }\n\n    @media (min-width: 768px) {\n        h1 {\n            margin-bottom: 40px;\n            font-size: 48px;\n        }               \n    }\n"]))),y=function(){var n=(0,F.s0)(),e=(0,F.UO)().categoryName,i=(0,b.a)().isLoggedIn;return(0,s.useEffect)((function(){i||"favorite"!==e&&"own"!==e||n("sell"),["sell","lost-found","for-free","favorite","own"].includes(e)||n("sell")}),[e,i]),(0,g.jsxs)(Z,{children:[(0,g.jsx)("h1",{children:"Find your favorite pet"}),(0,g.jsx)(u,{}),(0,g.jsx)(z,{}),(0,g.jsx)(F.j3,{})]})}}}]);
//# sourceMappingURL=498.abe995f9.chunk.js.map