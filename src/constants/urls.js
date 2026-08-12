const githubUsername = "ufukgulec";
const mediumUsername = "ufukgulec";

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

export const ALLOWED_HOSTNAMES = ["ufukgulec.github.io", "localhost", "127.0.0.1"];
export const isAllowedHost = () => ALLOWED_HOSTNAMES.includes(window.location.hostname);

export const CONTACT_FORM_ENDPOINT = "https://api.web3forms.com/submit";

const REVERSED_B64_ACCESS_KEY = "ygTNxgjYyQTZ5ADZtQTNmJWL1EWM00iN0YDNtUmZidTZkRDM";
export const WEB3FORMS_ACCESS_KEY = atob(REVERSED_B64_ACCESS_KEY.split("").reverse().join(""));

export const RESUME_URL = "./assets/resume.pdf";