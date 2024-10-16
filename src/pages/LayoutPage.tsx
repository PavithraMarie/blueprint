import React,{useState} from 'react';
import { Layout, Menu, Dropdown, Select, LayoutProps } from 'antd';
import Logo from '../assets/images/icon.png';
import Logo1 from '../assets/images/logo.png';




const { Header, Content, Footer, Sider } = Layout;

const items = [Logo].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: <img src={require('../assets/images/layer.png')} alt="s" height="22px"/>,
      label: ``,
    }),
);
console.log("items",items);
const LayoutPage:React.FC<LayoutProps>=({children})=>{
    return(
      <div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            className='shadow-sm'
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="demo-logo-vertical d-flex align-items-center justify-content-center" >
                <img src={Logo} height="45px" alt='logo'/>
            </div>
            <Menu mode="inline" defaultSelectedKeys={['1']} items={items} />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, }} >
                <div className='row m-0 w-100 first-dropdown'>
                  <div className='col-auto my-auto d-flex'>
                    <img className='mx-2' src={Logo} width="30px" height="30px"/>
                    <Dropdown menu={{ items }}>
                      <h6 className='mb-0 text-secondary'>Project
                        <div className='text-dark' onClick={(e) => e.preventDefault()}>
                          BigBank
                        </div>
                      </h6>
                    </Dropdown>
                  </div>
                  <h5 className='col-auto mt-auto mb-3'>/</h5>
                  <div className='col-auto my-auto me-auto'>
                  <Dropdown menu={{ items }}>
                    <h6 className='mb-0 text-secondary'>Environment
                      <div className='text-dark' onClick={(e) => e.preventDefault()}>
                        blueprint
                      </div>
                    </h6>
                  </Dropdown>
                  </div>
                </div>
            </Header>
            <Content>
              <div>
                {children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
}

export default LayoutPage;