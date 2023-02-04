// import logo from './logo.svg'
import './POPOSSpace.css'

//className for the top level element in the component  should match it's name. 
// This will help us remember what styles apply to what, 
// and keep us from using the same names in different files.

function POPOSSpace(props) {
    // The attributes above set the values of the properties name, image and address props
    const { name, image, address, hours } = props
  return (
    <div className='POPOSSpace'>
      <img src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Spaces"
      />
      <h1>{name}</h1>
      <div>{address}</div>
      <div className='hours'>{hours}</div>
    </div>
  )
}

export default POPOSSpace