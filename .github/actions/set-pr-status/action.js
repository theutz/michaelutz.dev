const { Toolkit } = require("actions-toolkit");

const tools = new Toolkit();

const { owner, repo } = tools.context.repo;
const { sha } = tools.context;
const { state, description } = tools.inputs;

tools.github.repos
  .createStatus({
    owner,
    repo,
    sha,
    state,
    description,
    target_url: `https://www.github.com/${owner}/${repo}/commit/${sha}/checks`,
  })
  .then(() => {
    tools.exit.success();
  })
  .catch((error) => {
    tools.log.fatal(error);
    tools.exit.failure();
  });
