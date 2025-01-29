/*
    Omar Johnson
    Careers component
    Created on: 1/29/25

    Entice visitors to search for work here

    Includes a quick link to the careers page

    A subcomponent of the Home page
 */

import { PrimaryButton } from "./Buttons";

function CareersPreview()
{
    // TODO: Change button # to /careers

    return (
        <article className="flex flex-col items-center text-center gap-y-8 p-4">

            <h2 className="text-3xl">Interested in working here?</h2>

            <p className="text-xl">
                We're always looking for hard-working and enthusiastic bubble tea lovers to connect with us.
                <br />
                Learn more about our work culture and join the team now!
            </p>

            <PrimaryButton to="#" text="View Jobs" />

        </article>
    );
}

export default CareersPreview;