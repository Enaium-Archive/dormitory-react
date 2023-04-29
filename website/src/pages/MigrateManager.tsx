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
import { DormitoryDto, MigrateDto, StudentDto } from "@/__generated/model/dto"
import { useImmer } from "use-immer"
import { RequestOf } from "@/__generated"
import { api } from "@/common/ApiInstance.ts"
import { useQuery } from "react-query"
import React, { memo, useCallback } from "react"
import { atom, useAtom, useSetAtom } from "jotai"
import { ColumnsType } from "antd/es/table"
import { PlusOutlined } from "@ant-design/icons"
import MigrateForm from "@/components/migrate/MigrateForm.tsx"
import MigrateSearchForm from "@/components/migrate/MigrateSearchForm.tsx"

const migrateAtom = atom<MigrateDto["MigrateController/DEFAULT_FETCHER"] | null>(null)

const columns: ColumnsType<MigrateDto["MigrateController/DEFAULT_FETCHER"]> = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "学生",
    dataIndex: "student",
    key: "student",
    render: (student?: StudentDto["StudentController/DEFAULT_FETCHER"]) => <div>{student?.name}</div>,
  },
  {
    title: "宿舍",
    dataIndex: "dormitory",
    key: "dormitory",
    render: (dormitory?: DormitoryDto["DormitoryController/DEFAULT_FETCHER"]) => <div>{dormitory?.name}</div>,
  },
  {
    title: "时间",
    dataIndex: "createDate",
    key: "createDate",
  },
  {
    title: "原因",
    dataIndex: "reason",
    key: "reason",
  },
  {
    title: "操作",
    render: (_, record: MigrateDto["MigrateController/DEFAULT_FETCHER"]) => {
      return <MigrateAction migrate={record} />
    },
  },
]

const MigrateAction: React.FC<{ migrate: MigrateDto["MigrateController/DEFAULT_FETCHER"] }> = memo(({ migrate }) => {
  const setMigrate = useSetAtom(migrateAtom)
  return (
    <>
      <Button.Group>
        <Button size="small" type="primary" onClick={() => setMigrate(migrate)}>
          修改
        </Button>
        <Popconfirm
          title="删除记录"
          description="你确定要删除这条记录吗?"
          onConfirm={() => {
            api.migrateController.delete({ id: migrate.id }).then((r) => {
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

const MigrateManager = () => {
  const [options, setOptions] = useImmer<RequestOf<typeof api.migrateController.get>>({})

  const { data } = useQuery({
    queryKey: ["MigrateManager", options],
    queryFn: () => api.migrateController.get(options),
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

  const onSearch = useCallback(
    (values: MigrateDto["MigrateController/DEFAULT_FETCHER"]) => {
      setOptions((draft) => {
        draft.migrateInput = {
          studentId: values?.student?.id,
          dormitoryId: values?.dormitory?.id,
          createDate: values?.createDate ? new Date(values.createDate).toISOString() : undefined,
        }
      })
    },
    [setOptions],
  )

  const [migrate, setMigrate] = useAtom(migrateAtom)

  return (
    <>
      <Card title="搜索">
        <MigrateSearchForm onFinish={onSearch} />
      </Card>
      <Card
        title={
          <div className="d-flex justify-content-between">
            <div>迁出</div>
            <Button
              className="d-flex align-items-center"
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => {
                setMigrate({} as never)
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
          rowKey={(record: MigrateDto["MigrateController/DEFAULT_FETCHER"]) => record.id}
          bordered
        />
      </Card>
      <Modal open={migrate != null} width={600} footer={<></>} onCancel={() => setMigrate(null)}>
        <div className="m-3">
          <MigrateForm labelCol={{ span: 3 }} migrate={migrate} />
        </div>
      </Modal>
    </>
  )
}

export default MigrateManager
