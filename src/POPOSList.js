import POPOSSpace from "./POPOSSpace";

export default function POPOSList (){
    return(
        <div className="POPOSList">
            <POPOSSpace
                name="50 California Street" // name
                address="50 California St." // address
                image="50-california-st.jpg"// image
            />
            <POPOSSpace 
                name="100 Pine Street"
                address="100 Pine St."
                image="100-pine.jpg"    
            />
            <POPOSSpace
                name="101-california Street"
                address="101-california St."
                image="101-california.jpg"
            />
            <POPOSSpace 
                name="343 Sansome Roof Garden"
                address="343 Sansome St."
                image="343-sansome-roof-garden.jpg"
            />
            <POPOSSpace
                name="525 Market Street Plaza"
                address="525 Market St."
                image="525-market-street-plaza.jpg"
            />
            <POPOSSpace
                name="Citigroup Center"
                address="1 Sansome St."
                image="citigroup-center.jpg"
            />
        </div>
    )
}