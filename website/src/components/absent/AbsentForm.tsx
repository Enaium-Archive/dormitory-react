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

import { Button, Form, Input, message } from "antd"
import React, { memo } from "react"
import DebounceSelect from "@/components/DebounceSelect.tsx"
import { api } from "@/common/ApiInstance.ts"
import { AbsentDto, BuildingDto, DormitoryDto, StudentDto } from "@/__generated/model/dto"
import { ColProps } from "antd/es/grid/col"

const fetchBuilding = async (name: string): Promise<ReadonlyArray<BuildingDto["DEFAULT"]>> => {
  return (await api.buildingController.get({ buildingInput: { name: name } })).metadata?.content ?? []
}

const fetchDormitory = async (name: string): Promise<ReadonlyArray<DormitoryDto["DEFAULT"]>> => {
  return (await api.dormitoryController.get({ dormitoryInput: { name: name } })).metadata?.content ?? []
}

const fetchStudent = async (name: string): Promise<ReadonlyArray<StudentDto["DEFAULT"]>> => {
  return (await api.studentController.get({ studentInput: { name: name } })).metadata?.content ?? []
}

const AbsentForm: React.FC<{
  absent?: AbsentDto["AbsentController/DEFAULT_FETCHER"] | null
  onDone?: () => void
  labelCol?: ColProps
}> = memo(({ absent, onDone, labelCol }) => {
  const onFinish = ({ building, dormitory, student, reason }: any) => {
    api.absentController
      .put({
        body: {
          id: absent?.id,
          buildingId: building.value,
          dormitoryId: dormitory.value,
          studentId: student.value,
          reason: reason,
        },
      })
      .then((r) => {
        if (r.code == 200) {
          message.success("更新成功")
        }
      })
    if (typeof onDone == "function") {
      onDone()
    }
  }

  return (
    <>
      <Form onFinish={onFinish} labelCol={labelCol}>
        <Form.Item name="building" label="宿舍楼" rules={[{ required: true, message: "请选宿舍楼!" }]}>
          <DebounceSelect
            showSearch
            placeholder={absent?.building.name ?? "请选择宿舍楼"}
            fetchOptions={fetchBuilding}
          />
        </Form.Item>
        <Form.Item name="dormitory" label="宿舍" rules={[{ required: true, message: "请选择宿舍!" }]}>
          <DebounceSelect
            showSearch
            placeholder={absent?.dormitory.name ?? "请选择宿舍"}
            fetchOptions={fetchDormitory}
          />
        </Form.Item>
        <Form.Item name="student" label="学生" rules={[{ required: true, message: "请选择学生!" }]}>
          <DebounceSelect showSearch placeholder={absent?.student.name ?? "请选择学生"} fetchOptions={fetchStudent} />
        </Form.Item>
        <Form.Item name="reason" label="原因" rules={[{ required: true, message: "请输入原因!" }]}>
          <Input placeholder={absent?.reason ?? "请输入原因"} />
        </Form.Item>
        <Button className="w-100" type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </>
  )
})

export default AbsentForm
