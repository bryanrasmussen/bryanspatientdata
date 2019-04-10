import React from 'react';


class Paginate extends React.Component {
  
  render() {
    const qs = this.props.query;
    const currentPage = (qs.page) ? Number(qs.page) : 0;
    
    const returnQs = (page) => {
        const localQs = {...qs};
        localQs.page = page;
        return Object.keys(localQs).map(pa => pa + '=' + localQs[pa]).join('&');
    }
    const paginationLink = (page, text) => {
        if (page < 0) { return null}
        return <li className="paginationLink">
            <a itemProp="url" href={'/?' + returnQs(page)} target="_parent">
              <span itemProp="name">{text}</span>
            </a> 
        </li>;
    }
    return <React.Fragment>
        <nav role="navigation" aria-label="Pagination Navigation">
            <p>Navigate through results</p>
            <ul className="pagination" role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement">    
                {paginationLink(currentPage - 1, '< Previous')}
                <li>&#160;&#160;<strong>&#9679;</strong>&#160;</li>
                {paginationLink(currentPage + 1, 'Next >')}
            </ul>
        </nav>
    </React.Fragment>
  }
}



export default Paginate;
