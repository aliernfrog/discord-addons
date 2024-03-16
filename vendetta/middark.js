const obj = {
  name: "MidDark",
  description: "Replaces dark theme colors with midnight theme's",
  authors: [{
    name: "aliernfrog",
    id: "459370047652102154"
  }],
  semanticColors: {}
}

const COLORS_BASE_URL = "https://raw.githubusercontent.com/nexpid/VendettaThemeUtil/main/colors";

async function build() {
  console.log("Fetching latest Discord version from colors tracker");
  const latestRes = await fetch(COLORS_BASE_URL+"/latest");
  const latestVersion = (await latestRes.text()).trim();
  
  console.log(`Fetching colors for "${latestVersion}"`);
  const colorsRes = await fetch(COLORS_BASE_URL+"/"+latestVersion+"/SemanticColors.json");
  const colors = await colorsRes.json();
  
  console.log("Adding colors");
  Object.entries(colors).forEach(([key, value]) => {
    obj.semanticColors[key] = [
      value.colors.midnight ?? value.colors.darker
    ];
  });
  
  return obj;
}

export default async function(ctx) {
  console.log("Building MidDark..")
  const str = JSON.stringify(await build());
  ctx.saveOutput("themes/middark.json", str);
  console.log("Successfully built MidDark");
}