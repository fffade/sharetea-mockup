/*
    Omar Johnson
    Menu Preview component
    Created on: 1/29/25

    Displays the different menu options as navigation

    A subcomponent of the Home page
 */

import { Link } from "react-router";

function MenuCategory(props)
{
    // TODO: Change to props.to
    return (
        <Link to="#" className="text-xl text-red-500 shadow-sm font-bold pl-12 pr-12 p-2 rounded-lg bg-red-200 hover:scale-105 transition-all">{props.text}</Link>
    );
}

function MenuPreview()
{
    return (
        <article className="flex flex-col items-center gap-y-12 p-4">

            <h2 className="text-3xl">Find Your Tea</h2>

            { /* List of categories */ }
            <div className="flex flex-row flex-wrap overflow-wrap justify-center gap-2">
                <MenuCategory to="tea" text="Milk Tea" />
                <MenuCategory to="tea" text="Fruit Tea" />
                <MenuCategory to="tea" text="Fresh Tea" />
                <MenuCategory to="tea" text="Brewed Tea" />
                <MenuCategory to="tea" text="Tea Mojito" />
                <MenuCategory to="tea" text="Blended" />
                <MenuCategory to="tea" text="Creama" />
            </div>

            { /* Customization options */ }
            <h2 className="text-3xl">Make It Yours</h2>

            <ul className="text-xl list-inside list-disc">
                <li>Ice Levels: No Ice, Less Ice, Regular Ice</li>
                <li>Sweetness: 0%, 30%, 50%, 80%, 100%</li>
                <li><Link to="toppings">Unique Toppings</Link></li>
            </ul>

        </article>
    );
}

export default MenuPreview;