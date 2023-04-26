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
import { AbsentInput } from "@/__generated/model/static"
import React, { useState } from "react"
import DebounceSelect from "@/components/DebounceSelect.tsx"
import { api } from "@/common/ApiInstance.ts"
import { BuildingDto, DormitoryDto, StudentDto } from "@/__generated/model/dto"

const fetchBuilding = async (name: string): Promise<ReadonlyArray<BuildingDto["DEFAULT"]>> => {
  return (await api.buildingController.get({ buildingInput: { name: name } })).metadata?.content ?? []
}

const fetchDormitory = async (name: string): Promise<ReadonlyArray<DormitoryDto["DEFAULT"]>> => {
  return (await api.dormitoryController.get({ dormitoryInput: { name: name } })).metadata?.content ?? []
}

const fetchStudent = async (name: string): Promise<ReadonlyArray<StudentDto["DEFAULT"]>> => {
  return (await api.studentController.get({ studentInput: { name: name } })).metadata?.content ?? []
}

const onFinish = (values: any) => {
  console.log(values)
}

const AbsentForm: React.FC<{ absent: AbsentInput }> = ({ absent }) => {
  const [building, setBuilding] = useState<BuildingDto["DEFAULT"]>()
  const [dormitory, setDormitory] = useState<DormitoryDto["DEFAULT"]>()
  const [student, setStudent] = useState<StudentDto["DEFAULT"]>()

  return (
    <>
      <Form onFinish={onFinish} labelCol={{ span: 1 }}>
        <Form.Item name="building" label="宿舍楼" rules={[{ required: true, message: "请选宿舍楼!" }]}>
          <DebounceSelect
            showSearch
            value={building}
            placeholder="请选择宿舍楼"
            fetchOptions={fetchBuilding}
            onChange={(newValue) => {
              setBuilding(newValue as BuildingDto["DEFAULT"])
            }}
          />
        </Form.Item>
        <Form.Item name="dormitory" label="宿舍" rules={[{ required: true, message: "请选择宿舍!" }]}>
          <DebounceSelect
            showSearch
            value={dormitory}
            placeholder="请选择宿舍"
            fetchOptions={fetchDormitory}
            onChange={(newValue) => {
              setDormitory(newValue as DormitoryDto["DEFAULT"])
            }}
          />
        </Form.Item>
        <Form.Item name="student" label="学生" rules={[{ required: true, message: "请选择学生!" }]}>
          <DebounceSelect
            showSearch
            value={student}
            placeholder="请选择学生"
            fetchOptions={fetchStudent}
            onChange={(newValue) => {
              setStudent(newValue as StudentDto["DEFAULT"])
            }}
          />
        </Form.Item>
        <Form.Item name="reason" label="原因" rules={[{ required: true, message: "请选输入原因!" }]}>
          <Input placeholder="请选输入原因" value={absent.reason} />
        </Form.Item>
        <Button className="w-100" type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </>
  )
}

export default AbsentForm
