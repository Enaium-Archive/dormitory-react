import { Form, Input } from "antd"
import { AbsentInput } from "@/__generated/model/static"
import React from "react"

const AbsentForm: React.FC<{ absent: AbsentInput }> = ({ absent }) => {
  return (
    <>
      <Form>
        <Form.Item name="building" label="宿舍楼"></Form.Item>
        <Form.Item name="dormitory" label="宿舍"></Form.Item>
        <Form.Item name="student" label="学生"></Form.Item>
        <Form.Item name="reason" label="原因">
          <Input value={absent.reason} />
        </Form.Item>
      </Form>
    </>
  )
}

export default AbsentForm
