(this["webpackJsonpreact-burger-app"]=this["webpackJsonpreact-burger-app"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1vtRX",BreadTop:"BurgerIngredient_BreadTop__2BpQk",Seeds1:"BurgerIngredient_Seeds1__18zPd",Seeds2:"BurgerIngredient_Seeds2__1M-vD",Meat:"BurgerIngredient_Meat__qlvoi",Cheese:"BurgerIngredient_Cheese__2Y8Tk",Salad:"BurgerIngredient_Salad__3jUBA",Bacon:"BurgerIngredient_Bacon__3P8wE"}},,,,,function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__1nQkt",Label:"BuildControl_Label__24Mo1",Less:"BuildControl_Less__2kqVX",More:"BuildControl_More__43Uu7"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__tzzgK",Open:"SideDrawer_Open__3SDhq",Close:"SideDrawer_Close__2YM8D"}},,,function(e,t,a){e.exports={Header:"Toolbar_Header__2ttcO",Toolbar:"Toolbar_Toolbar__3eeoz"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__uXHtz",active:"NavigationItem_active__3Ef_F"}},function(e,t,a){e.exports={Button:"Button_Button__3PNzl",Success:"Button_Success__3GljI",Close:"Button_Close__19N9-"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__3AfqE",OrderButton:"BuildControls_OrderButton__1FR2o",enable:"BuildControls_enable__33cAv"}},function(e,t,a){e.exports={Modal:"Modal_Modal__32MBa",Show:"Modal_Show__1pRM7"}},function(e,t,a){e.exports={OrderSummary:"OrderSummary_OrderSummary__NJfWe",Price:"OrderSummary_Price__2mbK6"}},,,function(e,t,a){e.exports={Content:"Layout_Content__3Lwqn"}},function(e,t,a){e.exports={Logo:"Logo_Logo__2kn4Y"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.ed18ee88.svg"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__2yeEc"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__GU5n7"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3E9dm"}},function(e,t,a){e.exports={Burger:"Burger_Burger__V1Wor"}},function(e,t,a){e.exports={Loader:"Spinner_Loader__1ecCF",load5:"Spinner_load5__2yoQP"}},function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=(a(31),a(2)),i=a(3),s=a(4),u=a(5),d=a(18),m=a.n(d),p=function(e){return e.children},h=a(10),g=a.n(h),_=a(19),b=a.n(_),E=a(20),v=a.n(E),f=function(){return r.a.createElement("img",{className:b.a.Logo,src:v.a,alt:"MyBurger",width:"38",height:"38"})},B=a(21),C=a.n(B),w=a(11),S=a.n(w),k=function(e){return r.a.createElement("li",{className:S.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?S.a.active:null},e.children))},y=function(){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(k,{link:"/",active:!0},"Burger Builder"),r.a.createElement(k,{link:"/"},"Ckeckout"))},N=a(22),O=a.n(N),j=function(e){return r.a.createElement("div",{className:O.a.DrawerToggle,onClick:e.clicked})},D=function(e){return r.a.createElement("header",{className:g.a.Header},r.a.createElement("div",{className:g.a.Toolbar},r.a.createElement(j,{clicked:e.drawerToggleClicked}),r.a.createElement(f,null),r.a.createElement("nav",null,r.a.createElement(y,null))))},I=a(7),T=a.n(I),x=a(23),H=a.n(x),M=function(e){return e.show?r.a.createElement("div",{className:H.a.Backdrop,onClick:e.hide}):null},P=a(12),L=a.n(P),A=function(e){return r.a.createElement("button",{type:"button",className:"".concat(L.a.Button," ").concat(L.a[e.btnType]),onClick:e.clicked},e.children)},R=function(e){var t=e.open?T.a.Open:T.a.Close;return r.a.createElement(p,null,r.a.createElement(M,{show:e.open,hide:e.close}),r.a.createElement("div",{className:"".concat(T.a.SideDrawer," ").concat(t)},r.a.createElement(A,{clicked:e.close,btnType:"Close"}),r.a.createElement(f,null),r.a.createElement("nav",null,r.a.createElement(y,null))))},z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerOpenedHandler=function(){e.setState({showSideDrawer:!0})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(R,{open:this.state.showSideDrawer,close:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:m.a.Content},this.props.children))}}]),a}(n.Component),q=a(9),F=a(8),W=a(24),U=a.n(W),Y=a(1),J=a.n(Y),Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:J.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:J.a.BreadTop},r.a.createElement("div",{className:J.a.Seeds1}),r.a.createElement("div",{className:J.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:J.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:J.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:J.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:J.a.Bacon});break;default:e=null}return e}}]),a}(n.Component),X=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(F.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(Q,{key:t+a,type:t})}))})).reduce((function(e,t){return[].concat(Object(F.a)(e),Object(F.a)(t))}));return 0===t.length&&(t=r.a.createElement("div",null,"Please start adding ingredients!")),r.a.createElement("div",{className:U.a.Burger},r.a.createElement(Q,{type:"bread-top"}),t,r.a.createElement(Q,{type:"bread-bottom"}))},$=a(13),G=a.n($),K=a(6),V=a.n(K),Z=function(e){return r.a.createElement("div",{className:V.a.BuildControl},r.a.createElement("div",{className:V.a.Label},e.label),r.a.createElement("button",{className:V.a.Less,type:"button",onClick:e.ingredientRemove,disabled:e.disabled},"Less"),r.a.createElement("button",{className:V.a.More,type:"button",onClick:e.ingredientAdded},"More"))},ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){return r.a.createElement("div",{className:G.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2),"$")),ee.map((function(t){return r.a.createElement(Z,{key:t.label,label:t.label,ingredientAdded:function(){return e.ingredientAdded(t.type)},ingredientRemove:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:G.a.OrderButton,onClick:e.ordered,disabled:!e.purchaseable},"ORDER NOW"))},ae=a(14),ne=a.n(ae),re=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.show!==e.show||this.props.children!==e.children}},{key:"render",value:function(){var e=this.props.show?ne.a.Show:null;return r.a.createElement(p,null,r.a.createElement(M,{show:this.props.show,hide:this.props.modalClosed}),r.a.createElement("div",{className:"".concat(ne.a.Modal," ").concat(e)},this.props.children))}}]),a}(n.Component),le=a(15),oe=a.n(le),ce=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",null,t,":")," ",r.a.createElement("span",null,e.ingredients[t]))}));return r.a.createElement("div",{className:oe.a.OrderSummary},r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",{className:oe.a.Price},r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2),"$")),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(A,{btnType:"Close",clicked:e.purchaseCanceled}),r.a.createElement(A,{btnType:"Success",clicked:e.purchaseContinued},"Continue"))},ie=a(25),se=a.n(ie),ue=function(){return r.a.createElement("div",{className:se.a.Loader},"Loading...")},de={salad:.5,bacon:.7,cheese:.4,meat:1.3},me=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{meat:0,cheese:0,salad:0,bacon:0},totalPrice:4,purchaseable:!1,purchasing:!1,loading:!1,error:!1},e.addIngHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(q.a)({},e.state.ingredients);n[t]=a;var r=e.state.totalPrice+de[t];e.setState({ingredients:n,totalPrice:r}),e.updatePurchaseState(n)},e.removeIngHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(q.a)({},e.state.ingredients);r[t]=n;var l=e.state.totalPrice-de[t];e.setState({ingredients:r,totalPrice:l}),e.updatePurchaseState(r)}},e.updatePurchaseState=function(t){var a=Object.values(t).reduce((function(e,t){return e+t}));e.setState({purchaseable:a>0})},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.setState({loading:!0}),setTimeout((function(){e.setState({loading:!1,purchasing:!1})}),1e3)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=Object(q.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=r.a.createElement(ce,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler});return this.state.loading&&(a=r.a.createElement(ue,null)),this.state.error&&(a=r.a.createElement("p",null,this.state.error.message)),r.a.createElement(p,null,r.a.createElement(re,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),r.a.createElement(X,{ingredients:this.state.ingredients}),r.a.createElement(te,{ingredientAdded:this.addIngHandler,ingredientRemove:this.removeIngHandler,disabled:e,price:this.state.totalPrice,purchaseable:this.state.purchaseable,ordered:this.purchaseHandler}))}}]),a}(n.Component);var pe=function(){return r.a.createElement("div",null,r.a.createElement(z,null,r.a.createElement(me,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.54f4bcba.chunk.js.map