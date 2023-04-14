import { Cycle } from "./reducer"

export enum ActionTypes {
  'ADD_NEW_CYCLE' = 'ADD_NEW_CYCLE',
  'INTERRUPT_CURRENT_CYCLE' = 'INTERRUPT_CURRENT_CYCLE',
  'FINISH_CURRENT_CYCLE' = 'FINISH_CURRENT_CYCLE'
}

interface AddNewCycleProps {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: {
    newCycle: Cycle
  }
}

interface interruptCurrentCycleProps {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

interface finishCurrentCycleProps {
  type: ActionTypes.FINISH_CURRENT_CYCLE
}

export type ActionProps = AddNewCycleProps | interruptCurrentCycleProps | finishCurrentCycleProps

export const addNewCycle = (newCycle: Cycle): AddNewCycleProps => {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle
    },
  }
}

export const interruptCurrentCycle = (): interruptCurrentCycleProps => {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export const finishCurrentCycle = (): finishCurrentCycleProps => {
  return {
    type: ActionTypes.FINISH_CURRENT_CYCLE,
  }
}