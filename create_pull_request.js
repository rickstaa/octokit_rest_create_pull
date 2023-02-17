/**
 * Small example script on how to create a pull request using the Octokit REST API.
 */

const { Octokit } = require("@octokit/rest");
require("dotenv").config();

/** Main function. */
const main = async () => {
    console.log("Creating Octokit instance..."")
    const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });

    console.log("Creating pull request...")
    const result = await octokit.pulls.create({
        owner: "jettracker-io",
        repo: "jettracker",
        title: "Test Pull Request",
        head: "rickstaa-patch-5",
        base: "main",
        body: "This is a test pull request",
    });

    console.log("Pull request created successfully");
};

main();
