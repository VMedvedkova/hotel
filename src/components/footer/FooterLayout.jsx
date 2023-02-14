
import 'antd/dist/reset.css'
import { Layout } from 'antd'
import './FooterLayout.scss';

const { Footer } = Layout

const FooterLayout = () => {  
  return (
    <Footer className="centered">
      Ant Design ©2023
    </Footer> 
  )
};

export default FooterLayout
