import { createBrowserRouter } from "react-router-dom"
import Login from "@/pages/Login.tsx"
import Admin from "@/layouts/Admin.tsx"
import AbsentRecord from "@/pages/admin/AbsentRecord.tsx"
import AbsentRegister from "@/pages/admin/AbsentRegister.tsx"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "absent-record",
        element: <AbsentRecord />,
      },
      {
        path: "absent-register",
        element: <AbsentRegister />,
      },
    ],
  },
])

export default router
