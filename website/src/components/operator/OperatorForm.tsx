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

import { Button, Form, Input } from "antd"
import React, { memo } from "react"
import { OperatorDto } from "@/__generated/model/dto"
import { ColProps } from "antd/es/grid/col"

const OperatorForm: React.FC<{
  operator?: OperatorDto["OperatorController/DEFAULT_FETCHER"] | null
  onDone?: () => void
  labelCol?: ColProps
}> = memo(({ operator, onDone, labelCol }) => {
  const onFinish = (values: any) => {
    console.log(values)
    if (typeof onDone == "function") {
      onDone()
    }
  }

  return (
    <>
      <Form onFinish={onFinish} labelCol={labelCol}>
        <Form.Item name="username" label="用户名" rules={[{ required: true, message: "请输入用户名!" }]}>
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item name="passw" label="密码" rules={[{ required: true, message: "请输入密码!" }]}>
          <Input placeholder="请输入密码" />
        </Form.Item>
        <Form.Item name="name" label="姓名" rules={[{ required: true, message: "请输入姓名!" }]}>
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item name="gender" label="性别" rules={[{ required: true, message: "请选择性别!" }]}></Form.Item>
        <Form.Item name="role" label="角色" rules={[{ required: true, message: "请选择角色!" }]}></Form.Item>
        <Button className="w-100" type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </>
  )
})

export default OperatorForm
