package cn.enaium.dormitory.model.entity.input

import org.babyfish.jimmer.Input

import org.mapstruct.BeanMapping
import org.mapstruct.Mapper
import org.mapstruct.ReportingPolicy
import org.mapstruct.factory.Mappers

import cn.enaium.dormitory.model.entity.Menu

data class MenuInput(
    val id: Int?,
    val label: String?,
    val key: String?,
) : Input<Menu> {

    override fun toEntity(): Menu {
        return CONVERTER.toMenu(this)
    }

    @Mapper
    interface Converter {
        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)
        fun toMenu(input: MenuInput): Menu
    }

    companion object {
        @JvmStatic
        private val CONVERTER = Mappers.getMapper(Converter::class.java)
    }
}

