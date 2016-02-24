// declare the namespace for this example
var example = {};

/**
 * 
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 * 
 * @author Andreas Herz
 * @extends draw2d.ui.parts.GraphicalEditor
 */
example.Application = Class.extend(
{
    NAME : "example.Application", 

    /**
     * @constructor
     * 
     * @param {String} canvasId the id of the DOM element to use as paint container
     */
    init : function()
    {
          this.defaultRouterClassName = "draw2d.layout.connection.ManhattanConnectionRouter";
          this.defaultRouter = new draw2d.layout.connection.ManhattanConnectionRouter();
          
	      this.view    = new draw2d.Canvas("canvas");
          this.toolbar = new example.Toolbar("toolbar", this, this.view );
          this.view.setScrollArea("#canvas");
	       
          var layout = {
                  north: {
                      resizable:false,
                      closable:false,
                      spacing_open:0,
                      spacing_closed:0,
                      size:50,
                      paneSelector: "#toolbar"
                    },
                    center: {
                      resizable:true,
                      closable:false,
                      spacing_open:0,
                      spacing_closed:0,
                      paneSelector: "#canvas"
                    }
                 };
          if(showJSON===true){
              layout.east={
                         size:250,
                         resizable:true,
                         closable:false,
                         paneSelector: "#json"
                   };
          }
          // layout FIRST the body
          this.appLayout = $('#container').layout(layout);
	       
	},
	
	/**
	 * Load the JSON data into the view/canvas
	 */
	load: function(jsonDocument){
	    this.view.clear();
	    
	    // unmarshal the JSON document into the canvas
	    // (load)
	    var reader = new draw2d.io.json.Reader();
	    reader.unmarshal(this.view, jsonDocument);
	    
	},
	
	setDefaultRouterClassName: function(  defaultRouterClassName){
	    this.defaultRouterClassName=  defaultRouterClassName;
        this.defaultRouter = eval("new "+this.defaultRouterClassName+"()");
	},
	
	createConnection: function(sourcePort, targetPort){
	    var conn = new draw2d.Connection();
	    conn.setRouter(this.defaultRouter);
	    conn.setOutlineStroke(1);
	    conn.setOutlineColor("#303030");
	    conn.setStroke(3);
	    conn.setRadius(5);
	    conn.setColor('#00A8F0');
	    return conn;
	}


});
