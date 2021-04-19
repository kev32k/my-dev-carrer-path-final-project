import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap';
import mainLogo from "../../img/logo-nav.png";
import "../../styles/index.scss";

export const Breadcrumb = () => {
	return (
		<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
	);
};
