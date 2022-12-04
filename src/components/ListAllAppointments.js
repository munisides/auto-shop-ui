import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

export default class ListAllAppointments extends Component {
    render() {
        return(
            <div className="appointment-list item-list mb-3">
            {this.props.appointments.map(item => (
              <div className="car-item col media py-3" key={item.apptId}>
                <div className="mr-3">
                  <button
                    className="car-delete btn btn-sm btn-danger"
                    onClick={() => this.props.deleteAppointment(item)}
                  >
                    <FaTimes />
                  </button>
                </div>
    
                <div className="car-info media-body">
                    
                    <div className="car-head d-flex">
                        
                        {/* Car Make and Model */}
                        <span
                            className="car-make"
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={
                              (e) => this.props.updateApptDetails('carMake', e.target.innerText, item.apptId)
                            }
                        >
                            { /*item.apptId */ } 
                            { item.carMake } { item.carModel }
                        </span>

                        {/* Appt Date and Time */}
                        <span className="appt-date ml-auto">
                          <Moment 
                            date={ item.apptDate } 
                            parse="YYYY/MM/DD"
                            format="ddd MMM-DD "
                          />

                          <Moment 
                            date={ item.apptTime }
                            parse="hh:mm"
                            format="hh:mm A"
                          />
                            
                        </span>
                    </div>
    
                    {/* Owner Name */}
                    <div className="owner-name">
                        <span className="label-item">Owner: </span>
                        <span
                            contentEditable
                            suppressContentEditableWarning                            
                            onBlur={
                              (e) => this.props.updateApptDetails('ownerName', e.target.innerText, item.apptId)
                            }
                            >
                            {item.ownerName}
                        </span>
                    </div>
                
                    {/* Service Type */}
                    <div
                        className="appt-svceType"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={
                          (e) => this.props.updateApptDetails('svceType', e.target.innerText, item.apptId)
                        }
                        >
                        <span className="label-item">Service: </span>
                        {item.svceType}
                    </div>

                </div>
              </div>
            ))}
          </div>
        );
    }
}
