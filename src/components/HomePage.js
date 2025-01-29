/*
    Omar Johnson
    HomePage component
    Created on: 1/29/25

    The main landing page for the website

    Displays general information about the location, some reviews, and introduces the menu
 */

import React from 'react';
import Introduction from "./Introduction";
import Reviews from "./Reviews";
import MenuPreview from "./MenuPreview";
import CareersPreview from "./CareersPreview";


function Divider()
{
    return (
      <span className="w-full mt-20 mb-12 border-b-2 border-pink-200"></span>
    );
}

function HomePage()
{
    return (
      <React.Fragment>

          <Introduction />

          <Divider />

          <Reviews />

          <Divider />

          <MenuPreview />

          <Divider />

          <CareersPreview />

      </React.Fragment>
    );
}

export default HomePage;