import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

export default function Dashboard() {
  const [receivers, setReceivers] = useState([]);
  const [fromnumbers, setFromnumbers] = useState([]);
  const [activeNumbers, setActiveNumbers] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3000/receivers")
      .then((res) => {
        setReceivers(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3000/fromnumbers")
      .then((res) => {
        setFromnumbers(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3000/active")
      .then((res) => {
        setActiveNumbers(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleStart = () => {
    axios
      .get("http://localhost:3000/start")
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const handleStop = () => {
    axios
      .get("http://localhost:3000/stop")
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const handleRefresh = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="text-center mt-3 mb-3">
        <button className="btn btn-primary mr-2" onClick={handleStart}>
          Start
        </button>
        <button className="btn btn-danger mr-2" onClick={handleStop}>
          Stop
        </button>
        <button className="btn btn-secondary mr-2" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
      <div className="d-flex flex-row h-100 justify-content-center">
        <div className="mr-5 h-100">
          <h3>Sender Numbers</h3>
          <table className="table table-bordered h-100">
            <thead>
              <tr>
                <th>No</th>
                <th>Twilio Number</th>
              </tr>
            </thead>
            <tbody>
              {fromnumbers.map((item, index) => (
                <tr key={item}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mr-5">
          <h3>Receiver Numbers</h3>
          <table className="table table-bordered mr-5 h-100">
            <thead>
              <tr>
                <th>No</th>
                <th>Receiver Number</th>
              </tr>
            </thead>
            <tbody>
              {receivers.map((item, index) => (
                <tr key={item.number}>
                  <td>{index + 1}</td>
                  <td>{item.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mr-5 h-100">
          <h3>Blocked Status</h3>
          <table className="table table-bordered h-100">
            <thead>
              <tr>
                <th>Twilio Number</th>
                <th>WhatsApp Number</th>
              </tr>
            </thead>
            <tbody>
              {receivers.map((to, index1) =>
                fromnumbers.map((from, index2) =>
                  _.findIndex(activeNumbers, {
                    from: "whatsapp:" + from,
                    to: "whatsapp:" + to.number,
                  }) == -1 ? (
                    <tr key={index1 + "" + index2}>
                      <td>{from}</td>
                      <td>{to.number}</td>
                    </tr>
                  ) : null
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
