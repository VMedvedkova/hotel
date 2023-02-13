import { connect } from 'react-redux';
import Component from './HeaderLayout';
import * as usersActions from '../../redux/actions/accounts';
import * as currentUserActions from '../../redux/actions/currentUser';
import * as selectors from '../../redux/selectors';

const mapDispatchToProps = dispatch => ({
    deleteUser: () => dispatch(currentUserActions.deleteUser()),
    setAccessAllowed: (payload) => dispatch(currentUserActions.setAccessAllowed(payload)),
});

export default connect(null, mapDispatchToProps)(Component);
