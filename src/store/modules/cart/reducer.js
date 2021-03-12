import produce from 'immer'

const INITIAL_STATE = []

const cart = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT': {
        const { product } = action.payload
        draft.push(product)

        break
      }
      case 'REMOVE_PRODUCT': {
        // TODO
        break
      }
    }
  })
}

export default cart