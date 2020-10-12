const core = require('@actions/core');
const github = require('@actions/github');
const { default: Axios } = require('axios');


async function getRandomJoke() {
    const url = "https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist"
    try {
        const response = await Axios.get(url);
        return parseJoke(response.data)
    } catch (err) {
        core.setFailed(`GetChuckText:${err.message}`);
        return '';
    }
}

function parseJoke(jsonData) {
    const data = jsonData;
    var jokeMarkDown = "";
    if (data.type === 'single') {
        jokeMarkDown = data.joke
    }
    else if (data.type === 'twopart') {
        jokeMarkDown = data.setup + "\n\n" + data.delivery;
    }
    return jokeMarkDown

}


async function run() {
    try {
        const github_token = core.getInput('GITHUB_TOKEN');

        const context = github.context;
        if (context.payload.pull_request == null || context.payload.issue == null) {
            core.setFailed('No PR/issue found.');
            return;
        }
        const issueNumber = context.payload.pull_request.number || context.payload.issue.number;

        const octokit = new github.GitHub(github_token);
        var joke = "";

        getRandomJoke().then((data, err) => {
            joke = data
        })
        console.log(`got this joke: ${joke}`)

        console.log("commenting...")

        const comment = octokit.issues.createComment({
            issue_number: issueNumber,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: `Hi, ${owner}\n\nThanks for your contribution. Contributors like you make the open source community such an amazing place to be learn, inspire, and create.\n\nHere is a little gift for you,hope you like it :\n\n${joke}`
        })


        core.setOutput('comment-url', comment.data.html_url);
    } catch (error) {
        core.setFailed(error.message);
    }
}

getRandomJoke().then((data, err) => {
    joke = data
})