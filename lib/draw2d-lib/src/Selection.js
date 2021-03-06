/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.Selection
 * 
 * Represents the current selection in the canvas. The selection element is a pure passive element which 
 * manage/store the selection.
 * 
 * 
 * @author Andreas Herz
 */
draw2d.Selection = Class.extend({
    
    NAME : "draw2d.Selection",

    /**
     * @constructor
     * Creates a new figure element which are not assigned to any canvas.
     * 
     */
    init: function() {
        this.primary = null;
        this.all = new draw2d.util.ArrayList();
    },

    /**
     * Reset the current selection
     * 
     */
    clear: function()
    {
        this.primary = null;
        this.all = new draw2d.util.ArrayList();
    },
    
    /**
     * @method
     * Return the primary selection. This can only one figure at once.
     * 
     * @return {draw2d.Figure} the primary selected figure
     */
    getPrimary: function(  )
    {
        return this.primary;
    },
 
    /**
     * @method
     * Set the primary selection.
     * 
     * @param {draw2d.Figure} figure The new primary selection
     */
    setPrimary: function(figure)
    {
        this.primary = figure;
        this.add(figure);
    },
    
    /**
     * @method
     * Remove the given figure from the selection (primary,all)
     * 
     * @param {draw2d.Figure} figure
     */
    remove: function(figure)
    {
        this.all.remove(figure);
        if(this.primary===figure){
            this.primary = null;
        }
    },

    /**
     * @method
     * Add a figure to the selection. No events are fired or update the selection handle. This method just
     * add the figure to the internal management data structure.
     * 
     * @param figure
     * @private
     */
    add: function(figure)
    {
        if(figure!==null && !this.all.contains(figure)){
            this.all.add(figure);
        }
    },
 
    
    /**
     * @method
     * return true if the given figure part of the selection.
     * 
     * @param {draw2d.Figure} figure The figure to check
     * @param {boolean} checkDescendant Check if the figure provided by the argument is a descendant of the selection whether it is a direct child or nested more deeply.
     * @since 2.2.0
     */
    contains: function(figure, checkDescendant)
    {
        if(checkDescendant){
            var i=0;
            for(i=0; i<this.all.getSize();i++){
                var figureToCheck = this.all.get(i);
                if(figureToCheck===figure || figureToCheck.contains(figure)){
                    return true;
                }
            }
            return false;
        }
        return this.all.contains(figure);
    },

    /**
     * @method
     * Return the size of the selection
     * 
     * @since 4.8.0
     */
    getSize: function()
    {
        return this.all.getSize();
    },
    
    /**
     * @method
     * Return the complete selection - including the primary selection.
     *
     * @param {boolean} expand expand all StrongComposite and WeakComposite to get all figures. Didn't expand any SetFigures or LayoutFigures
     * @return {draw2d.util.ArrayList}
     *
     */
    getAll: function(expand)
    {
        if(expand ===true){
            var result = new draw2d.util.ArrayList();
            var addRecursive = function(figures){
                result.addAll(figures,true);
                figures.each(function(index, figure){
                    if(figure instanceof draw2d.shape.composite.StrongComposite){
                        addRecursive(figure.getAssignedFigures());
                    }
                });
            };
            addRecursive(this.all);

            return result;
        }

        return this.all.clone();
    },
    
    /**
     * @method
     * @param func
     */
    each: function( func){
        this.all.each(func);
        
        return this;
    }
});