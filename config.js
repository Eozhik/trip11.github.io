var config = {
    style: 'mapbox://styles/eozhik/clnqk22q600bg01p33aaocati',
    accessToken: 'pk.eyJ1IjoiZW96aGlrIiwiYSI6ImNsbnFrZWFldDBnb2IyaW1oM2hyY3IzNmgifQ.js6g_wUtX4KZLdpAt1R_LQ',
    showMarkers: true,
    markerColor: '#b50606',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'One Hour Adventure: Ferry to Battery Park Expedition',
    subtitle: 'Playground for children, Museums, Ferry to the Statue of Liberty, Beautiful views, Restaurant-Museum, Architectural Landmarks, Battery Park.',
    byline: 'Time Visits to museums, restaurants and ferry rides are not included in the 1 hour tour.',
    footer: 'Discovery New York <br> by Eozhik.',
    chapters: [
        {
            id: '1slug-style-id1',
            alignment: 'fully',
            hidden: false,
            title: 'Battery PlayScape, New York',
            image: '../src/images/playground.jpg',
            description: 'Battery Playscape NY is an innovative and interactive outdoor playground located in the heart of Battery Park, New York City. Designed with sustainability in mind, it offers a dynamic play environment for children that incorporates eco-friendly elements, including recycled materials and native plantings, providing an enriching experience for both kids and families. With its scenic views of the Statue of Liberty and the Hudson River, Battery Playscape NY is a vibrant urban oasis that encourages creative play and environmental awareness.',
            location: {
                center: [-74.01457, 40.70194],
                zoom: 17.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: '1slug-style-id2',
            alignment: 'left',
            hidden: false,
            title: 'Battery PlayScape, New York',
            image: '../src/images/play2.jpg',
            description: 'Battery PlayScape: Where Adventure Meets Imagination in NYC.',
            location: {
                center: [-74.01457, 40.70194],
                zoom: 12.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: '1slug-style-id3',
            alignment: 'right',
            hidden: false,
            title: 'Battery PlayScape, New York',
            image: '../src/images/play3.jpg',
            description: 'Unleash Your Inner Explorer at Battery PlayScape in New York.',
            location: {
                center: [-74.01457, 40.70194],
                zoom: 17.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1slug-style-id4',
            alignment: 'fully',
            hidden: false,
            title: 'Battery PlayScape, New York',
            image: '../src/images/play4.jpg',
            description: 'Family Fun Redefined: Battery PlayScape in the Heart of NYC.',
            location: {
                center: [-74.01457, 40.70194],
                zoom: 6.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1slug-style-id5',
            alignment: 'left',
            hidden: false,
            title: 'Battery PlayScape, New York',
            image: '../src/images/play5.jpg',
            description: 'Discover the Magic of Battery PlayScape: A Playground Like No Other.',
            location: {
                center: [-74.01457, 40.70194],
                zoom: 17.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1second-identifier2',
            alignment: 'right',
            hidden: false,
            title: 'Ferry to the Statue of Liberty',
            image: '../src/images/see1.jpg',
            description: 'Sail to Liberty: Exploring the Statue of Liberty via the NY Ferry.',
            location: {
                center: [-74.01457, 40.70194],
                zoom: 13.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1second-identifier2',
            alignment: 'left',
            hidden: false,
            title: 'Battery Park attractions, New York',
            image: '../src/images/see.jpg',
            description: 'East Coast Memorial',
            location: {
                center: [-74.01457, 40.70194],
                zoom: 12.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        

        {
            id: '1third-identifier2',
            alignment: 'left',
            hidden: false,
            title: 'Battary Park, New York',
            image: '../src/images/bat2.jpg',
            description: 'Beautiful views of the parkю',
            location: {
                center: [-74.017288, 40.703636],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '1third-identifier3',
            alignment: 'fully',
            hidden: false,
            title: 'The New York Korean War Veterans Memorial',
            image: '../src/images/bat 3.jpg',
            description: 'A tribute to the New Yorkers who served in the Korean War.',
            location: {
                center: [-74.017288, 40.703636],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '1third-identifier4',
            alignment: 'left',
            hidden: false,
            title: 'Battary Park, New York',
            image: '../src/images/bat4.jpg',
            description: 'Summer Cafe',
            location: {
                center: [-74.017288, 40.703636],
                zoom: 14.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '1third-identifier5',
            alignment: 'right',
            hidden: false,
            title: 'Giovanni da Verrazzano Monument',
            image: '../src/images/bat5.jpg',
            description: 'A statue of the Italian explorer who was the first European to sail into New York Harbor in 1524.',
            location: {
                center: [-74.017288, 40.703636],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '1third-identifier6',
            alignment: 'fully',
            hidden: false,
            title: 'East Coast Memorial',
            image: '../src/images/bat6.jpg',
            description: 'This striking monument honors American servicemen who lost their lives in the Atlantic Ocean during World War.',
            location: {
                center: [-74.017288, 40.703636],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '1third-identifier7',
            alignment: 'left',
            hidden: false,
            title: 'The Immigrants',
            image: '../src/images/bat7.jpg',
            description: 'A sculpture commemorating the Irish and Italian immigrants who came to America in the 19th century.',
            location: {
                center: [-74.017288, 40.703636],
                zoom: 15.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '2second-identifier1',
            alignment: 'right',
            hidden: false,
            title: 'Castle Clinton National Monument ',
            image: '../src/images/cas1.jpg',
            description: 'Castle Clinton: Gateway to New York of immigrant Experience',
            location: {
                center: [-74.016678, 40.703564],
                zoom: 17.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '2second-identifier2',
            alignment: 'left',
            hidden: false,
            title: 'Castle Clinton National Monument ',
            image: '../src/images/cas2.jpg',
            description: 'Castle Clinton in New York City is a historic fort turned cultural center, offering visitors a glimpse into the city of past and scenic harbor views.',
            location: {
                center: [-74.016678, 40.703564],
                zoom: 17.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '1fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Museum of Jewish Heritage',
            image: '../src/images/jew.jpg',
            description: ' 36 Battery Place, New York, NY 10280. <br>his museum is dedicated to educating people about the history and heritage of Jewish life before, during, and after the Holocaust.',
            location: {
                center: [-74.018778, 40.706253],
                zoom: 17,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3second-identifier1',
            alignment: 'right',
            hidden: false,
            title: 'National Museum of the American Indian in NY',
            image: '../src/images/ind1.jpg',
            description: 'One Bowling Green, New York, NY 10004',
            location: {
                center: [-74.01375, 40.70403],
                zoom: 17.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3second-identifier2',
            alignment: 'left',
            hidden: false,
            title: 'National Museum of the American Indian',
            image: '../src/images/ind2.jpg',
            description: 'This museum is dedicated to showcasing the art, culture, and history of Native American peoples through a diverse collection of artifacts and exhibits.',
            location: {
                center: [-74.01375, 40.70403],
                zoom: 17.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3second-identifier3',
            alignment: 'right',
            hidden: false,
            title: 'National Museum of the American Indian',
            image: '../src/images/ind3.jpg',
            description: 'It features a diverse collection of artifacts, exhibitions, and educational programs that highlight the rich heritage and contemporary contributions of Indigenous peoples in the Americas.',
            location: {
                center: [-74.01375, 40.70403],
                zoom: 17.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '2slug-style-id1',
            alignment: 'left',
            hidden: false,
            title: 'The Shrine of St Elizabeth Ann Seton',
            image: '../src/images/church1.jpg',
            description: '7 State Street, New York, NY 10004.',
            location: {
                center: [-74.013713, 40.70238],
                zoom: 15.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2slug-style-id2',
            alignment: 'right',
            hidden: false,
            title: 'The Shrine of St Elizabeth Ann Seton',
            image: '../src/images/church2.jpg',
            description: 'This historic shrine is dedicated to St. Elizabeth Ann Seton, the first native-born American saint, and it was once her home.',
            location: {
                center: [-74.013713, 40.70238],
                zoom: 10.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: '2slug-style-id3',
            alignment: 'left',
            hidden: false,
            title: 'The Shrine of St Elizabeth Ann Seton',
            image: '../src/images/church3.jpg',
            description: '7 State Street, New York, NY 10004.',
            location: {
                center: [-74.013713, 40.70238],
                zoom: 15.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2fourth-chapter1',
            alignment: 'right',
            hidden: false,
            title: 'Battary Park, New York',
            image: '../src/images/v1.jpg',
            description: 'Discover the Beauty and History of Battery Park in New York City.',
            location: {
                center: [-74.01457, 40.70194],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2fourth-chapter2',
            alignment: 'left',
            hidden: false,
            title: 'Battery Park, NY',
            image: '../src/images/v2.jpg',
            description: 'Battery Park: Where History Meets Modern Manhattan.',
            location: {
                center: [-74.016678, 40.703564],
                zoom: 12,
                pitch: 35,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2fourth-chapter3',
            alignment: 'right',
            hidden: false,
            title: 'Battary Park, New York',
            image: '../src/images/v3.jpg',
            description: 'Exploring Battery Park: A Hidden Gem in Lower Manhattan.',
            location: {
                center: [-74.016678, 40.703564],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2fourth-chapter4',
            alignment: 'left',
            hidden: false,
            title: 'Battary Park, New York',
            image: '../src/images/v4.jpg',
            description: 'A Day of Serenity and Scenic Views at Battery Park, NYC',
            location: {
                center: [-74.016678, 40.703564],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: '4second-identifier1',
            alignment: 'right',
            hidden: false,
            title: 'Restaurant Museum Fraunces Tavern',
            image: '../src/images/rest.jpg',
            description: '54 Pearl Street, New York, NY, 10004',
            location: {
                center: [-74.01135, 40.70339],
                zoom: 17.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4second-identifier2',
            alignment: 'left',
            hidden: false,
            title: 'Restaurant Museum Fraunces Tavern',
            image: '../src/images/rest1.jpg',
            description: 'Step Back in Time at Fraunces Tavern: A Culinary Journey Through History.',
            location: {
                center: [-74.01135, 40.70339],
                zoom: 17.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4second-identifier3',
            alignment: 'right',
            hidden: false,
            title: 'Restaurant Museum Fraunces Tavern',
            image: '../src/images/rest2.jpg',
            description: 'Fraunces Tavern is a historic restaurant located in the Financial District of New York City.',
            location: {
                center: [-74.01135, 40.70339],
                zoom: 17.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4second-identifier4',
            alignment: 'left',
            hidden: false,
            title: 'Restaurant Museum Fraunces Tavern',
            image: '../src/images/rest3.jpg',
            description: 'This iconic establishment, originally built in 1719, is known for its rich history and colonial-era charm. It offers a menu featuring traditional American cuisine in a cozy, atmospheric setting that transports visitors back in time.',
            location: {
                center: [-74.01135, 40.70339],
                zoom: 17.5,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
};
