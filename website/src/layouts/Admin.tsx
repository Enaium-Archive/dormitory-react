import { Layout } from "antd"
import SideMenu from "@/components/admin/SideMenu.tsx"
import { Outlet } from "react-router-dom"

const { Content, Sider } = Layout

const Admin = () => {
  return (
    <>
      <Layout className="vh-100">
        <Sider>
          <SideMenu />
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Admin
