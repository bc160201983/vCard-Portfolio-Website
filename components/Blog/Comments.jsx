import React from "react";
import { FiSend } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";

const Comments = () => {
  return (
    <div>
      <h2 className="mb-[20px] text-[24px] font-semibold text-white">
        Comments (3)
      </h2>
      <div className="comment-box">
        <div className="comment-box__inner box box--s2">
          <figure className="box box-avatar box-avatar--not-border">
            <Image
              height="80px"
              width="80px"
              src="https://art-template.ru/vcard4/assets/images/avatar-1.png"
              alt="Daniel Lewis"
            />
          </figure>
          <div className="comment-box__body">
            <h3 className="comment-box__details">
              <span>Daniel Lewis</span>
              <span className="comment-box__details-date">5 min ago</span>
            </h3>
            <p>
              Very interesting and informative article on design. I learned a
              lot.
            </p>

            <ul className="comment-box__footer">
              <li>
                <a href="#" className="link-gradient">
                  Reply
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="comment-box">
          <div className="comment-box__inner box box--s2">
            <figure className="box box-avatar box-avatar--not-border">
              <Image
                height="80px"
                width="80px"
                src="https://art-template.ru/vcard4/assets/images/avatar-2.png"
                alt="Daniel Lewis"
              />
            </figure>
            <div className="comment-box__body">
              <h3 className="comment-box__details">
                <span>Jessica Miller</span>
                <span className="comment-box__details-date">1 min ago</span>
              </h3>
              <p>
                I agree, a very interesting article. Thank you very much!
                {/* <img
                  className="emoji"
                  src="../assets/icons/emoji/emoji-nerd.svg"
                  alt="nerd"
                /> */}
              </p>

              <ul className="comment-box__footer">
                <li>
                  <a href="#" className="link-gradient">
                    Reply
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="comment-box">
        <div className="comment-box__inner box box--s2">
          <figure className="box box-avatar box-avatar--not-border">
            <Image
              height="80px"
              width="80px"
              src="https://art-template.ru/vcard4/assets/images/avatar-1.png"
              alt="Daniel Lewis"
            />
          </figure>
          <div className="comment-box__body">
            <h3 className="comment-box__details">
              <span>Daniel Lewis</span>
              <span className="comment-box__details-date">5 min ago</span>
            </h3>
            <p>
              Very interesting and informative article on design. I learned a
              lot.
            </p>

            <ul className="comment-box__footer">
              <li>
                <a href="#" className="link-gradient">
                  Reply
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* social auth */}
      {/* <ul className="social-auth">
        <li className="social-auth__item">Login with:</li>
        <li className="social-auth__item">
          <a className="social-auth__link" href="#">
            <BsFacebook className="font-icon bg-[#324773] h-[18px] w-[18px]" />
          </a>
        </li>
        <li className="social-auth__item">
          <a className="social-auth__link" href="#">
            <i className="font-icon icon-twitter"></i>
          </a>
        </li>
        <li className="social-auth__item">
          <a className="social-auth__link" href="#">
            <i className="font-icon icon-dribbble"></i>
          </a>
        </li>
        <li className="social-auth__item">
          <a className="social-auth__link" href="#">
            <i className="font-icon icon-behance"></i>
          </a>
        </li>
      </ul> */}
      {/* comment forum */}
      <form className="comment-form">
        <textarea
          id="commentForm"
          className="textarea form-control"
          required="required"
          placeholder="Write a Comment..."
          rows="1"
          tabIndex="1"
          style={{
            overflow: "hidden",
            overflowWrap: "break-word",
            height: "73px",
            outline: "none",
          }}
        ></textarea>
        <button type="submit" className="btn btn-submit">
          <div className="box icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
            <FiSend className="submit-icon h-[18px] w-[18px] text-[#ffdb6e]" />
          </div>
        </button>
        <div className="dropdown dropup">
          <button
            type="button"
            className="btn btn-emoji"
            id="dropdownEmoji"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
          >
            <i className="font-icon icon-smile"></i>
          </button>
          <div
            className="dropdown-menu dropdown-menu-center"
            aria-labelledby="dropdownEmoji"
          >
            <div className="emoji-wrap"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
