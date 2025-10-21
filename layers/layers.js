var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Delegaciones_2 = new ol.format.GeoJSON();
var features_Delegaciones_2 = format_Delegaciones_2.readFeatures(json_Delegaciones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegaciones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegaciones_2.addFeatures(features_Delegaciones_2);
var lyr_Delegaciones_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Delegaciones_2, 
                style: style_Delegaciones_2,
                popuplayertitle: 'Delegaciones',
                interactive: false,
                title: '<img src="styles/legend/Delegaciones_2.png" /> Delegaciones'
            });
var format_Vialidad_3 = new ol.format.GeoJSON();
var features_Vialidad_3 = format_Vialidad_3.readFeatures(json_Vialidad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vialidad_3.addFeatures(features_Vialidad_3);
var lyr_Vialidad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vialidad_3, 
                style: style_Vialidad_3,
                popuplayertitle: 'Vialidad',
                interactive: false,
                title: '<img src="styles/legend/Vialidad_3.png" /> Vialidad'
            });
var format_Manzana_4 = new ol.format.GeoJSON();
var features_Manzana_4 = format_Manzana_4.readFeatures(json_Manzana_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzana_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzana_4.addFeatures(features_Manzana_4);
var lyr_Manzana_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzana_4, 
                style: style_Manzana_4,
                popuplayertitle: 'Manzana',
                interactive: false,
                title: '<img src="styles/legend/Manzana_4.png" /> Manzana'
            });
var format_Seccin_5 = new ol.format.GeoJSON();
var features_Seccin_5 = format_Seccin_5.readFeatures(json_Seccin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seccin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seccin_5.addFeatures(features_Seccin_5);
var lyr_Seccin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seccin_5, 
                style: style_Seccin_5,
                popuplayertitle: 'Sección ',
                interactive: true,
                title: '<img src="styles/legend/Seccin_5.png" /> Sección '
            });
var format_Municipio_6 = new ol.format.GeoJSON();
var features_Municipio_6 = format_Municipio_6.readFeatures(json_Municipio_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipio_6.addFeatures(features_Municipio_6);
var lyr_Municipio_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipio_6, 
                style: style_Municipio_6,
                popuplayertitle: 'Municipio',
                interactive: false,
                title: '<img src="styles/legend/Municipio_6.png" /> Municipio'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Delegaciones_2.setVisible(true);lyr_Vialidad_3.setVisible(true);lyr_Manzana_4.setVisible(true);lyr_Seccin_5.setVisible(true);lyr_Municipio_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_Delegaciones_2,lyr_Vialidad_3,lyr_Manzana_4,lyr_Seccin_5,lyr_Municipio_6];
lyr_Delegaciones_2.set('fieldAliases', {'id': 'id', 'entidad': 'entidad', 'municipio': 'municipio', 'nombre': 'COLONIA', 'clasificac': 'clasificac', 'cp': 'CÓDIGO POSTAL ', 'otros_cp': 'otros_cp', 'control': 'control', });
lyr_Vialidad_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'categoria': 'categoria', 'tipo': 'tipo', 'sentido': 'sentido', 'velocidad_': 'velocidad_', 'control': 'control', });
lyr_Manzana_4.set('fieldAliases', {'entidad': 'entidad', 'distrito': 'distrito', 'municipio': 'municipio', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'status': 'status', 'disperso': 'disperso', 'control': 'control', 'caso_captu': 'caso_captu', 'distrito_l': 'distrito_l', 'id': 'id', 'tipo_manza': 'tipo_manza', });
lyr_Seccin_5.set('fieldAliases', {'id': 'id', 'entidad': 'CLAVE ENTIDAD', 'distrito': 'DISTRITO_FEDERAL', 'distrito_l': 'DISTRITO_LOCAL', 'municipio': 'MUNICIPIO', 'seccion': 'SECCIÓN', 'tipo': 'tipo', 'control': 'control', 'URL_PLANOS': 'URL_PLANO', });
lyr_Municipio_6.set('fieldAliases', {'id': 'id', 'entidad': 'entidad', 'municipio': 'municipio', 'nombre': 'NOMBRE DE MUNICIPIO', 'control': 'control', });
lyr_Delegaciones_2.set('fieldImages', {'id': 'TextEdit', 'entidad': 'TextEdit', 'municipio': 'TextEdit', 'nombre': 'TextEdit', 'clasificac': 'TextEdit', 'cp': 'TextEdit', 'otros_cp': 'TextEdit', 'control': 'TextEdit', });
lyr_Vialidad_3.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'categoria': 'TextEdit', 'tipo': 'TextEdit', 'sentido': 'TextEdit', 'velocidad_': 'TextEdit', 'control': 'TextEdit', });
lyr_Manzana_4.set('fieldImages', {'entidad': 'TextEdit', 'distrito': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'localidad': 'TextEdit', 'manzana': 'TextEdit', 'status': 'TextEdit', 'disperso': 'TextEdit', 'control': 'TextEdit', 'caso_captu': 'TextEdit', 'distrito_l': 'TextEdit', 'id': 'TextEdit', 'tipo_manza': 'Range', });
lyr_Seccin_5.set('fieldImages', {'id': 'TextEdit', 'entidad': 'TextEdit', 'distrito': 'TextEdit', 'distrito_l': 'TextEdit', 'municipio': 'TextEdit', 'seccion': 'TextEdit', 'tipo': 'TextEdit', 'control': 'TextEdit', 'URL_PLANOS': 'TextEdit', });
lyr_Municipio_6.set('fieldImages', {'id': 'TextEdit', 'entidad': 'TextEdit', 'municipio': 'TextEdit', 'nombre': 'TextEdit', 'control': 'TextEdit', });
lyr_Delegaciones_2.set('fieldLabels', {'id': 'no label', 'entidad': 'no label', 'municipio': 'no label', 'nombre': 'no label', 'clasificac': 'no label', 'cp': 'no label', 'otros_cp': 'no label', 'control': 'no label', });
lyr_Vialidad_3.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'categoria': 'no label', 'tipo': 'no label', 'sentido': 'no label', 'velocidad_': 'no label', 'control': 'no label', });
lyr_Manzana_4.set('fieldLabels', {'entidad': 'no label', 'distrito': 'no label', 'municipio': 'no label', 'seccion': 'no label', 'localidad': 'no label', 'manzana': 'no label', 'status': 'no label', 'disperso': 'no label', 'control': 'no label', 'caso_captu': 'no label', 'distrito_l': 'no label', 'id': 'no label', 'tipo_manza': 'no label', });
lyr_Seccin_5.set('fieldLabels', {'id': 'hidden field', 'entidad': 'inline label - always visible', 'distrito': 'inline label - always visible', 'distrito_l': 'inline label - always visible', 'municipio': 'inline label - always visible', 'seccion': 'inline label - always visible', 'tipo': 'hidden field', 'control': 'hidden field', 'URL_PLANOS': 'no label', });
lyr_Municipio_6.set('fieldLabels', {'id': 'no label', 'entidad': 'no label', 'municipio': 'no label', 'nombre': 'no label', 'control': 'no label', });
lyr_Municipio_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});