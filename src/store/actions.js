export default {
  actshownotify(context, data) {
    context.commit("shownotify", data);
  },
  actemptynotify(context) {
    context.commit("emptynotify");
  },
  actshowloading(context) {
    context.commit("showloading");
  },
  actemptyloading(context) {
    context.commit("emptyloading");
  },
  actlogin(context, data) {
    context.commit("login", data);
  },
  actgetonoff(context) {
    context.commit("getonoff");
  },
  actsetonoff(context) {
    context.commit("setonoff");
  }
}
