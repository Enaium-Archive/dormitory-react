package cn.enaium.dormitory.interceptor

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.HttpHeaders
import org.springframework.stereotype.Component
import org.springframework.web.servlet.HandlerInterceptor

/**
 * @author Enaium
 */
@Component
class CorsInterceptor : HandlerInterceptor {
    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        response.setHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*")
        response.setHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS, "*")
        response.setHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS, "*")
        response.setHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true")
        return super.preHandle(request, response, handler)
    }
}