// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

// import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Imovel {
    // State variables
    struct Contas {
        uint256 data;
        uint256 valor;
    }

    mapping(address => bool) public owner; // Enderecos permitidos da uniao
    uint256 public idPredio; // Id do imovel no nosso banco de dados
    address[] public donos; // Os dono do imóvel
    uint256[] public prazo; // Prazos contratuais com cada dono
    bool[] public status; // Status da locação do imóvel de cada dono
    mapping(uint256 => string[]) public condicoes; // As condições para cada dono
    uint256[] public valorCobranca; // Valor a ser cobrado de cada dono
    uint256[] public dataProxCobranca; // Data da prox cobranca de cada dono
    mapping(uint256 => Contas[]) public historicoRecebimento; // Historico de pagamentos de ônus

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
        string[][] memory _condicoes,
        uint256[] memory _valorCobranca,
        uint256[] memory _dataProxCobranca,
        uint256[][] memory _datasRecebimento,
        uint256[][] memory _valoresRecebimento
    ) {
        for (uint256 i = 0; i < _owners.length; i++) {
            owner[_owners[i]] = true;
        }
        donos = _donos;
        idPredio = _idPredio;
        prazo = _prazo;
        status = _status;
        for (uint256 i = 0; i < _donos.length; i++) {
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

            condicoes[i] = _condicoes[i];
            valorCobranca[i] = _valorCobranca[i];
            dataProxCobranca[i] = _dataProxCobranca[i];
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
        condicoes[newDonoId] = [_condicoes];
        valorCobranca[newDonoId] = _valorCobranca;
        dataProxCobranca[newDonoId] = _dataProxCobranca;
        for (uint256 i = 0; i < _datasRecebimento.length; i++) {
            historicoRecebimento[newDonoId].push(
                Contas(_datasRecebimento[i], _valoresRecebimento[i])
            );
        }
    }

    function removeDono(address _dono) public isUnion {
        for (uint256 i = 0; i < donos.length; i++) {
            if (donos[i] == _dono) {
                for (uint256 index = i; index < donos.length; index++) {
                    donos[index] = donos[index + 1];
                    prazo[index] = prazo[index + 1];
                    status[index] = status[index + 1];
                    valorCobranca[index] = valorCobranca[index + 1];
                    dataProxCobranca[index] = dataProxCobranca[index + 1];
                }
                condicoes[i] = [""];
                delete historicoRecebimento[i];
            }
        }
        donos.pop();
        prazo.pop();
        status.pop();
        valorCobranca.pop();
        dataProxCobranca.pop();
    }
}
