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
import { Button, Card, message, Modal, Popconfirm, Table } from "antd"
import { DormitoryDto, StudentDto } from "@/__generated/model/dto"
import { useImmer } from "use-immer"
import { RequestOf } from "@/__generated"
import { api } from "@/common/ApiInstance.ts"
import { useQuery } from "react-query"
import React, { memo, useCallback } from "react"
import { atom, useAtom, useSetAtom } from "jotai"
import { ColumnsType } from "antd/es/table"
import StudentForm from "@/components/student/StudentForm.tsx"
import { PlusOutlined } from "@ant-design/icons"

const studentAtom = atom<StudentDto["StudentController/DEFAULT_FETCHER"] | null>(null)

const columns: ColumnsType<StudentDto["StudentController/DEFAULT_FETCHER"]> = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "学号",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "性别",
    dataIndex: "gender",
    key: "gender",
    render: (gender?: boolean) => {
      return <div>{gender ? "男" : "女"}</div>
    },
  },
  {
    title: "宿舍",
    dataIndex: "dormitory",
    key: "dormitory",
    render: (dormitory?: DormitoryDto["DormitoryController/DEFAULT_FETCHER"]) => <div>{dormitory?.name}</div>,
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "时间",
    dataIndex: "createDate",
    key: "createDate",
  },
  {
    title: "操作",
    render: (_, record: StudentDto["StudentController/DEFAULT_FETCHER"]) => {
      return <StudentAction student={record} />
    },
  },
]

const StudentAction: React.FC<{ student: StudentDto["StudentController/DEFAULT_FETCHER"] }> = memo(({ student }) => {
  const setStudent = useSetAtom(studentAtom)
  return (
    <>
      <Button.Group>
        <Button size="small" type="primary" onClick={() => setStudent(student)}>
          修改
        </Button>
        <Popconfirm
          title="删除记录"
          description="你确定要删除这条记录吗?"
          onConfirm={() => {
            api.studentController.delete({ id: student.id }).then((r) => {
              if (r.code == 200) {
                message.success("删除成功")
              }
            })
          }}
          onCancel={() => {
            message.info("取消删除")
          }}
          okText="确认"
          cancelText="取消"
        >
          <Button size="small" type="primary" danger>
            删除
          </Button>
        </Popconfirm>
      </Button.Group>
    </>
  )
})

const StudentManager = () => {
  const [options, setOptions] = useImmer<RequestOf<typeof api.studentController.get>>({})

  const { data } = useQuery({
    queryKey: ["StudentManager", options],
    queryFn: () => api.studentController.get(options),
  })

  const page = data?.metadata?.number

  const pagination = {
    current: page ? page + 1 : undefined,
    pageSize: data?.metadata?.size,
    total: data?.metadata?.totalElements,
    onChange: useCallback(
      (page: number, pageSize: number) => {
        setOptions((draft) => {
          draft.page = page - 1
          draft.size = pageSize
        })
      },
      [setOptions],
    ),
  }

  const [student, setStudent] = useAtom(studentAtom)

  return (
    <>
      <Card title="搜索"></Card>
      <Card
        title={
          <div className="d-flex justify-content-between">
            <div>学生</div>
            <Button
              className="d-flex align-items-center"
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => {
                setStudent({} as never)
              }}
            >
              添加
            </Button>
          </div>
        }
      >
        <Table
          columns={columns}
          dataSource={data?.metadata?.content}
          pagination={pagination}
          rowKey={(record: StudentDto["StudentController/DEFAULT_FETCHER"]) => record.id}
          bordered
        />
      </Card>
      <Modal open={student != null} width={600} footer={<></>} onCancel={() => setStudent(null)}>
        <div className="m-3">
          <StudentForm labelCol={{ span: 3 }} student={student} />
        </div>
      </Modal>
    </>
  )
}

export default StudentManager
