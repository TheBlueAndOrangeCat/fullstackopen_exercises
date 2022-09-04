const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }
	if(type === 'error'){
		return (
			<div className='error'>
				{message}
			</div>
		)
	}
	if (type === 'succsess'){
		return (
			<div className='succsess'>
				{message}
			</div>
		)
		
	}
}

export default Notification
