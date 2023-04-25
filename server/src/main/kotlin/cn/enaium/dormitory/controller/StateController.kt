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

import cn.dev33.satoken.stp.StpUtil
import cn.enaium.dormitory.model.entity.input.OperatorInput
import cn.enaium.dormitory.model.response.PutStateBody
import cn.enaium.dormitory.model.response.ResponseBody
import cn.enaium.dormitory.repository.OperatorRepository
import org.springframework.web.bind.annotation.*

/**
 * 操作员状态
 *
 * @author Enaium
 */
@RestController
@RequestMapping("/state/")
class StateController(
    val operatorRepository: OperatorRepository
) {

    /**
     * 登录
     *
     * @param operatorInput 请求体
     * @return 是否成功，成功就返回操作员ID和Token
     */
    @PutMapping
    fun put(@RequestBody operatorInput: OperatorInput): ResponseBody<PutStateBody?> {
        if (operatorInput.username.isNullOrBlank()) {
            return ResponseBody.Builder.fail(status = ResponseBody.Status.USERNAME_EMPTY)
        }

        operatorRepository.findByUsername(operatorInput.username)?.let {
            if (it.password == operatorInput.password) {
                return ResponseBody.Builder.success(metadata = PutStateBody(it.id, StpUtil.createLoginSession(it.id)))
            } else {
                return ResponseBody.Builder.fail(status = ResponseBody.Status.PASSWORD_INCORRECT)
            }
        }

        return ResponseBody.Builder.fail(status = ResponseBody.Status.USERNAME_DOESNT_EXIST)
    }

    /**
     * 退出登录
     *
     * @return 退出成功
     */
    @DeleteMapping
    fun delete(): ResponseBody<Nothing?> {
        StpUtil.logout()
        return ResponseBody.Builder.success()
    }
}