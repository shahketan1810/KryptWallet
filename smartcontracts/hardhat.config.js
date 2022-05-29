require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "http://127.0.0.1:8545",
      accounts: ["02562ce05299ff330a923397c481a8b8342d3f51ddc8dde06d904a23bc14f293",
                  "46c74ba08867ac63aa0b22447e8e4bffa3a46952124333309f58cdce872d0ae0"]
    }
  }
};
