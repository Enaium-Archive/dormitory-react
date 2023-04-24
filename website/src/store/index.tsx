import { atom } from "jotai"

const user = atom<{
  id?: number
  token?: string
}>({})
