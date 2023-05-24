import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { moviesData } from "../Components/MovieData";
 const Description = () => {
	const [descrip, setDescrip] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const movieD = moviesData.find((el) => el.id === id);
		setDescrip(movieD);
	}, [id]);
	return (
		<div>
			<h1>{descrip.description}</h1>
		</div>
	);
};

export default Description;