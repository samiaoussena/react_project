import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const profiles = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House',
    phone:'+44786790889',
    email: 'cory.house@yahoo.com'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen',
    phone: '+4489900000',
    email: "allen.scott@gmail.com"
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    phone: '+44887869546',
    email: 'wahlin@gmail.com',
    lastName: 'Wahlin'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (profile) => {
  return profile.firstName.toLowerCase() + '-' + profile.lastName.toLowerCase();
};

class profileApi {
  static getAllprofiles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], profiles));
      }, delay);
    });
  }

  static saveprofile(profile) {
    profile = Object.assign({}, profile); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minprofileNameLength = 3;
        if (profile.firstName.length < minprofileNameLength) {
          reject(`First Name must be at least ${minprofileNameLength} characters.`);
        }

        if (profile.lastName.length < minprofileNameLength) {
          reject(`Last Name must be at least ${minprofileNameLength} characters.`);
        }

        if (profile.id) {
          const existingprofileIndex = profiles.findIndex(a => a.id == profile.id);
          profiles.splice(existingprofileIndex, 1, profile);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          profile.id = generateId(profile);
          profiles.push(profile);
        }

        resolve(profile);
      }, delay);
    });
  }

  static deleteprofile(profileId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfprofileToDelete = profiles.findIndex(profile => {
          return profile.profileId == profileId;
        });
        profiles.splice(indexOfprofileToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default profileApi;
