/*
    Omar Johnson
    Introduction component
    Created on: 1/29/25

    A quick summary of the location, including hours, and navigation to online ordering

    Hours are easily adjustable as they are read from a local file

    This is a subcomponent of the HomePage
 */

import React from "react";
import {PrimaryButton} from "./Buttons";

function Introduction()
{
    return (
        <article className="flex flex-col items-center gap-y-12 p-4">
            { /* Gallery */ }
            <div className="flex flex-row max-w-full justify-between items-center gap-x-8 p-4">
                <i className="text-3xl fa-solid fa-arrow-left"/>
                <img className="rounded-3xl w-3/4 h-auto" src="/assets/ShareTea_Gallery1.avif" alt="Gallery" />
                <i className="text-3xl fa-solid fa-arrow-right"/>
            </div>

            <span className="text-center">
              <h2 className="text-4xl">Drink bubblicious. Feel bubblicious.</h2>
              <p className="text-2xl m-4">Rated #1 for Bubble Tea in Columbus</p>
            </span>

            <p className="text-xl">
                With high quality tea leaves and selected ingredients shipped directly from Taiwan, we are happy to bring to all bubble tea lovers in Columbus delicious and healthy beverages.
                Welcome to the most bubblicious Taiwanese Boba Tea!
            </p>

            <p className="text-xl">
                Located in Dublin right off Sawmill Road, we're here to fulfill all your daily boba tea cravings.
            </p>

            { /* Read hours from file */ }
            <div className="text-xl text-center">

                We're open:

                HOURS

            </div>

            { /* Order online button TODO: Change # to order */ }
            <span className="inline text-center">
              <PrimaryButton to="#" text="Order Online" />
              <p className="text-lg m-8">and skip the line!</p>
            </span>

        </article>
    );
}

export default Introduction;