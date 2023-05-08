import { LayoutPropsInterface } from "../../interfaces"

export const Layout = ({children}: LayoutPropsInterface) => {
  return (
    <div className="container-fluid p-5">
      {children}
    </div>
  )
}
