
import React from 'react';
import { Logo } from '../../Logo/Logo';
import { Menu } from 'antd';
import "./Navbar.scss";

import { HomeOutlined, UserOutlined, HistoryOutlined, UsergroupAddOutlined,
    InsertRowAboveOutlined,DollarCircleOutlined,PercentageOutlined

} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
const { SubMenu } = Menu;

export const Navbar = ({})=> {
    const history = useHistory();

    const handleClick = e => {
        console.log('click ', e.key);
        switch (e.key) {
            case "3":
                history.push("/lich-hen");
                break;
            case "4":
                history.push("/lich-hen/lich-su");
                break;
            case "5":
                history.push("/nhan-vien");
                break;
            case "6":
                history.push("/nhan-vien/add");
                break;
            case "8":
                history.push("/lich-lam-viec");
                break;
            case "9":
                history.push("/lich-lam-viec/add");
                break;
            case "12":
                history.push("/loai-dich-vu");
                break;
            case "13":
                history.push("/loai-dich-vu/add");
                break;
            case "14":
                history.push("/dich-vu");
                break;
            case "15":
                history.push("/dich-vu/add");
                break;
            case "16":
                history.push("/khuyen-mai");
                break;
            case "17":
                history.push("/khuyen-mai/add");
                break;
            default:
                break;
        }
    };

    return (<>
        <div>
            <Logo/>
            <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                 <Menu.Item key="1" icon={<HomeOutlined />}>
                   Trang Ch???
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                   Kh??ch H??ng
                </Menu.Item>
                <SubMenu key="sub1" icon={<HistoryOutlined />} title="L???ch H???n">
                    <Menu.Item key="3">Danh s??ch l???ch h???n</Menu.Item>
                    <Menu.Item key="4">L???ch s???</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<UsergroupAddOutlined />} title="Nh??n Vi??n">
                    <Menu.Item key="5">Danh s??ch nh??n vi??n</Menu.Item>
                    <Menu.Item key="6">Th??m nh??n vi??n</Menu.Item>
                    <Menu.Item key="7">L???ch l??m vi???c</Menu.Item>
                    <Menu.Item key="8">Danh s??ch l???ch l??m vi???c</Menu.Item>
                    <Menu.Item key="9">Th??m l???ch L??m Vi???c</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<InsertRowAboveOutlined />} title="Chi Nh??nh">
                    <Menu.Item key="10">Danh s??ch chi nh??nh</Menu.Item>
                    <Menu.Item key="11">Th??m chi nh??nh</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<DollarCircleOutlined />} title="D???ch V???">
                    <Menu.Item key="12">Danh s??ch lo???i d???ch v???</Menu.Item>
                    <Menu.Item key="13">Th??m lo???i d???ch v???</Menu.Item>
                    <Menu.Item key="14">Danh s??ch d???ch v???</Menu.Item>
                    <Menu.Item key="15">Th??m d???ch v???</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<PercentageOutlined />} title="Khuy???n m??i">
                    <Menu.Item key="16">Danh s??ch khuy???n m??i</Menu.Item>
                    <Menu.Item key="17">Th??m khuy???n m??i</Menu.Item>
                </SubMenu>
            </Menu>


            <ul>
                {/* <li><a href="">cc</a></li>
                <li><a href="">ccc</a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li> */}
            </ul>
        </div>
    </>)
};

