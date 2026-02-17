import fs from "fs";
import { getGitHubRepos } from "@/lib/github";

async function updateReposJSON() {
  try {
    const repos = await getGitHubRepos();
    fs.writeFileSync("public/repos.json", JSON.stringify(repos, null, 2));
    console.log("✅ repos.json updated!");
  } catch (error) {
    console.error("❌ Failed to update repos:", error);
  }
}

updateReposJSON();
