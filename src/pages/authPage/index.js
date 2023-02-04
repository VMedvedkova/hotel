import { connect } from 'react-redux';
import Component from './AuthPage';
import * as actions from '../../redux/actions/currentUser';
import * as selectors from '../../redux/selectors';

const mapStateToProps = state => ({
    // user: selectors.getUser(state),
});

const mapDispatchToProps = dispatch => ({
    setUser: (payload) => dispatch(actions.setUser(payload)),
});

export default connect(null, mapDispatchToProps)(Component);
