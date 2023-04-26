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
import { Col, Form, Input, Row } from "antd"
import { BuildingDto, DormitoryDto, StudentDto } from "@/__generated/model/dto"
import { api } from "@/common/ApiInstance.ts"
import DebounceSelect from "@/components/DebounceSelect.tsx"

const fetchBuilding = async (name: string): Promise<ReadonlyArray<BuildingDto["DEFAULT"]>> => {
  return (await api.buildingController.get({ buildingInput: { name: name } })).metadata?.content ?? []
}

const fetchDormitory = async (name: string): Promise<ReadonlyArray<DormitoryDto["DEFAULT"]>> => {
  return (await api.dormitoryController.get({ dormitoryInput: { name: name } })).metadata?.content ?? []
}

const fetchStudent = async (name: string): Promise<ReadonlyArray<StudentDto["DEFAULT"]>> => {
  return (await api.studentController.get({ studentInput: { name: name } })).metadata?.content ?? []
}

const AbsentSearchForm = () => {
  return (
    <>
      <Form>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="building" label="宿舍楼">
              <DebounceSelect showSearch placeholder="选择宿舍楼" fetchOptions={fetchBuilding} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="dormitory" label="宿舍">
              <DebounceSelect showSearch placeholder="选择宿舍" fetchOptions={fetchDormitory} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="student" label="学生">
              <DebounceSelect showSearch placeholder="选择学生" fetchOptions={fetchStudent} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="operator" label="操作员">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="operator" label="日期">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="operator" label="原因">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default AbsentSearchForm
