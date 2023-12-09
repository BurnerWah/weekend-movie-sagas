/**
 * Used to store whether a page is loading or not
 * @type {import('redux').Reducer<boolean, SetIsLoadingAction>}
 */
export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return action.payload
    default:
      return state
  }
}
