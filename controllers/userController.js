// include node fs module
var fs = require('fs');

exports.createUser = (req, res, next) => {
  const name = req.body.name;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;

  const data = {
    name,
    lastName,
    age,
    email,
    password,
  };

  fs.writeFile(
    `./users/${name}-${Date.now().toString()}.txt`,
    JSON.stringify(data),
    function (err) {
      if (err) throw err;
      console.log('File is created successfully.');
    }
  );

  res.status(200).json({
    message: 'Usuario creado',
    id: Date.now(),
  });
};
