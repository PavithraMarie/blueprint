import React, {useState } from 'react';
import DashboardImg from '../assets/images/dashboard-icon.png';
import { Button, Tabs, Table, Select } from 'antd';
import '../assets/styles/dashboard.scss'
import {DownOutlined, FileOutlined, SettingOutlined, DockerOutlined ,ArrowDownOutlined} from '@ant-design/icons';
import Aws from '../assets/images/aws.png'
import Check from '../assets/images/check.png'
import git from '../assets/images/git.svg'
import post from '../assets/images/postgresql.svg'
import {data} from './dummyjson/tableData'
import ServiceModal from './modal/ServiceModal';

const { Option } = Select;

const Dashboard: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('1');

    const onChange = (key: any) => {
        setSelectedTab(key);
    }

    const items1 = [
        {
            key: "1",
            label: `Services`,
            icon: <img className='tab-check-icon' src={Check} width='20px' alt="checkmark"/>,
            children:<ServiceTab/>
        }, 
        {
            key: "2",
            label: `Deployments`,
            icon: <img  className='tab-check-icon'src={Check} width='20px' alt="checkmark" />,
            children:<OtherTab/>
        },
        {
            key: "3",
            label: `Settings`,
            icon: <SettingOutlined />,
            children:<OtherTab/>
        }
    ];
   

    
    return (
        <div className='dashboard-container'>
            <div className='dashboard-header d-flex align-items-center'>
                <img className='dash-img' src={DashboardImg} alt="blueprint icon"/>
                <div className='header-content d-flex flex-column'>
                    <h3 className='header-title text-start'>blueprint</h3>
                    <div className=' d-flex align-items-center'>
                        <div className=' button-container d-flex align-items-center'>
                            <div className=' d-flex col-auto nav-cont' >
                                <div className='p-1 px-3 nav-child pointer' > &#x25B6; <DownOutlined  className='ps-2'/></div>
                                <div className='p-1 px-3 nav-child file-icon pointer' ><FileOutlined /></div> 
                                <div className='pt-1 px-3  nav-child dot pointer' >&#x22EE;</div>
                            </div>
                            <div className='right-border mx-2'></div>
                            <div className='col-auto'>
                                <Button className='m-0 mx-1 dev-button'>DEV</Button>
                            </div>
                            <Button className='px-2 aws-button mx-1'> <img src ={Aws} width="25px" alt="aws icon"/>Demo Cluster</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboard-content'>
                <Tabs className="custom-tab" activeKey={selectedTab}
                defaultActiveKey={selectedTab} tabBarGutter={5} 
                items={items1} onChange={onChange} />
               
            </div>
        </div>
    )
}

function ServiceTab(){
    const [openModal,setOpenModal]= useState(false);
    const [serviceData,setServiceData] = useState(null);

    const options = [
        { value: "1", label: "1 service" },
        { value: "2", label: "2 services" },
        { value: "3", label: "3 services" },
        { value: "11", label: "11 services" },
        { value: "12", label: "12 services" },
    ];
    const columns: any = [
        {
            title: (
                <Select className='service-dropdowm' defaultValue="11 services" >
                    {options.map(option => (
                        <Option key={option.value} value={option.value}>
                            {option.label}
                        </Option>
                    ))}
                </Select>
            ),
            dataIndex: 'details',
            key: 'details',
            // width:'40%',
            className: 'details-column',
            render: (text: string) => (
                <div className='d-flex flex-row column-one'>
                    <div> 
                        <img className='me-2 tab-check-icon' src={Check} width='20px' alt="checkmark" />
                        <img className='me-2 tab-stack-icon' src={DashboardImg} height="20px" alt="blueprint icon" />
                    </div>
                    <span className='col1-text' >{text}</span>
                </div>
            ),
        },
        {
            title: (
                <span>
                    Update <ArrowDownOutlined />
                </span>
            ),
            dataIndex: 'update',
            key: 'update',
            render: (_:any,record:any,text: string) => (
                <div className='d-flex align-items-center justify-content-end my-auto column-two'>
                    <span className='col2-text' >{text}</span>
                    <div className='d-flex col-auto my-auto nav-cont ms-3' >
                        <div className='p-1 px-3 nav-child pointer' >
                            &#x25B6; <DownOutlined className='ps-2' />
                        </div>
                        <div className='p-1 px-3 nav-child pointer'>
                            <FileOutlined onClick={()=>showModal(record)}/>
                        </div>
                        <div className='pt-1 px-3 nav-child dot pointer'>
                            &#x22EE;
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Version',
            dataIndex: 'version',
            key: 'version',
            width:'20%',

            render: (text: string) => (
                <div className='d-flex git-container p-2 py-1 column-three'>
                    <img className='me-2 git-img' src={git} width='22px' alt="git icon"/>
                    <span className='col3-text' >{text}</span>
                </div>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width:'20%',
            render: (type: string) => {
                return (
                    <div className='column-four'>
                        {type === 'docker' ? (
                            <DockerOutlined className='dockerImg' />
                        ) : (
                            <img className='me-2 post-img' src={post} width='22px' alt="post icon" />
                        )}
                    </div>
                );
            }
        },
    ];

    
    const showModal=(val:any)=>{
        setOpenModal(true);
        setServiceData(val);
        console.log("val",val);
    }

    const closeModal=()=>{
        setOpenModal(false);
        setServiceData(null);
    }

    return(
        <div className='table-container' >
        <Table columns={columns} dataSource={data} className='dashboard-table pb-2' pagination={false}/>
        <div className='d-flex  flex-column ms-5 my-4 footer'>
            <h6 className='text-start foot-one' >Need help? You may find these link useful</h6>
            <h6 className='text-start mb-4 foot-two pointer' >How to manage my environment </h6>    
        </div>
        <ServiceModal openModal={openModal} closeModal={closeModal} serviceData={serviceData}/>
    </div>
    )
}

function OtherTab(){
    return(
        <div className='under-development d-flex justify-content-center align-items-center'>
           <h5 className='text-secondary'>This page is under development</h5> 
        </div>
    )
}
export default Dashboard;
