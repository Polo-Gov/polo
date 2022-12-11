// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./imovel.sol";

contract Factory {
    mapping(address => bool) public owner; // Enderecos permitidos da uniao
    address[] public owners;

    event NewImovel(address imovel);

    modifier isUnion() {
        require(owner[msg.sender], "You dont have permission for this action");
        _;
    }

    constructor(address[] memory _owners) {
        owners = _owners;
        for (uint256 i = 0; i < _owners.length; i++) {
            owner[_owners[i]] = true;
        }
    }

    function addUnion(address _newUnion) public isUnion returns (bool) {
        owners.push(_newUnion);
        owner[_newUnion] = true;
        return true;
    }

    function removeUnion(address _union) public isUnion returns (bool) {
        owner[_union] = false;
        for (uint256 i = 0; i < owners.length; i++) {
            if (owners[i] == _union) {
                for (uint256 index = i; index < owners.length - 1; index++) {
                    owners[index] = owners[index + 1];
                }
            }
        }
        owners.pop();
        return true;
    }

    function createImovel(
        uint256 _idPredio,
        uint256[] memory _prazo,
        address[] memory _donos,
        bool[] memory _status,
        string[] memory _condicoes,
        uint256[] memory _valorCobranca,
        uint256[] memory _dataProxCobranca,
        uint256[][] memory _datasRecebimento,
        uint256[][] memory _valoresRecebimento
    ) public isUnion returns (address) {
        Imovel novoImovel = new Imovel(
            owners,
            _idPredio,
            _prazo,
            _donos,
            _status,
            _condicoes,
            _valorCobranca,
            _dataProxCobranca,
            _datasRecebimento,
            _valoresRecebimento
        );
        emit NewImovel(address(novoImovel));

        return address(novoImovel);
    }
}
