
var MyFigure = draw2d.shape.basic.Rectangle.extend({

    init : function(attr)
    {
        this._super($.extend({bgColor:"#ff765e", radius:5},attr));
 
    },

    /**
     * @method
     * Change the corner radius if the user clicks on the element. 
     * quite simple....
     * 
     */
    onDoubleClick: function(){
    	this.setRadius( this.getRadius()===5?20:5);
    }

});
