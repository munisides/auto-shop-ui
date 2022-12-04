import React, { Component } from 'react';
import AddNewAppointment from './AddNewAppointment';
import SearchAppointment from './SearchAppointment';
import ListAllAppointments from './ListAllAppointments';
import '../css/App.css';

import { GiMechanicGarage } from "react-icons/gi";
import { findIndex, without } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay: false,
      orderBy: 'carMake',
      orderDirection: 'asc',
      queryText: '',
      lastIndex: 0
    }

    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm= this.toggleForm.bind(this);
    this.addAppointment= this.addAppointment.bind(this);
    this.changeOrder= this.changeOrder.bind(this);
    this.searchAppts= this.searchAppts.bind(this);
    this.updateApptDetails= this.updateApptDetails.bind(this);
  }

  changeOrder(order, sortDirection) {
    this.setState({
      orderBy: order,
      orderDirection: sortDirection
    });
  }

  searchAppts(currentQuery) {
    this.setState({
      queryText: currentQuery
    });
  }

  updateApptDetails(name, value, id) {
    let tempAppts = this.state.myAppointments;
    let apptIndex = findIndex(this.state.myAppointments, {
      apptId: id
    })
    tempAppts[apptIndex][name] = value;
    this.setState({
      myAppointments: tempAppts
    });
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  addAppointment(appt) {
    let tempAppts = this.state.myAppointments;
    appt.apptId = this.state.lastIndex;
    tempAppts.unshift(appt);
    this.setState({
      myAppointments: tempAppts,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteAppointment(appt) {
    let tempAppts = this.state.myAppointments;
    tempAppts = without(tempAppts, appt);

    this.setState({
      myAppointments: tempAppts
    });
  }

  componentDidMount(){
    fetch('./autoShopData.json')
    .then(response => response.json())
    .then(result => {
        const appts = result.map(item => {
          item.apptId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1});
          return(item);
        })
        
        this.setState({
            myAppointments: appts
        });
    });
  }

  render() {
    let order;
    let filteredAppts = this.state.myAppointments;
    if(this.state.orderDirection === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredAppts = filteredAppts
      .sort((a, b) => {
        if(
            a[this.state.orderBy] < 
            b[this.state.orderBy]
          ) {
            return -1 * order;
          } else 
          {
            return 1 * order;
          }
        }
      )
      .filter(filterItem => {
        return(
          filterItem['carMake'].toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||   

          filterItem['ownerName'].toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||

          filterItem['svceType'].toLowerCase()
          .includes(this.state.queryText.toLowerCase()) 
        );
    });

    return (
      <>
      <header className="container text-white">
        <h4 className="mx-auto py-2">
          <GiMechanicGarage />
          LOCAL AUTO SHOP
        </h4>
      </header>

      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              {/* Add a New Appointment */}
              <AddNewAppointment
                formDisplay={ this.state.formDisplay }
                toggleForm={ this.toggleForm }
                addAppointment={ this.addAppointment }
              />

              {/* Search for an Appointment */}
              <SearchAppointment
                orderBy={ this.orderBy }
                orderDirection={ this.orderDirection }
                changeOrder={ this.changeOrder }
                searchAppts={ this.searchAppts }
              />

              {/* List All Appointments */}
              <ListAllAppointments
                appointments={ filteredAppts }
                deleteAppointment={ this.deleteAppointment }
                updateApptDetails={ this.updateApptDetails }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
    );
  }
}

export default App;
