
import merge from "webpack-merge";
class Rt {
  constructor(_this) {
    this.self = _this
  }
  addParams(parmas) {
    this.self.$router.replace({
      query: merge(this.self.$route.query, parmas)
    });
  }
  getParams() {
    return this.self.$route.query
  }
}
export default Rt