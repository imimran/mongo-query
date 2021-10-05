var pipeline = [{
    $match: {"department": "EEE"}
}, { $limit: 2}, {$skip:1}]
db.getCollection("user").aggregate(pipeline)