const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

async function build() {
    const ctx = await esbuild.context({
        entryPoints: ["frontend/Application.tsx", "frontend/style.scss"],
        outdir: "public/assets",
        bundle: true,
        minify: true,
        plugins: [sassPlugin()],
    });

    // Enable watch mode
    await ctx.watch();
    console.log("👀 Watching for changes...");
}

build().catch(() => process.exit(1));
