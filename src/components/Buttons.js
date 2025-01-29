/* Buttons toolkit */

import {Link} from "react-router";

function PrimaryButton(props)
{
    return (
        <Link to={props.to} className="text-2xl p-6 font-bold bg-red-200 rounded-md hover:bg-red-300">{props.text}</Link>
    );
}

export { PrimaryButton };