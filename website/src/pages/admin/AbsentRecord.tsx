import { ColumnsType } from "antd/es/table"
import { useQuery } from "react-query"
import { api } from "@/common/ApiInstance.ts"
import { Button, message, Popconfirm, Table } from "antd"
import { AbsentDto, DormitoryDto, OperatorDto, StudentDto } from "@/__generated/model/dto"
import { useImmer } from "use-immer"
import { RequestOf } from "@/__generated"
import { useCallback } from "react"

const columns: ColumnsType<AbsentDto["DEFAULT"]> = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "宿舍楼",
    dataIndex: "building",
    key: "building",
    render: (building: DormitoryDto["DEFAULT"]) => <div>{building.name}</div>,
  },
  {
    title: "宿舍",
    dataIndex: "dormitory",
    key: "dormitory",
    render: (dormitory: DormitoryDto["DEFAULT"]) => <div>{dormitory.name}</div>,
  },
  {
    title: "学生",
    dataIndex: "student",
    key: "student",
    render: (student: StudentDto["DEFAULT"]) => <div>{student.name}</div>,
  },
  {
    title: "操作员",
    dataIndex: "operator",
    key: "operator",
    render: (operator: OperatorDto["DEFAULT"]) => <div>{operator.name}</div>,
  },
  {
    title: "操作",
    render: (_, record: AbsentDto["DEFAULT"]) => (
      <>
        <Button.Group>
          <Button size="small" type="primary">
            修改
          </Button>
          <Popconfirm
            title="删除记录"
            description="你确定要删除这条记录吗?"
            onConfirm={() => {
              api.absentController.delete({ id: record.id }).then((r) => {
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
    ),
  },
]

const AbsentRecord = () => {
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

  return (
    <>
      <Table
        columns={columns}
        dataSource={data?.metadata?.content}
        pagination={pagination}
        rowKey={(record: AbsentDto["DEFAULT"]) => record.id}
        bordered
      />
    </>
  )
}

export default AbsentRecord
