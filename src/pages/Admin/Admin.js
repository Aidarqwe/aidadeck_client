import React, { useState } from 'react';
import "./Admin.scss";
import ProfileMenu from "../../components/AdminMenu/AdminMenu";
import AdminCreateOrder from "../../components/AdminCreateOrder/AdminCreateOrder";
import AdminList from "../../components/AdminList/AdminList";

function Admin() {
    const [selectedButton, setSelectedButton] = useState('create');
    const [selectedItem, setSelectedItem] = useState("create");

    const renderComponent = () => {
        switch (selectedButton) {
            case 'create':
                return <AdminCreateOrder />;
            case 'list':
                return <AdminList />;
            default:
                return null;
        }
    };

    return (
        <div className="profile">
            <div className="container-top">
                <div className="__wrapper">
                    <div className="__menu_container">
                        <ProfileMenu
                            setSelectedButton={setSelectedButton}
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                        />
                    </div>
                    <div className="__content_container">{renderComponent()}</div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
