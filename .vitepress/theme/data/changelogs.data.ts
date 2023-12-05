import { defineLoader } from "vitepress";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

type ChangelogEntry = {
	title: string;
	content: string;
};

type ChangelogArray = ChangelogEntry[];

declare const data: ChangelogArray;
export { data };

export default defineLoader({
	async load(): Promise<ChangelogArray> {
		const content = await octokit.repos.getContent({
			owner: "Autojidelna",
			repo: "autojidelna",
			path: "CHANGELOG.md",
		});

		const changelogArray: ChangelogArray = Buffer.from((content.data as any).content, "base64")
			.toString()
			.split(/(?=##)/)
			.map((entry) => {
				const titleMatch = entry.match(/## (\d+\.\d+\.\d+(-\S*)?)/);

				const title = titleMatch ? titleMatch[1] : "Unknown Version";
				const content = titleMatch ? entry.replace(/## (\d+\.\d+\.\d+(-\S*)?)\n/, "") : entry;

				return { title, content };
			});

		const release = await octokit.repos.getLatestRelease({
			owner: "Autojidelna",
			repo: "autojidelna",
		});

		var isLatestRelease = false;
		do {
			if (changelogArray[0].title !== release.data.tag_name.slice(1)) {
				changelogArray.splice(0, 1);
			} else {
				isLatestRelease = !isLatestRelease;
			}
		} while (!isLatestRelease);

		return changelogArray;
	},
});
