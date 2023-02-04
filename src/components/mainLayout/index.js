import { connect } from 'react-redux';
import Component from './MainLayout';
import * as usersActions from '../../redux/actions/accounts';
import * as selectors from '../../redux/selectors';

const mapStateToProps = state => ({
    // user: selectors.getUser(state),
});

const mapDispatchToProps = dispatch => ({
    // setData: () => dispatch(usersActions.setData()),
});

export default connect(null, null)(Component);
