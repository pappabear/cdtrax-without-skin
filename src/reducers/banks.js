import { ADD_BANK, DELETE_BANK, UPDATE_BANK, GET_BANKS } from '../constants'

export default function banks(state = [], action) {

  switch (action.type) {

    case ADD_BANK:
      return [
        ...state,
        {
          id: action.id,
          code: action.code,
          description: action.description
        }
      ]

    case DELETE_BANK:
      return state.filter(bank =>
        bank.id !== action.id
      )

    case UPDATE_BANK:
      return state.map(bank =>
        bank.id === action.id ?
          { ...bank, code: action.code, description: action.description } :
          todo
      )

    case 'GET_BANK_DATA_RECEIVED':
      return action.data
  
    default:
      return state
  }
}
