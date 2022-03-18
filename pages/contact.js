import React from "react";
import ContactPage from "../components/Contact/ContactPage";
import PageTitle from "../components/PageTitle";

const contact = () => {
  return (
    <div>
      <div className="title pb-1">
        <PageTitle title={"contact"} />
      </div>
      <ContactPage />
    </div>
  );
};

export default contact;
