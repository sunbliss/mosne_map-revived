$(function () {

    var mybg_color = "#000000";

    var cluster_styles = [{
        url: 'images/m1.png',
        height: 40,
        width: 40,
        textSize: 18,
        textColor: '#fff',
        textAlign: 'center',
        textWeight: 'bold'
    }, {
        url: 'images/m2.png',
        height: 56,
        width: 56,
        textSize: 26,
        textColor: '#fff',
        textAlign: 'center',
        textWeight: 'bold'
    }, {
        url: 'images/m3.png',
        height: 66,
        width: 66,
        textSize: 30,
        textColor: '#fff',
        textAlign: 'center',
        textWeight: 'bold'
    }, {
        url: 'images/m4.png',
        height: 78,
        width: 78,
        textSize: 40,
        textColor: '#fff',
        textAlign: 'center',
        textWeight: 'bold'
    }, {
        url: 'images/m5.png',
        width: 90,
        height: 90,
        textSize: 45,
        textColor: '#fff',
        textAlign: 'center',
        textWeight: 'bold'
    }];

   var stylez = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7a7a7a"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#97bbae"
            },
            {
                "visibility": "on"
            },
            {
                "lightness": "-25"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
            {
                "color": "#83debe"
            },
            {
                "weight": "18"
            },
            {
                "gamma": "1"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "-75"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#474747"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#191919"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#141414"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "lightness": 17
            },
            {
                "visibility": "off"
            },
            {
                "saturation": "100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": 0.2
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#353535"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#1f1f1f"
            }
        ]
    }
];

    var mapstyle_id = 'minimal';
    var mapOptions = {
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, mapstyle_id]
        },
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        disableDoubleClickZoom: true,
        backgroundColor: mybg_color
    };



    $("#map").mosne_map({
        elements: '#markers_list .maplocation',
        infowindows: false,                     //do not use infoWindow
        infobox: true,                         //  use infobox instead
        showzoom: true,
        zoomlevel: 8,
        zoomOnClick: false,
        clickedzoom: 8,
        trigger: 'aj_open',
        timeout: 100,
        clat: 38.482387,
        clng: 22.500970,
        mapstyle: stylez,
        mapstyle_name: mapstyle_id,
        map_opt: mapOptions,
        cluster_styles: {
            styles: cluster_styles
        },
        marker_icon : { icon:'images/m0.png',width:25,height:25},
        afterUpdate: counter,
        mode: 'latlng'
    });

    var counter = function () {

        tot_p = $("#markers_list .maplocation").length;
        $("#tot").html(tot_p);
    }
});