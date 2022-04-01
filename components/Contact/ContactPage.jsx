import React from "react";
import { IoIosSend } from "react-icons/io";
const ContactPage = () => {
  return (
    <div className="row flex flex-col">
      <div className="flex justify-between space-x-10">
        <div class="form-group col-12 col-md-6 has-error has-danger w-[50%]">
          <input
            type="text"
            className="w-full rounded-[14px] h-[52px] px-[22px] py-[14px] bg-[#1E1E1F] focus:border-[#B84c4c] border border-[#383838]"
            id="nameContact"
            name="nameContact"
            placeholder="Full name"
            required="required"
            autocomplete="on"
          />
        </div>
        <div className="form-group col-12 col-md-6 w-[50%]">
          <input
            type="email"
            className="w-full rounded-[14px] h-[52px] px-[22px] py-[14px] bg-[#1E1E1F] focus:border-[#B84c4c] border border-[#383838]"
            id="emailContact"
            name="emailContact"
            placeholder="Email address"
            required="required"
            autocomplete="on"
          />
        </div>
      </div>
      <div className="form-group col-12 col-md-12 has-error has-danger">
        <textarea
          className="textarea form-control overflow-hidden break-words h-[118px] focus:border-[#B84c4c]"
          id="messageContact"
          name="messageContact"
          placeholder="Your Message"
          rows="4"
          required="required"
          tabindex="1"
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="px-3 min-h-auto min-w-auto max-w-full w-[50%] h-[57px]"></div>
        <div className="flex justify-end items-center px-3 min-h-auto min-w-auto max-w-full w-[50%] h-[57px]">
          <div className="btn flex justify-center items-center space-x-2 px-3">
            <div>
              <IoIosSend />
            </div>
            <div>Send Message</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
