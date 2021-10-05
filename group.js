var pipeline = [{
    $group: {
        _id: "$age",
        avgAge:{ $avg: "$age"},
        minAge:{ $min: "$age"},
        maxAge:{ $max: "$age"},
        allAges:{ $sum: "$age"},
        count: { $sum: 1}
    }
}]
db.getCollection("user").aggregate(pipeline)