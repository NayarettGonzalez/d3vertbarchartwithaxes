let data = [{ "year": 2010, "loss": 4500 }, { "year": 2011, "loss": 3000 }, { "year": 2012, "loss": 5000 }, { "year": 2013, "loss": 7500 }, { "year": 2014, "loss": 6000 }];

let spacing = 50,
    width = 600,
    height = 500;

let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);