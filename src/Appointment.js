import React,{useState,useEffect} from 'react'
import './appointment.css'
import { useDispatch } from 'react-redux';
import { cartAdd } from './actions/cartAction'

function Appointment() {
 
  const [open, setOpen] = useState(false);

  const [appoint, setAppoint] = useState({
    id : '',
    name: '',
    email : '',
    date : '',
    time : '',
  });

  const dispatch = useDispatch();

  //functions handlers

  const changeName= (e) =>{
     e.preventDefault();
     setOpen(true);
     setAppoint({...appoint, name : e.target.value, id:Date.now() })
    }

  const changeEmail= (b) =>{
      b.preventDefault();
      setAppoint({...appoint, email : b.target.value })
     }

  const changeDate = (d) =>{
      d.preventDefault(); 
      setAppoint({...appoint, date : d.target.value })
     }

  const changeTime = (t) =>{
      t.preventDefault();
      setAppoint({...appoint, time : t.target.value })
     }
     
  const clickBut = (b) => {
    b.preventDefault();
    setOpen(false);
    dispatch(cartAdd(appoint.id,appoint.name,appoint.email,appoint.date,appoint.time));
  }

  return (
    <div className='app-scheduler'>
       <h3 className='app-scheduler-heading'>Appointment Scheduler</h3>
          <div className='app-scheduler-form'>
            <input onChange={(e)=>changeName(e)} className='app-scheduler-name' type='text' placeholder='Enter full name' value={appoint.name} /> 
              <input onChange={(b)=>changeEmail(b)} className='app-scheduler-email' type='email' placeholder='Enter email' value={appoint.email} />  
                <div className='app-scheduler-datemtime'>
                    <input onChange={(d)=>changeDate(d)} className='app-scheduler-date' type='date' placeholder='Select the date' value={appoint.date}/>
                    <input onChange={(t)=>changeTime(t)}  className='app-scheduler-time' type='text' placeholder='Enter Time' value={appoint.time} />
                </div>
              { open ? 
               <button onClick={(b)=>clickBut(b)} type='submit' className='app-scheduler-button'>Schedule</button>:''}
          </div>
    </div>
  )
}

export default Appointment