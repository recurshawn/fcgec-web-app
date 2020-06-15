import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import eventStyles from './event.module.scss'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields:{slug:{eq: $slug}}) {
            frontmatter {
                title
                date
                author
            }
            html
            timeToRead
        }
    }
`

const Blog = props => {

    const { markdownRemark } = props.data;
    const { title, date, author } = markdownRemark.frontmatter;
    const { html, timeToRead } = markdownRemark;

    return (
        <Layout>
            <SEO title={title} />
            <div className="container">
                <div className={eventStyles.container}>
                    <div className={eventStyles.header}>
                        <h2>{title}</h2>
                        <p>By {author}</p>
                        <p>{timeToRead} min read · {date}</p>
                    </div>

                    <div className="container">
                        <div className={eventStyles.content} dangerouslySetInnerHTML={{ __html: html }}></div>
                    </div>

                    <Link className={eventStyles.backButton} to="/events">Go Back</Link>
                </div>
            </div>
        </Layout>
    )
}

export default Blog