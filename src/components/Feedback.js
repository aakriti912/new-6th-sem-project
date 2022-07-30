function Feedback() {
  return (
    <div class="flex-initial w-70 relative left-[700px] bottom-[100px] ">
      <div className="feedback">
        <h2>Feedbacks</h2>
        <div class="group flex items-center mt-3">
          <img
            class="shrink-0 h-12 w-12 rounded-full"
            src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg"
            alt=""
          />
          <div class="ltr:ml-3 rtl:mr-3 border-solid border-1 border-gray">
            <p class="text-sm font-medium text-slate-500 group-hover:text-slate-700">
              this person is good
            </p>
          </div>
        </div>
        <div class="group flex items-center mt-10">
          <img
            class="shrink-0 h-12 w-12 rounded-full"
            src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg"
            alt=""
          />
          <div class="ltr:ml-3 rtl:mr-3 border-solid border-1 border-gray">
            <p class="text-sm font-medium text-slate-500 group-hover:text-slate-700">
              this person is good
            </p>
          </div>
        </div>
        <div class="group flex items-center mt-10">
          <img
            class="shrink-0 h-12 w-12 rounded-full"
            src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg"
            alt=""
          />
          <div class="ltr:ml-3 rtl:mr-3 border-solid border-1 border-gray">
            <p class="text-sm font-medium text-slate-500 group-hover:text-slate-700">
              this person is good
            </p>
          </div>
        </div>
        <div className="flex mt-6">
          <textarea
            placeholder="feedback"
            className="border-2 border-gray m-2"
          ></textarea>
          <div className="mt-2">
            <button
              class="text-white hover:bg-gray-700 hover:text-[#6A91A0] 
          bg-[#6A91A0] px-3 py-2 rounded-md text-sm font-medium flex justify-center m-3 relative bottom-[10px] border-2 border-black"
            >
              post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feedback;
