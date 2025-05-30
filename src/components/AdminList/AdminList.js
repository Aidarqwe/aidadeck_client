import React, { useEffect, useState } from 'react';
import "./AdminList.scss";
import OrderService from "../../services/OrderService";

function AdminList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await OrderService.getAll();
                setOrders(data);
            } catch (error) {
                console.error('Ошибка при загрузке заказов:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="orders-table">
            <h2>Список заказов</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Этап</th>
                    <th>Тип доставки</th>
                    <th>Страна доставки</th>
                    <th>Время создания</th>
                    <th>Время окончания</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                        <td data-label="ID">{order.order_id}</td>
                        <td data-label="Этап">{order.current_stage}</td>
                        <td data-label="Тип доставки">{order.isFast ? "Быстрая" : "Медленная"}</td>
                        <td data-label="Страна доставки">
                            {order.type === "RU" ? "Россия" : order.type === "KG" ? "Кыргызстан" : order.type === "KZ" ? "Казахстан" : ""}
                        </td>
                        <td data-label="Дата создания">{new Date((order.createdAt)).toLocaleDateString('ru-RU')}</td>
                        <td data-label="Дата завершения">{new Date((order.order_end_date)).toLocaleDateString('ru-RU')}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminList;
