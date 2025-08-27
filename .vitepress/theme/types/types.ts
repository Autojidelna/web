import type { Endpoints, GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export type AppRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>;

export type ChangelogEntry = {
  title: string;
  content: string;
};

export type ReleaseWithChangelogs = {
  legacy: boolean;
  repo: string;
  release: AppRelease;
  changelogs: ChangelogEntry[];
};
