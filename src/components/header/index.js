import { connect } from 'react-redux';
import Component from './Header';
import * as usersActions from '../../redux/actions/users';
import * as selectors from '../../redux/selectors';

const mapStateToProps = state => ({
    // user: selectors.getUser(state),
});

const mapDispatchToProps = dispatch => ({
    setData: () => dispatch(usersActions.setData()),
});

export default connect(null, mapDispatchToProps)(Component);
