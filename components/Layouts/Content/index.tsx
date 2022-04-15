import { Layout } from 'antd'
const { Content: AntdContent } = Layout

const Content = ({ children }) => {
  return (
    <>
      <AntdContent id="app-content">
        <div className="container mx-auto">{children}</div>
      </AntdContent>
    </>
  )
}
export default Content
