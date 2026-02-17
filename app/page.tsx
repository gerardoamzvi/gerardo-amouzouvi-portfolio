import fs from "fs";
import path from "path";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Gérardo AMOUZOUVI - Portfolio",
  description: "This is Gérardo AMOUZOUVI's portfolio website, showcasing projects, skills, and contact information.",
  keywords: ["Gérardo AMOUZOUVI", "gerardo amouzouvi", "gerardo amouzouvi portfolio", "gerardo amouzouvi projects",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  },
  openGraph: {
    title: "Gérardo AMOUZOUVI - Portfolio",
    description: "Portfolio of Gérardo AMOUZOUVI, computer science student.",
    url: "https://gerardo-amouzouvi.vercel.app",
    siteName: "gerardo-amouzouvi.vercel.app",
    type: "website",
    locale: "en_US",
    //alternateLocale: ["fr_FR"],
  },
};


export const dynamic = "force-static";


export default async function ProjectsPage() {
  const filePath = path.join(process.cwd(), "public", "repos.json");

  let repos = [];

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    repos = JSON.parse(fileData);
  } catch (error) {
    console.warn("repos.json not found or invalid, using empty list");
    repos = [];
  }
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gérardo AMOUZOUVI's projects</h1>
      <h2 className="text-3xl font-bold mb-4">GitHub Projects</h2>
      <ul>
        {repos.length === 0 ? (
          <p>No projects yet.</p>)
          : repos.map((repo: any) => (
            <li key={repo.id} className="mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {repo.name} ⭐ {repo.stargazers_count}
              </a>
              {repo.description && <p>{repo.description}</p>}
            </li>
          ))}
      </ul>
    </div>
  );
}