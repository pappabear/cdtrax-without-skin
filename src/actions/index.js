import * as types from '../constants'

export const addBank = (code, description) => ({ type: types.ADD_BANK, code, description })
export const deleteBank = id => ({ type: types.DELETE_BANK, id })
export const updateBank = (id, code, description) => ({ type: types.UPDATE_BANK, code, description })
export const getBanks = () => ({ type: types.GET_BANKS })

