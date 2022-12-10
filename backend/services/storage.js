const { ethers } = require("ethers");

const { storage } = require("../utils/ether");
const { blockchainConnection } = require("../utils/ether");

class Storage {
  async getStorage() {
    // Connect provider to blockchain
    const { provider } = await blockchainConnection();
    const storageInstance = await storage();
    const storage = await storageInstance.getStorage();
    return storage;
  }
}

module.exports = Storage;