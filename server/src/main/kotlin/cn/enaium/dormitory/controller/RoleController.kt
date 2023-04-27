package cn.enaium.dormitory.controller

import cn.enaium.dormitory.model.entity.Role
import cn.enaium.dormitory.model.response.ResponseBody
import cn.enaium.dormitory.repository.RoleRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * @author Enaium
 */
@RestController
@RequestMapping("/role/")
class RoleController(
    val roleRepository: RoleRepository
) {
    @GetMapping
    fun get(): ResponseBody<List<Role>?> {
        return ResponseBody.Builder.success(metadata = roleRepository.findAll())
    }
}