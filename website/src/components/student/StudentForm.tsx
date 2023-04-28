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

import { Button, Form, Input, message, Radio } from "antd"
import React, { memo } from "react"
import { DormitoryDto, StudentDto } from "@/__generated/model/dto"
import { ColProps } from "antd/es/grid/col"
import { api } from "@/common/ApiInstance.ts"
import DebounceSelect from "@/components/DebounceSelect.tsx"

const fetchDormitory = async (
  name: string,
): Promise<ReadonlyArray<DormitoryDto["DormitoryController/DEFAULT_FETCHER"]>> => {
  return (await api.dormitoryController.get({ dormitoryInput: { name: name } })).metadata?.content ?? []
}

const StudentForm: React.FC<{
  student?: StudentDto["StudentController/DEFAULT_FETCHER"] | null
  onDone?: () => void
  labelCol?: ColProps
}> = memo(({ student, onDone, labelCol }) => {
  const onFinish = (values: StudentDto["StudentController/DEFAULT_FETCHER"]) => {
    console.log(values)
    api.studentController
      .put({
        body: {
          id: student?.id,
          number: values?.number,
          name: values?.name,
          gender: values?.gender,
          dormitoryId: values?.dormitory?.id,
          state: values?.state,
          createDate: values?.createDate,
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
      <Form onFinish={onFinish} labelCol={labelCol} initialValues={{ ...student }}>
        <Form.Item name="number" label="学号" rules={[{ required: true, message: "请输入学号!" }]}>
          <Input placeholder={student?.number ?? "请输入学号"} />
        </Form.Item>
        <Form.Item name="name" label="名称" rules={[{ required: true, message: "请输入姓名!" }]}>
          <Input placeholder={student?.name ?? "请输入姓名"} />
        </Form.Item>
        <Form.Item name="gender" label="性别" rules={[{ required: true, message: "请选择性别!" }]}>
          <Radio.Group className="d-flex justify-content-between">
            <Radio value={false}>女</Radio>
            <Radio value={true}>男</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name={["dormitory", "id"]} label="宿舍" rules={[{ required: true, message: "请选择宿舍!" }]}>
          <DebounceSelect
            showSearch
            placeholder={student?.dormitory?.name ?? "请选择宿舍"}
            fetchOptions={fetchDormitory}
          />
        </Form.Item>
        <Form.Item name="state" label="状态" rules={[{ required: true, message: "请输入状态!" }]}>
          <Input placeholder={student?.name ?? "请输入状态"} />
        </Form.Item>
        <Button className="w-100" type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </>
  )
})

export default StudentForm
