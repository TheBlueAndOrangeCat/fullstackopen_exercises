const Name = ({entry, handleRemove}) => <li>{entry.name}: {entry.number} <button onClick={() => handleRemove(entry.id)}>Remove</button> </li>

const Names = ({ entrys, search, handleRemove }) => {
  return(
		<ul>
			{
				entrys.filter(
					(entry) => entry.name.toLowerCase().includes(search.toLowerCase())
				).map(
					(entry, index) => <Name entry={entry} key={index} handleRemove={handleRemove} />)
			}
		</ul>
  )
}


export default Names
