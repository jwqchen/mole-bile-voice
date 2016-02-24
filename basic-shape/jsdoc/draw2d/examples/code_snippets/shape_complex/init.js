function init(canvas){


    var r1 = new draw2d.shape.layout.HorizontalLayout();
    r1.add(new draw2d.shape.basic.Label({text:"R", resizeable:true}));
    r1.add(new draw2d.shape.basic.Label({text:"This is a simple label", resizeable:true}));

    var r2 = new draw2d.shape.layout.HorizontalLayout();
    r2.add(new draw2d.shape.basic.Label({text:"G", resizeable:true}));
    r2.add(new draw2d.shape.basic.Label({text:"This is a simple label", resizeable:true}));

    var r3 = new draw2d.shape.layout.HorizontalLayout();
    r3.add(new draw2d.shape.basic.Label({text:"B", resizeable:true}));
    r3.add(new draw2d.shape.basic.Label({text:"This is a simple label", resizeable:true}));

    var v1 = new draw2d.shape.layout.VerticalLayout();
    v1.add(r1);
    v1.add(r2);
    v1.add(r3);

    var centeredRotatedLabel = new draw2d.shape.basic.Rectangle({height:100,minWidth:40,resizeable:true});
    centeredRotatedLabel.add(new draw2d.shape.basic.Label({text:"K-1", angle:90, stroke:0}), new draw2d.layout.locator.CenterLocator());

    var figure = new draw2d.shape.layout.HorizontalLayout();
    figure.add(centeredRotatedLabel);
    figure.add(v1);

    canvas.add(figure);
}