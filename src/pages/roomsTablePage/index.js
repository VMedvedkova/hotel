import { connect } from 'react-redux';
import Component from './RoomsTablePage';
import * as selectors from '../../redux/selectors';

const mapStateToProps = state => ({
    roomsAray: selectors.rooms(state)
});

export default connect(mapStateToProps, null)(Component);
