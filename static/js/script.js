var baseUrl = '';

$(function() {
    $.getJSON(baseUrl + '/Me/links?limit=500?full=1', {'sort':sort}, function(data) {
        for (var record in data) {
            console.log(record.encounters.via.entities.hashtags);
        }
    });
});

