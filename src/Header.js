import React from 'react';
import './Header.css'

// FUNTIONAL COMPONENT

const Header = function() {
    return(
        <div className="header">
            Phone Directory
        </div>
    )
}


// CLASS COMPONENT

// class Header extends Component {
//     render() {
//         return(
//             <div className="header">
//                 Phone Directory
//             </div>
//         )
//     }
// }

export default Header;