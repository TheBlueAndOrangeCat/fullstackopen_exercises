
const Image = ({uri, alttext}) => {
	return(
		<img alt={`Flag of ${alttext}`} src={uri} />
	)
}

export default Image
