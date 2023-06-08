import { useProduct } from '@/hooks/useProduct'
import { useSession } from '@/hooks/useSession'
import { createContext, useReducer, useEffect } from 'react'

export const MyPublicationsContext = createContext([])

const ACTION_TYPES = {
  PUPULATE: 'POPULATE',
  DELETE_ID: 'DELETE_ID',
  ADD_ONE: 'ADD_ONE',
  ADD_DISCOUNT: 'ADD_DISCOUNT'
}

function reducer (state = null, action) {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.PUPULATE:
      return payload || []
    case ACTION_TYPES.DELETE_ID:
      return state.filter(pub => pub.id !== payload)
    case ACTION_TYPES.ADD_ONE:
      return state.concat([{ ...payload }])
    case ACTION_TYPES.ADD_DISCOUNT:
      const index = state.findIndex(el => el.id === payload.id)
      const clone = structuredClone(state)
      if (clone[index]) {
        clone[index] = payload
        return clone
      }
      return state
    default:
      return state
  }
}

export function MyPublicationsProvider ({ children }) {
  const [publications, dispatch] = useReducer(reducer, null)
  const { session } = useSession()
  const { getAllPosts } = useProduct()

  useEffect(() => {
    if (session?.id && !publications) {
      getAllPosts(session.id)
        .then(res => res.json())
        .then(res => {
          dispatch({ type: ACTION_TYPES.PUPULATE, payload: res })
          console.log(res)
        })
        .catch((e) => {
          console.error(e)
          dispatch({ type: ACTION_TYPES.PUPULATE, payload: [] })
        })
    }
  }, [session])

  useEffect(() => {
    console.log(publications)
  }, [publications])

  return (
    <MyPublicationsContext.Provider value={{ publications, dispatch, ACTION_TYPES }}>
      {children}
    </MyPublicationsContext.Provider>
  )
}