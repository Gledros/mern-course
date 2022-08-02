import actions from './actions'

const reducer = (state, action) => {
  if (!actions.hasOwnProperty(action.type))
    throw new Error(`no such action: ${action.type}`)

  return actions[action.type].apply(state, action)
}

export default reducer
