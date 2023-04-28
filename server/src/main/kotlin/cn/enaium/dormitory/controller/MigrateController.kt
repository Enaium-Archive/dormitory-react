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

import cn.dev33.satoken.annotation.SaCheckRole
import cn.enaium.dormitory.model.entity.Migrate
import cn.enaium.dormitory.model.entity.by
import cn.enaium.dormitory.model.entity.input.MigrateInput
import cn.enaium.dormitory.model.response.ResponseBody
import cn.enaium.dormitory.repository.MigrateRepository
import org.babyfish.jimmer.client.FetchBy
import org.babyfish.jimmer.sql.kt.fetcher.newFetcher
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.web.bind.annotation.*
import java.time.LocalDateTime

/**
 * 迁出
 *
 * @author Enaium
 */
@SaCheckRole("system")
@RestController
@RequestMapping("/migrate/")
class MigrateController(
    val migrateRepository: MigrateRepository
) {
    @GetMapping
    fun get(
        @RequestParam(defaultValue = "0") page: Int = 0,
        @RequestParam(defaultValue = "10") size: Int = 10,
        migrateInput: MigrateInput?
    ): ResponseBody<Page<@FetchBy("DEFAULT_FETCHER") Migrate>?> {
        return ResponseBody.Builder.success(
            metadata = migrateRepository.findAllByMigrate(
                PageRequest.of(page, size),
                migrateInput
            )
        )
    }

    @PutMapping
    fun put(@RequestBody migrateInput: MigrateInput): ResponseBody<Nothing?> {
        migrateInput.createDate = LocalDateTime.now()
        migrateRepository.save(migrateInput)
        return ResponseBody.Builder.success()
    }

    @DeleteMapping("{id}")
    fun delete(@PathVariable id: Int): ResponseBody<Nothing?> {
        migrateRepository.deleteById(id)
        return ResponseBody.Builder.success()
    }

    companion object {
        val DEFAULT_FETCHER = newFetcher(Migrate::class).by {
            allScalarFields()
            student {
                allScalarFields()
            }
            dormitory {
                allScalarFields()
            }
        }
    }
}