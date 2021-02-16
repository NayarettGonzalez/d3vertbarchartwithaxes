let data = [{ "year": 2010, "loss": 4500 }, { "year": 2011, "loss": 3000 }, { "year": 2012, "loss": 5000 }, { "year": 2013, "loss": 7500 }, { "year": 2014, "loss": 6000 }];
let spacing = 120,
    width = 600,
    height = 500;

let svg = d3.select("body").append("svg")
    .attr("width", width).attr("height", height)
    .append("g")
    .attr("transform", "translate(" + spacing / 2 + "," + spacing / 2 + ")");

let xScale = d3.scaleLinear()
    .domain([d3.min(data, (d) => d.year), d3.max(data, (d) => d.year)])
    .range([0, width - spacing]);
let yScale = d3.scaleLinear()
    .domain([0, 8000])
    .range([height - spacing, 0]);

let xAxis = d3.axisBottom(xScale)
    .ticks(5).tickFormat((d) => d);
let yAxis = d3.axisLeft(yScale)
    .tickFormat((d) => "$" + d);

svg.append("g").attr("transform", "translate(30," + (height - spacing) + ")").call(xAxis);
svg.append("g").call(yAxis);

//Se remueve el eje X
//d3.select("g path").remove();
let rect = svg.selectAll("rect").data(data);
rect.enter().append("rect")
    .attr("width", 30)
    .attr("height", (d) => (height - spacing) - yScale(d.loss))
    .attr("x", (d) => xScale(d.year) + 15)
    .attr("y", (d) => yScale(d.loss))