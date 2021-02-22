import React from 'react'
import { Link } from "react-router-dom";
import './appointment_list.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartDel } from './actions/cartAction'


function Appointment_list() {
 
  const appoints = useSelector(state => state.items);

  const dispatch = useDispatch();
  
  const delCart = (id) =>{
    dispatch(cartDel(id));
  }

    return (
        <div>
          <h2 className='appointments-list-header'>Appointments !</h2>
           {appoints.length !== 0 ? 
              <div className='box-list'>
                  {appoints.map(item => (
                      <div className='appointments-list-details'>
                        <p className='a-l-d-name'><span className='span-a-l-d'>Name :</span>{item.name} </p>
                        <p className='a-l-d-date'><span className='span-a-l-d'>Date :</span>{item.date} </p>
                        <p className='a-l-d-email'><span className='span-a-l-d'>Email :</span> {item.email}</p>
                        <p className='a-l-d-time'><span className='span-a-l-d'>Time :</span>{item.time}</p>
                        <button onClick={()=>delCart(item.id)} className='a-l-d-button'>Delete</button>
                      </div> )) } 
               </div> :
          <div>
              <h2 className='h2-no-app'>No appointments available.</h2>
              <Link className='link-no-app' to='/' ><span className='span-no-app'>Click here to book appointments.</span></Link>
          </div> }
        </div>
    )
}

export default Appointment_list;
