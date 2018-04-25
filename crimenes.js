 var w = 200, f = 30, h = 25;
         
         d3.csv("https://github.com/masayado/Data/blob/gh-pages/data.csv").then(function(data) {
         
           console.log(data);
         
           var viz = d3.select("#crimenes")
             .append("svg")
             .attr("width", w)
             .attr("height", h * data.length)
             .style("background","#EEEEEE");
         
           var bar = viz.selectAll("g")
             .data(data)
             .enter()
             .append("g")
             .attr("transform", function(d, i) { return "translate(0," + i * h + ")"; });
             
             bar.append("rect")
               .attr("width", function(d) { return d.pobreza * f; })
               .attr("height", h - 5);
             
             bar.append("text")
               .attr("x", function(d) { return (d.pobreza * f)+5; })
               .attr("y", h / 2)
               .text(function(d) { return d.comuna; })
               .attr("fill","#445566")
               .attr("font-size","12")
               .attr("font-weight","bold")
             
             bar.append("text")
               .attr("x", function(d) { return (d.pobreza * f)-10; })
               .attr("y", h / 2)
               .text(function(d) { return Math.round(d.pobreza); })
               .attr("fill","#FFFFFF")
               .attr("font-size","12")
               .attr("text-anchor","end")
         })
      </script>