// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./functions/acoes.sol";
import "./functions/condicoes.sol";
import "./functions/historicoRecebimento.sol";

contract Imovel is Acoes, Condicoes, HistoricoRecebimento {
    // State variables

    mapping(address => bool) public owner; // Enderecos permitidos da uniao
    uint256 public idPredio; // Id do imovel no nosso banco de dados
    address[] public donos; // Os dono do imóvel
    uint256[] public prazo; // Prazos contratuais com cada dono
    bool[] public status; // Status da locação do imóvel de cada dono
    uint256[] public valorCobranca; // Valor a ser cobrado de cada dono
    uint256[] public dataProxCobranca; // Data da prox cobranca de cada dono

    // Modifiers

    modifier isUnion() {
        require(owner[msg.sender], "You dont have permission for this action");
        _;
    }

    modifier isDono() {
        bool dono;
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == msg.sender) dono = true;
        }
        require(dono, "You dont have permission for this action");
        _;
    }

    // Constructor

    constructor(
        address[] memory _owners,
        uint256 _idPredio,
        uint256[] memory _prazo,
        address[] memory _donos,
        bool[] memory _status,
        string[] memory _condicoes,
        uint256[] memory _valorCobranca,
        uint256[] memory _dataProxCobranca,
        uint256[][] memory _datasRecebimento,
        uint256[][] memory _valoresRecebimento
    )
        Acoes(_donos.length)
        Condicoes(_donos.length, _condicoes)
        HistoricoRecebimento(
            _donos.length,
            _datasRecebimento,
            _valoresRecebimento
        )
    {
        for (uint256 i = 0; i < _owners.length; i++) {
            owner[_owners[i]] = true;
        }
        donos = _donos;
        idPredio = _idPredio;
        prazo = _prazo;
        status = _status;
        for (uint256 i = 0; i < _donos.length; i++) {
            valorCobranca.push(_valorCobranca[i]);
            dataProxCobranca.push(_dataProxCobranca[i]);
        }
    }

    // Functions

    // Criação e remoção de donos e membros da uniao

    function addOwnerUnion(address _newUnion) public isUnion {
        owner[_newUnion] = true;
    }

    function removeOwnerUnion(address _unionMember) public isUnion {
        owner[_unionMember] = false;
    }

    function addDono(
        address _newDono,
        uint256 _prazo,
        bool _status,
        string memory _condicoes,
        uint256 _valorCobranca,
        uint256 _dataProxCobranca,
        uint256[] memory _datasRecebimento,
        uint256[] memory _valoresRecebimento
    ) public isUnion {
        uint256 newDonoId = donos.length;

        donos.push(_newDono);
        prazo.push(_prazo);
        status.push(_status);
        Condicoes._addNewDonoCondition(newDonoId, _condicoes);
        valorCobranca.push(_valorCobranca);
        dataProxCobranca.push(_dataProxCobranca);
        Acoes._addDonoStatus();
        HistoricoRecebimento._addNewDonoHistoricoRecebimento(
            newDonoId,
            _datasRecebimento,
            _valoresRecebimento
        );
    }

    function removeDono(address _dono) public isUnion {
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == _dono) {
                for (uint256 index = i; index < donos.length - 1; index++) {
                    Acoes._removeStatus(i);
                    donos[index] = donos[index + 1];
                    prazo[index] = prazo[index + 1];
                    status[index] = status[index + 1];
                    valorCobranca[index] = valorCobranca[index + 1];
                    dataProxCobranca[index] = dataProxCobranca[index + 1];
                }
                Condicoes._removeDonoCondition(i);
                delete HistoricoRecebimento.historicoRecebimento[i];
            }
        }
        donos.pop();
        prazo.pop();
        status.pop();
        valorCobranca.pop();
        dataProxCobranca.pop();
    }

    // Updates functions

    function updateAcoes(address _dono, string memory _acao) public isUnion {
        uint256 donoId;
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == _dono) {
                donoId = i;
            }
        }
        Acoes._addStatus(donoId, _acao);
    }

    function updatePrazo(address _dono, uint256 _newPrazo) public isUnion {
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == _dono) {
                prazo[i] = _newPrazo;
            }
        }
    }

    function updateStatus(address _dono, bool _newStatus) public isUnion {
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == _dono) {
                status[i] = _newStatus;
            }
        }
    }

    function updateValorCobranca(address _dono, uint256 _newValorCobranca)
        public
        isUnion
    {
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == _dono) {
                valorCobranca[i] = _newValorCobranca;
            }
        }
    }

    function updateDataProxCobranca(address _dono, uint256 _newDataProxCobranca)
        public
        isUnion
    {
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == _dono) {
                dataProxCobranca[i] = _newDataProxCobranca;
            }
        }
    }

    function updateCondicoes(address _dono, string memory _condicao)
        public
        isUnion
    {
        uint256 donoId;
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == _dono) {
                donoId = i;
            }
        }
        Condicoes._addNewCondition(donoId, _condicao);
    }

    function updateHistoricoRecebimento(
        address _dono,
        uint256 _dataRecebimento,
        uint256 _valorRecebimento
    ) public isUnion {
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == _dono) {
                HistoricoRecebimento._addNewHistoricoRecebimento(
                    i,
                    _dataRecebimento,
                    _valorRecebimento
                );
            }
        }
    }
}
