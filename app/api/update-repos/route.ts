import fs from "fs";
import path from "path";
import { getGitHubRepos } from "@/lib/github";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {

    const authHeader = req.headers.get("Authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {

        const repos = await getGitHubRepos();
        const filePath = path.join(process.cwd(), "public", "repos.json");
        fs.writeFileSync(filePath, JSON.stringify(repos, null, 2));

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to update repos" }, { status: 500 });
    }
}