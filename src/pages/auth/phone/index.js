
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
    router.push("/auth/verify-otp");
  };

  return (
    <>
      <div className={styles.phonelogin}>
        <div className="container">
          <div className="row">
            <div className={classNames("col-6", styles.colsecNum)}>
              <div className={styles.phoneNumber}>
                <h3>Sign in to E-pay</h3>
                <form action="POST" onSubmit={handleSubmit(onSubmit)}>
                  {/* <PhoneInput
                    country={"in"}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                    buttonClass="phonecountry"
                    inputClass={classNames("phonenumbercls", styles.errBorder)}
                    {...register("phone", { required: true })}
                  /> */}
                  <Controller
          name="phone"
          control={control}
          rules={{ required: 'Phone number is required' }} // Add validation rules
          render={({ field }) => (
            <PhoneInput
              {...field}
              buttonClass="phonecountry"
                    inputClass={classNames("phonenumbercls", styles.errBorder)}
              country={'in'}
              // Other PhoneInput props go here
            />
          )}
        />
                  {errors.phone && (
                    <span className={styles.err}>Phone number is required</span>
                  )}
                  <div className={classNames(styles.formcheck, "form-check")}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="on"
                      id="agreeToTerms"
                    //   required
                      {...register("agreeToTerms", { required: true })}
                     
                    />
                    
                    <label className="form-check-label" htmlFor="agreeToTerms">
                      I agree to the <a href="#">terms & conditions</a>
                    </label>
                    {errors.agreeToTerms && (
                    <span className={styles.err}>This field is required</span>
                  )}
                  </div>

                  <button
                    type="submit"
                    className={classNames(styles.otpBtn)}
                    // disabled={!phoneInputValue || !agreeToTerms}
                  >
                    get OTP
                  </button>
                  <p>Your journey to hassle-free utility payments begins here</p>
                </form>
              </div>
            </div>
            <div className="col-6">
              <img
                src="https://payrup.com/assets/images/signin/signin3.svg"
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



// import React, { useState } from "react";
// import styles from "@/styles/auth/Phone.module.css";
// import PhoneInput from "react-phone-input-2";
// import classNames from "classnames";
// import { useForm } from "react-hook-form";
// const index = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isDirty },
//   } = useForm();
//   const phoneInputValue = watch("phone");
//   const agreeToTerms = watch("agreeToTerms");
//   const onSubmit = (data) => console.log(data);

//   return (
//     <>
//       <div className={styles.phonelogin}>
//         <div className="container">
//           <div className="row">
//             <div className={classNames("col-6", styles.colsecNum)}>
//               <div className={styles.phoneNumber}>
//                 <h3>Sign in to E-pay</h3>
//                 <form action="POST" onSubmit={handleSubmit(onSubmit)}>
//                   <PhoneInput
//                     country={"in"}
//                     inputProps={{
//                       name: "phone",
//                       required: true,
//                       autoFocus: true,
//                     }}
//                     inputClass={classNames("phonenumbercls" , styles.errBorder)}
//                     // inputClass={classNames('phonenumbercls', {
//                     //   [styles.errBorder]: inputError,
//                     // })}
//                     buttonClass="phonecountry"
//                     {...register("phone", { required: true })}
//                   />
//                   {errors.exampleRequired && (
//                     <span className={styles.err}>Phone number is required</span>
//                   )}
//                   <div class={classNames(styles.formcheck, "form-check")}>
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="flexCheckDefault"
//                       {...register("agreeToTerms", { required: true })}
//                     />
//                     <label class="form-check-label" for="flexCheckDefault">
//                       I agree to the <a href="">terms & conditions</a>
//                     </label>
//                   </div>

//                   <button type="submit" disabled={!isDirty || !phoneInputValue || !agreeToTerms}>get OTP</button>
//                   <p>
//                     Your journey to hassle free utility payments begins here
//                   </p>
//                 </form>
//               </div>
//             </div>
//             <div className="col-6">
//               <img
//                 src="https://payrup.com/assets/images/signin/signin3.svg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default index;
