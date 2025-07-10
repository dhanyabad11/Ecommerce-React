import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Input,
    Button,
    Badge,
} from "reactstrap";

function EcommerceNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount] = useState(3); // This would come from your cart state

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md" className="px-3">
                <NavbarBrand href="/" className="fw-bold">
                    <i className="fas fa-store me-2"></i>
                    ShopHub
                </NavbarBrand>

                {/* Search Bar - Hidden on mobile */}
                <div className="d-none d-lg-flex flex-grow-1 mx-4">
                    <div className="d-flex w-50">
                        <Input type="search" placeholder="Search products..." className="me-2" />
                        <Button color="primary" size="sm">
                            <i className="fas fa-search"></i>
                        </Button>
                    </div>
                </div>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Categories
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/category/electronics">
                                    Electronics
                                </DropdownItem>
                                <DropdownItem href="/category/clothing">Clothing</DropdownItem>
                                <DropdownItem href="/category/books">Books</DropdownItem>
                                <DropdownItem href="/category/home">Home & Garden</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/categories">All Categories</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/deals">Deals</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                    </Nav>

                    {/* Right side navigation */}
                    <Nav navbar>
                        {/* Mobile Search */}
                        <NavItem className="d-lg-none">
                            <NavLink href="/search">
                                <i className="fas fa-search me-1"></i>
                                Search
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/account">
                                <i className="fas fa-user me-1"></i>
                                Account
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/wishlist">
                                <i className="fas fa-heart me-1"></i>
                                Wishlist
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/cart" className="position-relative">
                                <i className="fas fa-shopping-cart me-1"></i>
                                Cart
                                {cartCount > 0 && (
                                    <Badge
                                        color="danger"
                                        pill
                                        className="position-absolute top-0 start-100 translate-middle"
                                        style={{ fontSize: "0.7rem" }}
                                    >
                                        {cartCount}
                                    </Badge>
                                )}
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default EcommerceNavbar;
