import React from 'react'
import { Link } from 'react-router-dom'
import '../../footer.css';

export default function Footer() {
    return (
        <footer >
            <div>
                <ul>
                    <li>Link to About</li>
                    <li>
                        <Link to="/resources">
                            Link to additional resources
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h1>This is the Footer</h1>
                <p>Made By Daniel Cortes</p>
            </div>
            
        </footer>
    )
}
