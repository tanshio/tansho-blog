// import { createStore as reduxCreateStore } from "redux"
//
// interface postState {
//   count: 0
// }
//
// const reducer = (state: postState, action: any) => {
//   if (action.type === `INCREMENT`) {
//     return Object.assign({}, state, {
//       count: state.count + 1,
//     })
//   }
//   return state
// }
//
// const initialState: postState = { count: 0 }
//
// const index = () => reduxCreateStore(reducer, initialState)
// export default index

import { combineReducers } from "redux"
import { counterReducer } from "./counter/reducer"

const rootReducer = combineReducers({
  counter: counterReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default AppState