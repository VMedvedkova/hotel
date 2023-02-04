import { connect } from 'react-redux';
import Component from './MainPage';
import * as actions from '../../redux/actions/currentUser';
import * as selectors from '../../redux/selectors';

const mapStateToProps = state => ({
    isAccessAllowed: selectors.isAccessAllowed(state),
});

const mapDispatchToProps = dispatch => ({
    deleteUser: () => dispatch(actions.deleteUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
