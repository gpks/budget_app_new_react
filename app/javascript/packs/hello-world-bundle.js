import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Defaults from '../bundles/HelloWorld/components/Defaults';
import CategoriesList from '../bundles/HelloWorld/components/CategoriesList';
import SubcategoriesList from '../bundles/HelloWorld/components/SubcategoriesList';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Defaults,
  CategoriesList,
  SubcategoriesList
});
