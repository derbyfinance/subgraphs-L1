import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  Deposit,
  DepositInProtocol,
  LastPrices,
  PushedRewardsToGame,
  Rebalance,
  Transfer,
  Withdraw,
  WithdrawFromProtocol
} from "../generated/DerbyGoerliUSDC/DerbyGoerliUSDC"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createDepositEvent(
  user: Address,
  amount: BigInt,
  shares: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )

  return depositEvent
}

export function createDepositInProtocolEvent(
  protocolNum: BigInt,
  amount: BigInt
): DepositInProtocol {
  let depositInProtocolEvent = changetype<DepositInProtocol>(newMockEvent())

  depositInProtocolEvent.parameters = new Array()

  depositInProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "protocolNum",
      ethereum.Value.fromUnsignedBigInt(protocolNum)
    )
  )
  depositInProtocolEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositInProtocolEvent
}

export function createLastPricesEvent(
  protocolNum: BigInt,
  rebalancingPeriod: BigInt,
  price: BigInt
): LastPrices {
  let lastPricesEvent = changetype<LastPrices>(newMockEvent())

  lastPricesEvent.parameters = new Array()

  lastPricesEvent.parameters.push(
    new ethereum.EventParam(
      "protocolNum",
      ethereum.Value.fromUnsignedBigInt(protocolNum)
    )
  )
  lastPricesEvent.parameters.push(
    new ethereum.EventParam(
      "rebalancingPeriod",
      ethereum.Value.fromUnsignedBigInt(rebalancingPeriod)
    )
  )
  lastPricesEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return lastPricesEvent
}

export function createPushedRewardsToGameEvent(
  vaultNumber: BigInt,
  chain: BigInt,
  rewards: Array<BigInt>
): PushedRewardsToGame {
  let pushedRewardsToGameEvent = changetype<PushedRewardsToGame>(newMockEvent())

  pushedRewardsToGameEvent.parameters = new Array()

  pushedRewardsToGameEvent.parameters.push(
    new ethereum.EventParam(
      "vaultNumber",
      ethereum.Value.fromUnsignedBigInt(vaultNumber)
    )
  )
  pushedRewardsToGameEvent.parameters.push(
    new ethereum.EventParam("chain", ethereum.Value.fromUnsignedBigInt(chain))
  )
  pushedRewardsToGameEvent.parameters.push(
    new ethereum.EventParam(
      "rewards",
      ethereum.Value.fromSignedBigIntArray(rewards)
    )
  )

  return pushedRewardsToGameEvent
}

export function createRebalanceEvent(
  vaultNumber: BigInt,
  rebalancingPeriod: BigInt
): Rebalance {
  let rebalanceEvent = changetype<Rebalance>(newMockEvent())

  rebalanceEvent.parameters = new Array()

  rebalanceEvent.parameters.push(
    new ethereum.EventParam(
      "vaultNumber",
      ethereum.Value.fromUnsignedBigInt(vaultNumber)
    )
  )
  rebalanceEvent.parameters.push(
    new ethereum.EventParam(
      "rebalancingPeriod",
      ethereum.Value.fromUnsignedBigInt(rebalancingPeriod)
    )
  )

  return rebalanceEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createWithdrawEvent(
  user: Address,
  amount: BigInt,
  value: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return withdrawEvent
}

export function createWithdrawFromProtocolEvent(
  protocolNum: BigInt,
  amount: BigInt
): WithdrawFromProtocol {
  let withdrawFromProtocolEvent = changetype<WithdrawFromProtocol>(
    newMockEvent()
  )

  withdrawFromProtocolEvent.parameters = new Array()

  withdrawFromProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "protocolNum",
      ethereum.Value.fromUnsignedBigInt(protocolNum)
    )
  )
  withdrawFromProtocolEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawFromProtocolEvent
}
