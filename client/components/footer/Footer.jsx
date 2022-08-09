import React from "react";
import styles from "./footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerCont}>
          <div className={styles.footerLogoSocial}>
            <img
              className={styles.logo}
              src="/images/lotus.png"
              alt="logo"
              width="250"
              height="auto"
            />

            <hr className={styles.line} />
            <ul className={styles.socialLogos}>
              <li>
                <FacebookIcon fontSize="large" className={styles.facebook} />
              </li>
              <li>
                <InstagramIcon className={styles.insta} fontSize="large" />
              </li>
            </ul>
          </div>

         
            
         
          <nav className={styles.footerMenu}>
            <ul>
              <li>
                <a href="/jobsboard">Jobs Board</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/contactus">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.copyRightCenter}>
          <small>&copy; 2021, Live in angels. All Rights Reserved</small>
        </div>
        <ul className={styles.copyRightArea}>
          <li>
            <a href="#">Privacy Statment</a>
          </li>
          <li>
            <a href="#">Disclaimer</a>
          </li>
          <li>
            <a href="#">T & C's</a>
          </li>
          <li>
            <a href="#">Copyright</a>
          </li>

          <li>
            <a href="#">Acceptable Usage</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
