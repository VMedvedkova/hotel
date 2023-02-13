import { connect } from 'react-redux';
import Component from './SingleRoomPage';
import * as actions from '../../redux/actions/currentUser';
import * as selectors from '../../redux/selectors';

const mapStateToProps = state => ({
    rooms: selectors.rooms(state),
    updateRooms: selectors.updateRooms(state)
});

const mapDispatchToProps = dispatch => ({
    // deleteUser: () => dispatch(actions.deleteUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
