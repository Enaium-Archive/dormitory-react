package cn.enaium.dormitory.model.entity

import org.babyfish.jimmer.sql.Entity
import org.babyfish.jimmer.sql.Table
import org.babyfish.jimmer.sql.GeneratedValue
import org.babyfish.jimmer.sql.GenerationType
import org.babyfish.jimmer.sql.Id

@Entity
@Table(name = "t_menu")
interface Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long
    val label: String
    val key: String
}
