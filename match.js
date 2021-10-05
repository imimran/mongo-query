var pipeline = [{
    $match: {"age":18}
}]
db.getCollection("user").aggregate(pipeline)