
import 'antd/dist/reset.css'
import { Layout } from 'antd'

const { Footer } = Layout

const FooterLayout = () => {  
  return (
    <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023
      </Footer> 
  )
};

export default FooterLayout
