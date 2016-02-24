
var MyInterceptorPolicy = draw2d.policy.canvas.ConnectionInterceptorPolicy.extend({

    init : function()
    {
        this._super();
    },

  
    /**
     * @method
     * Called if the user want drop a port over any draw2d.Figure.<br>
     * Return a non <b>null</b> value if the interceptor accept the drop event.<br>
     * <br>
     * It is possible to delegate the drop event to another figure if the policy
     * returns another figure. This is useful if a figure want to accept a port 
     * drop event and delegates this drop event to another port.<br>
     * 
     * 
     * @param {draw2d.Figure} draggedFigure the dragged figure
     * @param {draw2d.Figure} dropTarget the potential drop target determined by the framework
     */
    delegateDrop: function(draggedFigure, dropTarget)
    {
        // we allow that a figure with a special class is droppable to a connection
        //
        if(draggedFigure instanceof BetweenFigure && dropTarget instanceof draw2d.Connection){
            return dropTarget;
        }
        
        return this._super(draggedFigure, dropTarget);
    }

});
