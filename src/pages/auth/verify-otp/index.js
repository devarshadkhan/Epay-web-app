import React from "react";
import styles from "@/styles/auth/Phone.module.css";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    router.push("/verification")
  };

  return (
    <>
      <div className={styles.phonelogin}>
        <div className="container">
          <div className="row">
            <div className={classNames("col-6", styles.colsecNum)}>
              <div className={styles.phoneNumber}>
                <h3>Verify OTP</h3>
                <form action="POST" onSubmit={handleSubmit(onSubmit)}>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      maxLength={4}
                    />
                  </div>
                  {errors.phone && (
                    <span className={styles.err}>Phone number is required</span>
                  )}
                  <p>
                    Didn't get the OTP? Resend OTP in
                    <a href=""> Resend OTP</a>
                  </p>

                  <button
                    type="submit"
                    className={classNames(styles.otpBtn)}
                    // disabled={!phoneInputValue || !agreeToTerms}
                  >
                    Verify
                  </button>
                  {/* <p>Your journey to hassle-free utility payments begins here</p> */}
                </form>
              </div>
            </div>
            <div className="col-6">
              <img
                src="https://payrup.com/assets/images/signin/signin2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
