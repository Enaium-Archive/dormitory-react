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

package cn.enaium.dormitory.interceptor

import cn.dev33.satoken.interceptor.SaInterceptor
import cn.dev33.satoken.router.SaRouter
import cn.dev33.satoken.stp.StpInterface
import cn.dev33.satoken.stp.StpUtil
import cn.enaium.dormitory.model.entity.Operator
import cn.enaium.dormitory.model.entity.by
import cn.enaium.dormitory.repository.OperatorRepository
import org.babyfish.jimmer.sql.kt.fetcher.newFetcher
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

/**
 * @author Enaium
 */
@Component
class SaTokenInterceptor(
    val operatorRepository: OperatorRepository,
    @Value("\${jimmer.client.ts.path}") val typescriptPath: String
) :
    SaInterceptor({
        SaRouter.match("/**")
            .notMatch("/swagger-ui/**", "/v3/api-docs/**", typescriptPath)
            .notMatchMethod("OPTIONS").check { r ->
                StpUtil.checkLogin()
            }
    }), StpInterface {
    override fun getPermissionList(loginId: Any, loginType: String): List<String> {
        return emptyList()
    }

    override fun getRoleList(loginId: Any, loginType: String): List<String> {
        operatorRepository.findNullable(loginId.toString().toInt(), newFetcher(Operator::class).by {
            role {
                allScalarFields()
            }
        })?.let { return listOf(it.role.name) } ?: let { return emptyList() }
    }
}