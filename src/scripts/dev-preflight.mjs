import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const lockPath = path.join(projectRoot, ".next", "dev", "lock");

if (!fs.existsSync(lockPath)) {
  process.exit(0);
}

try {
  fs.unlinkSync(lockPath);
  console.log("Removed stale Next.js dev lock.");
} catch (error) {
  const code = error && typeof error === "object" ? error.code : "";

  if (code === "EPERM" || code === "EBUSY") {
    console.error("Next.js dev lock is currently in use by another process.");
    console.error("Run `npm run stop:dev` and try again.");
    process.exit(1);
  }

  throw error;
}
