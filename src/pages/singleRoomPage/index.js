import { connect } from 'react-redux';
import Component from './SingleRoomPage';
import * as selectors from '../../redux/selectors';

const mapStateToProps = state => ({
    rooms: selectors.rooms(state),
    updateRooms: selectors.updateRooms(state)
});

export default connect(mapStateToProps, null)(Component);
