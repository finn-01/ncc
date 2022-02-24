import React from "react";

import "./Content.css";
import { images } from "../../constant";

const Content = () => {
	return (
		<div className="container__content">
			<div className="container__content-img">
				<img src={images.logo} />
			</div>

			<div className="container__content-title">
				<div className="container__content-title_wrap">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
						excepturi commodi reprehenderit corrupti, iure delectus aut magnam
						quidem nisi? Culpa perspiciatis hic omnis. Deleniti cupiditate,
						suscipit iusto molestiae vitae facilis?
					</p>
				</div>
			</div>

			<div className="container__content-wrapper">
				<div className="container__content-wrapper_div">
					<p>Lorem ipsum</p>
					<div className="container__content-wrapper_div-title">
						<img src={images.css} alt="" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ab
							ullam recusandae a amet quaerat doloribus id aut autem itaque
							architecto placeat nesciunt reprehenderit maxime rerum. Temporibus
							dolores quas ipsa.
						</p>
					</div>
				</div>

				<div className="container__content-wrapper_div">
					<p>Lorem ipsum</p>
					<div className="container__content-wrapper_div-title">
						<img src={images.css} alt="" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ab
							ullam recusandae a amet quaerat doloribus id aut autem itaque
							architecto placeat nesciunt reprehenderit maxime rerum. Temporibus
							dolores quas ipsa.
						</p>
					</div>
				</div>
				<div className="container__content-wrapper_div">
					<p>Lorem ipsum</p>
					<div className="container__content-wrapper_div-title">
						<img src={images.url} alt="" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ab
							ullam recusandae a amet quaerat doloribus id aut autem itaque
							architecto placeat nesciunt reprehenderit maxime rerum. Temporibus
							dolores quas ipsa.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
