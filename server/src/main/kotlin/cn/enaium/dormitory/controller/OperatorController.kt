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

package cn.enaium.dormitory.controller

import cn.enaium.dormitory.model.entity.Operator
import cn.enaium.dormitory.model.response.ResponseBody
import cn.enaium.dormitory.repository.OperatorRepository
import cn.enaium.dormitory.repository.OperatorRepository.Companion.DEFAULT_FETCHER
import org.springframework.data.domain.Page
import org.springframework.web.bind.annotation.*

/**
 * 操作员
 *
 * @author Enaium
 */
@RestController
@RequestMapping("/operator/")
class OperatorController(
    val operatorRepository: OperatorRepository
) {

    /**
     * 分页获取所有操作员
     *
     * @param page 第几页
     * @param size 一页有几个
     * @return 分页的操作员
     */
    @GetMapping
    fun get(
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "1") size: Int
    ): ResponseBody<Page<Operator>?> {
        return ResponseBody.Builder.success(
            metadata = operatorRepository.findAll(page, size, DEFAULT_FETCHER)
        )
    }

    /**
     * 根据ID获取所有操作员
     *
     * @param id 操作员唯一身份
     * @return 操作员
     */
    @GetMapping("{id}")
    fun get(@PathVariable id: Int): ResponseBody<Operator?> {
        operatorRepository.findNullable(id, DEFAULT_FETCHER)?.let {
            return ResponseBody.Builder.success(metadata = it)
        }
        return ResponseBody.Builder.fail(status = ResponseBody.Status.OPERATOR_DOESNT_EXIST)
    }

    /**
     * 根据ID删除操作员
     *
     * @param id 操作员
     * @return 删除成功
     */
    @DeleteMapping("{id}")
    fun delete(@PathVariable id: Int): ResponseBody<Nothing?> {
        operatorRepository.deleteById(id)
        return ResponseBody.Builder.success()
    }
}