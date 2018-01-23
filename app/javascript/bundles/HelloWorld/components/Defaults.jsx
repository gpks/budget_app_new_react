import PropTypes from 'prop-types';
import React from 'react';
import CategoriesList from './CategoriesList';
import SubcategoriesList from './SubcategoriesList';
import _ from 'lodash';
import axios from 'axios';

const token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'

export default class Defaults extends React.Component {
  static propTypes = {
    submit: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { subcategoriesIds: [], categoriesIds: [] }
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleSubcategoryChange = this.handleSubcategoryChange.bind(this)
    this.ifCategoryChecked = this.ifCategoryChecked.bind(this)
    this.ifSubcategoryChecked = this.ifSubcategoryChecked.bind(this)
    this.onButtonSubmit = this.onButtonSubmit.bind(this)
  }

  handleCategoryChange(categoryId) {
    const status = this.state
    if (status.categoriesIds.includes(categoryId)) {
      _.pull(status.categoriesIds, categoryId)
      const category = _.find(this.props.categories, { id: categoryId })
      _.pull(status.subcategoriesIds, ..._.flatMap(category.subcategories, 'id'))
    } else {
      status.categoriesIds.push(categoryId)
    };
    this.setState({ ...status })
  };

  handleSubcategoryChange(subcategoryId) {
    const status = this.state
    if (status.subcategoriesIds.includes(subcategoryId)) {
      _.pull(status.subcategoriesIds, subcategoryId)
    } else {
      status.subcategoriesIds.push(subcategoryId)
    };
    this.setState({ ...status })
  };

  ifCategoryChecked(category) {
    return this.state.categoriesIds.includes(category.id);
  };

  ifSubcategoryChecked(subcategory) {
    return this.state.subcategoriesIds.includes(subcategory.id);
  };

  onButtonSubmit(){
    console.log(this.state)
    axios.post(this.props.submit,
      this.state
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <p>
          CHOOSE CATEGORIES
        </p>
        <hr />
        <CategoriesList
          categories={this.props.categories}
          handleCategoryChange={this.handleCategoryChange}
          handleSubcategoryChange={this.handleSubcategoryChange}
          ifCategoryChecked={this.ifCategoryChecked}
          ifSubcategoryChecked={this.ifSubcategoryChecked}
        />
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.onButtonSubmit}
        >
            Prześlij
        </button>
      </div>
    );
  }
}
