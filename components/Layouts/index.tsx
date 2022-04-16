import { Layout, ConfigProvider } from 'antd'
import { AppProps } from 'next/app'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

interface IProps {
  children: any
  hideHeader?: boolean
  hideFooter?: boolean
}

const PageLayout = ({ children, hideHeader = false, hideFooter = false }: IProps) => {
  return (
    <>
      <ConfigProvider>
        <Layout className="bg-transparent grid">
          {!hideHeader && <Header />}
          <Content>{children}</Content>
          {!hideFooter && <Footer />}
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default PageLayout
