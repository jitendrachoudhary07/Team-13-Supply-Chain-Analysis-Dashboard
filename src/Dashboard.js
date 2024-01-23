import React from 'react'
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dash'>
        <iframe src="https://app.powerbi.com/reportEmbed?reportId=9e521c4f-e1ac-475d-a47c-2f6a32febbc0&autoAuth=true&ctid=27282fdd-4c0b-4dfb-ba91-228cd83fdf71" width="70%"
        height="700px">
      </iframe>

      <iframe src="https://jitendra-chatapp.streamlit.app//?someparam=value&embedded=true" width="30%"
        height="700px">
      </iframe>
    </div>
  )
}

export default Dashboard