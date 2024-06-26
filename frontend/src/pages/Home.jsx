import React from "react";

import heroImg01 from "../assets/images/lawyer22.jpg";
import heroImg02 from "../assets/images/lawyer11.jpg";
import heroImg03 from "../assets/images/lawyer33.jpg";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ServiceList from "../component/Services/ServiceList";
import LawyerList from "../component/Lawyer/lawyerList";
// import About from "../component/About/About";

const Home = () => {
  return (
    <>
      {/*=========== hero section ============*/}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/*=========hero content ===========*/}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text[60px] md:leading-[70px]">
                    Injustice anywhere is a threat to justice everywhere
                  </h1>
                  <p className="text_para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam exercitationem voluptas accusamus recusandae, tempora
                    magni nesciunt sed amet id iure cumque veritatis deleniti
                    alias fugit! Nisi, doloremque quia! In, magnam?
                  </p>
                  <Link to=''>
                  <button className="btn" >Request an Appointment</button>
                  </Link>
                </div>
                {/* ====== hero counter */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Office Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Client Satisfaction</p>
                  </div>
                </div>
              </div>
              {/*=========hero section ===========*/}

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={heroImg01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                  <img src={heroImg03} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=========hero section end ===========*/},
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the best lawyer services
              </h2>
              <p className="text_para text-center">
                Word-class service for everyone. Our law System offers
                unmatched, expert Law Service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex item-center justify-center">
                  <img src={icon1} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Lawyer
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Providing unparalleled legal assistance accessible to all.
                    We deliver comprehensive legal services tailored to meet
                    every individual's needs.
                  </p>

                  <Link
                    to="/lawyers"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex item-center justify-center">
                  <img src={icon2} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Locating our office is effortless, with our strategically
                    situated branches accessible in prime locations.
                  </p>

                  <Link
                    to="/lawyers"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex item-center justify-center">
                  <img src={icon3} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Booking a lawyer appointment is seamless with our
                    user-friendly system, designed for your convenience
                  </p>

                  <Link
                    to="/lawyers"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <About/> for later implementation*/}
        {/*======= service section ======== */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Lawyer Services</h2>
              <p className="text_para text-center">
                Word-class service for everyone. Our law System offers
                unmatched, expert Law Service.
              </p>
            </div>
            <ServiceList />
          </div>
        </section>
        {/*======= service end ======== */}
        {/*======= feature section ======== */}
        <section>
          <div className="conatiner">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              {/*======= feature content ======== */}
              <div className="xl:w-[670px] ">
                <h2 className="heading">
                  Get Laywer Appointment <br /> anytime.
                </h2>
                <br />
                <ul className="pl-4 ">
                  <li className="text-para">
                    1. Schedule the appointment directly.
                  </li>
                  <br />
                  <li className="text-para">
                    2. Search for your lawyer here, and contact their office.
                  </li>
                  <br />
                  <li className="text-para">
                    3. View our physicians who are accepting new client, use
                    the online scheduling tool to select an appointment time.
                  </li>
                </ul>
                <Link to="/">
                  <button className="btn">Learn More</button>
                </Link>
              </div>
              {/* ======= feature img ======== */}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={heroImg02} className="w-3/3" alt="" />

                {/* <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                  <div className="flex item-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/*======= feature end ======== */}
        {/*======= our great lavyers ======== */}
        <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Lawyer</h2>
              <p className="text_para text-center">
                Word-class service for everyone. Our law System offers
                unmatched, expert Law Service.
              </p>
            </div>
            <LawyerList/>
           </div>
        </section>
         {/*======= our great lavyers ======== */}
      </>
    </>
  );
};

export default Home;
