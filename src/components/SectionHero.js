import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block hero-block bg-accent outer">
              <div className="inner">
                <div className="grid">
                <div className="site-branding">
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null) && (
                    <p className="site-logo"><Link to={withPrefix('/')}><img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null))} alt={_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img_alt', null)} /></Link></p>
                    )}
                    {((_.get(this.props, 'pageContext.frontmatter.template', null) === 'landing') || (_.get(this.props, 'pageContext.frontmatter.template', null) === 'blog')) ? (
                    <h1 className={classNames('site-title', {'screen-reader-text': _.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null)})}><Link to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.title', null)}</Link></h1>
                    ) : 
                    <p className={classNames('site-title', {'screen-reader-text': _.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null)})}><Link to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.title', null)}</Link></p>
                    }
                  </div>
                  {_.get(section, 'image', null) && (
                  <div className="cell block-preview">
                    <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                  </div>
                  )}
                  <div className="cell block-content">
                    {_.get(section, 'title', null) && (
                    <h2 className="block-title underline">{_.get(section, 'title', null)}</h2>
                    )}
                    <div className="block-copy">
                      {markdownify(_.get(section, 'content', null))}
                    </div>
                    {_.get(section, 'actions', null) && (
                    <div className="block-buttons">
                      <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
