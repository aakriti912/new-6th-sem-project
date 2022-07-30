import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import Feedback from "./Feedback";
function Profile() {
  const [count, setCount] = useState(0);
  function handleClick(e) {
    const star = e.target;
    star.style.color = "yellow";
  }
  return (
    <div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.2Hr1HF_U4anOXJ7Ua-youAHaEK?pid=ImgDet&rs=1"
          className="w-full h-[350px] relative bottom-[50px]"
        />
      </div>
      <div className="">
        <div className="shadow-lg">
          <div className=" flex place-content-start ">
            <img
              className="relative left-[200px] bottom-[70px] rounded-full h-[150px] w-[150px] border-solid border-2  border-white"
              src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg"
            ></img>
            <div className="  relative left-[300px] mt-6">
              <h3 className="  font-bold text-3xl">Aakrit thapa</h3>
              <p className="text-gray-500">student at NCIT</p>
              <div className="flex">
                <ImLocation2 className="text-gray-500 mt-4" />
                <p className="text-gray-500 mt-3">Basundhara , kathmandu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex m-9 items-center">
        <div
          class="flex-none w-92 h-14
         text-gray-500"
        >
          <div className="flex px-5">
            <AiFillPhone />
            <p>+97798536366367</p>
          </div>
          <div className="flex justify-center">
            <MdEmail className="text-gray-500 mt-4 ml-5" />
            <p className="text-gray-500 mt-3">thapaaakriti570@gmail.com</p>
          </div>
          <div className="m-3 pl-2">
            <button
              class="inline-flex 
            justify-center
            items-center py-2 px-10 text-sm font-medium text-center text-white bg-[#6A91A0] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              chat
            </button>
          </div>
          <div className="flex pl-7">
            <h2 className="text-3xl">4.5</h2>
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
          </div>
          <p className="pl-5"> {190 + count} reviews</p>
          <button onClick={() => setCount(count + 1)}>
            <div className="flex m-2 pl-3" onClick={handleClick}>
              <AiOutlineStar />
              <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </button>
        </div>
      </div>
      <div>
        <Feedback />
      </div>
    </div>
  );
}
export default Profile;
