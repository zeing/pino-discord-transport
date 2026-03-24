import { build } from "bun";

const outputs = [
  { format: "esm", outfile: "dist/index.js" },
  { format: "cjs", outfile: "dist/index.cjs" },
] as const;

for (const { format, outfile } of outputs) {
  const result = await build({
    entrypoints: ["./index.ts"],
    outdir: "dist",
    format,
    target: "node",
    external: ["discord.js", "pino-abstract-transport"],
    naming: outfile.replace("dist/", ""),
    minify: {
      whitespace: true,
      identifiers: true,
      syntax: true,
    },
    drop: ["console"],
    sourcemap: "inline",
  });

  if (!result.success) {
    console.error(`Build failed for ${format}:`);
    for (const log of result.logs) console.error(log);
    process.exit(1);
  }

  console.log(`Built ${format} → ${outfile}`);
}
