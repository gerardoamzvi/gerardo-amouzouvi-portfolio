
import { getGitHubRepos } from "@/lib/github";

export default async function ProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My GitHub Projects</h1>
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