const core = require('@actions/core');
const github = require('@actions/github');
const Axios = require('axios');

console.log("workflow started....");
async function getRandomJoke() {
    const url = "https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist"
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
        jokeMarkDown = data.setup + "\n\n" + data.delivery;
    }
    return jokeMarkDown

}


async function run() {
    try {
        var joke = "";

        const github_token = core.getInput('GITHUB_TOKEN');

        const context = github.context;

        console.log(`eventname: ${github.context.eventName}`)
        console.log(`payload sender: ${JSON.stringify(github.context.payload.sender, undefined, 2)}`)
        console.log(`workflow: ${github.context.workflow}`)
        console.log(`payload: ${JSON.stringify(github.context.payload, undefined, 2)}`)


        var issueNumber = context.payload.issue.number;;
        /*if (context.payload.pull_request.number !== undefined) {
            issueNumber = context.payload.pull_request.number;
        } else {
            issueNumber = context.payload.issue.number;
        }
*/
        const octokit = github.getOctokit(github_token);
            
        getRandomJoke().then((data, err) => {
            joke = data
        })

        console.log(`got this joke: ${joke}`)

        console.log("commenting...")

 

        const comment = await octokit.issues.createComment({
            issue_number: issueNumber,
            owner: 'deep5050',
            repo: 'MastJokeMara',
            body: `Hi, ${owner}\n\nThanks for your contribution. Contributors like you make the open source community such an amazing place to be learn, inspire, and create.\n\nHere is a little gift for you,hope you like it :\n\n${joke}`
        })


        core.setOutput('comment-url', comment.data.html_url);
    } catch (error) {
        core.setFailed(error.message);
    }
}




run();