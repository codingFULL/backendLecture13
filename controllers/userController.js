const dbConnection = require('../infrastucture/dataBaseConfig');

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
  dbConnection.pool.query(
    'INSERT INTO usuario (name, lastname, age, email, password) VALUES ($1, $2, $3, $4, $5) ',
    Object.values(data),
    (error, resp) => {
      if (error) {
        res.status(400).json({
          message: 'Usuario No creado',
          id: Date.now(),
        });
      }
      res.status(200).json({
        message: 'Usuario creado',
        user: resp.rows,
        id: Date.now(),
      });
    }
  );
};

exports.getUserById = (req, res, next) => {
  const userId = req.params.id;

  dbConnection.pool.query(
    'SELECT * FROM usuario WHERE userid = $1',
    [userId],
    (error, results) => {
      if (error) {
        res.status(400).json({
          message: 'Usuario No encontrado',
          id: Date.now(),
        });
      }
      res.status(200).json(results.rows);
    }
  );
};
