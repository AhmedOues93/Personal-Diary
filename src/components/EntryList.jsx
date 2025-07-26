import EntryCard from "./EntryCard"

const EntryList = ({entries}) => {

  return (

    <div className="grid grid-cols-1 md:grid-col-2 gap-5">
        {entries.map((entry, index)=> [
            <EntryCard key={index} entry={entry} />

        ])}
      
    </div>
  )
}

export default EntryList
