import { ADD_BANK, DELETE_BANK, UPDATE_BANK } from '../constants'

export default function banks(state = [], action) {

  switch (action.type) {


    case ADD_BANK:
      var pk = 0;
      state.map(b => 
        pk = parseInt(b.id) + 1 //this is good enough for now.  in finished app, page change will reload state
      )
      
      return [
        ...state,
        {
          //id: action.id,  NOT GETTING DB ID
          id: pk,
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
          bank
      )

    case 'GET_BANKS_DATA_RECEIVED':
      return action.data
  
    default:
      return state
  }
}
