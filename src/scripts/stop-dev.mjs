import { spawnSync } from "node:child_process";

const projectPath = process.cwd().replace(/\\/g, "\\\\");

if (process.platform !== "win32") {
  console.log("`npm run stop:dev` is currently implemented for Windows only.");
  process.exit(0);
}

const command = [
  "$targets = Get-CimInstance Win32_Process | Where-Object {",
  "  $_.Name -eq 'node.exe' -and",
  `  $_.CommandLine -match '${projectPath}' -and`,
  "  $_.CommandLine -match 'next\\\\dist\\\\bin\\\\next\\\" dev'",
  "};",
  "if (-not $targets) { Write-Output 'No local Next dev process found.'; exit 0 }",
  "$targets | ForEach-Object {",
  "  Stop-Process -Id $_.ProcessId -Force;",
  "  Write-Output (\"Stopped process \" + $_.ProcessId)",
  "};",
].join("\n");

const result = spawnSync(
  "powershell.exe",
  ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", command],
  {
    stdio: "inherit",
  }
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
