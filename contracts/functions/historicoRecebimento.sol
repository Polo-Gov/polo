// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract HistoricoRecebimento {
    struct Contas {
        uint256 data;
        uint256 valor;
    }
    mapping(uint256 => Contas[]) public historicoRecebimento; // Historico de pagamentos de ônus

    constructor(
        uint256 _donosSize,
        uint256[][] memory _datasRecebimento,
        uint256[][] memory _valoresRecebimento
    ) {
        for (uint256 i = 0; i < _donosSize; i++) {
            for (
                uint256 index = 0;
                index < _datasRecebimento[i].length;
                index++
            ) {
                historicoRecebimento[i].push(
                    Contas(
                        _datasRecebimento[i][index],
                        _valoresRecebimento[i][index]
                    )
                );
            }
        }
    }

    function _addNewDonoHistoricoRecebimento(
        uint256 _newDonoId,
        uint256[] memory _datasRecebimento,
        uint256[] memory _valoresRecebimento
    ) internal returns (bool) {
        for (uint256 i = 0; i < _datasRecebimento.length; i++) {
            historicoRecebimento[_newDonoId].push(
                Contas(_datasRecebimento[i], _valoresRecebimento[i])
            );
        }
        return true;
    }

    function _addNewHistoricoRecebimento(
        uint256 _donoId,
        uint256 _dataRecebimento,
        uint256 _valorRecebimento
    ) internal returns (bool) {
        historicoRecebimento[_donoId].push(
            Contas(_dataRecebimento, _valorRecebimento)
        );
        return true;
    }
}
