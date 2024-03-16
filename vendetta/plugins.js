import fsExtra from "fs-extra";

export default async function(ctx) {
  fsExtra.copySync("./vendetta/plugins/dist", ctx.makeDir("plugins"));
  console.log("Copied built Vendetta plugins");
}