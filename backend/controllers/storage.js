const storage = require("../services/storage");
const Storage = new storage.storage();

async function getStorage(req, res) {
  try {
    const data = await Storage.getStorage();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}

module.exports = {
  getStorage,
};
