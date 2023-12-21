import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  AddProtocol as AddProtocolEvent,
  AddVault as AddVaultEvent
} from "../generated/Controller/Controller"
import { AddProtocol, AddVault } from "../generated/schema"

export function handleAddProtocol(event: AddProtocolEvent): void {
  let entity = new AddProtocol(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  let vaultNumberBigInt: BigInt = event.params.vaultNumber
  // Convert BigInt to Bytes
  let vaultNumberBytes: Bytes = Bytes.fromHexString(vaultNumberBigInt.toHexString())
  entity.vaultNumber = vaultNumberBytes
  entity.provider = event.params.provider
  entity.protocolLPToken = event.params.protocolLPToken
  entity.underlying = event.params.underlying
  entity.govToken = event.params.govToken
  entity.protocolNumber = event.params.protocolNumber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddVault(event: AddVaultEvent): void {
  let entity = new AddVault(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vaultNumber = event.params.vaultNumber
  entity.vaultName = event.params.vaultName
  entity.chainId = event.params.chainId
  entity.category = event.params.category
  entity.coin = event.params.coin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
