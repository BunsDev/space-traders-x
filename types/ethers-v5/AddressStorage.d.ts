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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AddressStorageInterface extends ethers.utils.Interface {
  functions: {
    "getAddress(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;

  events: {};
}

export class AddressStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AddressStorageInterface;

  functions: {
    getAddress(key: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "getAddress(bytes32)"(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  getAddress(key: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getAddress(bytes32)"(
    key: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getAddress(key: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getAddress(bytes32)"(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAddress(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getAddress(bytes32)"(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddress(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAddress(bytes32)"(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
