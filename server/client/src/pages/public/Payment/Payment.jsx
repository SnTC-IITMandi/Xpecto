import React from "react";
import styles from "./Payment.module.css";
import Layout from "../component/Layout/Layout";

const Payment = () => {
  return (
    <>
      <Layout dataColor="#00ddcc">
        <div className={styles["header"]}>
          <h1 className={styles["events-page-heading"]}>Payment</h1>
          <div className={styles["payment-main"]}>
            <div className={styles["content-container"]}>
              <div className={styles["message"]}>
                <h1 className={styles["amount"]}>Rs. 1700 per person</h1>
                <h1>For offline participation</h1>
                <h1 className={styles["payment-deadline"]}>
                  Deadline for fee payment
                  <br />
                  23 Feb, 2023
                </h1>
                {/* <h2>Payment to be made by CONTINGENT LEADER ONLY</h2> */}
                <h2>Please fill the form after Payment</h2>
                {/* <h2></h2> */}
              </div>
              <div className={styles["content-inner"]}>
                <div className={styles["info"]}>
                  <div className={styles["account-name"]}>
                    <span>Account Name</span>
                    <span>SCIENCE AND TECHNOLOGY COUNCIL</span>
                  </div>
                  <div className={styles["account-name"]}>
                    <span>Bank Name</span>
                    <span>PUNJAB NATIONAL BANK</span>
                  </div>
                  <div className={styles["account-name"]}>
                    <span>Bank Branch</span>
                    <span>IIT KAMAND, KAMAND, MANDI, HP BRANCH</span>
                  </div>
                  <div className={styles["account-number"]}>
                    <span>Account Number</span>
                    <span>7315000100034536</span>
                  </div>
                  <div className={styles["ifsc-code"]}>
                    <span>IFSC Code</span>
                    <span>PUNB0731500</span>
                  </div>
                </div>

                <a
                  href="https://forms.gle/LMstcRnCQwbfcsTw7"
                  target="_blank"
                  className={styles["form-link"]}
                >
                  FORM
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Payment;
