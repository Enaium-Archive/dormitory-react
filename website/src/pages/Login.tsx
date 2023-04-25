import { Button, Card, Form, Input, message } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { api } from "@/common/ApiInstance.ts"
import { userStore } from "@/store"
import { useAtom } from "jotai"

const Login = () => {
  const [, setUser] = useAtom(userStore)

  const onFinish = (values: any) => {
    api.stateController.put({ body: values }).then((r) => {
      if (r.metadata) {
        setUser({ id: r.metadata.id, token: r.metadata.token })
        message.success("登录成功")
      } else {
        message.error(r.message)
      }
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card className="w-25" title="登录">
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item name="username" rules={[{ required: true, message: "请输入你的用户名!" }]}>
              <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入你的密码!" }]}>
              <Input prefix={<LockOutlined />} placeholder="请输入密码" />
            </Form.Item>
            <Button className="w-100" type="primary" htmlType="submit">
              登录
            </Button>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default Login
