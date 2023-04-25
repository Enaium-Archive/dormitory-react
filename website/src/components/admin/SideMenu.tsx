import React from "react"
import { Menu, MenuProps } from "antd"
import { useLocation, useNavigate } from "react-router-dom"

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

const items: MenuProps["items"] = [
  getItem(
    "菜单",
    "admin",
    null,
    [getItem("缺勤记录", "absent-record"), getItem("缺勤登记", "absent-register")],
    "group",
  ),
]

const SideMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      className="vh-100"
      defaultSelectedKeys={[location.pathname.split("/")[2]]}
      mode="inline"
      items={items}
    />
  )
}

export default SideMenu
