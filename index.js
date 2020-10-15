const core = require('@actions/core');
const github = require('@actions/github');
const Axios = require('axios');

console.log("workflow started....");

const owner = context.payload.sender.login;
if (owner.includes("[bot]"))
{
    console.log("Avoiding bot comments....");
    process.exit(0);
}

async function getRandomJoke() {
    const url = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist"
    try {
        const response = await Axios.get(url);
        return parseJoke(response.data)
    } catch (err) {
        core.setFailed(`GetChuckText:${err.message}`);
        console.log(" Error in getting a joke");
        return '';
    }
}

function parseJoke(jsonData) {
    console.log("got a joke ....");
    const data = jsonData;
    var jokeMarkDown = "";
    if (data.type === 'single') {
        jokeMarkDown = data.joke
    }
    else if (data.type === 'twopart') {
        jokeMarkDown = data.setup + "\n" + data.delivery;
    }
    return jokeMarkDown
}


async function run(joke) {
    try {
        const github_token = core.getInput('GITHUB_TOKEN');
        const context = github.context;
        var event = github.context.eventName;
        var greetMsg;
        if (event === 'pull_request') {
            greetMsg = 'Thanks for opening this PR :blue_heart: .\nContributors :people_holding_hands:  like you make the open source community :earth_africa:  such an amazing place to learn :book: , inspire :angel:, and create :art: .\nWe will review it :eyes: and get back to you as soon as possible :+1: . Just make sure you have followed the contribution guidelines.\n\nBy that time enjoy this joke :point_down: , hope you like it :smile:'
        }
        else if (event === 'issues') {
            greetMsg = 'Thanks for your contribution :blue_heart: .\nContributors :people_holding_hands:  like you make the open source community :earth_africa:  such an amazing place to learn :book: , inspire :angel:, and create :art: .\nWe will investigate :eyes:  and get back to you as soon as possible :+1: . Just make sure you have given us sufficient information :information_source:.\n\nBy that time enjoy this joke :point_down: , hope you like it :smile:'
        }

        console.log(`Running on ${event}......`);


       // console.log(`eventname: ${github.context.eventName}`)
       // console.log(`payload sender: ${JSON.stringify(github.context.payload.sender, undefined, 2)}`)
        // console.log(`workflow: ${github.context.workflow}`)
       // console.log(`payload: ${JSON.stringify(github.context.payload, undefined, 2)}`)


        var issueNumber;
        if (event === 'pull_request') {
            issueNumber = context.payload.pull_request.number;
        }
        else if (event === 'issues') {
            issueNumber = context.payload.issue.number;
        }

        const octokit = github.getOctokit(github_token);

        console.log(`got this joke: ${joke}`)
        console.log("commenting...")
        
        const comment = await octokit.issues.createComment({
            issue_number: issueNumber,
            owner: context.payload.repository.owner.login,
            repo: context.payload.repository.name,
            body: `Hi, @${owner},\n${greetMsg}\n>${joke}\n\nUse this [action](https://github.com/deep5050/MastJokeMara)  on your projects.`
        })
        core.setOutput('comment-url', comment.data.html_url);
    } catch (error) {
        core.setFailed(error.message);
    }
}




getRandomJoke().then((data) => {
    console.log(`joke: ${data}`);
    run(data);
}).catch((err) => {
    core.setFailed(`Error: ${err}`)
})