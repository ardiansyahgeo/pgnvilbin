var wms_layers = [];


        var lyr_Satelit_0 = new ol.layer.Tile({
            'title': 'Satelit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_PetaRencanaJaringan_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Peta Rencana Jaringan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PetaRencanaJaringan_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11877883.779888, -702552.439994, 11878903.584646, -701636.637988]
                            })
                        });

lyr_Satelit_0.setVisible(true);lyr_PetaRencanaJaringan_1.setVisible(true);
var layersList = [lyr_Satelit_0,lyr_PetaRencanaJaringan_1];
