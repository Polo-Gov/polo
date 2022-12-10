/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const Web3 = require("web3");
require("dotenv").config({ path: "./test/.env" });
const HDWalletProvider = require("@truffle/hdwallet-provider");
let privateKey1Buffer = Buffer.from(process.env.PRIVATE_KEY, "hex");
module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  alfajores: {
    provider: new HDWalletProvider({
      privateKeys: [process.env.PRIVATE_KEY],
      providerOrUrl: `https://celo-alfajores.infura.io/v3/${process.env.INFURA_API_KEY}`,
    }),
    network_id: 44787,
    gas: 6500000,
  },
};
