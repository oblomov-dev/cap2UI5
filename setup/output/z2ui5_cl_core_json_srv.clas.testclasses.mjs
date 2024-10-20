const {z2ui5_cl_core_json_srv} = await import("./z2ui5_cl_core_json_srv.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_json_srv.clas.testclasses.abap
class ltcl_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_JSON_SRV-LTCL_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"REQUEST_JSON_TO_ABAP": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async request_json_to_abap() {
    let lv_payload = new abap.types.String({qualifiedName: "STRING"});
    let lo_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_JSON_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_JSON_SRV"});
    let ls_result = new abap.types.Structure({"o_model": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "s_front": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ID"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-VIEW"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "event": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-EVENT"}), "o_comp_data": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "origin": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-SEARCH"}), "hash": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-HASH"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_front", undefined, {}, {}), "s_control": new abap.types.Structure({"check_launchpad": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_CONTROL-APP_START"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_control", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_http_request_post", undefined, {}, {});
    let temp11 = new abap.types.Structure({"o_model": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "s_front": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ID"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-VIEW"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "event": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-EVENT"}), "o_comp_data": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "origin": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-SEARCH"}), "hash": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-HASH"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_front", undefined, {}, {}), "s_control": new abap.types.Structure({"check_launchpad": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_CONTROL-APP_START"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_control", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_http_request_post", undefined, {}, {});
    let ls_exp = new abap.types.Structure({"o_model": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "s_front": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ID"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-VIEW"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "event": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-EVENT"}), "o_comp_data": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "origin": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-SEARCH"}), "hash": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-HASH"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_front", undefined, {}, {}), "s_control": new abap.types.Structure({"check_launchpad": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_CONTROL-APP_START"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_control", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_http_request_post", undefined, {}, {});
    let temp12 = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
    let lt_tree = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
    let temp13 = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    let temp14 = new abap.types.Integer({qualifiedName: "I"});
    lv_payload.set(abap.operators.concat(new abap.types.String().set(`{"XX":{"NAME":"test"},"S_FRONT":{"ID":"ID_NR","EDIT":{"NAME":"test"},"ORIGIN":"ORIGIN","PATHNAME":"PATHNAME","SEARCH":"SEARCH"`),new abap.types.String().set(`,"VIEW":"MAIN","EVENT":"BUTTON_POST","T_EVENT_ARG":[]}}`)));
    lo_mapper.set(await (new abap.Classes['Z2UI5_CL_CORE_JSON_SRV']()).constructor_());
    ls_result.set((await lo_mapper.get().request_json_to_abap({val: lv_payload})));
    abap.statements.clear(temp11);
    abap.statements.clear(temp11.get().s_front);
    temp11.get().s_front.get().id.set(new abap.types.String().set(`ID_NR`));
    temp11.get().s_front.get().view.set(new abap.types.String().set(`MAIN`));
    temp11.get().s_front.get().origin.set(new abap.types.String().set(`ORIGIN`));
    temp11.get().s_front.get().pathname.set(new abap.types.String().set(`PATHNAME`));
    temp11.get().s_front.get().search.set(new abap.types.String().set(`SEARCH`));
    temp11.get().s_front.get().event.set(new abap.types.String().set(`BUTTON_POST`));
    ls_exp.set(temp11);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_result.get().s_front, exp: ls_exp.get().s_front});
    abap.statements.clear(temp12);
    lt_tree.set(temp12);
    lt_tree.set(ls_result.get().o_model.get().z2ui5_if_ajson$mt_json_tree);
    temp14.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(lt_tree,{into: temp13,
      withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`NAME`));},
      withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`NAME`)}],
      usesTableLine: false,
      withKeySimple: {"name": new abap.types.String().set(`NAME`)}});
    abap.builtin.sy.get().tabix.set(temp14);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: temp13.get().value, exp: new abap.types.String().set(`test`)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.lines({val: lt_tree}), exp: abap.IntegerFactory.get(3)});
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_JSON_SRV-LTCL_TEST'] = ltcl_test;
export {ltcl_test};
//# sourceMappingURL=z2ui5_cl_core_json_srv.clas.testclasses.mjs.map