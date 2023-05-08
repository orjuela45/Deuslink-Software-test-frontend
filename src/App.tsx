import { Layout } from "./components/layout/Layout"
import { Nabvar } from "./components/navbar/Nabvar"
import { WeeklyPinned } from "./components/weeklyPinned/WeeklyPinned"
import { Today } from "./components/today/Today"
import { Notices } from "./components/notices/Notices"
import './index.css'

export const App = () => {
  return (
    <div>
      <Nabvar />
      <Layout>
        <div className="row justify-content-center">
          <div className="col-4 bg-success">
            <WeeklyPinned />
          </div>
          <div className="col-4 bg-primary">
            <Today />
          </div>
          <div className="col-4 bg-danger">
            <Notices />
          </div>
        </div>
      </Layout>
    </div>
  )
}
