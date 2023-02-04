import logo from './logo.svg'

function POPOSSpace(props) {
    // The attributes above set the values of the properties name, image and address props
    const { name, image, address } = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="50 Califonia St."
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace