const prompt = require('prompt');

const schema = {
  properties: {
    password: {
      hidden: true
    }
  }
};

module.exports = {
  getPassword: function getPassword() {
    return new Promise((resolve, reject) => {
      prompt.start();
      prompt.get(schema, function(error, result) {
        if (error) {
          return reject(error);
        }

        return resolve(result.password);
      });
    });
  }
};

// module.exports = {
//   getPassword: async function getPassword() {
//     let returnPassword;
//
//     await prompt.start();
//     await prompt.get(schema, function(error, result){
//       // this does not resolve
//       returnPassword = result.password;
//     });
//
//     return returnPassword;
//   }
// };
