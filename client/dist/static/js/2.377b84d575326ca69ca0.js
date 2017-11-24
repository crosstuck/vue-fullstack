webpackJsonp([2],{376:function(e,t,n){n(406);var i=n(22)(n(394),n(416),"data-v-eb617732",null);e.exports=i.exports},385:function(e,t,n){"use strict";t.a={thing:{breadcrumb:{home:"Home",current:"Things"},model:{name:"name",description:"description"},rules:{name:"Please input the name"},edit:{create:"Add thing",update:"Update thing"}}}},386:function(e,t,n){"use strict";var i=n(385),r=n(387);t.a={"zh-CN":r.a,en:i.a}},387:function(e,t,n){"use strict";t.a={thing:{breadcrumb:{home:"首页",current:"事件管理"},model:{name:"名字",description:"描述"},rules:{name:"请输入名称"},edit:{create:"新增事件",update:"编辑事件"}}}},394:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(131),r=n.n(i),o=n(130),a=n(386);t.default={locales:a.a,data:function(){return{formVisible:!1,form:{_id:"",name:"",info:""},rules:{name:[{required:!0,message:this.$t("thing.rules.name"),trigger:"blur"}]},things:[]}},methods:{fetch:function(){var e=this;o.b.query().then(function(e){return e.json()}).then(function(t){e.things=t.results}).catch(function(e){console.error(e)})},createThing:function(){this.formVisible=!0},cancelForm:function(){this.form._id="",this.form.name="",this.form.info="",this.formVisible=!1},saveForm:function(){var e=this;this.$refs.thing.validate(function(t){if(t){var n=void 0;n=e.form._id?o.b.update({_id:e.form._id},e.form):o.b.save({},{name:e.form.name,info:e.form.info}),n.then(function(){e.cancelForm(),e.$message({type:"success",message:e.form._id?e.$t("message.updated"):e.$t("message.created")}),e.fetch()}).catch(function(){})}})},editThing:function(e){r()(this.form,e),this.formVisible=!0},deleteThing:function(e){var t=this;this.$confirm("This action will remove the selected thing: "+e.name+" forever, still going on?",this.$t("confirm.title"),{type:"warning"}).then(function(){o.b.delete({_id:e._id}).then(function(){t.$message({type:"success",message:t.$t("message.removed")}),t.fetch()})}).catch(function(){})}},created:function(){this.fetch()}}},401:function(e,t,n){t=e.exports=n(372)(!0),t.push([e.i,".box-card[data-v-eb617732]{display:inline-block;width:20rem;height:15rem;margin:.5rem}.box-card .icon[data-v-eb617732]{float:right;margin-left:.5rem;color:#8492a6;cursor:pointer}.box-card .icon[data-v-eb617732]:hover{color:#20a0ff}","",{version:3,sources:["/home/travis/build/erguotou520/vf-backend/client/src/view/ThingList.vue"],names:[],mappings:"AACA,2BACE,qBAAsB,AACtB,YAAa,AACb,aAAc,AACd,YAAe,CAChB,AACD,iCACE,YAAa,AACb,kBAAoB,AACpB,cAAe,AACf,cAAgB,CACjB,AACD,uCACE,aAAe,CAChB",file:"ThingList.vue",sourcesContent:["\n.box-card[data-v-eb617732] {\n  display: inline-block;\n  width: 20rem;\n  height: 15rem;\n  margin: 0.5rem;\n}\n.box-card .icon[data-v-eb617732] {\n  float: right;\n  margin-left: 0.5rem;\n  color: #8492a6;\n  cursor: pointer;\n}\n.box-card .icon[data-v-eb617732]:hover {\n  color: #20a0ff;\n}"],sourceRoot:""}])},406:function(e,t,n){var i=n(401);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(373)("3a2e5ecc",i,!0)},416:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-module",{attrs:{name:"things"}},[n("el-breadcrumb",{staticStyle:{"margin-bottom":".5rem"},attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:"/dashboard"}},[e._v(e._s(e.$t("thing.breadcrumb.home")))]),e._v(" "),n("el-breadcrumb-item",[e._v(e._s(e.$t("thing.breadcrumb.current")))])],1),e._v(" "),n("div",{staticStyle:{"margin-bottom":".5rem"}},[n("el-button",{attrs:{type:"primary",icon:"plus"},nativeOn:{click:function(t){e.createThing(t)}}},[e._v(e._s(e.$t("operation.create")))])],1),e._v(" "),n("div",e._l(e.things,function(t){return n("el-card",{key:t._id,staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(t.name))]),e._v(" "),n("i",{staticClass:"el-icon-delete icon",on:{click:function(n){e.deleteThing(t)}}}),e._v(" "),n("i",{staticClass:"el-icon-edit icon",on:{click:function(n){e.editThing(t)}}})]),e._v(" "),n("p",[e._v("\n        "+e._s(t.info)+"\n      ")])])})),e._v(" "),n("el-dialog",{attrs:{title:e.form._id?e.$t("thing.edit.update"):e.$t("thing.edit.create")},model:{value:e.formVisible,callback:function(t){e.formVisible=t},expression:"formVisible"}},[n("el-form",{ref:"thing",attrs:{model:e.form,rules:e.rules}},[n("el-form-item",{attrs:{label:e.$t("thing.model.name"),prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("thing.model.description")}},[n("el-input",{model:{value:e.form.info,callback:function(t){e.$set(e.form,"info",t)},expression:"form.info"}})],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(t){e.cancelForm(t)}}},[e._v(e._s(e.$t("confirm.cancel")))]),e._v(" "),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.saveForm(t)}}},[e._v(e._s(e.$t("confirm.ok")))])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.377b84d575326ca69ca0.js.map