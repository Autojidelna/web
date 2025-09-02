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

    // Reusable regex for semantic versions (with optional pre-release or build tags)
    const versionRegex = /## (\d+\.\d+\.\d+(?:[-+][\w.]+)?)/;

    const changelogArray: ChangelogEntry[] = decoded
      .split(/(?=##)/)
      .map(entry => {
        const titleMatch = entry.match(versionRegex);
        if (!titleMatch) return null; // skip sections without versions

        const title = titleMatch[1];
        const body = entry.replace(versionRegex, "").trim();

        return { title, content: body };
      })
      .filter((entry): entry is ChangelogEntry => entry !== null);

    return changelogArray;
  } catch (error) {
    console.error("Error fetching changelogs from GitHub:", error);
    return [];
  }
}
