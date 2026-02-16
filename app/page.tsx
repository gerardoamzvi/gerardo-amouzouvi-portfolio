import { getGitHubRepos } from "@/lib/github";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Gérardo AMOUZOUVI - Portfolio",
  description: "This is Gérardo AMOUZOUVI's portfolio",
  keywords: ["Gérardo AMOUZOUVI","gerardo amouzouvi","gerardo amouzouvi portfolio","gerardo amouzouvi projects",
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


export default async function ProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gérardo AMOUZOUVI's projects</h1>
      <h2 className="text-3xl font-bold mb-4">GitHub Projects</h2>
      <ul>
        {repos.map((repo: any) => (
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