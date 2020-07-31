import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/actions/usersActions';
import User from '../User';
import Loader from '../Layout/Loader/index';

import './styles.scss';

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await props.fetchData();
      setIsLoading(false);
      return await setUsers(res);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const showUsers = !isLoading ? (
    props.usersState.users.map((item, index) => (
      <User key={index} name={item.name} email={item.email.toLowerCase()} />
    ))
  ) : (
    <Loader />
  );

  return <div className="users">{showUsers}</div>;
};

const mapStateToProps = (state) => ({
  usersState: state.usersRedusersucer,
  loading: state.loading,
});

// const mapDispatchToProps = {
//   searchUser,
//   fetchData,
// };

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
