import React from 'react';
import _ from 'lodash';

import components from './index';
import ActionLink from './ActionLink';
import {htmlToReact} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <div className="footer-bottom outer">
                <div className="inner">
                  {(_.get(this.props, 'pageContext.site.siteMetadata.footer.has_nav', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.nav_links', null)) && (
                  <div className="footer-nav">
                   
                  </div>
                  )}
                  <div className="site-info">
                    {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}
                    &nbsp;
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                      <ActionLink key={action_idx} {...this.props} action={action} />
                    ))}
                  </div>
                </div>
              </div>
            </footer>
        );
    }
}
