import React, { Component } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import { searchUser, fetchData } from '../../redux/actions/usersActions';

export class SearchForm extends Component {

  onChange = (e) => {
    this.props.searchUser(e.target.value);
  };

  render() {
    return (
      <div>
        <form action="">
          <h1>
            <i>Search for Movie</i>
          </h1>
          <input type="text" name="searchText" onChange={this.onChange} />
          <button className="submit_btn" type="submit"></button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  text: state.users.text,
  users: state.users,
});
export default connect(mapStateToProps, { searchUser, fetchData })(SearchForm);
