import { Card } from "antd"
import AbsentForm from "@/components/admin/AbsentForm.tsx"

const AbsentRegister = () => {
  return (
    <>
      <Card title="缺勤登记">
        <AbsentForm absent={{}} />
      </Card>
    </>
  )
}

export default AbsentRegister
