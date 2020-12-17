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

interface PlanetRepositoryInterface extends ethers.utils.Interface {
  functions: {
    "addPlanet(address)": FunctionFragment;
    "c_0xb0b4f59c(bytes32)": FunctionFragment;
    "calculateDistance(address,address)": FunctionFragment;
    "getPlanetByIndex(uint8)": FunctionFragment;
    "getPlanetCoord(uint8)": FunctionFragment;
    "getPlanetName(uint8)": FunctionFragment;
    "getPlanetsLength()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addPlanet", values: [string]): string;
  encodeFunctionData(
    functionFragment: "c_0xb0b4f59c",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateDistance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlanetByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlanetCoord",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlanetName",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlanetsLength",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addPlanet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "c_0xb0b4f59c",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateDistance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlanetByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlanetCoord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlanetName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlanetsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "NewPlanetAdded(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewPlanetAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class PlanetRepository extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PlanetRepositoryInterface;

  functions: {
    addPlanet(
      planet: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addPlanet(address)"(
      planet: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    c_0xb0b4f59c(
      c__0xb0b4f59c: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "c_0xb0b4f59c(bytes32)"(
      c__0xb0b4f59c: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    calculateDistance(
      planet1: string,
      planet2: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { distance: BigNumber }>;

    "calculateDistance(address,address)"(
      planet1: string,
      planet2: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { distance: BigNumber }>;

    getPlanetByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getPlanetByIndex(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPlanetCoord(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number] & { x: number; y: number }>;

    "getPlanetCoord(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number] & { x: number; y: number }>;

    getPlanetName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getPlanetName(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPlanetsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getPlanetsLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addPlanet(
    planet: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addPlanet(address)"(
    planet: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  c_0xb0b4f59c(
    c__0xb0b4f59c: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "c_0xb0b4f59c(bytes32)"(
    c__0xb0b4f59c: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  calculateDistance(
    planet1: string,
    planet2: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calculateDistance(address,address)"(
    planet1: string,
    planet2: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPlanetByIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPlanetByIndex(uint8)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getPlanetCoord(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, number] & { x: number; y: number }>;

  "getPlanetCoord(uint8)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, number] & { x: number; y: number }>;

  getPlanetName(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPlanetName(uint8)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getPlanetsLength(overrides?: CallOverrides): Promise<BigNumber>;

  "getPlanetsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addPlanet(planet: string, overrides?: CallOverrides): Promise<void>;

    "addPlanet(address)"(
      planet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    c_0xb0b4f59c(
      c__0xb0b4f59c: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "c_0xb0b4f59c(bytes32)"(
      c__0xb0b4f59c: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    calculateDistance(
      planet1: string,
      planet2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateDistance(address,address)"(
      planet1: string,
      planet2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlanetByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPlanetByIndex(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getPlanetCoord(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number] & { x: number; y: number }>;

    "getPlanetCoord(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, number] & { x: number; y: number }>;

    getPlanetName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPlanetName(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getPlanetsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "getPlanetsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

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
    NewPlanetAdded(planet: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    addPlanet(planet: string, overrides?: Overrides): Promise<BigNumber>;

    "addPlanet(address)"(
      planet: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    c_0xb0b4f59c(
      c__0xb0b4f59c: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "c_0xb0b4f59c(bytes32)"(
      c__0xb0b4f59c: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateDistance(
      planet1: string,
      planet2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateDistance(address,address)"(
      planet1: string,
      planet2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlanetByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPlanetByIndex(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlanetCoord(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPlanetCoord(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlanetName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPlanetName(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlanetsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "getPlanetsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

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
    addPlanet(
      planet: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addPlanet(address)"(
      planet: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    c_0xb0b4f59c(
      c__0xb0b4f59c: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "c_0xb0b4f59c(bytes32)"(
      c__0xb0b4f59c: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateDistance(
      planet1: string,
      planet2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateDistance(address,address)"(
      planet1: string,
      planet2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlanetByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPlanetByIndex(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlanetCoord(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPlanetCoord(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlanetName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPlanetName(uint8)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlanetsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPlanetsLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

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
