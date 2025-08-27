import { Octokit } from "@octokit/rest";
import type { AppRelease } from "../types/types";

const octokit = new Octokit();

export async function fetchRelease(repo: string): Promise<AppRelease> {
  try {
    const { data } = await octokit.repos.getLatestRelease({
      owner: "Autojidelna",
      repo: repo
    });
    return data;
  } catch (error) {
    console.error(`Error fetching release for ${repo}:`, error);
    return {} as AppRelease;
  }
}
