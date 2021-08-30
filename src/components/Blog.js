import React, { Component } from 'react'
import Blog1 from './Blog1'
import Blog2 from './Blog2'

import {Link} from "react-router-dom";
export default class Blog extends Component {
    render() {
        return (
            <div>
                <h2>2 Blogs Page Render </h2>
                <Blog1 />
                <Blog2 />
                <h1>2 Blogs Links</h1>
                <Link as={Link} to="/blog1">Blog1</Link> <br/>
                <Link as={Link} to="/blog2">Blog2</Link>

            </div>
        )
    }
}
