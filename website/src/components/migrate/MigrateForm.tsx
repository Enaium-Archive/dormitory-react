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
import { DormitoryDto, MigrateDto, StudentDto } from "@/__generated/model/dto"
import { ColProps } from "antd/es/grid/col"

const fetchDormitory = async (
  name: string,
): Promise<ReadonlyArray<DormitoryDto["DormitoryController/DEFAULT_FETCHER"]>> => {
  return (await api.dormitoryController.get({ dormitoryInput: { name: name } })).metadata?.content ?? []
}

const fetchStudent = async (name: string): Promise<ReadonlyArray<StudentDto["StudentController/DEFAULT_FETCHER"]>> => {
  return (await api.studentController.get({ studentInput: { name: name } })).metadata?.content ?? []
}

const MigrateForm: React.FC<{
  migrate: MigrateDto["MigrateController/DEFAULT_FETCHER"] | null
  onDone?: () => void
  labelCol?: ColProps
}> = memo(({ migrate, onDone, labelCol }) => {
  const onFinish = (values: MigrateDto["MigrateController/DEFAULT_FETCHER"]) => {
    api.migrateController
      .put({
        body: {
          id: migrate?.id,
          dormitoryId: values?.dormitory?.id,
          studentId: values?.student?.id,
          reason: values?.reason,
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
      <Form onFinish={onFinish} labelCol={labelCol} initialValues={{ ...migrate }}>
        <Form.Item name={["student", "id"]} label="学生" rules={[{ required: true, message: "请选择学生!" }]}>
          <DebounceSelect showSearch placeholder={migrate?.student?.name ?? "请选择学生"} fetchOptions={fetchStudent} />
        </Form.Item>
        <Form.Item name={["dormitory", "id"]} label="宿舍" rules={[{ required: true, message: "请选择宿舍!" }]}>
          <DebounceSelect
            showSearch
            placeholder={migrate?.dormitory?.name ?? "请选择宿舍"}
            fetchOptions={fetchDormitory}
          />
        </Form.Item>
        <Form.Item name="reason" label="原因" rules={[{ required: true, message: "请输入原因!" }]}>
          <Input placeholder={migrate?.reason ?? "请输入原因"} />
        </Form.Item>
        <Button className="w-100" type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </>
  )
})

export default MigrateForm
