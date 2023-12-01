import { defineLoader } from "vitepress";
import { Octokit } from "@octokit/rest";
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

const octokit = new Octokit();

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>;

declare const data: GitHubRelease;
export { data };

export default defineLoader({
	async load(): Promise<GitHubRelease> {
		const { data: stable } = await octokit.repos.getLatestRelease({
			owner: "Autojidelna",
			repo: "autojidelna",
		});

		return stable;
	},
});
