/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IFeedRegistry {
  export type PhaseStruct = {
    phaseId: PromiseOrValue<BigNumberish>;
    startingAggregatorRoundId: PromiseOrValue<BigNumberish>;
    endingAggregatorRoundId: PromiseOrValue<BigNumberish>;
  };

  export type PhaseStructOutput = [number, BigNumber, BigNumber] & {
    phaseId: number;
    startingAggregatorRoundId: BigNumber;
    endingAggregatorRoundId: BigNumber;
  };
}

export interface IFeedRegistryInterface extends utils.Interface {
  functions: {
    "decimals(address,address)": FunctionFragment;
    "description(address,address)": FunctionFragment;
    "getAnswer(address,address,uint256)": FunctionFragment;
    "getFeed(address,address)": FunctionFragment;
    "getNextRoundId(address,address,uint80)": FunctionFragment;
    "getPhase(address,address,uint16)": FunctionFragment;
    "getPhaseFeed(address,address,uint16)": FunctionFragment;
    "getPhaseRange(address,address,uint16)": FunctionFragment;
    "getPreviousRoundId(address,address,uint80)": FunctionFragment;
    "getRoundData(address,address,uint80)": FunctionFragment;
    "getRoundFeed(address,address,uint80)": FunctionFragment;
    "getTimestamp(address,address,uint256)": FunctionFragment;
    "isFeedEnabled(address)": FunctionFragment;
    "latestAnswer(address,address)": FunctionFragment;
    "latestRound(address,address)": FunctionFragment;
    "latestRoundData(address,address)": FunctionFragment;
    "latestTimestamp(address,address)": FunctionFragment;
    "version(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "decimals"
      | "description"
      | "getAnswer"
      | "getFeed"
      | "getNextRoundId"
      | "getPhase"
      | "getPhaseFeed"
      | "getPhaseRange"
      | "getPreviousRoundId"
      | "getRoundData"
      | "getRoundFeed"
      | "getTimestamp"
      | "isFeedEnabled"
      | "latestAnswer"
      | "latestRound"
      | "latestRoundData"
      | "latestTimestamp"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "decimals",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAnswer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeed",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextRoundId",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPhase",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPhaseFeed",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPhaseRange",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPreviousRoundId",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundData",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundFeed",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isFeedEnabled",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestRound",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestTimestamp",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "version",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNextRoundId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPhase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPhaseFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPhaseRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPreviousRoundId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoundFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFeedEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {};
}

export interface IFeedRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFeedRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    decimals(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    description(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAnswer(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { answer: BigNumber }>;

    getFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { aggregator: string }>;

    getNextRoundId(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nextRoundId: BigNumber }>;

    getPhase(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IFeedRegistry.PhaseStructOutput] & {
        phase: IFeedRegistry.PhaseStructOutput;
      }
    >;

    getPhaseFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { aggregator: string }>;

    getPhaseRange(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        startingRoundId: BigNumber;
        endingRoundId: BigNumber;
      }
    >;

    getPreviousRoundId(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { previousRoundId: BigNumber }>;

    getRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    getRoundFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { aggregator: string }>;

    getTimestamp(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    isFeedEnabled(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    latestAnswer(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { answer: BigNumber }>;

    latestRound(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { roundId: BigNumber }>;

    latestRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestTimestamp(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    version(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  decimals(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  description(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getAnswer(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFeed(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getNextRoundId(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPhase(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    phaseId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IFeedRegistry.PhaseStructOutput>;

  getPhaseFeed(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    phaseId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPhaseRange(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    phaseId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      startingRoundId: BigNumber;
      endingRoundId: BigNumber;
    }
  >;

  getPreviousRoundId(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoundData(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    _roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  getRoundFeed(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTimestamp(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isFeedEnabled(
    aggregator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  latestAnswer(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  latestRound(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  latestRoundData(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  latestTimestamp(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  version(
    base: PromiseOrValue<string>,
    quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    decimals(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    description(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getAnswer(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getNextRoundId(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPhase(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IFeedRegistry.PhaseStructOutput>;

    getPhaseFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPhaseRange(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        startingRoundId: BigNumber;
        endingRoundId: BigNumber;
      }
    >;

    getPreviousRoundId(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    getRoundFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTimestamp(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFeedEnabled(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    latestAnswer(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRound(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestTimestamp(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    decimals(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    description(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAnswer(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextRoundId(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPhase(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPhaseFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPhaseRange(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPreviousRoundId(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoundFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimestamp(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFeedEnabled(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestAnswer(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRound(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestTimestamp(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decimals(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    description(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAnswer(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextRoundId(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPhase(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPhaseFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPhaseRange(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      phaseId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPreviousRoundId(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoundFeed(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTimestamp(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFeedEnabled(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestAnswer(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestRound(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestRoundData(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestTimestamp(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(
      base: PromiseOrValue<string>,
      quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
