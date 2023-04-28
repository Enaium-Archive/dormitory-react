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

import { Button, Form, Input, message, Radio, Select } from "antd"
import React, { memo } from "react"
import { BuildingDto, DormitoryDto } from "@/__generated/model/dto"
import { ColProps } from "antd/es/grid/col"
import { useQuery } from "react-query"
import { api } from "@/common/ApiInstance.ts"

const Dormitory: React.FC<{
  dormitory?: DormitoryDto["DormitoryController/DEFAULT_FETCHER"] | null
  onDone?: () => void
  labelCol?: ColProps
}> = memo(({ dormitory, onDone, labelCol }) => {
  const { data } = useQuery({
    queryKey: ["DormitoryForm"],
    queryFn: () => api.buildingController.get({}),
  })

  const onFinish = (values: DormitoryDto["DormitoryController/DEFAULT_FETCHER"]) => {
    api.dormitoryController
      .put({
        body: {
          id: dormitory?.id,
          name: values?.name,
          type: values?.type,
          telephone: values?.telephone,
          buildingId: values?.building?.id,
        },
      })
      .then((r) => {
        if (r.code == 200) {
          message.success("更新成功")
        }
      })

    console.log(values)

    if (typeof onDone == "function") {
      onDone()
    }
  }

  return (
    <>
      <Form onFinish={onFinish} labelCol={labelCol} initialValues={{ ...dormitory }}>
        <Form.Item name={["building", "id"]} label="宿舍楼" rules={[{ required: true, message: "请输选择宿舍楼!" }]}>
          <Select
            className="w-100"
            style={{ width: 120 }}
            placeholder={dormitory?.building?.name ?? "请选择宿舍楼"}
            options={data?.metadata?.content.map((item: BuildingDto["BuildingController/DEFAULT_FETCHER"]) => ({
              label: item.name,
              value: item.id,
            }))}
          />
        </Form.Item>
        <Form.Item name="name" label="名称" rules={[{ required: true, message: "请输入名称!" }]}>
          <Input placeholder={dormitory?.name ?? "请输入名称"} />
        </Form.Item>
        <Form.Item name="type" label="类型" rules={[{ required: true, message: "请选择类型" }]}>
          <Radio.Group className="d-flex justify-content-between">
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
            <Radio value={6}>6</Radio>
            <Radio value={7}>7</Radio>
            <Radio value={8}>8</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="telephone" label="电话" rules={[{ required: true, message: "请输入电话!" }]}>
          <Input placeholder={dormitory?.telephone ?? "请输入电话"} />
        </Form.Item>
        <Button className="w-100" type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </>
  )
})

export default Dormitory
