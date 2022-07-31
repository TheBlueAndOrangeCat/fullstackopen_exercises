const Name = ({entry}) => <li>{entry.name}: {entry.number}</li>

const Names = ({ entrys, search }) => {
  return(
		<ul>
			{
				entrys.filter(
					(entry) => entry.name.toLowerCase().includes(search.toLowerCase())
				).map(
					(entry) => <Name entry={entry} key={entry.name} />)
			}
		</ul>
  )
}


export default Names
