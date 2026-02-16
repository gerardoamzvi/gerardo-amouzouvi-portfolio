export async function getGitHubRepos() {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;
    //console.log("Username:", username);
    //console.log("Using token:", token ? "Yes" : "No");

    const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
            {
                headers: {
                Authorization: `token ${token}`,
                },
                cache: "force-cache",
                next: { revalidate: 3600 },
            }
    );
    const data = await res.json();

  // shrink payload (critical for Lighthouse)
  return data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description,
    stargazers_count: repo.stargazers_count,
  }));
}



