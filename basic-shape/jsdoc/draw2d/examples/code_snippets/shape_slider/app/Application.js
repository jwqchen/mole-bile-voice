// declare the namespace for this example
var example = {};

/**
 * 
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 * 
 * @author Andreas Herz
 * @extends draw2d.ui.parts.GraphicalEditor
 */
example.Application = Class.extend({
    NAME : "example.Application",

    /**
     * @constructor
     * 
     */
    init : function() 
    {
        this.canvas = new example.Canvas("canvas");
        this.toolbar = new example.Toolbar("toolbar", this.canvas);
        this.properties = new example.EventPane( this.canvas);
    }

});
