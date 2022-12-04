import React, { Component } from 'react';

export default class SearchAppointment extends Component {
    render() {
        return(
            <div className="search-appointments row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchAppts"
                  type="text"
                  className="form-control"
                  aria-label="Search Appointments"
                  onChange={(e) => this.props.searchAppts(e.target.value)}
                />

                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by <span className="caret" />
                  </button>
    
                  <div className="sort-menu dropdown-menu dropdown-menu-right">
                    
                    {/* Car Make */}
                    <button
                      className={
                        'sort-by dropdown-item ' +
                        (this.props.orderBy === 'carMake' ? 'active' : '')
                      }
                      onClick={e =>
                        this.props.changeOrder('carMake', this.props.orderDirection)
                      }
                      href="#"
                    >
                      Car Make
                    </button>

                    {/* Date */}
                    <button
                      className={
                        'sort-by dropdown-item ' +
                        (this.props.orderBy === 'apptDate' ? 'active' : '')
                      }
                      onClick={e =>
                        this.props.changeOrder('apptDate', this.props.orderDirection)
                      }
                      href="#"
                    >
                      Date
                    </button>

                    {/* Owner Name */}
                    <button
                      className={
                        'sort-by dropdown-item ' +
                        (this.props.orderBy === 'ownerName' ? 'active' : '')
                      }
                      onClick={e =>
                        this.props.changeOrder('ownerName', this.props.orderDirection)
                      }
                      href="#"
                    >
                      Owner
                    </button>
                    <div role="separator" className="dropdown-divider" />

                    {/* Ascending Order */}
                    <button
                      className={
                        'sort-by dropdown-item ' +
                        (this.props.orderDirection === 'asc' ? 'active' : '')
                      }
                      onClick={e =>
                        this.props.changeOrder(this.props.orderBy, 'asc')
                      }
                      href="#"
                    >
                      Asc
                    </button>

                    {/* Descending Order */}
                    <button
                      className={
                        'sort-by dropdown-item ' +
                        (this.props.orderDirection === 'desc' ? 'active' : '')
                      }
                      onClick={e =>
                        this.props.changeOrder(this.props.orderBy, 'desc')
                      }
                      href="#"
                    >
                      Desc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
