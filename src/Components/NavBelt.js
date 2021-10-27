import {
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import Logo from "../amazon-dark-logo-svg-vector.svg";

export const NavBelt = () => {
  return (
    <div>
      <div>
        <Navbar className="nav-bar">
          <a href="/">
            <img className="nav-belt-img" src={Logo} alt="" />
          </a>

          <div className="div-a">
            <a href="/" className="navbelt-a">
              <div
                style={{
                  display: "inline-flex",
                }}
              >
                <div>
                  <div className="sprite-loc"></div>
                </div>
                <div>
                  <div className="div-anon-up">
                    <span className="nav-belt-sm-txt">Hello</span>
                  </div>
                  <div className="div-anon-down">
                    <span className="nav-belt-bg-txt">Select your address</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <Formik
            initialValues={{
              search: "",
            }}
          >
            {() => (
              <Form
                style={{
                  display: "inline-flex",
                }}
              >
                {/* <input type="select">All</input> 
                <Field
                  className="nav-belt-form"
                  name="search"
                  type="input"
                  //   className="search"
                ></Field>
              </Form>
            )}
          </Formik> */}

          <div>
            <div
              className="nav-belt-form"
              style={{
                borderRadius: "10ex",
              }}
            >
              <InputGroup className="mb-3 nav-belt-drop">
                <DropdownButton
                  variant="outline-secondary"
                  title="All"
                  id="input-group-dropdown-1"
                  className="nav-belt-drop"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <FormControl
                  className="nav-belt-search"
                  aria-label="Text input with dropdown button"
                />
              </InputGroup>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "inline-flex",
              }}
            >
              <div className="div-a">
                <a href="/" className="navbelt-a">
                  <div>
                    <div className="div-anon-up">
                      <span className="nav-belt-sm-txt">Hello, Sign in</span>
                    </div>
                    <div className="div-anon-down">
                      <span className="nav-belt-bg-txt">Account & Lists</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="div-a">
                <a href="/" className="navbelt-a">
                  <div>
                    <div className="div-anon-up">
                      <span className="nav-belt-sm-txt">Returns</span>
                    </div>

                    <div>
                      <div className="div-anon-down">
                        <span className="nav-belt-bg-txt">& Orders</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="div-a">
                <a href="/" className="navbelt-a ">
                  <div
                    style={{
                      display: "inline-flex",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      className="nav-sprite-cart"
                      style={{
                        marginRight: "0px",
                        marginLeft: "10px",
                      }}
                    ></div>
                    <div>
                      <div className="div-anon-down">
                        <span className="nav-belt-bg-txt">Cart</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};
