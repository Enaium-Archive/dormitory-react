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

package cn.enaium.dormitory.model.response

/**
 * @author Enaium
 *
 * @param T ；类型
 * @property code 请求代码
 * @property message 请求信息
 * @property metadata 请求数据
 */
data class ResponseBody<T>(val code: Int, val message: String, val metadata: T) {

    enum class Status(val code: Int, val message: String) {
        SUCCESS(200, "成功"),
        FAIL(999, "失败"),
        USERNAME_EMPTY(2001, "用户名为空"),
        USERNAME_DOESNT_EXIST(2001, "用户名不存在"),
        PASSWORD_INCORRECT(2001, "密码不正确"),
        OPERATOR_DOESNT_EXIST(2002,"操作员不存在")
    }

    object Builder {
        fun <T> success(
            status: Status = Status.SUCCESS,
            code: Int = status.code,
            message: String = status.message,
            metadata: T? = null
        ): ResponseBody<T?> {
            return ResponseBody(code, message, metadata)
        }

        fun <T> fail(
            status: Status = Status.FAIL,
            code: Int = status.code,
            message: String = status.message,
            metadata: T? = null
        ): ResponseBody<T?> {
            return ResponseBody(code, message, metadata)
        }
    }
}
