// editable lables with a type tag on top

example.shape.EditableLabel = draw2d.shape.basic.Label.extend({
    NAME: "example.shape.EditableLabel",
    init : function(typeName, contentPrompt){
        this._super();
        this.text = contentPrompt;
        this.typeName = typeName;
        this.installEditor(new draw2d.ui.LabelEditor({
           // called after the value has been set to the LabelFigure
           onCommit: $.proxy(function(value){
               alert("new value set to:"+value);
           },this),
           // called if the user abort the operation
           onCancel: function(){
           }
        }));
        
        this.port = this.createPort("hybrid", new draw2d.layout.locator.BottomLocator(this));
        this.port.setConnectionAnchor(new draw2d.layout.anchor.ChopboxConnectionAnchor(this.port));
        this.add(new draw2d.shape.basic.Label({text:this.typeName}), new draw2d.layout.locator.TopLocator(this));

    }
});

example.shape.Yes = example.shape.EditableLabel.extend({
  NAME: "example.shape.Yes",
  init : function(){
    this._super("Yes", "Double Click to Edit");
  }
});