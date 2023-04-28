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

import cn.enaium.dormitory.controller.MigrateController.Companion.DEFAULT_FETCHER
import cn.enaium.dormitory.model.entity.Migrate
import cn.enaium.dormitory.model.entity.dormitoryId
import cn.enaium.dormitory.model.entity.input.MigrateInput
import cn.enaium.dormitory.model.entity.reason
import cn.enaium.dormitory.model.entity.studentId
import org.babyfish.jimmer.spring.repository.KRepository
import org.babyfish.jimmer.sql.kt.ast.expression.eq
import org.babyfish.jimmer.sql.kt.ast.expression.ilike
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Repository

@Repository
interface MigrateRepository : KRepository<Migrate, Int> {
    fun findAllByMigrate(pageable: Pageable, migrateInput: MigrateInput?): Page<Migrate> =
        pager(pageable).execute(sql.createQuery(Migrate::class) {
            if (migrateInput != null) {
                migrateInput.studentId?.let { where(table.studentId eq it) }
                migrateInput.dormitoryId?.let { where(table.dormitoryId eq it) }
                migrateInput.reason?.takeIf { it.isNotEmpty() }?.let { where(table.reason ilike it) }
            }
            select(table.fetch(DEFAULT_FETCHER))
        })
}
