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

import { Button, message, Popconfirm, Table } from "antd"
import { useQuery } from "react-query"
import { api } from "@/common/ApiInstance.ts"
import { useImmer } from "use-immer"
import { RequestOf } from "@/__generated"
import { OperatorDto } from "@/__generated/model/dto"
import React, { memo, useCallback } from "react"
import { ColumnsType } from "antd/es/table"
import { atom, useSetAtom } from "jotai"

const operatorAtom = atom<OperatorDto["OperatorController/DEFAULT_FETCHER"] | null>(null)

const columns: ColumnsType<OperatorDto["OperatorController/DEFAULT_FETCHER"]> = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
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
    render: (_, record?: OperatorDto["OperatorController/DEFAULT_FETCHER"]) => {
      return <div>{record?.gender ? "男" : "女"}</div>
    },
  },
  {
    title: "电话",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "角色",
    dataIndex: "role",
    key: "role",
    render: (_, record?: OperatorDto["OperatorController/DEFAULT_FETCHER"]) => {
      return <div>{record?.role?.name}</div>
    },
  },
  {
    title: "操作",
    render: (_, record: OperatorDto["OperatorController/DEFAULT_FETCHER"]) => {
      return <OperatorAction operator={record} />
    },
  },
]

const OperatorAction: React.FC<{ operator: OperatorDto["OperatorController/DEFAULT_FETCHER"] }> = memo(
  ({ operator }) => {
    const setOperator = useSetAtom(operatorAtom)
    return (
      <>
        <Button.Group>
          <Button size="small" type="primary" onClick={() => setOperator(operator)}>
            修改
          </Button>
          <Popconfirm
            title="删除记录"
            description="你确定要删除这条记录吗?"
            onConfirm={() => {
              api.operatorController.delete({ id: operator.id }).then((r) => {
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
  },
)

const OperatorManager = () => {
  const [options, setOptions] = useImmer<RequestOf<typeof api.operatorController.get>>(() => {
    return {
      page: 0,
      size: 10,
    }
  })

  const { data } = useQuery({
    queryKey: ["AbsentRecord", options],
    queryFn: () => api.operatorController.get(options),
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

  return (
    <>
      <Table
        columns={columns}
        dataSource={data?.metadata?.content}
        pagination={pagination}
        rowKey={(record: OperatorDto["OperatorController/DEFAULT_FETCHER"]) => record.id}
        bordered
      />
    </>
  )
}

export default OperatorManager
