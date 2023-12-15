import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { AddProtocol, AddVault } from "../generated/Controller/Controller"

export function createAddProtocolEvent(
  name: string,
  vaultNumber: BigInt,
  provider: Address,
  protocolLPToken: Address,
  underlying: Address,
  govToken: Address,
  protocolNumber: BigInt
): AddProtocol {
  let addProtocolEvent = changetype<AddProtocol>(newMockEvent())

  addProtocolEvent.parameters = new Array()

  addProtocolEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "vaultNumber",
      ethereum.Value.fromUnsignedBigInt(vaultNumber)
    )
  )
  addProtocolEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  addProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "protocolLPToken",
      ethereum.Value.fromAddress(protocolLPToken)
    )
  )
  addProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "underlying",
      ethereum.Value.fromAddress(underlying)
    )
  )
  addProtocolEvent.parameters.push(
    new ethereum.EventParam("govToken", ethereum.Value.fromAddress(govToken))
  )
  addProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "protocolNumber",
      ethereum.Value.fromUnsignedBigInt(protocolNumber)
    )
  )

  return addProtocolEvent
}

export function createAddVaultEvent(
  vaultNumber: BigInt,
  vaultName: string,
  chainId: BigInt,
  category: string,
  coin: string
): AddVault {
  let addVaultEvent = changetype<AddVault>(newMockEvent())

  addVaultEvent.parameters = new Array()

  addVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultNumber",
      ethereum.Value.fromUnsignedBigInt(vaultNumber)
    )
  )
  addVaultEvent.parameters.push(
    new ethereum.EventParam("vaultName", ethereum.Value.fromString(vaultName))
  )
  addVaultEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )
  addVaultEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  addVaultEvent.parameters.push(
    new ethereum.EventParam("coin", ethereum.Value.fromString(coin))
  )

  return addVaultEvent
}
