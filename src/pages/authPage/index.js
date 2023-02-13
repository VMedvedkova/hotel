import { connect } from 'react-redux';
import Component from './AuthPage';
import * as actions from '../../redux/actions/currentUser';
import * as selectors from '../../redux/selectors';
import * as accountsActions from '../../redux/actions/accounts'

const mapStateToProps = state => ({
    // user: selectors.getUser(state),
    isAccessAllowed: selectors.isAccessAllowed(state),
    accounts: selectors.getAllUsers(state),
    user: selectors.getUser(state),
    modalState: selectors.modalState(state)
});

const mapDispatchToProps = dispatch => ({
    setUser: (payload) => dispatch(actions.setUser(payload)),
    showModal: (payload) => dispatch(actions.showModal(payload)),
    setAccounts: () => dispatch(accountsActions.setAccounts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
