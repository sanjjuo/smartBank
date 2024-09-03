import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../AdminPanel/AdminPanel.css";
import { FaUsers } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import Table from 'react-bootstrap/Table';
import { HiMiniUser } from "react-icons/hi2";
import { MdAccountBalance } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaUserSlash } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from 'react-toastify';

const AdminPanel = ({url}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLoggedInUsers = async () => {
      try {
        const response = await axios.get(`${url}/api/admin/logged-in-users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchLoggedInUsers();
  }, []);


  const RemoveUser = async(id) =>{
    console.log(id);
    try {
      const response = await axios.delete(`${url}/api/admin/remove_user/${id}`);
      if(response.data.success){
        toast.success(response.data.message)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      
    }
    
  }

  return (
    <section className="admin-panel-section">
      <div className="sidebar">
        <h1>smartbank</h1>
        <h5>admin panel</h5>
        <div className="contents">
          <div className="image">
            <img src="manager.jpg" alt="" />
          </div>
          <p>Henry Cavill</p>
          <button type="button"><FaUsers className='icon' />Users</button>
        </div>
        <button className='logout-btn' type="button"><RiLogoutBoxLine />Logout</button>
      </div>

      <section className="main-content">
        <h1>Users List</h1>
        <Table bordered>
          <thead>
            <tr>
              <th>Nos</th>
              <th><span><HiMiniUser />User Name</span></th>
              <th><span><MdAccountBalance />Account Number</span></th>
              <th><span><RiMoneyRupeeCircleFill />Balance</span></th>
              <th><span><FaUserSlash />Remove User</span></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.user.name}</td>
                <td>{user.accountNumber}</td>
                <td>{user.balance}</td>
                <td onClick={()=>RemoveUser(user._id)}><RiDeleteBin5Fill className='icon'/></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </section>
  )
}

export default AdminPanel;
