

export async function fetchLocation(){
    const response = await fetch("http://localhost:3000/places");
    const places = await response.json();

    if (!response.ok){ // if error in 400 or 500
        throw new Error("invalid response")
    }

    return places.places;
}