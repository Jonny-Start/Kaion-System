import React from "react";
import "./ConfigurationUser.css";
import { BasicLayout } from "../../components/BasicLayout";

function ConfigurationUser() {
  return (
    <BasicLayout idContent="ConfigurationUser">
      <h1>Hola ConfigurationUser</h1>
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Recent Orders</h2>
          <a href="" className="btn">
            View All
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Payment</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>Window Coolers</td>
              <td>$110</td>
              <td>Due</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>Speakers</td>
              <td>$620</td>
              <td>Paid</td>
              <td>
                <span className="status return">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>Hp Laptop</td>
              <td>$6000</td>
              <td>Due</td>
              <td>
                <span className="status inprogress">In Progress</span>
              </td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>Window Coolers</td>
              <td>$110</td>
              <td>Due</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>Speakers</td>
              <td>$620</td>
              <td>Paid</td>
              <td>
                <span className="status return">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>Hp Laptop</td>
              <td>$6000</td>
              <td>Due</td>
              <td>
                <span className="status inprogress">In Progress</span>
              </td>
            </tr>
            <tr>
              <td>Apple Watch</td>
              <td>$680</td>
              <td>Paid</td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BasicLayout>
  );
}

export { ConfigurationUser };
