/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AddressRepository } from "../AddressRepository";

export class AddressRepository__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AddressRepository> {
    return super.deploy(overrides || {}) as Promise<AddressRepository>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AddressRepository {
    return super.attach(address) as AddressRepository;
  }
  connect(signer: Signer): AddressRepository__factory {
    return super.connect(signer) as AddressRepository__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AddressRepository {
    return new Contract(address, _abi, signerOrProvider) as AddressRepository;
  }
}

const _abi = [
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
        internalType: "bytes32",
        name: "c__0x3b2f0c43",
        type: "bytes32",
      },
    ],
    name: "c_0x3b2f0c43",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xc99a04f0",
        type: "bytes32",
      },
    ],
    name: "c_0xc99a04f0",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getAddress",
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
    name: "getGameService",
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
    name: "getGoldToken",
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
    name: "getIronToken",
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
    name: "getOilToken",
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
    name: "getPlanetRepository",
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
    name: "getStarshipRepository",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "setGameService",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setGoldToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setIronToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setOilToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setPlanetRepository",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setStarshipRepository",
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
  "0x608060405234801561001057600080fd5b5060006100216100c460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100cc565b600033905090565b6119a3806100db6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063a3568d0711610071578063a3568d07146103ed578063b9778d8014610421578063d06816a114610465578063f1d75fd5146104a9578063f2fde38b146104dd57610116565b8063715018a61461033d57806381f3a108146103475780638da5cb5b1461038b57806391f56506146103bf57610116565b806335f11a24116100e957806335f11a241461021f5780633db73318146102635780635ef1f4941461029757806368625aa0146102c55780636b6dcea0146102f957610116565b806308fd99ed1461011b57806313ca76fc1461014f57806315ba25461461018357806321f8a721146101c7575b600080fd5b610123610521565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101576105d5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101c56004803603602081101561019957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610689565b005b6101f3600480360360208110156101dd57600080fd5b8101908080359060200190929190505050610802565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102616004803603602081101561023557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a57565b005b61026b610bd0565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c3600480360360208110156102ad57600080fd5b8101908080359060200190929190505050610c84565b005b6102cd610c87565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61033b6004803603602081101561030f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d3b565b005b610345610eb4565b005b6103896004803603602081101561035d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061103a565b005b6103936111b3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103eb600480360360208110156103d557600080fd5b81019080803590602001909291905050506111dc565b005b6103f56111df565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104636004803603602081101561043757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611293565b005b6104a76004803603602081101561047b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061140c565b005b6104b1611585565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61051f600480360360208110156104f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611639565b005b600061054f7fc588e30e51fba8a90d213b0ab141b318f6b6e89a6c26cd66b43d2461b40a4f5560001b610c84565b61057b7f897450559a77052fe2f61ce4249fe78132b641d480d78f7bef311a05618fec2b60001b610c84565b6105a77f8dfa9ea5547a7a07d0851cd2ddfc1310136556a3d2664f50502262f74c57565060001b610c84565b6105d07f474f4c445f544f4b454e00000000000000000000000000000000000000000000610802565b905090565b60006106037fdfae1cb424b9f89e26b5b4adf0c605d0d35b01482ab54d43a1c3c599e7e4b0ef60001b610c84565b61062f7f854f554e1e8841841ee326ed7c61d9d78672937dcaa30c3d969dc35cedabcd4160001b610c84565b61065b7f977f41bfdb092234b78aa388131dd83d126f9c10844eb590e77120c81b3d9d4960001b610c84565b6106847f49524f4e5f544f4b454e00000000000000000000000000000000000000000000610802565b905090565b610691611844565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610751576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61077d7ff1a6459609c5716bf58a9d43c0687c40d3419f3dd0730e80ea0256601bba941860001b610c84565b6107a97f39d493917e20e1aa5c395143f57475995af507f3842b047fd9aa7d19c94f65fe60001b610c84565b6107d57fa08e865ce57db4960cd34ddb9aa5f7acdaa4b6045b0b2c85f30cc05d14099e1560001b610c84565b6107ff7f504c414e45545f5245504f5349544f52590000000000000000000000000000008261184c565b50565b60006108307fdf40c6645b4230f8bc3d0b2cb6c3d157cc9e784f7e46a1189dc370b71c505eab60001b6111dc565b61085c7ff60490542a10aa0f86e7c26c3b480cd3a5186d13ad7fd2bc0e8059aa1a51326660001b6111dc565b6108887fbb4b944840388c71af8434bbcff75148edd48dbc0e9c58490bdf2ee2ea92808d60001b6111dc565b60006001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108ec7f1d7bf4cc4d23cb371171b584e1d5fbcd021669c08e52eb5e5da620782d61a67960001b6111dc565b6109187f586a6438447f1e7513374d961ae22d37d51d1bf4290bd06ecf9c9a85e9530a4060001b6111dc565b6109447f0e4900d551e3a22d0cc8c7f8a708a8714c8f97f0e0b33913b1443d4d23ebe95c60001b6111dc565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061194d6021913960400191505060405180910390fd5b6109f67f4d5aaaeaeb7d380fda74780ec9ce7e5a511f89a90456a50d6a7c8ed3cc96b67660001b6111dc565b610a227f5035870879c5b71fc2a711f1eea9a93a3695cd5bb20bd2d89b52a4a1601732bc60001b6111dc565b610a4e7f9863233f2c54f2c34e8e37711ae7dee27e87f2cbf2ad80007c073d94a1ff1baf60001b6111dc565b80915050919050565b610a5f611844565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b1f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610b4b7fb5cc3cccf314d9aa685a3c3266df417c4e49c5a2a163c31261f9c379562f7fc460001b610c84565b610b777fd1991528420ae83122ae65cf39a684a5ee7aab29a352fe4382f7f0c68037248b60001b610c84565b610ba37f8d4f0ac66afa0f041fae0189b85d2178c6441f05d846233cca5abd085b06777860001b610c84565b610bcd7f4f494c5f544f4b454e00000000000000000000000000000000000000000000008261184c565b50565b6000610bfe7fb177761bc21661117a0940445bb7b72e81d20766f421da6f8cd23bfc135bf90a60001b610c84565b610c2a7ff2a110fc23a0b3b15a02bdeb892284b6972d75c61671148773ceae289997efa360001b610c84565b610c567ff9cb74ea27c5a96ad1408a527f864f079a3ca6ffcffcabab436afe62610e9cae60001b610c84565b610c7f7f47414d455f534552564943450000000000000000000000000000000000000000610802565b905090565b50565b6000610cb57f54fd3a9e8d8c5d251d77661269a52a46bd971cac179fda9fd45ad3cce56f644e60001b610c84565b610ce17faa65643af7a279260f027688d6be7fc1cde702492e8bcda602e81dc35449cd3d60001b610c84565b610d0d7f93c28a2a910a64873b848c34f47e1c07eb87de9042ca7d52d139bc6c38f6b03660001b610c84565b610d367f4f494c5f544f4b454e0000000000000000000000000000000000000000000000610802565b905090565b610d43611844565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610e2f7f4a57a54b254a9a4e4f0cb16a6f40e1911904b44c91041c8d17f634549360ff3560001b610c84565b610e5b7fee2f097cf489b13595caa1e5497b37604e547644c8300a3abb1b914ef73d0ac360001b610c84565b610e877f3021e99af1d3002e60228fd0c3c076b4dd4be9f09ae87f1c59652dee858f6d7860001b610c84565b610eb17f49524f4e5f544f4b454e000000000000000000000000000000000000000000008261184c565b50565b610ebc611844565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f7c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b611042611844565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611102576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61112e7f06cb614d6771d35eb5755fe2dcca2ffd5dc42a155a1d6d833f9ad279fe7554d860001b610c84565b61115a7f9c38a8a829eb59ce6e39ac5e7b1947a3a59f5006303ff0fff7f783c4e4f08dd260001b610c84565b6111867f31a245f9bd39725e878a3a007e7106342704a0ddf06bc9af1b61f4f306dcf34960001b610c84565b6111b07f47414d455f5345525649434500000000000000000000000000000000000000008261184c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b50565b600061120d7f010a4d59cad342467023a93d81983b5a9dfa05f334932418ec8ab9762d39c2b460001b610c84565b6112397f322771f7401ce87ab22d95646f919fb82c3fd5915f206054a5f8e0318416139c60001b610c84565b6112657f57bc37659fc01fbade14617cdbb062149f1e4b29ef47268ce34a6de06e8fc6e960001b610c84565b61128e7f53544152534849505f5245504f5349544f525900000000000000000000000000610802565b905090565b61129b611844565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461135b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6113877fb2fbfc81debced15417a219bf162ce3bbaefd9cff4febf807eca3c36f690952a60001b610c84565b6113b37f9c5040e1a527f356140061468967c7f8e8b7264748300fd3d1871edd37eea33260001b610c84565b6113df7f38e52c30faece1a0269c7aeeff895ecb8301dac77ebcf5e37eb34566b1d1240660001b610c84565b6114097f53544152534849505f5245504f5349544f5259000000000000000000000000008261184c565b50565b611414611844565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146114d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6115007fee38dff5a0e32dbe6318f64d520ef0dc56bdfaae54bb97fbaa989dd75ca96e8560001b610c84565b61152c7f7e451600438e10306ae86afa559f05d7a88d4e475e7ba04ec1784f0f847acfb060001b610c84565b6115587f5477372559dc818cd40fe5d40651ca22c56f93bf9f88a278b129a162f509b02d60001b610c84565b6115827f474f4c445f544f4b454e000000000000000000000000000000000000000000008261184c565b50565b60006115b37fa801f0fbaf9f2410b12388d253a5cb22236a0049fac08ab3a3ff187c7c8960b160001b610c84565b6115df7f6b649127555dfa2a256be195c2c1bb1c698aa9ba51268f9749c8ce226074613360001b610c84565b61160b7f0cf5e1131856482af86452c375a2514f2074ebeb43cd8be7f3adf43deac7258e60001b610c84565b6116347f504c414e45545f5245504f5349544f5259000000000000000000000000000000610802565b905090565b611641611844565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611787576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806119276026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b6118787ffa0336038395ba6f56ff9f51a09866e02cd56c5ffb785e2b14daa8d57f07de3160001b6111dc565b6118a47f7df9e3548c8c0d007ed76c49d23888daf98f42bf9702eab82d654407fe9e4b4e60001b6111dc565b6118d07f1b52d61f9f8604c545afb02c8313d2755dee6e8f4d22e1ab7c35d73432450d1760001b6111dc565b806001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734164647265737353746f726167653a2041646472657373206e6f7420666f756e64a2646970667358221220bd642811caff44b5fd01251b1b0e72a044aea848465318c838588e627117f82a64736f6c634300060c0033";
