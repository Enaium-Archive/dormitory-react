package cn.enaium.dormitory.repository

import cn.enaium.dormitory.model.entity.*
import org.babyfish.jimmer.spring.repository.KRepository
import org.babyfish.jimmer.sql.kt.ast.expression.eq
import org.springframework.stereotype.Repository

@Repository
interface MenuRepository : KRepository<Menu, Long> {
    fun findAllByOperator(operatorId: Int): List<Menu> = sql.createQuery(Operator::class) {
        where(table.id eq operatorId)
        select(table.role.asTableEx().menus)
    }.execute()
}
