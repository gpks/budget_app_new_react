import React from 'react';
import SubcategoriesList from './SubcategoriesList';

export default class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.checkCategory = this.checkCategory.bind(this)
  };

  handleChange(event) {
    this.props.handleCategoryChange(Number(event.target.id))
  };

  checkCategory(category) {
    return this.props.ifCategoryChecked(category)
  };

  categoriesItems() {
    const items = this.props.categories.map((category) =>
      <div className='row'>
        <div className="col-md-1"></div>

        <div key={category.id} className='col-md-5'>
          <label >
            <input
              id={category.id}
              type="checkbox"
              checked={this.checkCategory(category)}
              onChange={this.handleChange}
            />
            {category.name}
          </label>
        </div>
        <div  className='col-md-5'>
          <SubcategoriesList
            subcategories={category.subcategories}
            handleSubcategoryChange={this.props.handleSubcategoryChange}
            active={this.checkCategory(category)}
            ifSubcategoryChecked={this.props.ifSubcategoryChecked}
          />
        </div>
        <div className="col-md-1"></div>
      </div>
    );
    return items
  };

  render() {
    return (
      <form >
        {this.categoriesItems()}
      </form>
    );
  }
}

