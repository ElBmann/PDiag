import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Header/Header.css'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem,
    UncontrolledDropdown, DropdownToggle, DropdownItem,
    NavLink, DropdownMenu

} from 'reactstrap';
const header = (props) => {
    return(
        <div>
        <Navbar style={{paddingLeft: 300, background: 'black', padding: 20}} dark= "true" expand="md">
          <NavbarBrand className="text-white" href="/"> <h4>Percise Diagnostics</h4></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar>
            <Nav  className="ml-auto" navbar >
              <NavItem color="primary" >
                <NavLink  className="text-white" href="/components/" ></NavLink>
              </NavItem>
              <NavItem >
                <NavLink className="text-white"  href="/components/">Services</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink className="text-white" href="/components/">Our Pathologists</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/">Physicians & Patients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/">Billing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">Careers</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-white" nav caret>
                Pathology Reporting
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem color="danger">
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
};

export default header;