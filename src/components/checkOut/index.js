import { connect } from 'react-redux'
import Component from './CheckOut'
import * as roomsActions from '../../redux/actions/rooms'

const mapDispatchToProps = dispatch => ({
    updateRoomData: (payload) => dispatch(roomsActions.updateRoomData(payload)),
});

export default connect(null, mapDispatchToProps)(Component);
