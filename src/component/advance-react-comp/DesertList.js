function DesertList(props) {
    const filteredAndSortedDesserts = props.data.filter(item => item.calories <= 500)
    .sort((a,b) => a.calories - b.calories);
    // console.log(filteredAndSortedDesserts);

    return (<div>
        <h1>Filtered and Sorted Desserts</h1>
        <ul>
          {filteredAndSortedDesserts.map((dessert, index) => (
            <li key={index} id="">
              <strong>DeserName:</strong> {dessert.name}, <strong>DescerCal:</strong> {dessert.calories}
            </li>
          ))}
        </ul>
      </div>)
}

export default DesertList;