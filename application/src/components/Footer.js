import React from "react";
import styled from "styled-components";

const Header = () => {
    const Footer = styled.footer`
    #sticky-footer {
        flex-shrink: none;
      }
  `;

    return (
        <React.Fragment>
            <Footer>
                <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
                    <div className="container text-center">
                        <small>Copyright &copy; Counter-Strike Global Offensive Stats</small>
                    </div>
                </footer>
            </Footer>
        </React.Fragment>
    );
};

export default Header;
