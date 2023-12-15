import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AddProtocol } from "../generated/schema"
import { AddProtocol as AddProtocolEvent } from "../generated/Controller/Controller"
import { handleAddProtocol } from "../src/controller"
import { createAddProtocolEvent } from "./controller-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let name = "Example string value"
    let vaultNumber = BigInt.fromI32(234)
    let provider = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let protocolLPToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let underlying = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let govToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let protocolNumber = BigInt.fromI32(234)
    let newAddProtocolEvent = createAddProtocolEvent(
      name,
      vaultNumber,
      provider,
      protocolLPToken,
      underlying,
      govToken,
      protocolNumber
    )
    handleAddProtocol(newAddProtocolEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddProtocol created and stored", () => {
    assert.entityCount("AddProtocol", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddProtocol",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "AddProtocol",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "vaultNumber",
      "234"
    )
    assert.fieldEquals(
      "AddProtocol",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "provider",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddProtocol",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "protocolLPToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddProtocol",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "underlying",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddProtocol",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "govToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddProtocol",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "protocolNumber",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
