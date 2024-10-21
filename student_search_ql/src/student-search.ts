import { StudentAdded as StudentAddedEvent } from "../generated/Student_search/Student_search"
import { StudentAdded } from "../generated/schema"

export function handleStudentAdded(event: StudentAddedEvent): void {
  let entity = new StudentAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rollnum = event.params.rollnum
  entity.name = event.params.name
  entity.gender = event.params.gender
  entity.batch = event.params.batch
  entity.department = event.params.department
  entity.branch = event.params.branch
  entity.hall = event.params.hall

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
