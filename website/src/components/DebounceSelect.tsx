import { Select, SelectProps, Spin } from "antd"
import debounce from "lodash/debounce"
import { memo, useMemo, useRef, useState } from "react"

export interface DebounceSelectProps<ValueType>
  extends Omit<SelectProps<ValueType | ReadonlyArray<ValueType>>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ReadonlyArray<ValueType>>
  debounceTimeout?: number
}

const DebounceSelect = memo(
  <ValueType = any,>({
    fetchOptions,
    debounceTimeout = 800,
    ...props
  }: DebounceSelectProps<ValueType>) => {
    const [fetching, setFetching] = useState(false)
    const [options, setOptions] = useState<ReadonlyArray<ValueType>>([])
    const fetchRef = useRef(0)

    const debounceFetcher = useMemo(() => {
      const loadOptions = (value: string) => {
        fetchRef.current += 1
        const fetchId = fetchRef.current
        setOptions([])
        setFetching(true)

        fetchOptions(value).then((newOptions) => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return
          }

          setOptions(newOptions)
          setFetching(false)
        })
      }

      return debounce(loadOptions, debounceTimeout)
    }, [fetchOptions, debounceTimeout])

    return (
      <Select
        labelInValue
        filterOption={false}
        onSearch={debounceFetcher}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        {...props}
        options={options.map((item: any) => {
          return {
            key: item.id,
            label: item.name,
            value: item.id,
          }
        })}
      />
    )
  },
)

export default DebounceSelect
