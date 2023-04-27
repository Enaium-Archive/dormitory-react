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

import { ColumnsType } from "antd/es/table"
import { useQuery } from "react-query"
import { api } from "@/common/ApiInstance.ts"
import { Button, Card, message, Modal, Popconfirm, Table } from "antd"
import {AbsentDto, BuildingDto, DormitoryDto, OperatorDto, StudentDto} from "@/__generated/model/dto"
import { useImmer } from "use-immer"
import { RequestOf } from "@/__generated"
import React, { memo, useCallback } from "react"
import { atom, useAtom, useSetAtom } from "jotai"
import AbsentForm from "@/components/absent/AbsentForm.tsx"
import AbsentSearchForm from "@/components/absent/AbsentSearchForm.tsx"

const absentAtom = atom<AbsentDto["AbsentController/DEFAULT_FETCHER"] | null>(null)

const columns: ColumnsType<AbsentDto["AbsentController/DEFAULT_FETCHER"]> = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "宿舍楼",
    dataIndex: "building",
    key: "building",
    render: (building?: BuildingDto["DEFAULT"]) => <div>{building?.name}</div>,
  },
  {
    title: "宿舍",
    dataIndex: "dormitory",
    key: "dormitory",
    render: (dormitory?: DormitoryDto["DEFAULT"]) => <div>{dormitory?.name}</div>,
  },
  {
    title: "学生",
    dataIndex: "student",
    key: "student",
    render: (student?: StudentDto["DEFAULT"]) => <div>{student?.name}</div>,
  },
  {
    title: "操作员",
    dataIndex: "operator",
    key: "operator",
    render: (operator?: OperatorDto["OperatorController/DEFAULT_FETCHER"]) => <div>{operator?.name}</div>,
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
    render: (_, record: AbsentDto["AbsentController/DEFAULT_FETCHER"]) => {
      return <AbsentAction absent={record} />
    },
  },
]

const AbsentAction: React.FC<{ absent: AbsentDto["AbsentController/DEFAULT_FETCHER"] }> = ({ absent }) => {
  const setAbsent = useSetAtom(absentAtom)
  return (
    <>
      <Button.Group>
        <Button size="small" type="primary" onClick={() => setAbsent(absent)}>
          修改
        </Button>
        <Popconfirm
          title="删除记录"
          description="你确定要删除这条记录吗?"
          onConfirm={() => {
            api.absentController.delete({ id: absent.id }).then((r) => {
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
}

const AbsentRecord = memo(() => {
  const [options, setOptions] = useImmer<RequestOf<typeof api.absentController.get>>(() => {
    return {
      page: 0,
      size: 10,
    }
  })

  const { data } = useQuery({
    queryKey: ["AbsentRecord", options],
    queryFn: () => api.absentController.get(options),
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
    (values: {
      building: { value: number }
      dormitory: { value: number }
      student: { value: number }
      operator: { value: number }
      createDate: { $d: Date }
      reason: { value: string }
    }) => {
      setOptions((draft) => {
        draft.absentInput = {
          buildingId: values?.building?.value,
          dormitoryId: values?.dormitory?.value,
          studentId: values?.student?.value,
          operatorId: values?.operator?.value,
          createDate: values?.createDate?.$d.getTime().toString(),
          reason: values?.reason?.value,
        }
      })
    },
    [setOptions],
  )

  const [absent, setAbsent] = useAtom(absentAtom)

  return (
    <>
      <Card title="搜索">
        <AbsentSearchForm onFinish={onSearch} />
      </Card>
      <Table
        columns={columns}
        dataSource={data?.metadata?.content}
        pagination={pagination}
        rowKey={(record: AbsentDto["AbsentController/DEFAULT_FETCHER"]) => record.id}
        bordered
      />
      <Modal open={absent != null} width={600} footer={<></>} onCancel={() => setAbsent(null)}>
        <div className="m-3">
          <AbsentForm labelCol={{ span: 3 }} absent={absent} />
        </div>
      </Modal>
    </>
  )
})

export default AbsentRecord
