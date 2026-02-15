export async function getGitHubRepos() {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;
    console.log("Username:", username);
    console.log("Using token:", token ? "Yes" : "No");
    const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
            {
                headers: {
                Authorization: `token ${token}`,
                },
            }
    );

    const repos = await res.json();
    return repos;
}
