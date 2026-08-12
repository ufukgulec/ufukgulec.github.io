const githubUsername = "vinaysomawat";
const mediumUsername = "vinaysomawat";

const createMediumURL = (username) => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;
const gitRepos = (username) => `https://pinned.berrysauce.dev/get/${username}`;
const gitContributionGraph = (username) => `https://ghchart.rshah.org/4F8CFF/${username}`;

export const URLs = {
  medium: createMediumURL(mediumUsername),
  gitConnected: createGitConnectedURL(githubUsername),
  gitRepo: gitRepos(githubUsername),
  gitContributionGraph: gitContributionGraph(githubUsername),
  githubProfile: `https://github.com/${githubUsername}`,
  buyMeACoffee: "https://buymeacoffee.com/r194dme8y/c/19242327",
};

// This is a static, client-only site — anything shipped here is visible in devtools/view-source
// no matter how it's encoded. The obfuscation below only stops a plain-text grep/GitHub-code-search
// hit on the raw key; it is NOT a substitute for server-side enforcement. The real protection is the
// "Restrict Domain" setting on this access key in the Web3Forms dashboard, which makes Web3Forms
// reject submissions whose Origin/Referer isn't vinaysomawat.github.io.
export const ALLOWED_HOSTNAMES = ["vinaysomawat.github.io", "localhost", "127.0.0.1"];
export const isAllowedHost = () => ALLOWED_HOSTNAMES.includes(window.location.hostname);

export const CONTACT_FORM_ENDPOINT = "https://api.web3forms.com/submit";

const REVERSED_B64_ACCESS_KEY = "ygTNxgjYyQTZ5ADZtQTNmJWL1EWM00iN0YDNtUmZidTZkRDM";
export const WEB3FORMS_ACCESS_KEY = atob(REVERSED_B64_ACCESS_KEY.split("").reverse().join(""));

export const RESUME_URL = "./assets/resume.pdf";
