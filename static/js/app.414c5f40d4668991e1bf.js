webpackJsonp([1],{"5xos":function(t,e){},BCme:function(t,e){},GZZq:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("Gu7T"),o=n.n(s),i=n("mvHQ"),r=n.n(i),l=n("hlPV"),c={components:{TheMask:l.TheMask},data:function(){return{name:"",number:"",perent:""}},props:{addContact:{type:Function},list:{type:Array}},methods:{add:function(t){var e=this.number.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/,"+7 ($1) $2-$3-$4");this.number.length>=10&&(this.addContact({name:this.name,number:e,perent:this.perent}),this.close(),this.name="",this.number="",this.perent=""),t.preventDefault()},close:function(){this.$emit("close")}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-background"},[n("div",{staticClass:"modal"},[n("header",{staticClass:"modal-header"},[t._m(0),t._v(" "),n("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.close}},[t._v("\n        x\n      ")])]),t._v(" "),n("form",{attrs:{id:"contanct-form"},on:{submit:t.add}},[n("section",{staticClass:"modal-body"},[n("label",{staticClass:"modal-field"},[n("p",[t._v("Имя")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",pattern:"^[A-Za-zА-Яа-яЁё]+$",placeholder:"Введите имя...",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("label",{staticClass:"modal-field"},[n("p",[t._v("Телефон")]),t._v(" "),n("the-mask",{attrs:{mask:["+7 (###) ###-##-##"],placeholder:"Введите номер телефона...",required:""},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),t._v(" "),n("label",{staticClass:"modal-field"},[n("p",[t._v("Начальник")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.perent,expression:"perent"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.perent=e.target.multiple?n:n[0]}}},t._l(t.list,function(e){return n("option",{key:e.index},[t._v("\n              "+t._s(e.name)+"\n            ")])}),0)])]),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Добавление пользователя")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"modal-footer"},[e("input",{staticClass:"btn-green",attrs:{type:"submit",value:"Сохранить"}})])}]};var u={data:function(){return{list:[],isModalVisible:!1,sorted:!1}},components:{Modal:n("VU/8")(c,d,!1,function(t){n("BCme")},null,null).exports},methods:{showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},addContact:function(t){t.perent?this.list.map(function(e){e.name===t.perent&&e.child.push({name:t.name,number:t.number,child:[]})}):this.list.push({name:t.name,number:t.number,child:[]})},getContacts:function(){if(localStorage.getItem("contacts"))try{this.list=JSON.parse(localStorage.getItem("contacts"))}catch(t){this.list=[]}},saveContacts:function(){var t=r()(this.list);localStorage.setItem("contacts",t)},sortContacts:function(){this.list=this.sorted?[].concat(o()(this.list)).sort(function(t,e){return t.name.localeCompare(e.name)}):[].concat(o()(this.list)).sort(function(t,e){return e.name.localeCompare(t.name)}),this.sorted=!this.sorted}},mounted:function(){this.getContacts()},created:function(){window.addEventListener("unload",this.saveContacts)}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn-addContanct",on:{click:t.showModal}},[t._v("Добавить")]),t._v(" "),n("table",[n("thead",[n("th",{staticStyle:{cursor:"pointer"},on:{click:t.sortContacts}},[t._v("Имя")]),t._v(" "),n("th",[t._v("Телефон")])]),t._v(" "),t._l(t.list,function(e){return n("tbody",{key:e.index},[n("tr",{staticClass:"table-perent"},[n("td",[n("strong",[t._v(t._s(e.name))])]),t._v(" "),n("td",[t._v(t._s(e.number))])]),t._v(" "),t._l(e.child,function(e){return n("tr",{key:e.index,staticClass:"table-child"},[n("td",[n("strong",[t._v(t._s(e.name))])]),t._v(" "),n("td",[t._v(t._s(e.number))])])})],2)})],2),t._v(" "),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],attrs:{addContact:t.addContact,list:t.list},on:{close:t.closeModal}})],1)},staticRenderFns:[]};var p={components:{Table:n("VU/8")(u,m,!1,function(t){n("GZZq")},"data-v-7a69c386",null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Table")],1)},staticRenderFns:[]};var h=n("VU/8")(p,v,!1,function(t){n("5xos")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:h},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.414c5f40d4668991e1bf.js.map