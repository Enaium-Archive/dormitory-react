import ReactDOM from "react-dom/client"
import "bootstrap/scss/bootstrap.scss"
import { RouterProvider } from "react-router-dom"
import router from "@/router"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
