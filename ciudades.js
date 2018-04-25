
   var w = 400, h = 350, radius = 200;
   
   var calculo = [
      {name: 'OK', count: 4690000, color: '#9dc5d7'},
      {name: 'MD', count: 4760000, color: '#01b2c9'},
      {name: 'FL', count: 4870000, color: '#7fcbb3'},
      {name: 'LA', count: 4960000, color: '#1d4e89'},
      {name: 'DE', count: 5470000, color: '#d2b29b'},
      {name: 'SC', count: 5580000, color: '#e38590'},
      {name: 'NM', count: 5590000, color: '#f69256'},
      {name: 'AK', count: 6030000, color: '#ead98a'},
      {name: 'NV', count: 6070000, color: '#975251'},
      {name: 'TN', count: 6430000, color: '#c6cccb'},
    ];
    
    var arc = d3.arc().outerRadius(radius - 50).innerRadius(100);
    
    var pie = d3.pie().sort(null).value(function(d) { return d.count; });
    var svg = d3.select('#here').append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background","#000")
      .append("g")
      .attr("transform", "translate(" + w/2 + "," + h/2 + ")");
    var g = svg.selectAll(".arc")
      .data(pie(calculo))
      .enter().append("g");    
    
    g.append("path")
      .attr("d", arc)
      .style("fill", function(d,i) { return d.data.color; });
    
    g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .style("text-anchor", "middle")
      .text(function(d) { return d.data.name; })
      .attr("fill","white")
      .style("font-size","11px")