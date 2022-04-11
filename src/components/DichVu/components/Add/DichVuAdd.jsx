import { Button, Modal, Select,Input,DatePicker  } from 'antd';
import React, { useState } from "react";
import "./DichVuAdd.scss";
import img1 from './img/midu.jpg';

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export const DichVuAdd = () => {

  
    return (
      <>
        <div className="title-table">Thêm dịch vụ</div>
        <div className='boxEdit'>
            <div className="table">
              <table>
                    <tbody>
                        <tr>
                            <td width="20%">Loại dịch vụ</td>
                            <td >
                                <Select  style={{ width: 200 }} onChange={handleChange}>
                                  <Option value="jack">Vệ sinh máy lạnh</Option>
                                  <Option value="lucy">Bảo trì máy lạnh</Option>
                                  <Option value="lucy">Sửa chữa máy lạnh</Option>
                                </Select>
                              
                              </td>
                        </tr>
                        <tr>
                            <td width="20%">Tên dịch vụ</td>
                            <td > <Input value="" /></td>
                        </tr>
                        <tr>
                            <td width="20%">Mô tả</td>
                            <td ><Input value=" " /></td>
                        </tr>
                        <tr>
                            <td width="20%">Phí (đồng)</td>
                            <td ><Input value="" /></td>
                        </tr>
                        
                        <tr>
                            <td width="20%">Trạng thái</td>
                            <td >
                                <Select  style={{ width: 120 }} onChange={handleChange}>
                                  <Option value="jack">Đang hoạt động</Option>
                                  <Option value="lucy">Không hoạt động</Option>
                                </Select>
                              
                              </td>
                        </tr>
                      
                  </tbody>
                  <div className="btn-xacnhan">
                      <Button type="danger">
                        Đóng
                      </Button>
                      <Button type="primary">
                        Thêm
                      </Button>
                     
                  </div>
              </table>
 
          </div>
        </div>
 
      </>
    );
  };
  