import { Button, Modal, Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import {
  useParams
} from "react-router-dom";
import "./LichHenEdit.scss";
import { LichHenItem } from "./LichHenItem/LichHenItem";
const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export const LichHenEdit = () => {
    const [detail,setDetail] = useState();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };


    const [size, setSize] = React.useState('default');

    const handleSizeChange = e => {
        setSize(e.target.value);
    };

    
    let { id } = useParams();
    useEffect(()=>{

      axios.get(`https://acsproject.azurewebsites.net/appointment/${id}`)
      .then(res => {
        if(res.status === 200){
          setDetail(res.data.data)
        }
      })
      .catch(error => console.log(error));

    },[]);

    const [fullName,setfullName] = useState();
    const [phone,setPhone] = useState();
    const [address,setAddress] = useState();
    const [date,setDate] = useState();
    const [description,setDescription] = useState();
    const [quantity,setQuantity] = useState();
    const [time,setTime] = useState();

    console.log(fullName)
    function sua(){
      axios.put(`https://acsproject.azurewebsites.net/appointment/update/${id}`,{
          full_name: fullName ?? detail?.full_name,
          phone: phone ??  detail?.phone,
          address: address ??  detail?.address,
          date: date ??  detail?.date,
          description: description ??  detail?.description,
          quantity: quantity ?? detail?.quantity,
          time: time?? detail?.time,
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    }
 
    return (
      <>
        <div className="title-table">S???a L???ch H???n Kh??ch H??ng</div>
        <div className="table">
           <table>
                <tbody>
                    <LichHenItem name="T??n kh??ch h??ng" 
                      value={fullName ?? detail?.full_name} 
                      changeValue={(item)=> setfullName(item)}
                    />

                    <LichHenItem name="??i???n tho???i" 
                      value={phone ?? detail?.phone}
                      changeValue={(item)=> setPhone(item)}
                    />
                    <LichHenItem name="?????a ch???"   
                      value={address ?? detail?.address}
                      changeValue={(item)=> setAddress(item)}
                    />
                    <LichHenItem name="Ng??y d??? ki???n" 
                       value={date ?? detail?.date}
                       changeValue={(item)=> setDate(item)}
                    />
                    <LichHenItem name="M?? t???" 
                       value={description ?? detail?.description}
                       changeValue={(item)=> setDescription(item)}
                    />
                    <LichHenItem name="S??? l?????ng (m??y)" 
                     value={quantity ?? detail?.quantity}
                     changeValue={(item)=> setQuantity(item)}/>

                    <LichHenItem name="Th???i gian" 
                     value={time ?? detail?.time}
                     changeValue={(item)=> setTime(item)}/>
                    <tr>
                        <td width="100%" colSpan={2}> <hr /></td>
                    </tr>
                    <LichHenItem name="N???i dung" value="Nh??n vi??n"/>
                    <LichHenItem name="Ki???m tra m??y" value="Empty"/>
               </tbody>
           </table>
            <div className="btn-addtho">
                <Button type="primary" onClick={showModal}>
                    Th??m Th??? M??y
                </Button>
            </div>

            <div className="btn-xacnhan">
                <Button type="primary" onClick={sua}>
                   S???a
                </Button>
                <Button type="primary">
                  ????ng
                </Button>
            </div>
         
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Select
                mode="multiple"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {children}
            </Select>
        </Modal>
      </>
    );
  };
  