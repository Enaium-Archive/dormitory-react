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

import cn.enaium.dormitory.model.entity.Student
import cn.enaium.dormitory.model.entity.input.StudentInput
import cn.enaium.dormitory.model.response.ResponseBody
import cn.enaium.dormitory.repository.StudentRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.web.bind.annotation.*

/**
 * 学生
 *
 * @author Enaium
 */
@RestController
@RequestMapping("/student/")
class StudentController(
    val studentRepository: StudentRepository
) {
    @GetMapping
    fun get(
        @RequestParam(defaultValue = "0") page: Int = 0,
        @RequestParam(defaultValue = "10") size: Int = 10,
        studentInput: StudentInput?
    ): ResponseBody<Page<Student>?> {
        return ResponseBody.Builder.success(
            metadata = studentRepository.findAllByStudent(
                PageRequest.of(page, size),
                studentInput
            )
        )
    }

    @PutMapping
    fun put(@RequestBody studentInput: StudentInput): ResponseBody<Nothing?> {
        studentRepository.save(studentInput)
        return ResponseBody.Builder.success()
    }

    @DeleteMapping("{id}")
    fun delete(@PathVariable id: Int): ResponseBody<Nothing?> {
        studentRepository.deleteById(id)
        return ResponseBody.Builder.success()
    }
}