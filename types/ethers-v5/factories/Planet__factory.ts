/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Planet } from "../Planet";

export class Planet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressRepository: string,
    name: string,
    x: BigNumberish,
    y: BigNumberish,
    overrides?: Overrides
  ): Promise<Planet> {
    return super.deploy(
      addressRepository,
      name,
      x,
      y,
      overrides || {}
    ) as Promise<Planet>;
  }
  getDeployTransaction(
    addressRepository: string,
    name: string,
    x: BigNumberish,
    y: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressRepository,
      name,
      x,
      y,
      overrides || {}
    );
  }
  attach(address: string): Planet {
    return super.attach(address) as Planet;
  }
  connect(signer: Signer): Planet__factory {
    return super.connect(signer) as Planet__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Planet {
    return new Contract(address, _abi, signerOrProvider) as Planet;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressRepository",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "x",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "y",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "resource2",
        type: "address",
      },
    ],
    name: "NewResourcePair",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        internalType: "address",
        name: "resource2",
        type: "address",
      },
    ],
    name: "addResourcePair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xe340a0fc",
        type: "bytes32",
      },
    ],
    name: "c_0xe340a0fc",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getCoordinates",
    outputs: [
      {
        internalType: "uint16",
        name: "x",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "y",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource",
        type: "address",
      },
    ],
    name: "getResourceLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        internalType: "address",
        name: "resource2",
        type: "address",
      },
    ],
    name: "getResourcePair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        internalType: "address",
        name: "resource2",
        type: "address",
      },
    ],
    name: "getResourcePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        internalType: "address",
        name: "resource2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount2out",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620041e1380380620041e1833981810160405260808110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660018202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000cd578082015181840152602081019050620000b0565b50505050905090810190601f168015620000fb5780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291908051906020019092919050505060006200012b6200058860201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350620001fd7f3515fb330f819bdb0916ba1efaf15f3f32fcdba135c3a701ab078d65cb22633960001b6200059060201b60201c565b620002317fcffc68f132653fec97c02aa25e30708d085592501abb8f1fba87c5ffac5b590160001b6200059060201b60201c565b620002657f844612f73eab2815f3b64dbe7047d67ffe7003c8fa5c5906f172b42be3801f9a60001b6200059060201b60201c565b83600260046101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002da7f776bb7811d72aaa0593e34ea71062e313794afc1d3fdc9a79f4823ceb12b56c060001b6200059060201b60201c565b6200030e7f70ff51d83e04643aa1bf3c2f114bfc1031e4f0c4c198552711580258bb125b8660001b6200059060201b60201c565b600260049054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a3568d076040518163ffffffff1660e01b815260040160206040518083038186803b1580156200037757600080fd5b505afa1580156200038c573d6000803e3d6000fd5b505050506040513d6020811015620003a357600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620004287fa15998cef49a51a70d8807f98d661494cc9c37546164ed67ed1cb282cf9572b660001b6200059060201b60201c565b6200045c7f26e324dc5d15ae5a212bfc090f76654eb06630d24e8e8f9b2cd3b8dd8e8c5cc360001b6200059060201b60201c565b82600190805190602001906200047492919062000593565b50620004a97fdd40f0a41870c48132597043bbc06394e6326f7e87296239f1f6caed21abf0ca60001b6200059060201b60201c565b620004dd7f532588c32fe8ee10043deeb22b314eafceaa0040950370747e3597d29f59ac5560001b6200059060201b60201c565b81600260006101000a81548161ffff021916908361ffff1602179055506200052e7f0499cd67d060b4ccd8bb0fb5137b6a4e76f27258daa3c0cfac601ed062ff0a0360001b6200059060201b60201c565b620005627f4cedcfc1353cf4aa40b1ac654adbc92700d55945bfdedf6f6f12c6fd7972844360001b6200059060201b60201c565b806002806101000a81548161ffff021916908361ffff1602179055505050505062000639565b600033905090565b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620005d657805160ff191683800117855562000607565b8280016001018555821562000607579182015b8281111562000606578251825591602001919060010190620005e9565b5b5090506200061691906200061a565b5090565b5b80821115620006355760008160009055506001016200061b565b5090565b613b9880620006496000396000f3fe60806040523480156200001157600080fd5b5060043610620000b85760003560e01c8063715018a6116200007b578063715018a61462000313578063750a4937146200031f5780638da5cb5b146200034e5780639c7d75331462000384578063f2fde38b14620003b5578063fe02915614620003fc57620000b8565b806312b487f214620000bd57806317d7de7c14620001385780632df20fef14620001c05780633a6ee271146200021b57806344fcc11514620002ac575b600080fd5b6200012260048036036040811015620000d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062000477565b6040518082815260200191505060405180910390f35b62000142620007d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156200018457808201518184015260208101905062000167565b50505050905090810190601f168015620001b25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6200020560048036036020811015620001d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062000903565b6040518082815260200191505060405180910390f35b62000280600480360360408110156200023357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062000a3b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6200031160048036036040811015620002c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062000d9a565b005b6200031d62001427565b005b62000329620015b0565b604051808361ffff1681526020018261ffff1681526020019250505060405180910390f35b6200035862001665565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b620003b3600480360360208110156200039c57600080fd5b81019080803590602001909291905050506200168e565b005b620003fa60048036036020811015620003cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062001691565b005b62000475600480360360808110156200041457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050620018a1565b005b6000620004a77fc3675879dd58a4f4d6a3705c538af06b66fc59270117b239e3f7760ba4483ea260001b6200168e565b620004d57f9fe709afd9e635168c3c20ea1f2e032f418592a672fb7a9742272cfffc967ab660001b6200168e565b620005037fbde65eb77aaf2aa8f0487d6f345adf103da3911ecee70736c0bfc99846583c1460001b6200168e565b600062000511848462000a3b565b9050620005417fcd4992d1580a7782a0211e2a5d93112b9ef6165469cf38dbf885af6aabb07c7060001b6200168e565b6200056f7fad29492fb01bc5ade36b7bb1c55c272de84d0bcc1dc727b21d470194583eb04a60001b6200168e565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161015620006bb57620005d27f647c9db3322eb216e5c683d01f465545a4c210df8cfb5688d5b51f49f7334db660001b6200168e565b620006007f90724ea17bc64ed049c905dda931696cf73872b40c4a2edc936926b9e55875d760001b6200168e565b6200062e7f7f8b1e66323bd36f730158052bcceffbd6bb71ed185f3b861ef1c14da54a076a60001b6200168e565b8073ffffffffffffffffffffffffffffffffffffffff1663090c18c26040518163ffffffff1660e01b815260040160206040518083038186803b1580156200067557600080fd5b505afa1580156200068a573d6000803e3d6000fd5b505050506040513d6020811015620006a157600080fd5b8101908080519060200190929190505050915050620007cd565b620006e97fb5366b94647133caa89524e0a65c5a0acf678ec9bbf396045804778a774167e160001b6200168e565b620007177fd89fbc5e9d980c2cbb6117f015041df847092ca3c7845b96a22d273fcc81426960001b6200168e565b620007457f607bcfc77a6b18b66d7778bd02f03a722a10ffec587f876bcf1d6b1170f00cb060001b6200168e565b8073ffffffffffffffffffffffffffffffffffffffff1663e97af1866040518163ffffffff1660e01b815260040160206040518083038186803b1580156200078c57600080fd5b505afa158015620007a1573d6000803e3d6000fd5b505050506040513d6020811015620007b857600080fd5b81019080805190602001909291905050509150505b92915050565b6060620008037fbcc2ff534dd0c45dcb66859b230640b55f4c01630d2c07594b2a14fd8090435760001b6200168e565b620008317f9b16d68529d94e3f974188398b3fd9c2d85e575f143866e21effd161f9a4a1b460001b6200168e565b6200085f7f612f7a0c34706d33df19d0385163b4f880090e046c3b8e4175ba53d0c5e5f7b360001b6200168e565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015620008f95780601f10620008cd57610100808354040283529160200191620008f9565b820191906000526020600020905b815481529060010190602001808311620008db57829003601f168201915b5050505050905090565b6000620009337f7a7a5484a30351b56114dd1705c4aae8a515973795f2b8fe98a860e9e30f31f660001b6200168e565b620009617f41bb436c7e60e4eeeec38300ef0f5079c80c20be48dc84cb636e637584ec38ec60001b6200168e565b6200098f7fa161262a0b563ccf5d1810b4f5fb06c85b1bcc4fb36ff0552dae68d7790dc3f660001b6200168e565b8173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015620009f757600080fd5b505afa15801562000a0c573d6000803e3d6000fd5b505050506040513d602081101562000a2357600080fd5b81019080805190602001909291905050509050919050565b600062000a6b7fa9ef777af2c5a6ed1f324de4c397ab63b6cac8fdf8b54462042d97e65f40c80e60001b6200168e565b62000a997f0c6545523fe32f6f853a3dbe99ac49691e68ff65064e743516438fb7bb283b6b60001b6200168e565b62000ac77f885874e2de39180d765ce144f08f77c569ad901dbe7727f011553197317de78c60001b6200168e565b62000ad38383620022df565b809350819450505062000b097f973aafd17479c0bd619842abeb8079d99ae60595a30f415772bba6e767974ab660001b6200168e565b62000b377fcc71ac0e3b330aea3ab52f4772e617b9d7f01c3ab63cec3e750fb7a382d7307d60001b6200168e565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905062000c067f0bc037861d8d221f4272652f03a6497e8d35b760885cc6b73fdcbf446b7e958c60001b6200168e565b62000c347f3e139c409f3a32c081830270c9a09319a15726a0cb522a86b267afad18f15b0860001b6200168e565b62000c627fa219884b32bd9a0f13037bfbc9947bd9fef352572883205b37cd2e54e61589b360001b6200168e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000d06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f546f6b656e2070616972207761736e277420666f756e6400000000000000000081525060200191505060405180910390fd5b62000d347f97ffbe486f08adadfa5eec06f97668568805ba8b87b2a9084807463f27b08af160001b6200168e565b62000d627fa7833a403cd97f4f2a2258fbdd336c723b33d09d71143b38ccefb404116578e160001b6200168e565b62000d907f1b850686e3ded1d362b53f7ed5eea56da0d3422186183dd40ac3b712de48811d60001b6200168e565b8091505092915050565b62000da4620024cf565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161462000e65576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b62000e937f2e402e2725683303fddfe62aaec6df53cb07bcb829c32be8f836a3cef7dcc95060001b6200168e565b62000ec17f9d27c00cf325caf09424287036553b05b81678b72062314c01483893c8e946f360001b6200168e565b62000eef7f424b0a413726144cf129ab0970815085d715b4216ac26f916af0a0f1a466d92f60001b6200168e565b62000efb8282620022df565b809250819350505062000f317f94cc45c20fb94f181b51f61273dfe0e2e63c5e5fb528b96c78135159e6b5f1f760001b6200168e565b62000f5f7f39a9b6b02ebd674dd5b8a0ec4153c9e1b197686a1fbd339c46378c5d3fc9c3ad60001b6200168e565b600030838360405162000f7290620024d7565b808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050604051809103906000f08015801562000fe9573d6000803e3d6000fd5b5090506200101a7f441f1dc0eb30cf65e252a4ab89bfe1d427cf76428efdab83f5787fe15948508860001b6200168e565b620010487f394b03f4a50c980fe52c1b08b5c95158809cb1a2da90f716dbbf4c56f96ff7cc60001b6200168e565b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620011317fb336cc050d3603a3b21d4cc097a03a558042788bfb88d88303db4962b229de6460001b6200168e565b6200115f7fb756c5201382aca63de8440ab206f6b6578152433a15914343ecb09af47d595260001b6200168e565b8273ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015620011f157600080fd5b505af115801562001206573d6000803e3d6000fd5b505050506040513d60208110156200121d57600080fd5b8101908080519060200190929190505050506200125d7f25b0ee114d540556a59dd968c99a933a3112486b771d6713ab51fedb4a53f78a60001b6200168e565b6200128b7f3df27638aa981d6c5de2e20db06f990c8480434fd9149812a67ded13bb1a4a4e60001b6200168e565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156200131d57600080fd5b505af115801562001332573d6000803e3d6000fd5b505050506040513d60208110156200134957600080fd5b810190808051906020019092919050505050620013897fa3f8dee9bfbeb17b2c6e40180b1dcdcf0f51e63acdcea3a3818cfa7f98df910b60001b6200168e565b620013b77f766dd386a4ac95359d5375a3495e86de0264698016488d522faaac621f036dc260001b6200168e565b7f0d0a4ce1296ea49962718a1d8bf8d30c6fb5f69de1e2998f24ab197f7bb790e18383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b62001431620024cf565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614620014f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600080620015e17f86f1f3fd82c0c1f61c42d964d700f4a2cdc9a0539e8767b314c70dbe1809f99660001b6200168e565b6200160f7f8832f97c27af9cd6d02e6d1d957ccbffe8e9889a2b958b3f29a616154add800260001b6200168e565b6200163d7fc72ff168bf69eec776164065c70c23a0541a63512f8f2aa3181b274bdcf714a460001b6200168e565b600260009054906101000a900461ffff1660028054906101000a900461ffff16915091509091565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b50565b6200169b620024cf565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146200175c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620017e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018062003b3d6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b620018cf7fd3410ece5f7830386898e001f79e538cffb01471e3d0421d1664ca85b2e15ba760001b6200168e565b620018fd7fd49cb0b14e8fdb6aca341cb4c2252442e05e1468d59cc29e85d6745a1514ff2460001b6200168e565b6200192b7fad5bb9c01867ceb83802513d4c158124af2dc1e9509c46ef85717d397c160add60001b6200168e565b620019597f9e55092146d7b7bd087eb26c69ac3dc7a87dfc6c71184788536f50072a99ba9360001b6200168e565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ab58430e336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015620019e357600080fd5b505afa158015620019f8573d6000803e3d6000fd5b505050506040513d602081101562001a0f57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801562001b2157506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166350fe5ab3336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801562001ae257600080fd5b505afa15801562001af7573d6000803e3d6000fd5b505050506040513d602081101562001b0e57600080fd5b8101908080519060200190929190505050145b62001b94576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f416c6c6f776564206f6e6c7920666f72207573657273206f6e20706c616e657481525060200191505060405180910390fd5b62001bc27f2b7c5c7e733527d7a0f9c8787105fdd4d01a03db78581a8e017beed65a13050b60001b6200168e565b62001bf07f192a81a0b40a318e6dd0369c30f6d3ed831069d4ac7653fcc57a4504b5fc5e2460001b6200168e565b62001c1e7f719ff37300f78269eaa51e89a3f280929c052f68fc5b0fe09fe6bc30c9d5b1a460001b6200168e565b62001c4c7fa65534690ec80251fd02daceba5b92b72bf7c0c2f91c7bd7fe294942bd0423fa60001b6200168e565b62001c7a7f75d1e431620e4efe1d27e1abf69f51d9c8595b190c3d7c96dea5fd44b88c210f60001b6200168e565b600062001caa7f3064e284f8e7eaf77a352eecbdc423eea46f2f584e92a3a69da96b19b9e0ca8460001b6200168e565b62001cd87f5ca321d0c8273704682ff45453ef2e4d75bb777bcc60f856325c0791d312a29060001b6200168e565b600062001d087f74a5ce760ae6b7e6806283c973cba8921a4ebd9fc37ad1cb9cf6a972df982ea460001b6200168e565b62001d367fca5b3db4686efe448c19be9b2cbc29045cdd06d7be90caef8604057b84223e2460001b6200168e565b600062001d44878762000a3b565b905062001d747f1a6a4c26373bf56e8f4e28e8a04a8564ebab947e9b588cdce9d0fe796e0785ee60001b6200168e565b62001da27f7f8d159828519f18b9ff9e6859a89c887feae22971dde58049f98e6e0db689ed60001b6200168e565b8573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16101562001f2f5762001e057f0a456de0be15c949496eddbf20c6064500f440458fe8ba5d89d2635f7b87164f60001b6200168e565b62001e337f692f2e63ce4d5821c4fd2085659330cecd8e2ef17d96a280f0470a1a9dfe2f4460001b6200168e565b62001e617fcc198e1f380d9812db3eb75f4a822371c02ffd8542869d7fec8ba4452c49df3c60001b6200168e565b8073ffffffffffffffffffffffffffffffffffffffff16639f1d0f593387876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200193505050506040805180830381600087803b15801562001eda57600080fd5b505af115801562001eef573d6000803e3d6000fd5b505050506040513d604081101562001f0657600080fd5b810190808051906020019092919080519060200190929190505050809350819450505062002082565b62001f5d7fb3defa625becbaaf30d5a93d105be4a204ccfac8d79fc5bf9dfd052ada85769060001b6200168e565b62001f8b7fd5465522cd032494de40ce9b4899acadb919db8b19be577c4390e527b150b1f760001b6200168e565b62001fb97fd80734b825544ebaed495e8907a5f9f10818bed31f1aa2f255540a635db2ac3060001b6200168e565b8073ffffffffffffffffffffffffffffffffffffffff16639f1d0f593386886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200193505050506040805180830381600087803b1580156200203257600080fd5b505af115801562002047573d6000803e3d6000fd5b505050506040513d60408110156200205e57600080fd5b81019080805190602001909291908051906020019092919050505080945081935050505b620020b07f0374fbfbb7b03e72ee1076cfe8892045bef377021f17749e306cb75d2be06e1b60001b6200168e565b620020de7fc5653e906454055131f340e73537f380b4942b925ea7957247bad989cecd6e3460001b6200168e565b8673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156200216e57600080fd5b505af115801562002183573d6000803e3d6000fd5b505050506040513d60208110156200219a57600080fd5b810190808051906020019092919050505050620021da7f7aa16c797543af9ea6f9b66ff86bb8da85bfa7b09be05e6db99ad39d138117b560001b6200168e565b620022087f47b14a45b4396489467c0094512d2580e2a4e5a7e5b6533c3082734fee6aeab660001b6200168e565b8573ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156200229857600080fd5b505af1158015620022ad573d6000803e3d6000fd5b505050506040513d6020811015620022c457600080fd5b81019080805190602001909291905050505050505050505050565b600080620023107fb51b7d02f8feed0a04353d789639c32749330298d11b2d8ffc977ee30c01cbee60001b6200168e565b6200233e7f6f544efe06bb5f2686b60787c74bfea8c7d3d980dd398c03643ad78c2fe77e8c60001b6200168e565b6200236c7f4c654f6b724f582f70c0529f3d856a574397411a58c36eeff64f93ccf1b01d1960001b6200168e565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610156200243757620023cf7fc629637e1ddd6961f41b02f3db147422e8288401b9870884f318e93be49895ed60001b6200168e565b620023fd7f46e80148398104515ac1330c7e7b27ecd77bece6b120c81b8d833fe255180cf460001b6200168e565b6200242b7f2b2a18e074fc835f01fcec06d27d1058beb681e9f4af47b0dbe2357fcd92cc1060001b6200168e565b838391509150620024c8565b620024657f375ae4d0123095a349fad9b7ef14ed4b95bfe9d5970214853528835a306db23960001b6200168e565b620024937f8fda0423f3d7666aef3aaedd8bbb770bcbef803ef350afd0a3b1227f9b4d113260001b6200168e565b620024c17f4a113c4ef99fe83b0222b493aa6c86a998f49eb072538aefcfab61199d0759f860001b6200168e565b8284915091505b9250929050565b600033905090565b61165780620024e68339019056fe60806040523480156200001157600080fd5b506040516200165738038062001657833981810160405260608110156200003757600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505060006200006e6200034460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350620001407f982f89b79b7805f1cd21736751054a95bb2ccf62a18bd6ee5b81c04629988c1460001b6200034c60201b60201c565b620001747f3ba167eb536f0df8b46a52d6349c7350cad8c79d378e73ba42872c6909efc7f960001b6200034c60201b60201c565b620001a87f24b3765af898faabae47a796f8958281a4a9f67f2a297e972c64cb026bf10fdd60001b6200034c60201b60201c565b82600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200021d7f9a2002e0bbe7e16aadfe596c45c26a1b5ce22194fb17161b9a40db0257a4a8d860001b6200034c60201b60201c565b620002517ff3607c4853a9732c0cb350a3986338c743b2f9425c20491ef1b359df2ff4afd960001b6200034c60201b60201c565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002c67f4013141335b6463174ecc8adb8909c65d5cb8e8625e3ac3e0d7d51f7ae99600460001b6200034c60201b60201c565b620002fa7f7b55e65827ac882ff4f34cb9f93c84da7f84eb8a30f2f14e4c0d1f82b050290560001b6200034c60201b60201c565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200034f565b600033905090565b50565b6112f8806200035f6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146101085780639f1d0f591461013c578063e97af186146101af578063f2fde38b146101cd57610088565b8063090c18c21461008d5780630910a510146100ab578063715018a6146100d057806387d09672146100da575b600080fd5b610095610211565b6040518082815260200191505060405180910390f35b6100b3610332565b604051808381526020018281526020019250505060405180910390f35b6100d86105e5565b005b610106600480360360208110156100f057600080fd5b810190808035906020019092919050505061076b565b005b61011061076e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101926004803603606081101561015257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610797565b604051808381526020018281526020019250505060405180910390f35b6101b7610db1565b6040518082815260200191505060405180910390f35b61020f600480360360208110156101e357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ed2565b005b600061023f7f8a9d4e2d95b843acb7ae0946890c92db6653c0c6b99804846abf138b7ed6e5cc60001b61076b565b61026b7fefdbcc6abf432e5c80ce4aacc7d4951b586b0371a33fd3c3853a4dc7871521ca60001b61076b565b6102977f4973cf28e7760520408c6ddb13a3df626508b3f984c1dc561b4706d454d2937360001b61076b565b6000806102a2610332565b915091506102d27ffc03b009ffbb81ff3485c44a4616fcfb25265c949edc3502097a0ae1f4c0d64060001b61076b565b6102fe7f2a6c3820d6db31945e620fcd02633258e74029caf319c9bf7a633567c242f47460001b61076b565b61032b8161031d670de0b6b3a7640000856110dd90919063ffffffff16565b61116390919063ffffffff16565b9250505090565b6000806103617f1458cb411a66eb019769d262629c81651b0cbb9c45c846803b6c6d8f7fc408e560001b61076b565b61038d7ff6d1a213f4f681985c775f6f4c650230f99e0c1fb549242b9d294c254a9b4c0b60001b61076b565b6103b97f47703eddd8101aab71fb12ee609f4cbb6c88c9e2df53cac96abd984c226e915560001b61076b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561046457600080fd5b505afa158015610478573d6000803e3d6000fd5b505050506040513d602081101561048e57600080fd5b810190808051906020019092919050505091506104cd7fba40fc2e598603de1a8e72f0aee324a450bda0f0acffd5d0a9cf39b55137ca5f60001b61076b565b6104f97f761cbbdcee48d00b09c86d072a88e69634b5fd6015203c69833967da7fa1b35360001b61076b565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156105a457600080fd5b505afa1580156105b8573d6000803e3d6000fd5b505050506040513d60208110156105ce57600080fd5b810190808051906020019092919050505090509091565b6105ed6111ad565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000806107a26111ad565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610862576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61088e7f3afc7009eda553523346e740e28765740fb4e59af190f0b20f5f2378525cba7960001b61076b565b6108ba7f9277f2a82afb467820609a6eb6affe2d125cb295ca162571e60f3d12c037faaf60001b61076b565b6108e67f3669ca490f8db42939a68245a111c18ae1ce6b3ff3d36cabea28b843983434ed60001b61076b565b6109127f8d35485de9c68e044e494cbabfcfce34203721b89f395c92d279fe237317b1ad60001b61076b565b60008411806109215750600083115b610993576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4e6f7468696e6720746f2073776170000000000000000000000000000000000081525060200191505060405180910390fd5b6109bf7f684b2ea554c8124c3a6297c162d360b213103e09005fc7c7af55fa68502aed1960001b61076b565b6109eb7f4f2cf294902f0aceec6194c4f3f99676d5097174e0b55830e4a5719c2da4e33a60001b61076b565b610a177fd66ebcab85c8bcb93bcd5b1fef71d40c1e1981ab7f455cb13fc6efe0f7ad9a6360001b61076b565b610a4b670de0b6b3a7640000610a3d610a2e610211565b866110dd90919063ffffffff16565b61116390919063ffffffff16565b9150610a797fc31d9316007ec5b7ea987c0c7690addd586a1909782c582e8d5a24aff8c7522b60001b61076b565b610aa57f8c41615fa2eaf9d6ead7d6023c74d57b667d589592177e4d93df3ba285e962a260001b61076b565b610ad9670de0b6b3a7640000610acb610abc610db1565b876110dd90919063ffffffff16565b61116390919063ffffffff16565b9050610b077fea99b3c53fbff1ce3e38bcf0e36253e17204bae79e96a1b88082152379478f5160001b61076b565b610b337f8ca2dc5834325b912c2551e69c5ea749e66b8cb1dc33acc6a45a5d5b041d4c8260001b61076b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610c0657600080fd5b505af1158015610c1a573d6000803e3d6000fd5b505050506040513d6020811015610c3057600080fd5b810190808051906020019092919050505050610c6e7fdd2c6b3f9edb638d5f546d693efdd0df21caf0ad4554e447e86927f03f77307c60001b61076b565b610c9a7fb1633c6dcdb13bc086efbb07f9f00e6f1414d3942abd5f43d6971935d2a8720f60001b61076b565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610d6d57600080fd5b505af1158015610d81573d6000803e3d6000fd5b505050506040513d6020811015610d9757600080fd5b810190808051906020019092919050505050935093915050565b6000610ddf7f730b8d0be1602d1216a9fbe521e8402194425689f0069ca00ee8c7fe36012f4c60001b61076b565b610e0b7fb1f760f6eb186469cc5bfa78ceeff73f2a4ceae7849401ad270ccc89882a6b7f60001b61076b565b610e377f765fad5f3b0ee6e047d91e5267952690853251b5e392ac4942045f55e9371c5060001b61076b565b600080610e42610332565b91509150610e727fa35c008e26a9995e8ea4fa214cb658ca8450a35afa41786dfdac4371f2c9b02b60001b61076b565b610e9e7fa24e16ff3be1be683cf80b5f3231faf46e0b1b5f43f33354f98ad918a8c4d2ff60001b61076b565b610ecb82610ebd670de0b6b3a7640000846110dd90919063ffffffff16565b61116390919063ffffffff16565b9250505090565b610eda6111ad565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f9a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611020576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061127c6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000808314156110f0576000905061115d565b600082840290508284828161110157fe5b0414611158576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806112a26021913960400191505060405180910390fd5b809150505b92915050565b60006111a583836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506111b5565b905092915050565b600033905090565b60008083118290611261576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561122657808201518184015260208101905061120b565b50505050905090810190601f1680156112535780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161126d57fe5b04905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220d3b5af251012b8d9e5c9981f77f48027537d9bd4bf92df273ecf4c6f04d0771e64736f6c634300060c00334f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a264697066735822122018862be7f62ec8a6d354eb9a900dd751eaac243212f45eabf9c2da051dc7c2ae64736f6c634300060c0033";
