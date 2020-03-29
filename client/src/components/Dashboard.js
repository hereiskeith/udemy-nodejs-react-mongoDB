import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = props => {

  return (
    <div>
      dashboard
      <div className='fixed-action-btn'>
        <Link to='/survey/new' className='btn-floating btn-large red'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
  )
};

const mapState = ({ auth }) => ({
  auth
})

export default connect(mapState,null)(Dashboard);