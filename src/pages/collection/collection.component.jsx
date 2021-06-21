import React from 'react';
import { connect } from 'react-redux';

// import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => (
  <div className="category">
    <h2 className="">Collection page</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId),
});
export default connect(mapStateToProps)(CollectionPage);
