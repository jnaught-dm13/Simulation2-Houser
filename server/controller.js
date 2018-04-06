module.exports = {
  getData: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getData()
      .then(response => res.status(200).json(response))
      .catch(err => console.log(err));
  }
};
