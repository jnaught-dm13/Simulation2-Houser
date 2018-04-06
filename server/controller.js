module.exports = {
  getData: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getData()
      .then(response => res.status(200).json(response))
      .catch(err => console.log(err));
  },
  addProperty: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, address, city, state, zip } = req.body;
    dbInstance
      .addProperty([name, address, city, state, zip])
      .then(() => res.status(200).json())
      .catch(err => console.log(err));
  },
  removeProperty: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .removeProperty([id])
      .then(response => res.status(200).json(response))
      .catch(err => console.log(err));
  }
};
