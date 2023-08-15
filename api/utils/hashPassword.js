import bcrypt from 'bcrypt';

const hashPassword = (password) => {
  const saltRounds = 10;

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });
};

export default hashPassword;
