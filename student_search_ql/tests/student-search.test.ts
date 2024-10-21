import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { StudentAdded } from "../generated/schema"
import { StudentAdded as StudentAddedEvent } from "../generated/Student_search/Student_search"
import { handleStudentAdded } from "../src/student-search"
import { createStudentAddedEvent } from "./student-search-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let rollnum = BigInt.fromI32(234)
    let name = "Example string value"
    let gender = "Example string value"
    let batch = "Example string value"
    let department = "Example string value"
    let branch = "Example string value"
    let hall = "Example string value"
    let newStudentAddedEvent = createStudentAddedEvent(
      rollnum,
      name,
      gender,
      batch,
      department,
      branch,
      hall
    )
    handleStudentAdded(newStudentAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("StudentAdded created and stored", () => {
    assert.entityCount("StudentAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rollnum",
      "234"
    )
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "gender",
      "Example string value"
    )
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "batch",
      "Example string value"
    )
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "department",
      "Example string value"
    )
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "branch",
      "Example string value"
    )
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "hall",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
