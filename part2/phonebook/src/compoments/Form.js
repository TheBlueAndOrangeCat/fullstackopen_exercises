const Form = ({submitHandler, nameState, nameHandler, numberState, numberHandler}) =>{
	return(
		<form onSubmit={submitHandler}>
			<div>
				name: <input value={nameState} onChange={nameHandler}/>
			</div>
			<div>
				number: <input value={numberState} onChange={numberHandler} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default Form
