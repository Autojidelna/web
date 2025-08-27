import { defineLoader } from "vitepress";
import { ReleaseWithChangelogs } from "../types/types.ts";
import { fetchRelease } from "./fetchRelease.ts";
import { fetchChangelogs } from "./fetchChangelogs.ts";

export default defineLoader({
  async load(): Promise<{ legacy: ReleaseWithChangelogs; latest: ReleaseWithChangelogs }> {
    let legacyRelease, latestRelease, legacyChangelogs, latestChangelogs;

    try {
      legacyRelease = await fetchRelease("autojidelna-legacy");
    } catch (e) {
      console.error("Failed to fetch legacy release:", e);
      legacyRelease = {} as any;
    }

    try {
      latestRelease = await fetchRelease("autojidelna");
    } catch (e) {
      console.error("Failed to fetch latest release:", e);
      latestRelease = {} as any;
    }

    try {
      legacyChangelogs = await fetchChangelogs("autojidelna-legacy");
    } catch (e) {
      console.error("Failed to fetch legacy changelogs:", e);
      legacyChangelogs = [];
    }

    try {
      latestChangelogs = await fetchChangelogs("autojidelna");
    } catch (e) {
      console.error("Failed to fetch latest changelogs:", e);
      latestChangelogs = [];
    }

    return {
      legacy: {
        legacy: true,
        repo: "https://github.com/Autojidelna/autojidelna-legacy",
        release: legacyRelease,
        changelogs: legacyChangelogs
      },
      latest: {
        legacy: false,
        repo: "https://github.com/Autojidelna/autojidelna",
        release: latestRelease,
        changelogs: latestChangelogs
      }
    };
  }
});

declare const data: {
  legacy: ReleaseWithChangelogs;
  latest: ReleaseWithChangelogs;
};
export { data };
