const fs = require("fs");
const path = require("path");

// Read environment variables
const url =
  process.env.VITE_APP_URL || "https://mini-zkramp-6b9fe97756fb.herokuapp.com";

// Create the manifest object
const manifest = {
  url,
  name: "Mini ZK Ramp",
  iconUrl: `${url}/logo.svg`,
};

// Define the output path for the JSON file
const outputPath = path.join(__dirname, "dist", "tonconnect-manifest.json");

// Ensure the dist directory exists
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

// Write the JSON file
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log(`Manifest generated at ${outputPath}`);
