import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.AUGUSTO_GITHUB_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  try {
    const userInfo = await getUserInfo('augustosplett');
    
    if (userInfo) {
      res.status(200).json(userInfo);
    } else {
      res.status(500).json({ error: 'Unable to fetch user info' });
    }
  } catch (error) {
    console.error('Error in handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getUserInfo(user) {
  try {
    const response = await octokit.rest.users.getByUsername({ username: user });
    const info = response.data;
    return {
      userName: info.login,
      avatar_url: info.avatar_url,
      name: info.name,
      location: info.location,
      bio: info.bio,
      public_repos: info.public_repos
    };
  } catch (error) {
    console.error('Error to get profile info:', error);
    return null; // Ensure it returns null on error
  }
}
