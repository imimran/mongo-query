var pipeline = [{
    $unwind: "$skils",
}, 
{$match: { skils: /^N/}},

{$group: { 
    _id: "$name",
    favLanguage:{ $push: "$skils"}
}}
]
db.getCollection("user").aggregate(pipeline)