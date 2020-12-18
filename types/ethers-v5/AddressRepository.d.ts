/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AddressRepositoryInterface extends ethers.utils.Interface {
  functions: {
    "c_0x3b2f0c43(bytes32)": FunctionFragment;
    "c_0xc99a04f0(bytes32)": FunctionFragment;
    "getAddress(bytes32)": FunctionFragment;
    "getGameService()": FunctionFragment;
    "getGoldToken()": FunctionFragment;
    "getIronToken()": FunctionFragment;
    "getOilToken()": FunctionFragment;
    "getPlanetRepository()": FunctionFragment;
    "getStarshipRepository()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGameService(address)": FunctionFragment;
    "setGoldToken(address)": FunctionFragment;
    "setIronToken(address)": FunctionFragment;
    "setOilToken(address)": FunctionFragment;
    "setPlanetRepository(address)": FunctionFragment;
    "setStarshipRepository(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_0x3b2f0c43",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_0xc99a04f0",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameService",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGoldToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIronToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOilToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlanetRepository",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStarshipRepository",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGameService",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setGoldToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setIronToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOilToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPlanetRepository",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStarshipRepository",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "c_0x3b2f0c43",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_0xc99a04f0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGameService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGoldToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIronToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOilToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlanetRepository",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStarshipRepository",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGameService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGoldToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIronToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOilToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlanetRepository",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStarshipRepository",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class AddressRepository extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AddressRepositoryInterface;

  functions: {
    c_0x3b2f0c43(
      c__0x3b2f0c43: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "c_0x3b2f0c43(bytes32)"(
      c__0x3b2f0c43: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_0xc99a04f0(
      c__0xc99a04f0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "c_0xc99a04f0(bytes32)"(
      c__0xc99a04f0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    getAddress(key: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "getAddress(bytes32)"(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getGameService(overrides?: CallOverrides): Promise<[string]>;

    "getGameService()"(overrides?: CallOverrides): Promise<[string]>;

    getGoldToken(overrides?: CallOverrides): Promise<[string]>;

    "getGoldToken()"(overrides?: CallOverrides): Promise<[string]>;

    getIronToken(overrides?: CallOverrides): Promise<[string]>;

    "getIronToken()"(overrides?: CallOverrides): Promise<[string]>;

    getOilToken(overrides?: CallOverrides): Promise<[string]>;

    "getOilToken()"(overrides?: CallOverrides): Promise<[string]>;

    getPlanetRepository(overrides?: CallOverrides): Promise<[string]>;

    "getPlanetRepository()"(overrides?: CallOverrides): Promise<[string]>;

    getStarshipRepository(overrides?: CallOverrides): Promise<[string]>;

    "getStarshipRepository()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setGameService(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGameService(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setGoldToken(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGoldToken(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setIronToken(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setIronToken(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setOilToken(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOilToken(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPlanetRepository(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPlanetRepository(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setStarshipRepository(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setStarshipRepository(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  c_0x3b2f0c43(
    c__0x3b2f0c43: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "c_0x3b2f0c43(bytes32)"(
    c__0x3b2f0c43: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  c_0xc99a04f0(
    c__0xc99a04f0: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "c_0xc99a04f0(bytes32)"(
    c__0xc99a04f0: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  getAddress(key: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getAddress(bytes32)"(
    key: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getGameService(overrides?: CallOverrides): Promise<string>;

  "getGameService()"(overrides?: CallOverrides): Promise<string>;

  getGoldToken(overrides?: CallOverrides): Promise<string>;

  "getGoldToken()"(overrides?: CallOverrides): Promise<string>;

  getIronToken(overrides?: CallOverrides): Promise<string>;

  "getIronToken()"(overrides?: CallOverrides): Promise<string>;

  getOilToken(overrides?: CallOverrides): Promise<string>;

  "getOilToken()"(overrides?: CallOverrides): Promise<string>;

  getPlanetRepository(overrides?: CallOverrides): Promise<string>;

  "getPlanetRepository()"(overrides?: CallOverrides): Promise<string>;

  getStarshipRepository(overrides?: CallOverrides): Promise<string>;

  "getStarshipRepository()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setGameService(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGameService(address)"(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setGoldToken(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGoldToken(address)"(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setIronToken(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setIronToken(address)"(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setOilToken(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOilToken(address)"(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPlanetRepository(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPlanetRepository(address)"(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setStarshipRepository(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setStarshipRepository(address)"(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    c_0x3b2f0c43(
      c__0x3b2f0c43: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "c_0x3b2f0c43(bytes32)"(
      c__0x3b2f0c43: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_0xc99a04f0(
      c__0xc99a04f0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "c_0xc99a04f0(bytes32)"(
      c__0xc99a04f0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getAddress(key: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getAddress(bytes32)"(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getGameService(overrides?: CallOverrides): Promise<string>;

    "getGameService()"(overrides?: CallOverrides): Promise<string>;

    getGoldToken(overrides?: CallOverrides): Promise<string>;

    "getGoldToken()"(overrides?: CallOverrides): Promise<string>;

    getIronToken(overrides?: CallOverrides): Promise<string>;

    "getIronToken()"(overrides?: CallOverrides): Promise<string>;

    getOilToken(overrides?: CallOverrides): Promise<string>;

    "getOilToken()"(overrides?: CallOverrides): Promise<string>;

    getPlanetRepository(overrides?: CallOverrides): Promise<string>;

    "getPlanetRepository()"(overrides?: CallOverrides): Promise<string>;

    getStarshipRepository(overrides?: CallOverrides): Promise<string>;

    "getStarshipRepository()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setGameService(_address: string, overrides?: CallOverrides): Promise<void>;

    "setGameService(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setGoldToken(_address: string, overrides?: CallOverrides): Promise<void>;

    "setGoldToken(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setIronToken(_address: string, overrides?: CallOverrides): Promise<void>;

    "setIronToken(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOilToken(_address: string, overrides?: CallOverrides): Promise<void>;

    "setOilToken(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPlanetRepository(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPlanetRepository(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStarshipRepository(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setStarshipRepository(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    c_0x3b2f0c43(
      c__0x3b2f0c43: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "c_0x3b2f0c43(bytes32)"(
      c__0x3b2f0c43: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_0xc99a04f0(
      c__0xc99a04f0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "c_0xc99a04f0(bytes32)"(
      c__0xc99a04f0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddress(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getAddress(bytes32)"(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGameService(overrides?: CallOverrides): Promise<BigNumber>;

    "getGameService()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGoldToken(overrides?: CallOverrides): Promise<BigNumber>;

    "getGoldToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    getIronToken(overrides?: CallOverrides): Promise<BigNumber>;

    "getIronToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    getOilToken(overrides?: CallOverrides): Promise<BigNumber>;

    "getOilToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPlanetRepository(overrides?: CallOverrides): Promise<BigNumber>;

    "getPlanetRepository()"(overrides?: CallOverrides): Promise<BigNumber>;

    getStarshipRepository(overrides?: CallOverrides): Promise<BigNumber>;

    "getStarshipRepository()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setGameService(_address: string, overrides?: Overrides): Promise<BigNumber>;

    "setGameService(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setGoldToken(_address: string, overrides?: Overrides): Promise<BigNumber>;

    "setGoldToken(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setIronToken(_address: string, overrides?: Overrides): Promise<BigNumber>;

    "setIronToken(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOilToken(_address: string, overrides?: Overrides): Promise<BigNumber>;

    "setOilToken(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPlanetRepository(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPlanetRepository(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStarshipRepository(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setStarshipRepository(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_0x3b2f0c43(
      c__0x3b2f0c43: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "c_0x3b2f0c43(bytes32)"(
      c__0x3b2f0c43: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_0xc99a04f0(
      c__0xc99a04f0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "c_0xc99a04f0(bytes32)"(
      c__0xc99a04f0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddress(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAddress(bytes32)"(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGameService(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getGameService()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGoldToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getGoldToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIronToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getIronToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOilToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOilToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPlanetRepository(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPlanetRepository()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStarshipRepository(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getStarshipRepository()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setGameService(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGameService(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setGoldToken(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGoldToken(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setIronToken(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setIronToken(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setOilToken(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOilToken(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPlanetRepository(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPlanetRepository(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setStarshipRepository(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setStarshipRepository(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
