import { connect } from 'react-redux';
import Component from './CheckIn';
import * as usersActions from '../../redux/actions/accounts';
import * as currentUserActions from '../../redux/actions/currentUser';
import * as roomsActions from '../../redux/actions/rooms';
import * as selectors from '../../redux/selectors';

const mapDispatchToProps = dispatch => ({
    updateRoomData: (payload) => dispatch(roomsActions.updateRoomData(payload)),
});

export default connect(null, mapDispatchToProps)(Component);
