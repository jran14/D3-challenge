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


/////////////////FUNCTIONS FOR SCALING//////////////////////////////
//function for the x scaling for selected X value
// function xScale(data, chosenXaxis) {
//     const xLinearScale= d3.scaleLinear()
//     .domain([0, d3.max(data, d=>d[chosenXaxis])])
//     .range([0, width]); 
//     return xLinearScale; 
// }
// //function for the y scaling for selected Y value
// function yScale(data, chosenYaxis) {
//     const yLinearScale= d3.scaleLinear()
//     .domain([0, d3.max(data, d=>d[chosenYaxis])])
//     .range([height, 0]);  
//     return yLinearScale; 
// }

/////////////////FUNCTIONS FOR LABELS//////////////////////////////
// //function for the x axis label
// function xLabel(xScale) {
//     const bottomAxis= d3.axisBottom(xScale);
//     return bottomAxis;
// }
// //function for the y axis label
// function yLabel(yScale) {
//     const leftAxis= d3.axisLeft(yScale);
//     return leftAxis;
// }

//function for updating the circle chart for new axes options with transition
// function circleUpdate(circleChart, xScale, yScale, chosenXaxis, chosenYaxis) {
//     circleChart.transition()
//     .duration(1000)
//     .attr('cx', d => xScale(d[chosenXaxis]))
//     .attr('cy', d => yScale(d[chosenYaxis]))
//     return circleChart;
// }

/////events changing chart
//axes change
// function renderAxes(newXScale, xAxis) {
//     var bottomAxis = d3.axisBottom(newXScale);
  
//     xAxis.transition()
//       .duration(1000)
//       .call(bottomAxis);
  
//     return xAxis;
//   }
  

// function updateCirclechart (circlesGroup, )


//import the data from the csv file
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
   

    ////Create scale functions////

    // // create poverty, age, healthcare, smokes scales
    // // X AXES //
    // const xPoverty = d3.scaleLinear()
    // .domain([0, d3.max(data, d=>d.poverty)])
    // .range([0, width]); 

    // const xHealth= d3.scaleLinear()
    // .domain([0, d3.max(data, d=>d.healthcare)])
    // .range([0, width]); 

    // const xAge= d3.scaleLinear()
    // .domain([0, d3.max(data, d=>d.age)])
    // .range([0, width]); 

    // const xSmoke= d3.scaleLinear()
    // .domain([0, d3.max(data, d=>d.smokes)])
    // .range([0, width]); 

    // // Y AXES //
    // const yPoverty= d3.scaleLinear()
    // .domain([0, d3.max(data, d=>d.poverty)])
    // .range([height, 0]); 

    // const yHealth = d3.scaleLinear()
    // .domain([0, d3.max(data, d=>d.healthcare)])
    // .range([height, 0]);  

    // const yAge = d3.scaleLinear()
    // .domain([0, d3.max(data, d=>d.age)])
    // .range([height, 0]);  

    // const ySmoke = d3.scaleLinear()
    // .domain([0, d3.max(data, d=>d.smokes)])
    // .range([height, 0]);  

    // //create axis functions 
    // // X AXES //
    // const povertyXaxis = d3.axisBottom(xPoverty);
    // const healthXaxis = d3.axisBottom(xHealth);
    // const ageXaxis = d3.axisBottom(xAge);
    // const smokeXaxis = d3.axisBottom(xSmoke);

    // // Y AXES //
    // const povertyYaxis= d3.axisLeft(yPoverty);
    // const healthYaxis= d3.axisLeft(yHealth);
    // const ageYaxis= d3.axisLeft(yAge);
    // const smokeYaxis= d3.axisLeft(ySmoke);

    //create the circle chart 
    // const circleChart= chartGroup.selectAll('circle')
    //     .data(data).enter()
    //     .append('circle')
    //     .attr('cx', d=>xPoverty(d.poverty))
    //     .attr('cy', d =>yHealth(d.healthcare))
    //     .attr('r', 10)
    //     .classed('stateCircle', true)
    //     //.attr('fill', 'purple')
    //     .attr("opacity", ".5")
    //     .text(function(data){
    //         return data.abbr;
    //     });  




//////test////////
    //function xScale(chosenXaxis) {
    const xLinearScale= d3.scaleLinear()
        .domain([0, d3.max(data, d=>d[chosenXaxis])])
        .range([0, width]); 
        //return xLinearScale; 
    // //}; 
    

    chartGroup.selectAll('text')
        .data(data).enter()
        .append("text")
        .attr('class', 'stateCircle')
        // x and y to match circles
        .attr("x", d=>xLinearScale(d[chosenXaxis]))
        .attr("y", d =>yLinearScale(d[chosenYaxis]))
        //offset
        .attr("dx", function(d){
           return -5})
        .text( d => d.abbr);


    //function yScale(chosenYaxis) {
    const yLinearScale= d3.scaleLinear()
        .domain([0, d3.max(data, d=>d[chosenYaxis])])
        .range([height, 0]);  
        //return yLinearScale; 
    //};
    const xAxis = d3.axisBottom(xLinearScale);
    const yAxis= d3.axisLeft(yLinearScale);
    chartGroup.append("g")
    .attr("transform", `translate(${margin.left-60}, ${height})`).call(xAxis);
    chartGroup.append("g")
    .attr("transform", `translate(${margin.left-60}, 0)`).call(yAxis);
    // //add the state text
    // const stateText= chartGroup.selectAll('text')
    // .data(data).enter()
    // .append("text")
    // .attr('class', 'stateCircle')
    // .attr('id', 'state-id');



    // // x and y to match circles
    // stateText.selectAll('state-id')
    // .data(data).enter()
    // .attr("x", d=>xLinearScale(d[chosenXaxis]))
    // .attr("y", d =>yLinearScale(d[chosenYaxis]))
    // //offset
    // .attr("dx", function(d){
    // return -5})
    // .text( d => d.abbr);

//////test/////////

    var circleChart= chartGroup.selectAll('circle')
        .data(data).enter()
        .append('circle')
        .attr('cx', d=>xLinearScale(d[chosenXaxis]))
        .attr('cy', d =>yLinearScale(d[chosenYaxis]))
        .attr('r', 10)
        .classed('stateCircle', true)
        //.attr('fill', 'purple')
        //.attr("opacity", ".5")
        //});  

/////////////////////create x axis options///////////////////////////
// const labelsXgroup = chartGroup.append('g')
// .attr('transform', `translate(${width/2}, ${height +50})`);

// const povertyXaxisLabel= labelsXgroup.append('text')
// .attr('x',0)
// .attr('y',10)
// .attr('value', 'poverty')
// .classed('active', true)
// .text('Poverty');

// const healthXaxisLabel= labelsXgroup.append('text')
// .attr('x',0)
// .attr('y',30)
// .attr('value', 'healthcare')
// .classed('active', true)
// .text('Healthcare');

// const ageXaxisLabel= labelsXgroup.append('text')
// .attr('x',0)
// .attr('y',50)
// .attr('value', 'age')
// .classed('active', true)
// .text('Age');

// const smokeXaxisLabel= labelsXgroup.append('text')
// .attr('x',0)
// .attr('y',70)
// .attr('value', 'smoke')
// .classed('active', true)
// .text('Smoke');
// ////////////////////////////////////////////////////////////////////////////

// /////////////////////create y axis options///////////////////////////
// const labelsYgroup = chartGroup.append('g')
// .attr('transform', `translate(${margin.left-200}, ${height/2}) rotate(-90)`);

// const povertyYaxisLabel= labelsYgroup.append('text')
// .attr('x',10)
// .attr('y',30)
// .attr('value', 'poverty')
// .classed('active', true)
// .text('Poverty');

// const healthYaxisLabel= labelsYgroup.append('text')
// .attr('x',0)
// .attr('y',50)
// .attr('value', 'healthcare')
// .classed('active', true)
// .text('Healthcare');

// const ageYaxisLabel= labelsYgroup.append('text')
// .attr('x',0)
// .attr('y',70)
// .attr('value', 'age')
// .classed('active', true)
// .text('Age');

// const smokeYaxisLabel= labelsYgroup.append('text')
// .attr('x',0)
// .attr('y',90)
// .attr('value', 'smoke')
// .classed('active', true)
// .text('Smoke');
////////////////////////////////////////////////////////////////////////////

////////////////////CREATE EVENT LISTENERS//////////////////////////////////
// labelsXgroup.selectAll('text')
//         .on('click', function(){
//             const newXvalue = d3.select(this).attr('value');
//             if(value !== chosenXaxis) {
//                 chosenXaxis = value;
//                 xScale(data, chosenXaxis);
//                 xLabel(xScale);

//             }

//         })



// labelsYgroup



    // //append the axes to chart chart group 
    // chartGroup.append('g').attr('transform', `translate(0,${height})`).call(povertyXaxis);
    // chartGroup.append('g').call(healthYaxis);
    // //add the axes text titles to the graph
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

// //add the state text
//     chartGroup.selectAll('text')
//         .data(data).enter()
//         .append("text")
//         .attr('class', 'stateCircle')
//         // x and y to match circles
//         .attr("x", d=>xLinearScale(d[chosenXaxis]))
//         .attr("y", d =>yLinearScale(d[chosenYaxis]))
//         //offset
//         .attr("dx", function(d){
//            return -5})
//         .text( d => d.abbr);


    //initialize tooltip 
    const toolTip= d3.tip()
    .attr("class", "d3-tip")
    //.classed('d3-tip', true)
    .offset([80,-60])
    .html(function(d) {
        return (`State: ${d.abbr}<br>
                ID ${d.id}<br>
                Income: ${d.income}`)
        //${data.poverty[0]}`)
    });

    //call tooltip 
    chartGroup.call(toolTip);

    //event listeners for mouseover/mouseout to display tooltip
    circleChart.on('mouseover', function(data){
        toolTip.show(data, this);
    });

    
function updateXclick(newX) {
    // get value of selections
    chosenXaxis = newX;
//console.log(value);
//console.log(value);

    const xAxis = d3.axisBottom(xLinearScale);
    const yAxis= d3.axisLeft(yLinearScale);
    chartGroup.append("g")
    .attr("transform", `translate(${margin.left-60}, ${height})`).call(xAxis);
    chartGroup.append("g")
    .attr("transform", `translate(${margin.left-60}, 0)`).call(yAxis);

    var circleChart= chartGroup.selectAll('circle')
    .data(data).enter()
    .append('circle')
    .attr('cx', d=>xLinearScale(d[chosenXaxis]))
    .attr('cy', d =>yLinearScale(d[chosenYaxis]))
    .attr('r', 10)
    .classed('stateCircle', true);
    //.attr('fill', 'purple')
    //.attr("opacity", ".5")
return circleChart
};

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



