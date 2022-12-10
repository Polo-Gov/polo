// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract Condicoes {
    mapping(uint256 => string[]) public condicoes; // As condições para cada dono

    constructor(uint256 _donosAmount, string[][] memory _condicoes) {
        for (uint256 i = 0; i < _donosAmount; i++) {
            condicoes[i] = _condicoes[i];
        }
    }

    function _addNewDonoCondition(uint256 _donoId, string[] memory _condicoes)
        internal
        returns (bool)
    {
        condicoes[_donoId] = _condicoes;
        return true;
    }

    function _removeDonoCondition(uint256 _donoId) internal returns (bool) {
        delete condicoes[_donoId];
        return true;
    }

    function _addNewCondition(uint256 _donoId, string memory _newCondicao)
        internal
        returns (bool)
    {
        condicoes[_donoId].push(_newCondicao);
        return true;
    }
}
