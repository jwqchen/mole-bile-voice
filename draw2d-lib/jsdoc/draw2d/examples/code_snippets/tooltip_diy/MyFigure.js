
MyFigure = draw2d.shape.basic.Rectangle.extend({

    NAME : "MyFigure",
    
    /**
     * @constructor 
     * Creates a new figure element which is not assigned to any canvas.
     * 
     * @param {Object} [attr] the configuration of the shape
     */
    init : function(attr)
    {
    	this.tooltip = null;

    	this._super($.extend({width:50, height:50},attr));
        
        this.createPort("input");
        this.createPort("output");
        
    },

    /**
     * @method
     * Change the color and the internal value of the figure.
     * Post the new value to related input ports.
     * 
     */
    onMouseEnter: function(){
        this.showTooltip();
    },
    
    onMouseLeave: function(){
        this.hideTooltip();
    },
    
    setPosition: function(x,y){
        this._super(x,y);
        this.positionTooltip();
    },
    
    hideTooltip:function(){          
        this.tooltip.remove();   
        this.tooltip = null;
    },
    
    
    showTooltip:function(){          
        this.tooltip= $('<div class="tooltip">Tooltip</div>').appendTo('body');
        this.positionTooltip();        
    },
    
    positionTooltip: function(){
        if( this.tooltip===null){
            return;
        }
        
        var width =  this.tooltip.outerWidth(true);
        var tPosX = this.getAbsoluteX()+this.getWidth()/2-width/2+8;
        var tPosY = this.getAbsoluteY()+this.getHeight() + 20;
        this.tooltip.css({'top': tPosY, 'left': tPosX});
    }
    
});
