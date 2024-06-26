import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="bg-white p-6 md:mx-auto">
                <svg
                    viewBox="0 0 24 24"
                    className="text-green-600 w-16 h-16 mx-auto my-6"
                >
                    <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,2ZM18.927,8.2l-6.845,9.289a1.011,1.011,0,0,1-1.656,0L5.764,13.769a1,1,0,1,1,1.25-1.562L12,16.638l5.986-8.012a1,1,0,1,1,1.941.574Z"
                    ></path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
                        Appointment Booked!
                    </h3>
                    <p className="text-gray-600 my-2">
                        Thank you for completing your secure online Appointment.
                    </p>
                    <p>Have a great day!</p>

                    <div className="py-10 text-center">
                        <Link
                            to="/home"
                            className="px-12 bg-buttonBgColor font-semibold py-3 rounded-md inline-block bg-blue-500 text-white"
                        >
                            <button>

                            Go Back To Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess;
