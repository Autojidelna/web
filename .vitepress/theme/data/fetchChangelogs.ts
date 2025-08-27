import { Octokit } from "@octokit/rest";
import type { ChangelogEntry } from "../types/types.ts";

const octokit = new Octokit();

export async function fetchChangelogs(repo: string) {
  try {
    const result = await octokit.repos.getContent({
      owner: "Autojidelna",
      repo: repo,
      path: "CHANGELOG.md"
    });

    if (Array.isArray(result.data)) {
      throw new Error("Expected CHANGELOG.md to be a file, but got a directory");
    }

    if (!("content" in result.data) || !result.data.content) {
      throw new Error("CHANGELOG.md has no content");
    }

    // Decode base64 content and split by version headings
    const decoded = Buffer.from(result.data.content, "base64").toString("utf-8");
    const changelogArray: ChangelogEntry[] = decoded.split(/(?=##)/).map(entry => {
      const titleMatch = entry.match(/## (\d+\.\d+\.\d+(?:[-+][\w.]+)?)/);
      const title = titleMatch ? titleMatch[1] : "Unknown Version";
      const body = titleMatch ? entry.replace(/## (\d+\.\d+\.\d+(?:[-+][\w.]+)?)\n/, "") : entry;
      return { title, content: body };
    });

    return changelogArray;
  } catch (error) {
    console.error("Error fetching changelogs from GitHub:", error);
    return [];
  }
}
