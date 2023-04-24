import { Button, Card, Form, Input } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"

const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
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
  )
}

export default Login
