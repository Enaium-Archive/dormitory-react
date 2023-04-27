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

import { Button, Col, Form, FormProps, Input, Radio, Row, Select } from "antd"
import { useQuery } from "react-query"
import { api } from "@/common/ApiInstance.ts"
import { RoleDto } from "@/__generated/model/dto"
import { SearchOutlined } from "@ant-design/icons"
import { memo } from "react"

const OperatorSearchForm = memo(({ ...props }: FormProps) => {
  const { data } = useQuery({
    queryKey: ["OperatorForm"],
    queryFn: () => api.roleController.get(),
  })

  return (
    <>
      <Form {...props}>
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item name="username" label="用户名">
              <Input placeholder={"请输入用户名"} allowClear />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="name" label="姓名">
              <Input placeholder={"请输入姓名"} allowClear />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="gender" label="性别">
              <Radio.Group className="d-flex justify-content-between">
                <Radio value={0}>女</Radio>
                <Radio value={1}>男</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="phone" label="电话">
              <Input placeholder={"请输入电话"} allowClear />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="role" label="角色">
              <Select
                className="w-100"
                style={{ width: 120 }}
                placeholder="请选择角色"
                options={data?.metadata?.map((item: RoleDto["DEFAULT"]) => ({
                  label: item.name,
                  value: item.id,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Button
              className="w-100 d-flex justify-content-center align-items-center"
              type="primary"
              icon={<SearchOutlined />}
              htmlType="submit"
            >
              搜索
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
})

export default OperatorSearchForm
