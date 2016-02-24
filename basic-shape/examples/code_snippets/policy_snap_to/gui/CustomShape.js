/**
 * Created by andherz on 26.02.15.
 */


CustomShape = draw2d.shape.basic.Diamond.extend({

    NAME: "CustomShape",

    init: function (attr, setter, getter) {
        var self = this,
            icon;

        self._super(attr, setter, getter);

        self.attr({
            bgColor:'#EDFEA9',
            width:50,
            height:50,
            resizeable:false
        });

        self.port = self.createPort(
            "hybrid",
            new draw2d.layout.locator.CenterLocator(self)
        );

        self.port.setConnectionAnchor(new draw2d.layout.anchor.ChopboxConnectionAnchor(self.port));

        self.port.on("connect", function(){
            // port connected
        });
        self.port.on("disconnect", function(){
            // port disconnected
        });

        icon = new draw2d.shape.icon.Alarm({width:20, height:20, bgColor:'#2C3E50'});


        self.add(icon, new draw2d.layout.locator.CenterLocator());
    }
});

