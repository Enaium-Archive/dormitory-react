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

import { Button, Layout, message, Popconfirm } from "antd"
import SideMenu from "@/components/SideMenu.tsx"
import { Outlet, useNavigate } from "react-router-dom"
import { api } from "@/common/ApiInstance.ts"
import { useSetAtom } from "jotai"
import { menuStore, userStore } from "@/store"
import React from "react"

const { Content, Sider } = Layout

const Manager = () => {
  const user = useSetAtom(userStore)
  const menu = useSetAtom(menuStore)

  const navigate = useNavigate()

  const logout = () => {
    api.stateController.delete().then((r) => {
      if (r.code == 200) {
        user({})
        menu({ menus: [] })
        navigate("/")
        message.success("退出成功")
      }
    })
  }

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          background: "white",
        }}
      >
        <div>
          <SideMenu />
          <Popconfirm
            title="退出登录"
            description="你确定要退出登录吗?"
            onConfirm={logout}
            onCancel={() => {
              message.info("取消退出")
            }}
            okText="确认"
            cancelText="取消"
          >
            <Button className="w-100" type="primary" danger>
              退出
            </Button>
          </Popconfirm>
        </div>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Manager
