import React from 'react';

export default class SubcategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event) {
    this.props.handleSubcategoryChange(Number(event.target.id))
  };

  subcategoriesItems() {
    const items = this.props.subcategories.map((subcategory) =>
      <div key={subcategory.id}>
        <label >
          <input
            id={subcategory.id}
            disabled={!this.props.active}
            checked={this.props.ifSubcategoryChecked(subcategory)}
            type="checkbox"
            onChange={this.handleChange}
          />
          {subcategory.name}
        </label>
      </div>
    );
    return items
  };

  render() {
    return (
      <div>
        {this.subcategoriesItems()}
      </div>
    );
  }
};
