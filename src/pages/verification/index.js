

import React, { useEffect, useState } from "react";
import styles from "@/styles/auth/Verification.module.css";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter()
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    // Add more image properties if needed
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if there are images in local storage and display them
      const storedImage1 = localStorage.getItem("uploadedImageimage1");
      const storedImage2 = localStorage.getItem("uploadedImageimage2");
      const storedImage3 = localStorage.getItem("uploadedImageimage3");
      const storedImage4 = localStorage.getItem("uploadedImageimage4");
      if (storedImage1) {
        setImages((prevImages) => ({ ...prevImages, image1: storedImage1 }));
      }
      if (storedImage2) {
        setImages((prevImages) => ({ ...prevImages, image2: storedImage2 }));
      }
      if (storedImage3) {
        setImages((prevImages) => ({ ...prevImages, image3: storedImage3 }));
      }
      if (storedImage4) {
        setImages((prevImages) => ({ ...prevImages, image4: storedImage4 }));
      }
    }
  }, []);

  const handleImageUpload = (e, imageKey) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageBase64 = reader.result;
        setImages((prevImages) => ({ ...prevImages, [imageKey]: imageBase64 }));
        // Save the image to local storage
        if (typeof window !== "undefined") {
          localStorage.setItem(`uploadedImage${imageKey}`, imageBase64);
        }
      };
      reader.readAsDataURL(file);
    }
  };


  const handleS = ()=>{
    router.push(`/verification/verification-details?${images.image1}`);
  }
  // const handleS = ()=>{
  //   router.push({
  //     pathname: "/verification/verification-details", // Replace with the actual path of your next page
  //     query: {
  //       // Include data you want to send as query parameters
  //       image1: images.image1,
  //       image2: images.image2,
  //       image3: images.image3,
  //       image4: images.image4,
  //     },
  //   });
  // }

  return (
    <>
      <div className={styles.veri_wrp}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6>Fill the blanks to complete your profile</h6>
            </div>
            <div className="col-md-6">
              <div class={styles.image_upload}>
                <div className={styles.aadharSec}>
                  <h4>Upload Aadhar Card Front Side</h4>
                  <label htmlFor="file-input1">
                    <img
                      src={images.image1 || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"}
                      alt="Uploaded"
                      className={styles.Uploaded}
                    />
                    <img
                      src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
                      alt="Placeholder"
                      className={styles.imageIconUpload}
                    />
                  </label>
                  <input
                    id="file-input1"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "image1")}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class={styles.image_upload}>
                <div className={styles.aadharSec}>
                  <h4>Upload Aadhar Card Back Side</h4>
                  <label htmlFor="file-input2">
                    <img
                      src={images.image2 || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"}
                      alt="Uploaded"
                      className={styles.Uploaded}
                    />
                    <img
                      src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
                      alt="Placeholder"
                      className={styles.imageIconUpload}
                    />
                  </label>
                  <input
                    id="file-input2"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "image2")}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class={styles.image_upload}>
                <div className={styles.aadharSec}>
                  <h4>Upload Pan Card Front Side</h4>
                  <label htmlFor="file-input3">
                    <img
                      src={images.image3 || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"}
                      alt="Uploaded"
                      className={styles.Uploaded}
                    />
                    <img
                      src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
                      alt="Placeholder"
                      className={styles.imageIconUpload}
                    />
                  </label>
                  <input
                    id="file-input3"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "image3")}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class={styles.image_upload}>
                <div className={styles.aadharSec}>
                  <h4>Upload Pan Card Back Side</h4>
                  <label htmlFor="file-input4">
                    <img
                      src={images.image4 || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"}
                      alt="Uploaded"
                      className={styles.Uploaded}
                    />
                    <img
                      src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
                      alt="Placeholder"
                      className={styles.imageIconUpload}
                    />
                  </label>
                  <input
                    id="file-input4"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "image4")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button onClick={handleS}>next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;




// import React, { useEffect, useState } from "react";
// import styles from "@/styles/auth/Verification.module.css";
// const index = () => {
//   //     const [image, setImage] = useState(null);
//   // console.log(image);
//   //     const handleImageUpload = (e) => {
//   //       const file = e.target.files[0];
//   //       if (file) {
//   //         const reader = new FileReader();
//   //         reader.onload = () => {
//   //           setImage(reader.result);
//   //         };
//   //         reader.readAsDataURL(file);
//   //       }
//   //     };

//   const [image1, setImage1] = useState(null);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Check if there is an image in local storage and display it
//       const storedImage = localStorage.getItem("uploadedImage");
//       if (storedImage) {
//         // setImage(storedImage);
//         setImage1(storedImage);
//       }
//     }
//   }, []);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const imageBase64 = reader.result;
//         setImage1(imageBase64);
//         // Save the image to local storage
//         if (typeof window !== "undefined") {
//           localStorage.setItem("uploadedImage", imageBase64);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <div className={styles.veri_wrp}>
//         <div className="container">
//           <div className="row">
//           <div className="col-12">

//               <h6>Fill the blanks to complete your profile</h6>
//           </div>
//             <div className="col-md-6">

//               <div class={styles.image_upload}>
//               <div className={styles.aadharSec}>
//               <h4>Upload Aadhar Card</h4>
//               <label htmlFor="file-input">
                 
//                   <img src={image1} alt="Uploaded" className={styles.Uploaded} />
                  
//                   <img
//                     src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                     alt="Placeholder"
//                     className={styles.imageIconUpload}
//                   />
//                 </label>

//                 <input
//                   id="file-input"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                 />
              
//               </div>
           
//               </div>
//             </div>
//             <div className="col-md-6">

//               <div class={styles.image_upload}>
//               <div className={styles.aadharSec}>
//               <h4>Upload Aadhar Card</h4>
//               <label htmlFor="file-input">
//                   <img src={image1} alt="Uploaded" className={styles.Uploaded} />
                
//                   <img
//                     src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                     alt="Placeholder"
//                     className={styles.imageIconUpload}
//                   />
//                   {/* </div> */}
//                   {/* )} */}
//                 </label>

//                 <input
//                   id="file-input"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                 />
              
//               </div>
           
//               </div>
//             </div>
//           </div>
//           <div className="row">
//           <div className="col-12">
//           </div>
//             <div className="col-md-6">

//               <div class={styles.image_upload}>
//               <div className={styles.aadharSec}>
//               <h4>Upload Aadhar Card</h4>
//               <label htmlFor="file-input">
                 
//                   <img src={image1} alt="Uploaded" className={styles.Uploaded} />
                 
//                   <img
//                     src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                     alt="Placeholder"
//                     className={styles.imageIconUpload}
//                   />
                
//                 </label>

//                 <input
//                   id="file-input"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                 />
              
//               </div>
           
//               </div>
//             </div>
//             <div className="col-md-6">

//               <div class={styles.image_upload}>
//               <div className={styles.aadharSec}>
//               <h4>Upload Aadhar Card</h4>
//               <label htmlFor="file-input">
//                   <img src={image1} alt="Uploaded" className={styles.Uploaded} />
                 
//                   <img
//                     src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                     alt="Placeholder"
//                     className={styles.imageIconUpload}
//                   />
                 
//                 </label>

//                 <input
//                   id="file-input"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                 />
              
//               </div>
           
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default index;



// import React, { useEffect, useState } from "react";
// import styles from "@/styles/auth/Verification.module.css";

// const index = () => {
//   const [images, setImages] = useState({
//     image1: null,
//     image2: null,
//     // Add more image properties if needed
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Check if there are images in local storage and display them
//       const storedImage1 = localStorage.getItem("uploadedImage1");
//       const storedImage2 = localStorage.getItem("uploadedImage2");
//       if (storedImage1) {
//         setImages((prevImages) => ({ ...prevImages, image1: storedImage1 }));
//       }
//       if (storedImage2) {
//         setImages((prevImages) => ({ ...prevImages, image2: storedImage2 }));
//       }
//     }
//   }, []);

//   const handleImageUpload = (e, imageKey) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const imageBase64 = reader.result;
//         setImages((prevImages) => ({ ...prevImages, [imageKey]: imageBase64 }));
//         // Save the image to local storage
//         if (typeof window !== "undefined") {
//           localStorage.setItem(`uploadedImage${imageKey}`, imageBase64);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <div className={styles.veri_wrp}>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h6>Fill the blanks to complete your profile</h6>
//             </div>
//             <div className="col-md-6">
//               <div class={styles.image_upload}>
//                 <div className={styles.aadharSec}>
//                   <h4>Upload Aadhar Card</h4>
//                   <label htmlFor="file-input1">
//                     <img
//                       src={images.image1}
//                       alt="Uploaded"
//                       className={styles.Uploaded}
//                     />
//                     <img
//                       src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                       alt="Placeholder"
//                       className={styles.imageIconUpload}
//                     />
//                   </label>
//                   <input
//                     id="file-input1"
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, "image1")}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div class={styles.image_upload}>
//                 <div className={styles.aadharSec}>
//                   <h4>Upload Aadhar Card</h4>
//                   <label htmlFor="file-input2">
//                     <img
//                       src={images.image2}
//                       alt="Uploaded"
//                       className={styles.Uploaded}
//                     />
//                     <img
//                       src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                       alt="Placeholder"
//                       className={styles.imageIconUpload}
//                     />
//                   </label>
//                   <input
//                     id="file-input2"
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, "image2")}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default index;





// import React, { useEffect, useState } from "react";
// import styles from "@/styles/auth/Verification.module.css";

// const index = () => {
//   const [images, setImages] = useState({
//     image1: null,
//     image2: null,
//     image3: null,
//     image4: null,
//     // Add more image properties if needed
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Check if there are images in local storage and display them
//       const storedImage1 = localStorage.getItem("uploadedImageimage1");
//       const storedImage2 = localStorage.getItem("uploadedImageimage2");
//       const storedImage3 = localStorage.getItem("uploadedImageimage4");
//       const storedImage4 = localStorage.getItem("uploadedImageimage4");
//       if (storedImage1) {
//         setImages((prevImages) => ({ ...prevImages, image1: storedImage1 }));
//       }
//       if (storedImage2) {
//         setImages((prevImages) => ({ ...prevImages, image2: storedImage2 }));
//       }
//       if (storedImage3) {
//         setImages((prevImages) => ({ ...prevImages, image3: storedImage3 }));
//       }
//       if (storedImage4) {
//         setImages((prevImages) => ({ ...prevImages, image4: storedImage4 }));
//       }
//     }
//   }, []);

//   const handleImageUpload = (e, imageKey) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const imageBase64 = reader.result;
//         setImages((prevImages) => ({ ...prevImages, [imageKey]: imageBase64 }));
//         // Save the image to local storage
//         if (typeof window !== "undefined") {
//           localStorage.setItem(`uploadedImage${imageKey}`, imageBase64);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <div className={styles.veri_wrp}>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h6>Fill the blanks to complete your profile</h6>
//             </div>
//             <div className="col-md-6">
//               <div class={styles.image_upload}>
//                 <div className={styles.aadharSec}>
//                   <h4>Upload Aadhar Card Front Side</h4>
//                   <label htmlFor="file-input1">
//                     <img
//                       src={images.image1}
//                       alt="Uploaded"
//                       className={styles.Uploaded}
//                     />
//                     <img
//                       src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                       alt="Placeholder"
//                       className={styles.imageIconUpload}
//                     />
//                   </label>
//                   <input
//                     id="file-input1"
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, "image1")}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div class={styles.image_upload}>
//                 <div className={styles.aadharSec}>
//                   <h4>Upload Aadhar Card Back Side</h4>
//                   <label htmlFor="file-input2">
//                     <img
//                       src={images.image2}
//                       alt="Uploaded"
//                       className={styles.Uploaded}
//                     />
//                     <img
//                       src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                       alt="Placeholder"
//                       className={styles.imageIconUpload}
//                     />
//                   </label>
//                   <input
//                     id="file-input2"
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, "image2")}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div class={styles.image_upload}>
//                 <div className={styles.aadharSec}>
//                   <h4>Upload Pan Card Back Side</h4>
//                   <label htmlFor="file-input2">
//                     <img
//                       src={images.image3}
//                       alt="Uploaded"
//                       className={styles.Uploaded}
//                     />
//                     <img
//                       src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                       alt="Placeholder"
//                       className={styles.imageIconUpload}
//                     />
//                   </label>
//                   <input
//                     id="file-input3"
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, "image3")}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div class={styles.image_upload}>
//                 <div className={styles.aadharSec}>
//                   <h4>Upload Pan Card Back Side</h4>
//                   <label htmlFor="file-input2">
//                     <img
//                       src={images.image4}
//                       alt="Uploaded"
//                       className={styles.Uploaded}
//                     />
//                     <img
//                       src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                       alt="Placeholder"
//                       className={styles.imageIconUpload}
//                     />
//                   </label>
//                   <input
//                     id="file-input4"
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, "image4")}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default index;





// import React, { useEffect, useState } from "react";
// import styles from "@/styles/auth/Verification.module.css";

// const Index = () => {
//   const [images, setImages] = useState({});
  
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedImages = JSON.parse(localStorage.getItem("uploadedImages")) || {};
//       setImages(storedImages);
//     }
//   }, []);

//   const handleImageUpload = (e, key) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const imageBase64 = reader.result;
//         setImages({
//           ...images,
//           [key]: imageBase64
//         });
//         if (typeof window !== "undefined") {
//           localStorage.setItem("uploadedImages", JSON.stringify(images));
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <div className={styles.veri_wrp}>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h6>Fill the blanks to complete your profile</h6>

//               <div className={styles.image_upload}>
//                 {[1, 2].map((section) => (
//                   <div key={section}>
//                     <h4>Upload Aadhar Card  {section}</h4>
//                     <div className={styles.aadharSec}>
//                       <label htmlFor={`file-input-${section}`}>
//                         {images[`image${section}`] ? (
//                           <img
//                             src={images[`image${section}`]}
//                             alt="Uploaded"
//                             className={styles.Uploaded}
//                           />
//                         ) : (
//                           <img
//                             src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//                             alt="Placeholder"
//                             className={styles.imageIconUpload}
//                           />
//                         )}
//                       </label>

//                       <input
//                         id={`file-input-${section}`}
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handleImageUpload(e, `image${section}`)}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;

// import React, { useState, useEffect } from "react";
// import styles from "@/styles/auth/Verification.module.css";

// const ImageUpload = ({ label, image, setImage }) => {
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const imageBase64 = reader.result;
//         setImage(imageBase64);
//         localStorage.setItem("uploadedImage", imageBase64);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className={styles.image_upload}>
//       <div className={styles.aadharSec}>
//         <h4>{label}</h4>
//         <label htmlFor="file-input">
//           <img src={image} alt="Uploaded" className={styles.Uploaded} />
//           <img
//             src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//             alt="Placeholder"
//             className={styles.imageIconUpload}
//           />
//         </label>
//         <input
//           id="file-input"
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//         />
//       </div>
//     </div>
//   );
// };

// const Index = () => {
//   const [image1, setImage1] = useState(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedImage = localStorage.getItem("uploadedImage");
//       if (storedImage) {
//         setImage1(storedImage);
//       }
//     }
//   }, []);

//   return (
//     <div className={styles.veri_wrp}>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <h6>Fill the blanks to complete your profile</h6>
//           </div>
//           <div className="col-md-6">
//             <ImageUpload label="Upload Aadhar Card" image={image1} setImage={setImage1} />
//           </div>
//           <div className="col-md-6">
//             <ImageUpload label="Upload Aadhar Card" image={image1} setImage={setImage1} />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <ImageUpload label="Upload Aadhar Card" image={image1} setImage={setImage1} />
//           </div>
//           <div className="col-md-6">
//             <ImageUpload label="Upload Aadhar Card" image={image1} setImage={setImage1} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;



// import React, { useState, useEffect } from "react";
// import styles from "@/styles/auth/Verification.module.css";

// const Verification = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedImage = localStorage.getItem("uploadedImage");
//       if (storedImage) {
//         setUploadedImage(storedImage);
//       }
//     }
//   }, []);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const imageBase64 = reader.result;
//         setUploadedImage(imageBase64);
//         localStorage.setItem("uploadedImage", imageBase64);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const ImageUpload = ({ label }) => (
//     <div className={styles.image_upload}>
//       <div className={styles.aadharSec}>
//         <h4>{label}</h4>
//         <label htmlFor="file-input">
//           <img src={uploadedImage} alt="Uploaded" className={styles.Uploaded} />
//           <img
//             src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
//             alt="Placeholder"
//             className={styles.imageIconUpload}
//           />
//         </label>
//         <input
//           id="file-input"
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div className={styles.veri_wrp}>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <h6>Fill the blanks to complete your profile</h6>
//           </div>
//           <div className="col-md-6">
//             <ImageUpload label="Upload Aadhar Card" />
//           </div>
//           <div className="col-md-6">
//             <ImageUpload label="Upload Aadhar Card" />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <ImageUpload label="Upload Pan Card" />
//           </div>
//           <div className="col-md-6">
//             <ImageUpload label="Upload Card Card" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Verification;
