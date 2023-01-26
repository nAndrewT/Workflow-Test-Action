const core = require('@actions/core')
const github = require('@actions/github')

(
  async () => {
    try{
      core.notice("try success")
    }
    catch{
      core.setFailed(error.message)
    }
  }
)()