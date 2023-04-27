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

import React from "react"
import { Menu, MenuProps } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { useAtom } from "jotai"
import { getUserStorage, menuStore } from "@/store"
import { api } from "@/common/ApiInstance.ts"

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const SideMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()
  let items: MenuProps["items"]
  const [menu, setMenu] = useAtom(menuStore)
  const id = getUserStorage().id
  if ((!menu.menus || menu.menus.length) == 0 && id) {
    api.menuController.get({ operatorId: id }).then((r) => {
      setMenu({ menus: r.metadata })
    })
  } else {
    items = [
      getItem(
        "菜单",
        "menu",
        null,
        menu.menus.map((item) => getItem(item.label, item.key)),
        "group",
      ),
    ]
  }

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={[location.pathname.split("/")[2]]}
      mode="inline"
      items={items}
    />
  )
}

export default SideMenu
