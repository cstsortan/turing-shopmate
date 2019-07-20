import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import { fetchAllCategories } from "../../../store/actions";

class Header extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {

        const {
            classes,
            brand,
            departments
        } = this.props;

        return (
            <div>
                <TopBar />
                <NavBar classes={classes} brand={brand} departments={departments} />
            </div>
        );
    }
}

Header.defaultProps = {
    departments: {}
};

Header.propTypes = {
    classes: PropTypes.object,
    brand: PropTypes.string
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCategories: fetchAllCategories
    }, dispatch);
}

function mapStateToProps({categories}) {
    return {
        departments: categories.allCategories.departments,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
