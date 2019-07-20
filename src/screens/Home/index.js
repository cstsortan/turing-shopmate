/**
 * 
 * if a user select a department and category in the navigation menu
 * - Filter should display Department and category dynamically when a user select a department and category
 *  on the navigation bar
 * - Filter should dynamically dislay attribute values like Size and Color from backend
 * - Price on the Price slider should change as the user slide through in the Filter
 * - Implement functionalities for search in the Nav bar and filter bar
 * - Implement funtionality for reset on filter component
 * - Implement pagination for products
 *
 */
import React, { Component } from 'react'
import {
    withStyles,
    Paper,
    Radio,
    Checkbox,
    Button,
    Fab,
    TextField
} from '@material-ui/core';
import { Slider } from 'material-ui-slider';
import withWidth from '@material-ui/core/withWidth';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import Close from '@material-ui/icons/Close';
import * as actions from '../../store/actions'
import styles from './styles';
import { Container, Section } from '../../components/Layout';
import ListProduct from '../../components/ListProduct';
import Banner from '../../components/Banner';
import SubscribeBar from '../../components/SubscribeBar';
import './styles.css';


class Home extends Component {

    componentWillMount() {
        this.props.getAllProducts({
            page: 1,
            limit: 9,
            description_length: 120
        });

        this.props.getAllAttributes();
    }



    render() {
        const { classes, products } = this.props;

        let currentProducts = products;

        return (
            <div className={classes.root}>
                <Container>
                    <Section>
                        <div className="flex mb-4 contentHolder">
                            <div className="w-1/4 filterSection">
                                <Paper className={classes.controlContainer} elevation={1}>
                                    <div className={classes.filterBlock}>
                                        <div className={classes.titleContainer}>
                                            <span className={classes.controlsTopTitle}>
                                                Filter Items
                                            </span>
                                        </div>
                                        <div className={classes.filterItems}>
                                            {this.props.categoryId && <div className="py-1">
                                                <span className={classes.isGrey}>Category: </span>
                                                <span>{this.props.categories[this.props.categoryId].name}</span>
                                            </div>}
                                            {this.props.departmentId && <div className="py-1 pb-2">
                                                <span className={classes.isGrey}>Department: </span>
                                                <span>{this.props.departments[this.props.departmentId].name}</span>
                                            </div>}
                                        </div>
                                    </div>
                                    <div className={classes.filterBodyContainer}>
                                        {
                                            this.props.attributes.map(attribute => {
                                                return <div key={attribute.attribute_id} className={classes.sizesBlock}>
                                                    <div className={classes.titleContainer}>
                                                        <span className={classes.controlsTitle}>
                                                            {attribute.name}
                                                        </span>
                                                    </div>
                                                    <div className={classes.sizeCheckboxes}>
                                                        {
                                                            attribute.values.map(attributeValue => {
                                                                return <Checkbox
                                                                key={attributeValue.attribute_value_id}
                                                                style={{ padding: 0 }}
                                                                checkedIcon={<div className={classes.sizeCheckboxChecked}>{attributeValue.value}</div>}
                                                                icon={<div className={classes.sizeCheckboxUnchecked}>{attributeValue.value}</div>}
                                                                value={attributeValue.attribute_value_id} 
                                                                />
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            })
                                        }
                                        <div className={classes.sliderBlock}>
                                            <div className={classes.titleContainer}>
                                                <span className={classes.controlsTitle}>
                                                    Price Range
                                              </span>
                                            </div>
                                            <div className={classes.sliderContainer}>
                                                <Slider color="#f62f5e" defaultValue={[200, 385]}
                                                    min={1}
                                                    max={500} range />
                                            </div>
                                            <div style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                                height: "24px"
                                            }}>
                                                <div className={classes.rangesText}>{`£ 375`}</div>
                                                <div style={{ flexGrow: 1 }} />
                                                <div className={classes.rangesText}>{`£ 500`}</div>
                                            </div>
                                        </div>
                                        <div className={classes.searchBlock}>
                                            <div className={classes.titleContainer}>
                                                <span className={classes.controlsTitle}>
                                                    Search keyword
                                                  </span>
                                            </div>
                                            <div className={classes.searchContainer}>
                                                <TextField
                                                    inputProps={{
                                                        className: classes.filterSearchInput,
                                                    }}
                                                    placeholder="Enter a keyword to search..."
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="search"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.footerBlock}>
                                        <Fab color="primary" size="small" className={classes.coloredButton}
                                            style={{ borderRadius: 24, height: 35, width: 90 }}><span
                                                className={classes.submitButtonText}>Apply</span></Fab>

                                        <Button className={classes.clearText}>
                                            <Close className={classes.boldIcon} />
                                            <span>Reset</span>
                                        </Button>
                                    </div>
                                </Paper>
                            </div>
                            <div className="w-3/4 flex flex-wrap ml-6 productsSection">
                                {currentProducts.map((product, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 mb-4">
                                        <ListProduct product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <Banner />
                    </Section>
                    <Section>
                        <SubscribeBar />
                    </Section>
                </Container>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllProducts: actions.getAllProducts,
        getAllAttributes: actions.fetchAttributes,
    }, dispatch);
}

function mapStateToProps({ products, categories, attributes }) {
    return {
        products: products.all.data.rows,
        departmentId: categories.selectedCategory.departmentId,
        categoryId: categories.selectedCategory.categoryId,
        departments: categories.allCategories.departments,
        categories: categories.allCategories.categories,
        attributes: attributes.all.data,
    }
}

export default withWidth()(
    withStyles(styles, { withTheme: true })(withRouter(
        connect(mapStateToProps, mapDispatchToProps)(Home))
    )
);
