import { Octokit } from "@octokit/rest";

// Initialize Octokit
const octokit = new Octokit();

// Type for Entry in ChangelogArray
type ChangelogEntry = {
  title: string;
  content: string;
};

// This is returned by getChangelogList()
type ChangelogArray = ChangelogEntry[];

// Gets latest release data
export async function getLatestRelease(legacyVersion: boolean) {
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

// Gets content of CHANGELOG.md and makes an array out of it
export async function getChangelogList(legacyVersion: boolean) {
  let content: any;
  let latestRelease: any;
  let isLatestRelease: boolean = false;

  try {
    // Make a request to the Github API to fetch the content of CHANGELOG.md
    content = await octokit.repos.getContent({
      owner: "Autojidelna",
      repo: legacyVersion ? "autojidelna-legacy" : "autojidelna",
      path: "CHANGELOG.md"
    });
  } catch (error) {
    console.error("Error fetching changelogs from GitHub:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }

  try {
    latestRelease = await getLatestRelease(legacyVersion);
  } catch (error) {}

  // Decodes content from base64
  // Splits content of CHANGELOG.md into seperate changelogs with title and content
  const changelogArray: ChangelogArray = decodeURIComponent(escape(atob(content.data.content)))
    .split(/(?=##)/)
    .map(entry => {
      const titleMatch = entry.match(/## (\d+\.\d+\.\d+(-\S*)?)/);

      const title = titleMatch ? titleMatch[1] : "Unknown Version";
      const content = titleMatch ? entry.replace(/## (\d+\.\d+\.\d+(-\S*)?)\n/, "") : entry;
      return { title, content };
    });

  // Deletes all changelogs for versions not yet released.
  do {
    if (changelogArray.length === 0) {
      changelogArray.push({
        title: "No Changelogs",
        content: "Currently there are no changelogs available, please try again later"
      });
      isLatestRelease = true;
    } else if (changelogArray[0].title !== latestRelease.tag_name.slice(1)) {
      changelogArray.splice(0, 1);
    } else {
      isLatestRelease = true;
    }
  } while (!isLatestRelease);

  return changelogArray;
}
