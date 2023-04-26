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

import { Button, Card, Form, Input, message } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { api } from "@/common/ApiInstance.ts"
import { userStore } from "@/store"
import { useAtom } from "jotai"
import { memo } from "react"

const Login = memo(() => {
  const [, setUser] = useAtom(userStore)

  const onFinish = (values: any) => {
    api.stateController.put({ body: values }).then((r) => {
      if (r.metadata) {
        setUser({ id: r.metadata.id, token: r.metadata.token })
        message.success("登录成功")
      } else {
        message.error(r.message)
      }
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card className="w-25" title="登录">
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item name="username" rules={[{ required: true, message: "请输入你的用户名!" }]}>
              <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入你的密码!" }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
            </Form.Item>
            <Button className="w-100" type="primary" htmlType="submit">
              登录
            </Button>
          </Form>
        </Card>
      </div>
    </>
  )
})

export default Login
