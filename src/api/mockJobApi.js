import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const jobs = [
  {
    id: "job1",
    title: "cleaning house",
    description: "3 beds cleaning for 3 hours",
    location: "Woking",
    creatorId: "cory-house",
    length: "6:20",
    category: "house",
    startingOn: "12/02/2018",
    createdOn: "12/01/2017"
  },
  {
    id: "job2",
    title: "gardening",
    description: "tidy the garden 2 hours",
    location: "Guilford",
    creatorId: "cory-house",
    length: "6:20",
    category: "house",
    startingOn: "12/02/2018",
    createdOn: "12/01/2017"
  },
  {
    id: "job3",
    title: "cleaning house",
    description: "2 beds cleaning for 3 hours",
    location: "London",
    creatorId: "cory-house",
    length: "6:20",
    category: "house",
    startingOn: "12/02/2018",
    createdOn: "12/01/2017"
  },
  {
    id: "job4",
    title: "cleaning house",
    description: "3 beds cleaning for 3 hours",
    location: "Woking",
    creatorId: "cory-house",
    length: "6:20",
    category: "Cleaning",
    startingOn: "12/02/2018",
    createdOn: "12/01/2017"
  },
  {
    id: "job5",
    title: "cleaning house",
    description: "3 beds cleaning for 3 hours",
    location: "Woking",
    creatorId: "cory-house",
    length: "6:20",
    category: "Cleaning",
    startingOn: "12/02/2018",
    createdOn: "12/01/2017"
  },
  {
    id: "job6",
    title: "cleaning house",
    description: "3 beds cleaning for 3 hours",
    location: "Woking",
    creatorId: "cory-house",
    length: "6:20",
    category: "house",
    startingOn: "12/02/2018",
    createdOn: "12/01/2017"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (job) => {
  return replaceAll(job.title, ' ', '-');
};

class jobApi {
  static getAlljobs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], jobs));
      }, delay);
    });
  }

  static savejob(job) {
    job = Object.assign({}, job); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minjobTitleLength = 1;
        if (job.title.length < minjobTitleLength) {
          reject(`Title must be at least ${minjobTitleLength} characters.`);
        }

        if (job.id) {
          const existingjobIndex = jobs.findIndex(a => a.id == job.id);
          jobs.splice(existingjobIndex, 1, job);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new jobs in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          job.id = generateId(job);
          jobs.push(job);
        }

        resolve(job);
      }, delay);
    });
  }

  static deletejob(jobId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfjobToDelete = jobs.findIndex(job => {
          return job.jobId == jobId;
        });
        jobs.splice(indexOfjobToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default jobApi;
