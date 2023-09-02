 const [place,setPlace] = useState('Bangladesh');
    // Function to get the location using the Geolocation API
    function getLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => resolve(position.coords),
                    error => reject(error)
                );
            } else {
                reject(new Error('Geolocation is not supported'));
            }
        });
    }

    // Function to get the place name from coordinates using a reverse geocoding service
    async function getPlaceName(latitude, longitude) {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        const city = data.address.city || '';
        const country = data.address.country || '';
        return `${city}, ${country}`;
    }

    // Usage example
    getLocation()
        .then(coords => getPlaceName(coords.latitude, coords.longitude))
        .then(placeName => {
            setPlace(placeName); // Output: "Dhaka, Bangladesh" (or the user's current location)
        })
        .catch(error => {
            console.log(error.message); // Output any error that occurred
        });
