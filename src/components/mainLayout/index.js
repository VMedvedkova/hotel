import { connect } from 'react-redux';
import Component from './MainLayout';
import * as roomsActions from '../../redux/actions/rooms';

const mapDispatchToProps = dispatch => ({
    setRooms: () => dispatch(roomsActions.setRooms()),
});

export default connect(null, mapDispatchToProps)(Component);
