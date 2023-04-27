package cn.enaium.dormitory.interceptor

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import org.springframework.util.PatternMatchUtils
import org.springframework.web.servlet.HandlerInterceptor

/**
 * @author Enaium
 */
@Component
class LocalAccessInterceptor(@Value("\${jimmer.client.ts.path}") val typescriptPath: String) : HandlerInterceptor {
    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        if (PatternMatchUtils.simpleMatch(request.requestURI, typescriptPath)) {
            return request.remoteAddr == "127.0.0.1" || request.remoteAddr == "0:0:0:0:0:0:0:1"
        }
        return super.preHandle(request, response, handler)
    }
}