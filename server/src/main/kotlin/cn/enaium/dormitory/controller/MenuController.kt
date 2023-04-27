package cn.enaium.dormitory.controller

import cn.dev33.satoken.annotation.SaCheckRole
import cn.enaium.dormitory.model.entity.Menu
import cn.enaium.dormitory.model.response.ResponseBody
import cn.enaium.dormitory.repository.MenuRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

/**
 * @author Enaium
 */
@RestController
@RequestMapping("/menu/")
class MenuController(
    val menuRepository: MenuRepository
) {
    @GetMapping
    fun get(@RequestParam operatorId: Int): ResponseBody<List<Menu>?> {
        return ResponseBody.Builder.success(metadata = menuRepository.findAllByOperator(operatorId))
    }
}