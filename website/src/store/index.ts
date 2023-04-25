import { atom } from "jotai"

interface UserStore {
  id?: number
  token?: string
}

export const getUserStorage = () => JSON.parse(localStorage.getItem("user-store") ?? "{}") as UserStore

const userAtom = atom<UserStore>(getUserStorage())

export const userStore = atom(
  (get) => get(userAtom),
  (get, set, value: UserStore) => {
    localStorage.setItem("user-store", JSON.stringify(value))
    if (get(userAtom)) {
      set(userAtom, value)
    }
  },
)
