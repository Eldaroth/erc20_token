const AfepToken = artifacts.require("AfepToken");

module.exports = function (deployer) {
    const _name = "AFEPtoken";
    const _symbol = "AFEP";
    const _decimals = 18;
    const _initialSupply = 1000;

    deployer.deploy(AfepToken, _name, _symbol, _decimals, _initialSupply);
};
