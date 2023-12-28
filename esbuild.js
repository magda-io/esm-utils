import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["./src/esmUtils.ts"],
  bundle: true,
  platform: "node",
  target: ["node16"],
  outdir: 'dist',
  format: 'esm'
});
