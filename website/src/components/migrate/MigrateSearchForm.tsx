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

import { Button, Col, DatePicker, Form, FormProps, Input, Row } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { memo } from "react"
import {DormitoryDto, StudentDto} from "@/__generated/model/dto";
import {api} from "@/common/ApiInstance.ts";
import DebounceSelect from "@/components/DebounceSelect.tsx";

const fetchStudent = async (name: string): Promise<ReadonlyArray<StudentDto["StudentController/DEFAULT_FETCHER"]>> => {
  return (await api.studentController.get({ studentInput: { name: name } })).metadata?.content ?? []
}

const fetchDormitory = async (
    name: string,
): Promise<ReadonlyArray<DormitoryDto["DormitoryController/DEFAULT_FETCHER"]>> => {
  return (await api.dormitoryController.get({ dormitoryInput: { name: name } })).metadata?.content ?? []
}

const OperatorSearchForm = memo(({ ...props }: FormProps) => {
  return (
    <>
      <Form {...props}>
        <Row gutter={16}>
          <Col span={5}>
            <Form.Item name={["student", "id"]} label="学生">
              <DebounceSelect showSearch placeholder="请选择学生" fetchOptions={fetchStudent} allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name={["dormitory", "id"]} label="宿舍">
              <DebounceSelect showSearch placeholder="请选择宿舍" fetchOptions={fetchDormitory} allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="createDate" label="时间">
              <DatePicker showTime className="w-100" placeholder="请选择时间" />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="reason" label="原因">
              <Input placeholder="请输入原因" />
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
