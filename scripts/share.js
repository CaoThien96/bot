const { ethers } = require("hardhat");

const getAccount = (index) => {
    const seed = ethers.utils.mnemonicToSeed(process.env.MEMONIC);
    const HDnode = ethers.utils.HDNode.fromSeed(seed);
    let node = HDnode.derivePath(`m/44'/60'/0'/0/${index}`);

    const walletPrivateKey = new ethers.Wallet(node.privateKey)
    const signer = walletPrivateKey.connect(ethers.provider)
    return {
        privateKey: node.privateKey,
        account: node.address,
        signer
    }
}
module.exports = {
    getAccount
}