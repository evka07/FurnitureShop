import React from 'react';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import BrandsSlider from '../../features/BrandsSlider/BrandsSlider';
import Blog from '../Blog/Blog';
import Promotional from '../../features/Promotional/Promotional';
import Chatbot from '../../views/Chatbot/Chatbot';
import Gallery from '../../layout/Gallery/Gallery';
import SectionBlog from '../SectionBlog/SectionBlog';
import Deals from '../../features/Deals/Deals';

const Homepage = () => (
  <div className={styles.root}>
    <Promotional />
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <Blog />
    <Chatbot />
    <SectionBlog />
    <BrandsSlider />
    <ClientFeedback />
    <Gallery />
  </div>
);

//Homepage.propTypes = {};

export default Homepage;
