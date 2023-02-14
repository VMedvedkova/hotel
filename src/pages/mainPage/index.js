import { connect } from 'react-redux'
import Component from './MainPage'
import * as actions from '../../redux/actions/currentUser'
import * as selectors from '../../redux/selectors'

const mapStateToProps = state => ({
    isAccessAllowed: selectors.isAccessAllowed(state),
    accounts: selectors.getAllUsers(state),
});

export default connect(mapStateToProps, null)(Component);
