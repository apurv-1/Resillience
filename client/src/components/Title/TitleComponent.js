import React from "react";
import Helmet from "react-helmet";

const TitleComponent = ({ title, description }) => {
  var defaultTitle = "RESILLIENCE: Personalized Learning with IITians";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export { TitleComponent };
