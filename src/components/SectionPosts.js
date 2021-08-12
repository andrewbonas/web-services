import React from 'react';
import _ from 'lodash';

import {htmlToReact, getPages, Link, withPrefix} from '../utils';
import BlogPostFooter from './BlogPostFooter';

export default class SectionPosts extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/blog'), 'frontmatter.date', 'desc');
        let recent_posts = display_posts.slice(0, 3);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block posts-block bg-' + _.get(section, 'background', null) + ' outer'}>
       
            </section>
        );
    }
}
