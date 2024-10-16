import React,{useState,useEffect} from 'react';
import { Divider, Modal } from 'antd';

interface ChildProps{
   serviceData:any;
   closeModal:()=>void;
   openModal:boolean;
}

const ServiceModal:React.FC<ChildProps>=({openModal,closeModal,serviceData})=>{
    return(
        <Modal title={<h5 className='fw-bold'>Service Details</h5>} open={openModal} onCancel={closeModal}>
         <Divider className='mt-2'/>
         <table className='w-100 table-bordered'>
            <tr>
                <th>Service Name</th>
                <td>{serviceData?.details}</td>
            </tr>
           <tr>
            <th>Status</th>
            <td>{serviceData?.status}</td>
           </tr>
           <tr>
            <th>Version</th>
            <td>{serviceData?.version}</td>
           </tr>
           <tr>
            <th>Uptime</th>
            <td>{serviceData?.uptime}</td>
           </tr>
           <tr>
            <th>Rate Limits</th>
            <td>{serviceData?.rateLimits}</td>
           </tr>
           <tr>
            <th>Last Deployed</th>
            <td>{serviceData?.lastDeployed}</td>
           </tr>
           <tr>
            <th>Deployed By</th>
            <td>{serviceData?.deployedBy}</td>
           </tr>
         </table>
        </Modal>
    )
}

export default ServiceModal;