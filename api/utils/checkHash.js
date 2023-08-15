import bcrypt from "bcrypt";

const checkHash = (pass, dbPass) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, dbPass, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

export default checkHash;

