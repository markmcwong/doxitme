import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
class BlogSingle extends Component {
    render() {
        const { blog } = this.props;
        const { imgSrc, title, date, preview, id, author, type } = this.props.blog;

        return (
            <Fragment>
            {
                //Object.values(blog).slice(0, 4)
                // Object.values(blog).map((value, key) => {
                        <div className={"blog-single"}>

                            <div className="card post--card post--card2 ">
                                <figure>
                                    <NavLink to={"/blog-details"+id}><img src={imgSrc} alt="" /></NavLink>
                                    <figcaption>
                                        <NavLink to={"/blog-details"+id}><i className="la la-image"></i></NavLink>
                                    </figcaption>
                                </figure>
                                <div className="card-body">
                                    <h3><NavLink to={"/blog-details"+id}>{title}</NavLink></h3>
                                    <ul className="post-meta list-unstyled">
                                        <li>{date.toDate().toString()}</li>
                                        <li>by <NavLink to="/at_demo" onClick={noAction}>{author}</NavLink></li>
                                        <li>in <NavLink to="/at_demo" onClick={noAction}>{type}</NavLink></li>
                                        <li><NavLink to="/at_demo" onClick={noAction}>6 Comments</NavLink></li>
                                    </ul>
                                    <p>{preview}</p>
                                </div>
                            </div>

                        </div>
                // })
            }
            </Fragment>
        )
    }
}

export default BlogSingle
