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

package cn.enaium.dormitory.repository

import cn.enaium.dormitory.controller.OperatorController
import cn.enaium.dormitory.controller.OperatorController.Companion.DEFAULT_FETCHER
import cn.enaium.dormitory.model.entity.*
import cn.enaium.dormitory.model.entity.input.OperatorInput
import org.babyfish.jimmer.spring.repository.KRepository
import org.babyfish.jimmer.sql.kt.ast.expression.eq
import org.babyfish.jimmer.sql.kt.ast.expression.ilike
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Repository

@Repository
interface OperatorRepository : KRepository<Operator, Int> {
    fun findByUsername(username: String): Operator?
    fun findAllByOperator(pageable: Pageable, operatorInput: OperatorInput?): Page<Operator>? =
        pager(pageable).execute(sql.createQuery(Operator::class) {
            if (operatorInput != null) {
                operatorInput.username?.takeIf { it.isNotEmpty() }?.let { where(table.username ilike it) }
                operatorInput.name?.takeIf { it.isNotEmpty() }?.let { where(table.name ilike it) }
                operatorInput.gender?.let { where(table.gender eq it) }
                operatorInput.phone?.let { where(table.phone eq it) }
                operatorInput.roleId?.let { where(table.roleId eq it) }
            }
            select(table.fetch(DEFAULT_FETCHER))
        })
}
