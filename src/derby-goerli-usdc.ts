import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  Approval as ApprovalEvent,
  Deposit as DepositEvent,
  DepositInProtocol as DepositInProtocolEvent,
  LastPrices as LastPricesEvent,
  PushedRewardsToGame as PushedRewardsToGameEvent,
  Rebalance as RebalanceEvent,
  Transfer as TransferEvent,
  Withdraw as WithdrawEvent,
  WithdrawFromProtocol as WithdrawFromProtocolEvent
} from "../generated/DerbyGoerliUSDC/DerbyGoerliUSDC"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.shares = event.params.shares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositInProtocol(event: DepositInProtocolEvent): void {
  let entity = new DepositInProtocol(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.protocolNum = event.params.protocolNum
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLastPrices(event: LastPricesEvent): void {
  let entity = new LastPrices(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  let protocolNumBigInt: BigInt = event.params.protocolNum

  // Convert BigInt to Bytes
  let protocolNumBytes: Bytes = Bytes.fromHexString(protocolNumBigInt.toHexString())

  entity.protocolNum = protocolNumBytes
  entity.rebalancingPeriod = event.params.rebalancingPeriod
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePushedRewardsToGame(
  event: PushedRewardsToGameEvent
): void {
  let entity = new PushedRewardsToGame(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vaultNumber = event.params.vaultNumber
  entity.chain = event.params.chain
  entity.rewards = event.params.rewards

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRebalance(event: RebalanceEvent): void {
  let entity = new Rebalance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vaultNumber = event.params.vaultNumber
  entity.rebalancingPeriod = event.params.rebalancingPeriod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawFromProtocol(
  event: WithdrawFromProtocolEvent
): void {
  let entity = new WithdrawFromProtocol(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.protocolNum = event.params.protocolNum
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
