import fs from "fs";
import { getGitHubRepos } from "../lib/github";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
  try {
    const repos = await getGitHubRepos(); 
    fs.writeFileSync("public/repos.json", JSON.stringify(repos, null, 2));

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update repos" }, { status: 500 });
  }
}