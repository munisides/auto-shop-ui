import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

export default class AddNewAppointment extends Component {
  constructor() {
    super();
    this.state = {
      carMake: '',
      carModel: '',
      ownerName: '',
      apptDate: '',
      apptTime: '',
      svceType: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddAppt = this.handleAddAppt.bind(this);
  }

  handleAddAppt(e) {
    e.preventDefault();

    let tempAppt = {
      carMake: this.state.carMake,
      carModel: this.state.carModel,
      ownerName: this.state.ownerName,
      apptDate: this.state.apptDate,
      apptTime: this.state.apptTime,
      srvceType: this.state.svceType
    };

    this.props.addAppointment(tempAppt); 

    this.setState({
      carMake: '',
      carModel: '',
      ownerName: '',
      apptDate: '',
      apptTime: '',
      srvceType: ''
    });

    this.props.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? '' : 'add-appointment')
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white font-weight-bold"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add an Appointment
        </div>

        <div className="card-body">
          <form id="apptForm" noValidate onSubmit={ this.handleAddAppt }>

            {/* Appointment - Car Make */}
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="carMake"
                readOnly
              >
                Car Make
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="carMake"
                  placeholder="Car Make"
                  value={this.state.carMake}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {/* Appointment - Car Model */}
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="carModel"
                readOnly
              >
                Car Model
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="carModel"
                  placeholder="Car Model"
                  value={this.state.carModel}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="ownerName"
              >
                Owner
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="ownerName"
                  placeholder="Owner Full Name"
                  value={this.state.ownerName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {/* Appointment Date*/}
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="apptDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="apptDate"
                  id="apptDate"
                  value={this.state.apptDate}
                  onChange={this.handleChange}
                />
              </div>

              
            {/* Appointment Time*/}
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="apptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="apptTime"
                  id="apptTime"
                  value={this.state.apptTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            
            {/* Service Type */}
            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="srvceType">
                Service Type
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="svceType"
                  id="serviceType"
                  placeholder="Service Type"
                  value={this.state.svceType}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add New Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
