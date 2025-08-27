import { Octokit } from "@octokit/rest";

// Initialize Octokit
const octokit = new Octokit();

// Gets latest release data
export async function getLatestRelease(legacyVersion: boolean = false) {
  try {
    // Make a request to the GitHub API to fetch latest release
    const latestRelease = await octokit.repos.getLatestRelease({
      owner: "Autojidelna",
      repo: legacyVersion ? "autojidelna-legacy" : "autojidelna"
    });

    // Return the fetched data
    return latestRelease.data;
  } catch (error) {
    console.error("Error fetching latest release data from GitHub:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
}
