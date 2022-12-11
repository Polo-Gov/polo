// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Acoes {
    uint256[] public acoesCount;
    mapping(uint256 => mapping(uint256 => string)) public idAcoes;

    constructor(uint256 _donosAmount) {
        for (uint256 i = 0; i < _donosAmount; i++) {
            acoesCount.push(0);
        }
    }

    function _addDonoStatus() internal returns (bool) {
        acoesCount.push(0);
        return true;
    }

    function _addStatus(uint256 _idDono, string memory _status)
        internal
        returns (bool)
    {
        uint256 idToAdded = acoesCount[_idDono] + 1;
        idAcoes[_idDono][idToAdded] = _status;
        acoesCount[_idDono] = idToAdded;
        return true;
    }

    function _removeStatus(uint256 _idDono) internal returns (bool) {
        for (uint256 i = 0; i <= acoesCount[_idDono]; i++) {
            delete idAcoes[_idDono][i];
        }
        for (uint256 i = _idDono; i < acoesCount.length; i++) {
            acoesCount[i] = acoesCount[i + 1];
        }
        acoesCount.pop();
        return true;
    }

    function _seeAllStatusCount() internal view returns (uint256[] memory) {
        return acoesCount;
    }
}
