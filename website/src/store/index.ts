/*
 * Copyright (c) 2023 Enaium
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { atom } from "jotai"

interface UserStore {
  id?: number
  token?: string
}

interface MenuStore {
  menus: { label: string; key: string }[]
}

export const getUserStorage = () => JSON.parse(localStorage.getItem("user-store") ?? "{}") as UserStore
const getMenuStorage = () => JSON.parse(localStorage.getItem("menu-store") ?? "{}") as MenuStore

const userAtom = atom<UserStore>(getUserStorage())
const menuAtom = atom<MenuStore>(getMenuStorage())

export const userStore = atom(
  (get) => get(userAtom),
  (get, set, value: UserStore) => {
    localStorage.setItem("user-store", JSON.stringify(value))
    if (get(userAtom)) {
      set(userAtom, value)
    }
  },
)

export const menuStore = atom(
  (get) => get(menuAtom),
  (get, set, value: MenuStore) => {
    localStorage.setItem("menu-store", JSON.stringify(value))
    if (get(menuAtom)) {
      set(menuAtom, value)
    }
  },
)
