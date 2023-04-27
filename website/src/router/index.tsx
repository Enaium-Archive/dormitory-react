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

import { createBrowserRouter, Navigate } from "react-router-dom"
import Login from "@/pages/Login.tsx"
import Manager from "@/layouts/Manager.tsx"
import AbsentRecord from "@/pages/absent/AbsentRecord.tsx"
import AbsentRegister from "@/pages/absent/AbsentRegister.tsx"
import OperatorManager from "@/pages/OperatorManager.tsx"
import BuildingManager from "@/pages/BuildingManager.tsx"
import MigrateManager from "@/pages/MigrateManager.tsx"
import StudentManager from "@/pages/StudentManager.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/manager",
    element: <Manager />,
    children: [
      {
        index: true,
        element: <Navigate to={"absent-record"} />,
      },
      {
        path: "absent-record",
        element: <AbsentRecord />,
      },
      {
        path: "absent-register",
        element: <AbsentRegister />,
      },
      {
        path: "operator-manager",
        element: <OperatorManager />,
      },
      {
        path: "building-manager",
        element: <BuildingManager />,
      },
      {
        path: "migrate-manager",
        element: <MigrateManager />,
      },
      {
        path: "student-manager",
        element: <StudentManager />,
      },
    ],
  },
])

export default router
