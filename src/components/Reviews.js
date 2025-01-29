/*
    Omar Johnson
    Reviews component
    Created on: 1/29/25

    Currently only displays a sample review for mockup purposes

    In the future, could read reviews from Google using an API

    A subcomponent of the Home page
 */

function Reviews()
{
    return (
        <article className="flex flex-col w-full items-center gap-y-12 p-4">

            <h2 className="text-3xl">Reviews</h2>

            { /* Gallery of reviews */ }
            <div className="w-4/5 min-h-48 border-2 border-neutral-50 rounded-lg shadow-md p-8 flex flex-col items-start">
                { /* Profile author */ }
                <span className="inline-flex flex-row h-min gap-x-4">
                    <img className="w-16 h-16 rounded-full" alt="Author Profile" src="/assets/profile.png" />
                    <p className="text-xl">John Doe</p>
                </span>
                { /* Comment */ }
                <span className="inline-flex flex-row justify-start gap-x-12">
                    <span className="text-5xl ml-16">"</span>
                    <p id="comment-content" className="text-lg">
                        This is a nice review for the place!
                    </p>
                </span>
            </div>

        </article>
    );
}

export default Reviews;