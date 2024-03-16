import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { dirname } from "path";

const toExecute = [
  {
    path: "vendetta/index.js",
    outputDir: "vendetta"
  },
  {
    path: "vendetta/plugins.js",
    outputDir: "vendetta"
  }
];

const DIST_DIR = "./dist";

function saveOutput(path, str) {
  const fullPath = `${DIST_DIR}/${path}`;
  const parent = dirname(fullPath);
  if (!existsSync(parent)) mkdirSync(parent, { recursive: true });
  writeFileSync(fullPath, str);
  console.log(`Saved: ${fullPath}`);
}

function makeDir(path) {
  const fullPath = `${DIST_DIR}/${path}`;
  if (!existsSync(fullPath)) mkdirSync(fullPath, { recursive: true });
  return fullPath;
}

(async () => {
  if (existsSync(DIST_DIR)) {
    console.log("Removing existing dist directory");
    rmSync(DIST_DIR, { recursive: true });
  }
  mkdirSync(DIST_DIR);
  
  for (const data of toExecute) {
    console.log(`Executing: ${data.path}`);
    const ctx = {
      saveOutput: (path, str) => saveOutput(`${data.outputDir}/${path}`, str),
      makeDir: (path) => makeDir(`${data.outputDir}/${path}`)
    }
    
    const module = await import("./"+data.path);
    await module.default(ctx);
  }
  
  console.log("Finished building!");
})();