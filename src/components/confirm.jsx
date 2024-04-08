const Confirm = ({ selectedDate, selectedTime }) => {
  const formattedDate = selectedDate
    ? selectedDate.toDateString()
    : "  9:00am - 9:15am, Monday, July 13, 2020";
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-auto min-w-[360px] lg:max-w-4xl">
        <div className=" w-full p-4 md:p-8  focus:outline-none">
          <div class="mx-auto w-20 h-20 relative  border-2 border-white rounded-full overflow-hidden">
            <img
              class="object-cover object-center h-20"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src="icons/check.svg" alt="check" className="w-5 h-5 mr-2" />
            <p>You are scheduled </p>
          </div>
          <p className="flex items-center justify-center">
            A calendar invitation has been sent to your email address
          </p>
          <div class="flex justify-center">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h3 className="flex items-center justify-center mb-3">
                Fibery Demo
              </h3>
              <div className="flex items-center justify-center mb-3">
                <img
                  src="icons/user.svg"
                  alt="user-icon"
                  className="w-5 h-5 mr-2"
                />
                <h4>polina Zenevich</h4>
              </div>
              <div className="flex items-center justify-center mb-3">
                <img
                  src="icons/calendar (1).svg"
                  alt="calendar-icon"
                  className="w-5 h-5 mr-2"
                />
                <h4>
                  {formattedDate}, {selectedTime}
                </h4>
              </div>
              <div className="flex items-center justify-center mb-3 ">
                <img
                  src="icons/web.svg"
                  alt="web-icon"
                  className="w-5 h-5 mr-2"
                />
                <h4>web Conferencing details to follow</h4>
              </div>
            </div>
          </div>
          <div className="text-center text-sm sm:text-base my-4">
            <p className="font-medium">
              Schedule your own meeting with calendly for free
            </p>
            <p>Eliminate the bach-and-forth emails for finding time</p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-x-4 md:space-y-0 my-4">
            <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div class="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5 "
                  alt="google logo"
                />
                <span class="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  sign up with Google
                </span>
              </div>
            </button>
            <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div class="relative flex items-center space-x-4 justify-center">
                <img
                  src="icons/microsoft.png"
                  className="w-5 h-5"
                  alt="microsoft logo"
                />
                <span class="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  sign up with Microsoft
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Confirm;
