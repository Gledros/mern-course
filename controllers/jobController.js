
const createJob = (request, response) => {
  response.send('create job')
}

const deleteJob = (request, response) => {
  response.send('delete job')
}

const getAllJobs = (request, response) => {
  response.send('get all jobs')
}

const updateJob = (request, response) => {
  response.send('update job')
}

const showStats = (request, response) => {
  response.send('show stats')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }
