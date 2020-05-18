(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"41e4":function(t,e,s){},"69b3":function(t,e,s){"use strict";var a=s("41e4"),n=s.n(a);n.a},b802:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex"},[s("q-card",{staticClass:"my-card q-ma-sm max350",staticStyle:{width:"250px"}},[s("q-card-section",{staticClass:"flex flex-center"},[s("div",{staticClass:"text-h6"},[t._v("Datos de la Estación")]),s("q-form",{on:{submit:function(e){return t.AgregarEstacion()}}},[s("q-input",{attrs:{type:"text",label:"Estación","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Complete el campo"}]},model:{value:t.cajaestacion,callback:function(e){t.cajaestacion=e},expression:"cajaestacion"}}),s("q-input",{attrs:{type:"number",label:"Norte de la Estación","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Complete el campo"}]},model:{value:t.norteEstacion,callback:function(e){t.norteEstacion=e},expression:"norteEstacion"}}),s("q-input",{attrs:{type:"number",label:"Este de la Estación","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Complete el campo"}]},model:{value:t.esteEstacion,callback:function(e){t.esteEstacion=e},expression:"esteEstacion"}}),s("q-btn",{attrs:{color:"primary",icon:"check",label:"Agregar",type:"submit"}})],1)],1)],1),s("q-card",{staticClass:"my-card q-ma-sm q-pa-sm",staticStyle:{"max-width":"980px"}},[t._l(t.estaciones,(function(e,a){return s("div",{key:a,staticClass:"col text-center q-ma-sm"},[s("div",{staticClass:"max350 q-pa-md bg-grey-4"},[s("div",{staticClass:"text-h6"},[t._v("Añadir punto a la estacion")]),t._v("\n        Estacion: "+t._s(e.nombre)+" Norte:\n        "+t._s(e.norte)+" Este:"+t._s(e.este)+"\n        \n      \n          "),s("div",{staticClass:"row justify-end"},[s("q-btn",{attrs:{round:"",color:"primary",icon:"add"},on:{click:function(s){t.prompt=!0,t.poscicion=a,t.nor=e.norte,t.est=e.este}}})],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.prompt,callback:function(e){t.prompt=e},expression:"prompt"}},[s("q-card",{staticClass:"q-pa-md",staticStyle:{"min-width":"340px"}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Añadir punto a la estacion")]),t._v("\n              Estacion: "+t._s(e.nombre)+" Norte:\n              "+t._s(e.norte)+" Este:"+t._s(e.este)+"\n            ")]),s("q-card-section",{staticClass:"q-pt-none"}),s("q-form",{on:{submit:function(e){return t.AgregarPuntos()}}},[s("q-input",{attrs:{type:"number",step:"0.01",label:"Distancia","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Complete el campo"}]},model:{value:t.distancia,callback:function(e){t.distancia=e},expression:"distancia"}}),s("q-input",{attrs:{type:"number",label:"Grado","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Complete el campo"}]},model:{value:t.grad,callback:function(e){t.grad=e},expression:"grad"}}),s("q-input",{attrs:{type:"number",label:"Minutos","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Complete el campo"}]},model:{value:t.min,callback:function(e){t.min=e},expression:"min"}}),s("q-input",{attrs:{type:"number",label:"Segundos","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Complete el campo"}]},model:{value:t.seg,callback:function(e){t.seg=e},expression:"seg"}}),s("div",{staticClass:"flex flex-center"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),s("q-btn",{staticClass:"q-ma-sm",attrs:{color:"primary",icon:"check",label:"OK",type:"submit"}})],1)],1)],1)],1)],1),s("div",{staticClass:"q-ma-md oa"},[s("q-item-label",[t._v("Puntos:")]),s("table",[s("tr",[s("th",[t._v("Punto")]),s("th",[t._v("Distancia")]),s("th",[t._v("Grad")]),s("th",[t._v("Min")]),s("th",[t._v("Seg")]),s("th",[t._v("Rad")]),s("th",[t._v("Norte")]),s("th",[t._v("Este")])]),t._l(e.puntos,(function(e,a){return s("tr",{key:a},[s("th",[t._v(t._s(a+1))]),s("th",[t._v(t._s(e.distancia))]),s("th",[t._v(t._s(e.grados))]),s("th",[t._v(t._s(e.minutos))]),s("th",[t._v(t._s(e.segundos))]),s("th",[t._v(t._s(e.radianes))]),s("th",[t._v(t._s(e.norte))]),s("th",[t._v(t._s(e.este))])])}))],2)],1)])})),s("q-separator",{attrs:{inset:""}})],2)],1)},n=[],i={data:function(){return{cajaestacion:"A",norteEstacion:null,esteEstacion:null,distancia:null,grad:null,min:null,seg:null,poscicion:0,nor:0,est:0,prompt:!1,estaciones:[]}},methods:{AgregarEstacion:function(){this.estaciones.push({nombre:this.cajaestacion.toUpperCase(),norte:this.norteEstacion,este:this.esteEstacion,puntos:[]}),this.cajaestacion=null,this.norteEstacion=null,this.esteEstacion=null},AgregarPuntos:function(){var t=(parseInt(this.grad)+parseInt(this.min)/60+parseInt(this.seg)/3600)*Math.PI/180,e=parseInt(this.est)+parseInt(this.distancia)*Math.sin(t),s=parseInt(this.nor)+parseInt(this.distancia)*Math.cos(t);this.estaciones[this.poscicion].puntos.push({distancia:this.distancia,grados:this.grad,minutos:this.min,segundos:this.seg,radianes:t,norte:s,este:e}),this.distancia=null,this.grad=null,this.min=null,this.seg=null,this.prompt=!1}}},l=i,o=(s("69b3"),s("2877")),r=s("eebe"),c=s.n(r),u=s("9989"),p=s("f09f"),m=s("a370"),d=s("0378"),h=s("27f9"),b=s("9c40"),v=s("24e8"),f=s("0170"),_=s("eb85"),g=s("7f67"),q=Object(o["a"])(l,a,n,!1,null,null,null);e["default"]=q.exports;c()(q,"components",{QPage:u["a"],QCard:p["a"],QCardSection:m["a"],QForm:d["a"],QInput:h["a"],QBtn:b["a"],QDialog:v["a"],QItemLabel:f["a"],QSeparator:_["a"]}),c()(q,"directives",{ClosePopup:g["a"]})}}]);