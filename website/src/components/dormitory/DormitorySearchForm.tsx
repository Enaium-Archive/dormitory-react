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
import { SearchOutlined } from "@ant-design/icons"
import { memo } from "react"
import { BuildingDto } from "@/__generated/model/dto"

const DormitorySearchForm = memo(({ ...props }: FormProps) => {
  const { data } = useQuery({
    queryKey: ["DormitorySearchForm"],
    queryFn: () => api.buildingController.get({}),
  })

  return (
    <>
      <Form {...props}>
        <Row gutter={16}>
          <Col span={5}>
            <Form.Item name={["building", "id"]} label="宿舍楼">
              <Select
                className="w-100"
                style={{ width: 120 }}
                placeholder="请选择宿舍楼"
                options={data?.metadata?.content.map((item: BuildingDto["BuildingController/DEFAULT_FETCHER"]) => ({
                  label: item.name,
                  value: item.id,
                }))}
                allowClear
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="name" label="名称">
              <Input placeholder="请输入名称" allowClear/>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="type" label="类型">
              <Radio.Group className="d-flex justify-content-between">
                <Radio value={4}>4</Radio>
                <Radio value={5}>5</Radio>
                <Radio value={6}>6</Radio>
                <Radio value={7}>7</Radio>
                <Radio value={8}>8</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="telephone" label="电话">
              <Input placeholder="请输入电话" allowClear/>
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

export default DormitorySearchForm
