import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Navigation() {
  const [search, setSearch] = useState(null);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <strong>
            <span style={{ fontSize: "50px" }}>Now-Times</span>
          </strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <Nav.Link
                href="#home"
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}
              >
                Home
              </Nav.Link>
            </Link>
            <Link to="/search/tech">
              <Nav.Link
                href="#home"
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}
              >
                Tech
              </Nav.Link>
            </Link>
            <Link to="/search/covid-19">
              <Nav.Link
                href="#home"
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}
              >
                Covid-19
              </Nav.Link>
            </Link>
            <Link to="/search/soccer">
              <Nav.Link
                href="#home"
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}
              >
                Football
              </Nav.Link>
            </Link>
            <Link to="/search/cricket">
              <Nav.Link
                href="#home"
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}
              >
                Cricket
              </Nav.Link>
            </Link>
            <Link to="/movie/new">
              <Nav.Link
                href="#home"
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}
              >
                <span style={{ fontSize: "30px" }}>Movie Trending</span>
              </Nav.Link>
            </Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Link to={`/search/${search}`}>
              <Button
                variant="outline-success"
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}
              >
                Search
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
