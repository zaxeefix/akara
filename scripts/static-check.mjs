import { existsSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "package.json",
  "next.config.js",
  "tsconfig.json",
  "render.yaml",
  "vercel.json",
  "prisma/schema.prisma",
  "prisma/migrations/20260705203000_initial_schema/migration.sql"
];

const missingFiles = requiredFiles.filter((file) => !existsSync(join(process.cwd(), file)));

if (missingFiles.length > 0) {
  console.error("Static check failed. Missing required file(s):");
  for (const file of missingFiles) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log("Static checks passed successfully.");
