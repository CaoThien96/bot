require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      chainId: 1337
    },
    scrollAlpha: {
      url: "https://alpha-rpc.scroll.io/l2",
      chainId: 534353,
      accounts: {
        mnemonic: ""
      }
    },
    gorli: {
      url: "https://arb1.arbitrum.io/rpc",
      chainId: 42161,
      accounts: {
        mnemonic: ""
      }
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
