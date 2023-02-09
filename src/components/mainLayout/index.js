import { connect } from 'react-redux';
import Component from './MainLayout';
import * as selectors from '../../redux/selectors';

const mapStateToProps = state => ({
    user: selectors.getUser(state),
});


export default connect(mapStateToProps, null)(Component);
