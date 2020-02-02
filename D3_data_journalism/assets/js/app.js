// @TODO: YOUR CODE HERE!

//set the dimensions of the svg chart area
const svgwidth= 1200;
const svgheight= 800; 

const margin ={
    top: 20,
    bottom: 150,
    left: 80,
    right: 40, 
};

const width= svgwidth - margin.left - margin.right;
const height= svgheight - margin.top - margin.bottom; 

//add the SVG group to html with svg height and width attributes
const svg= d3.select('#scatter').append('svg')
    .attr('width', svgwidth).attr('height', svgheight); 

//append the chart group with 'g' and translate the chart area
const chartGroup= svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

//initalize 
var chosenXaxis= 'poverty';
var chosenYaxis= 'healthcare';

/////////////////////create x axis options///////////////////////////
const labelsXgroup = chartGroup.append('g')
.attr('transform', `translate(${width/2}, ${height +50})`);

const povertyXaxisLabel= labelsXgroup.append('text')
.attr('x',0)
.attr('y',10)
.attr('value', 'poverty')
.classed('inactive', true)
.text('Poverty');

const healthXaxisLabel= labelsXgroup.append('text')
.attr('x',0)
.attr('y',30)
.attr('value', 'healthcare')
.classed('inactive', true)
.text('Healthcare');

const ageXaxisLabel= labelsXgroup.append('text')
.attr('x',0)
.attr('y',50)
.attr('value', 'age')
.classed('inactive', true)
.text('Age');

const smokeXaxisLabel= labelsXgroup.append('text')
.attr('x',0)
.attr('y',70)
.attr('value', 'smoke')
.classed('inactive', true)
.text('Smoke');
////////////////////////////////////////////////////////////////////////////

/////////////////////create y axis options///////////////////////////
const labelsYgroup = chartGroup.append('g')
.attr('transform', `translate(${margin.left-175}, ${height/2}) rotate(-90)`);

const povertyYaxisLabel= labelsYgroup.append('text')
.attr('x',0)
.attr('y',30)
.attr('value', 'poverty')
.classed('inactive', true)
.text('Poverty');

const healthYaxisLabel= labelsYgroup.append('text')
.attr('x',0)
.attr('y',50)
.attr('value', 'healthcare')
.classed('inactive', true)
.text('Healthcare');

const ageYaxisLabel= labelsYgroup.append('text')
.attr('x',0)
.attr('y',70)
.attr('value', 'age')
.classed('inactive', true)
.text('Age');

const smokeYaxisLabel= labelsYgroup.append('text')
.attr('x',0)
.attr('y',90)
.attr('value', 'smoke')
.classed('inactive', true)
.text('Smoke');
////////////////////////////////////////////////////////////////////////////

//import the data from the csv file and read
d3.csv('assets/data/data.csv').then(function(data){

    //Parse through the data to convert from string to integers
    data.forEach(function(data) {
        data.poverty= +data.poverty; 
        data.age= +data.age; 
        data.healthcare= +data.healthcare; 
        data.smokes= +data.smokes; 
        data[chosenXaxis]=+data[chosenXaxis];
        console.log(data[chosenXaxis]);
    }); 

//////create scales////////
    //X scale
    const xLinearScale= d3.scaleLinear()
        .domain([0, d3.max(data, d=>d[chosenXaxis])])
        .range([0, width]); 

    //Y scale
    const yLinearScale= d3.scaleLinear()
        .domain([0, d3.max(data, d=>d[chosenYaxis])])
        .range([height, 0]);  

    //create the text element for the state abbr labels
    const stateText= chartGroup.selectAll('text')
    .data(data).enter()
    .append("text")
    .attr('class', 'stateText')
    .attr('id', 'state-text')

    //append the text to the stateText element
    stateText.select('#state-text')
    .data(data).enter()
    .append("text")
    .attr("x", d=>xLinearScale(d[chosenXaxis]))
    .attr("y", d =>yLinearScale(d[chosenYaxis]))
    .attr("dy", function(d){
        return 4.65})
    .attr("dx", function(d){
        return -5.8})
    .attr('font-size', 10)
    .text( d => d.abbr);

    //create circle chart with the scaleing
    var circleChart= chartGroup.selectAll('circle')
    .data(data).enter()
    .append('circle')
    .attr('cx', d=>xLinearScale(d[chosenXaxis]))
    .attr('cy', d =>yLinearScale(d[chosenYaxis]))
    .attr('r', 10)
    .classed('stateCircle', true)

    //add the axes to graph
    const xAxis = d3.axisBottom(xLinearScale);
    const yAxis= d3.axisLeft(yLinearScale);
    chartGroup.append("g")
    .attr("transform", `translate(${margin.left-60}, ${height-10})`).call(xAxis);
    chartGroup.append("g")
    .attr("transform", `translate(${margin.left-60}, 0)`).call(yAxis);

////////TEXT LABELS///////////////////
    // X AXIS //
    chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + 30})`)
    .style("text-anchor", "middle")
    .text(chosenXaxis)
    .classed('aText', true);
    // Y AXIS //
    chartGroup.append("text")
    .attr("transform", `translate(${60- margin.left}, ${height/2-80}) rotate(-90)`)
    .style("text-anchor", "middle")
    .text(chosenYaxis)
    .classed('aText', true);

    //initialize tooltip 
    const toolTip= d3.tip()
    .attr("class", "d3-tip")
    //.classed('d3-tip', true)
    .offset([80,-60])
    .html(function(d) {
        return (`State: ${d.abbr}<br>
                ID ${d.id}<br>
                Income: ${d.income}`)
    });

    //call tooltip 
    chartGroup.call(toolTip);

    //event listeners for mouseover/mouseout to display tooltip
    circleChart.on('mouseover', function(data){
        toolTip.show(data, this);
    });

    
// function updateXclick(newX) {
//     // get value of selections
//     chosenXaxis = newX;
// //console.log(value);
// //console.log(value);

//     const xAxis = d3.axisBottom(xLinearScale);
//     const yAxis= d3.axisLeft(yLinearScale);
//     chartGroup.append("g")
//     .attr("transform", `translate(${margin.left-60}, ${height})`).call(xAxis);
//     chartGroup.append("g")
//     .attr("transform", `translate(${margin.left-60}, 0)`).call(yAxis);

//     var circleChart= chartGroup.selectAll('circle')
//     .data(data).enter()
//     .append('circle')
//     .attr('cx', d=>xLinearScale(d[chosenXaxis]))
//     .attr('cy', d =>yLinearScale(d[chosenYaxis]))
//     .attr('r', 10)
//     .classed('stateCircle', true);
//     //.attr('fill', 'purple')
//     //.attr("opacity", ".5")
// return circleChart
// };

////////////event listener
//X axis
labelsXgroup.selectAll("text").on("click", () => {
    updateXclick(d3.event.target.value)
});

//Y axis
labelsYgroup.selectAll("text")
    .on("click", function() {
    // get value of selections
    const value = d3.select(this).attr("value");
    //console.log(value);
    if (value !== chosenXaxis) {
        // replaces chosenXAxis with value
        chosenYaxis = value;
        console.log(chosenYaxis)
    };
});



//catch for all errors
}).catch(function(error){
    console.log(error);
});



