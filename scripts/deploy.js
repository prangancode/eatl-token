const hre = require("hardhat");

async function main() {
  const EatlToken = await hre.ethers.getContractFactory("EatlToken");
  const eatlToken = await EatlToken.deploy(100000000, 50);

  await eatlToken.deployed();

  console.log("Eatl Token deployed: ", eatlToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
