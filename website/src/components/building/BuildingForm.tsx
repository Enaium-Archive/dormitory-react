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

import { Button, Form, Input, message, Select } from "antd"
import React, { memo } from "react"
import { BuildingDto, OperatorDto } from "@/__generated/model/dto"
import { ColProps } from "antd/es/grid/col"
import { useQuery } from "react-query"
import { api } from "@/common/ApiInstance.ts"

const BuildingForm: React.FC<{
  building?: BuildingDto["BuildingController/DEFAULT_FETCHER"] | null
  onDone?: () => void
  labelCol?: ColProps
}> = memo(({ building, onDone, labelCol }) => {
  const { data } = useQuery({
    queryKey: ["BuildingForm"],
    queryFn: () => api.operatorController.get({}),
  })

  const onFinish = (values: BuildingDto["BuildingController/DEFAULT_FETCHER"]) => {
    console.log(values);
    api.buildingController
      .put({
        body: {
          id: building?.id,
          name: values?.name,
          operatorId: values?.operator?.id,
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
      <Form onFinish={onFinish} labelCol={labelCol} initialValues={{ ...building }}>
        <Form.Item name="name" label="名称" rules={[{ required: true, message: "请输入名称!" }]}>
          <Input placeholder={building?.name ?? "请输入名称"} />
        </Form.Item>
        <Button className="w-100" type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </>
  )
})

export default BuildingForm
