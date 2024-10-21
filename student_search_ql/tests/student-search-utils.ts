import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { StudentAdded } from "../generated/Student_search/Student_search"

export function createStudentAddedEvent(
  rollnum: BigInt,
  name: string,
  gender: string,
  batch: string,
  department: string,
  branch: string,
  hall: string
): StudentAdded {
  let studentAddedEvent = changetype<StudentAdded>(newMockEvent())

  studentAddedEvent.parameters = new Array()

  studentAddedEvent.parameters.push(
    new ethereum.EventParam(
      "rollnum",
      ethereum.Value.fromUnsignedBigInt(rollnum)
    )
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("gender", ethereum.Value.fromString(gender))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("batch", ethereum.Value.fromString(batch))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("department", ethereum.Value.fromString(department))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("branch", ethereum.Value.fromString(branch))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("hall", ethereum.Value.fromString(hall))
  )

  return studentAddedEvent
}
