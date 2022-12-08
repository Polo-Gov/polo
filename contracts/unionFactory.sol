// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

// import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract UnionFactory {
    // State variables
    address private _owner;

    struct Distrito {
        string name;
        address[] enderecos;
    }

    mapping(string => Distrito[]) public contratos;

    modifier OnlyOwner() {
        require(msg.sender == _owner, "Not allowed");
        _;
    }

    constructor(address _ownerParam) {
        _owner = _ownerParam;
    }

    function getDistritos(string memory _estado)
        public
        view
        returns (Distrito[] memory)
    {
        return contratos[_estado];
    }

    function addContract(
        string memory _estado,
        string memory _distrito,
        address _contrato
    ) public OnlyOwner returns (bool) {
        Distrito[] memory checkExistence = getDistritos(_estado);
        //Checando se o estado já existe
        if (contratos[_estado][0].enderecos[0] == address(0)) {
            address[] memory contrato;
            contrato[0] = _contrato;
            Distrito memory gasto = Distrito(_distrito, contrato);
            contratos[_estado].push(gasto);
            return true;
        }
        // Checando se o distrito já existe em um estado ja existente
        for (uint256 i; i < checkExistence.length; i++) {
            if (
                keccak256(bytes(checkExistence[i].name)) ==
                keccak256(bytes(_distrito))
            ) {
                contratos[_estado][i].enderecos.push(_contrato);
                return true;
            }
        }

        //Adicionando um gasto em um estado que já existe
        address[] memory contrato;
        contrato[0] = _contrato;
        Distrito memory gasto = Distrito(_distrito, contrato);
        contratos[_estado].push(gasto);
        return true;
    }
}
