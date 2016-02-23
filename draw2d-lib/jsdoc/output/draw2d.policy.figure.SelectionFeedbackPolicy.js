Ext.data.JsonP.draw2d_policy_figure_SelectionFeedbackPolicy({"tagname":"class","name":"draw2d.policy.figure.SelectionFeedbackPolicy","autodetected":{},"files":[{"filename":"SelectionFeedbackPolicy.js","href":"SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy"}],"author":[{"tagname":"author","name":"Andreas Herz","email":null}],"extends":"draw2d.policy.figure.DragDropEditPolicy","members":[{"name":"constructor","tagname":"method","owner":"draw2d.policy.figure.SelectionFeedbackPolicy","id":"method-constructor","meta":{}},{"name":"adjustDimension","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-adjustDimension","meta":{}},{"name":"adjustPosition","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-adjustPosition","meta":{"template":true}},{"name":"attr","tagname":"method","owner":"draw2d.policy.EditPolicy","id":"method-attr","meta":{"experimental":{"text":"\n"}}},{"name":"moved","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-moved","meta":{"template":true}},{"name":"onDrag","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-onDrag","meta":{"template":true}},{"name":"onDragEnd","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-onDragEnd","meta":{"template":true}},{"name":"onDragStart","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-onDragStart","meta":{"template":true}},{"name":"onInstall","tagname":"method","owner":"draw2d.policy.figure.SelectionFeedbackPolicy","id":"method-onInstall","meta":{}},{"name":"onRightMouseDown","tagname":"method","owner":"draw2d.policy.figure.FigureEditPolicy","id":"method-onRightMouseDown","meta":{"template":true}},{"name":"onSelect","tagname":"method","owner":"draw2d.policy.figure.SelectionFeedbackPolicy","id":"method-onSelect","meta":{"template":true}},{"name":"onUninstall","tagname":"method","owner":"draw2d.policy.figure.SelectionFeedbackPolicy","id":"method-onUninstall","meta":{}},{"name":"onUnselect","tagname":"method","owner":"draw2d.policy.figure.SelectionFeedbackPolicy","id":"method-onUnselect","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-draw2d.policy.figure.SelectionFeedbackPolicy","short_doc":"A draw2d.policy.SelectionFeedbackPolicy that is sensitive to the canvas selection. ...","component":false,"superclasses":["draw2d.policy.EditPolicy","draw2d.policy.figure.FigureEditPolicy","draw2d.policy.figure.DragDropEditPolicy"],"subclasses":["draw2d.policy.figure.AntSelectionFeedbackPolicy","draw2d.policy.figure.BigRectangleSelectionFeedbackPolicy","draw2d.policy.figure.BusSelectionFeedbackPolicy","draw2d.policy.figure.GlowSelectionFeedbackPolicy","draw2d.policy.figure.RectangleSelectionFeedbackPolicy","draw2d.policy.figure.ResizeSelectionFeedbackPolicy","draw2d.policy.figure.VertexSelectionFeedbackPolicy","draw2d.policy.figure.WidthSelectionFeedbackPolicy","draw2d.policy.line.LineSelectionFeedbackPolicy"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='docClass'>draw2d.policy.EditPolicy</a><div class='subclass '><a href='#!/api/draw2d.policy.figure.FigureEditPolicy' rel='draw2d.policy.figure.FigureEditPolicy' class='docClass'>draw2d.policy.figure.FigureEditPolicy</a><div class='subclass '><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='docClass'>draw2d.policy.figure.DragDropEditPolicy</a><div class='subclass '><strong>draw2d.policy.figure.SelectionFeedbackPolicy</strong></div></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/draw2d.policy.figure.AntSelectionFeedbackPolicy' rel='draw2d.policy.figure.AntSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.AntSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.BigRectangleSelectionFeedbackPolicy' rel='draw2d.policy.figure.BigRectangleSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.BigRectangleSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.BusSelectionFeedbackPolicy' rel='draw2d.policy.figure.BusSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.BusSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.GlowSelectionFeedbackPolicy' rel='draw2d.policy.figure.GlowSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.GlowSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.RectangleSelectionFeedbackPolicy' rel='draw2d.policy.figure.RectangleSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.RectangleSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.ResizeSelectionFeedbackPolicy' rel='draw2d.policy.figure.ResizeSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.ResizeSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.VertexSelectionFeedbackPolicy' rel='draw2d.policy.figure.VertexSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.VertexSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.WidthSelectionFeedbackPolicy' rel='draw2d.policy.figure.WidthSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.WidthSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.line.LineSelectionFeedbackPolicy' rel='draw2d.policy.line.LineSelectionFeedbackPolicy' class='docClass'>draw2d.policy.line.LineSelectionFeedbackPolicy</a></div><h4>Files</h4><div class='dependency'><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy' target='_blank'>SelectionFeedbackPolicy.js</a></div></pre><div class='doc-contents'><p>A draw2d.policy.SelectionFeedbackPolicy that is sensitive to the canvas selection. Subclasses will typically\ndecorate the <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">figure</a> with things like selection handles and/or focus feedback.\n<br>\nIf you want to change the handle visibility for a figure, then you should use SelectionFeedbackPolicy to do that.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.figure.SelectionFeedbackPolicy'>draw2d.policy.figure.SelectionFeedbackPolicy</span><br/><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.policy.figure.SelectionFeedbackPolicy-method-constructor' class='name expandable'>draw2d.policy.figure.SelectionFeedbackPolicy</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.policy.figure.SelectionFeedbackPolicy\" rel=\"draw2d.policy.figure.SelectionFeedbackPolicy\" class=\"docClass\">draw2d.policy.figure.SelectionFeedbackPolicy</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.policy.figure.SelectionFeedbackPolicy\" rel=\"draw2d.policy.figure.SelectionFeedbackPolicy\" class=\"docClass\">draw2d.policy.figure.SelectionFeedbackPolicy</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.figure.DragDropEditPolicy-method-constructor\" rel=\"draw2d.policy.figure.DragDropEditPolicy-method-constructor\" class=\"docClass\">draw2d.policy.figure.DragDropEditPolicy.constructor</a></p></div></div></div><div id='method-adjustDimension' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-adjustDimension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-adjustDimension' class='name expandable'>adjustDimension</a>( <span class='pre'>figure, w, h</span> ) : <a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a><span class=\"signature\"></span></div><div class='description'><div class='short'>ensure that the dimension didn't goes outside the given restrictions ...</div><div class='long'><p>ensure that the dimension didn't goes outside the given restrictions</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>w</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>h</span> : number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a></span><div class='sub-desc'><p>the constraint position of the figure</p>\n</div></li></ul></div></div></div><div id='method-adjustPosition' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-adjustPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-adjustPosition' class='name expandable'>adjustPosition</a>( <span class='pre'>figure, x, [y]</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Adjust the coordinates to the rectangle/region of this constraint. ...</div><div class='long'><p>Adjust the coordinates to the rectangle/region of this constraint.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : Number|<a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : number (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'><p>the constraint position of the figure</p>\n</div></li></ul></div></div></div><div id='method-attr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-attr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-attr' class='name expandable'>attr</a>( <span class='pre'>name, [value]</span> ) : Object<span class=\"signature\"><span class='experimental' >experimental</span></span></div><div class='description'><div class='short'>Read or set object attributes. ...</div><div class='long'><p>Read or set object attributes.<br>\nWhen no value is given, reads specified attribute from the element.<br>\nWhen value is given, sets the attribute to that value.\nMultiple attributes can be set by passing an object with name-value pairs.</p>\n        <p>Available since: <b>5.3.2</b></p>\n        <div class='rounded-box experimental-box deprecated-tag-box'>\n        <p>This method is <strong>experimental</strong> </p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String/Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-moved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-moved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-moved' class='name expandable'>moved</a>( <span class='pre'>canvas, figure</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback if the figure has moved ...</div><div class='long'><p>Callback if the figure has moved</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul></div></div></div><div id='method-onDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-onDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDrag' class='name expandable'>onDrag</a>( <span class='pre'>canvas, figure</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called by the framework during drag a figure. ...</div><div class='long'><p>Called by the framework during drag a figure.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul></div></div></div><div id='method-onDragEnd' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-onDragEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDragEnd' class='name expandable'>onDragEnd</a>( <span class='pre'>canvas, figure, x, y, shiftKey, ctrlKey</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called by the framework if the drag drop operation ends. ...</div><div class='long'><p>Called by the framework if the drag drop operation ends.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>the x-coordinate of the mouse up event</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>the y-coordinate of the mouse up event</p>\n</div></li><li><span class='pre'>shiftKey</span> : Boolean<div class='sub-desc'><p>true if the shift key has been pressed during this event</p>\n</div></li><li><span class='pre'>ctrlKey</span> : Boolean<div class='sub-desc'><p>true if the ctrl key has been pressed during the event</p>\n</div></li></ul></div></div></div><div id='method-onDragStart' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-onDragStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDragStart' class='name expandable'>onDragStart</a>( <span class='pre'>canvas, figure, x, y, shiftKey, ctrlKey</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called by the framework if the related shape has init a drag&amp;drop\noperation ...</div><div class='long'><p>Called by the framework if the related shape has init a drag&amp;drop\noperation</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>the x-coordinate of the mouse up event</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>the y-coordinate of the mouse up event</p>\n</div></li><li><span class='pre'>shiftKey</span> : Boolean<div class='sub-desc'><p>true if the shift key has been pressed during this event</p>\n</div></li><li><span class='pre'>ctrlKey</span> : Boolean<div class='sub-desc'><p>true if the ctrl key has been pressed during the event</p>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.figure.SelectionFeedbackPolicy'>draw2d.policy.figure.SelectionFeedbackPolicy</span><br/><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.SelectionFeedbackPolicy-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>figure</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the host if the policy has been installed. ...</div><div class='long'><p>Called by the host if the policy has been installed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.EditPolicy-method-onInstall\" rel=\"draw2d.policy.EditPolicy-method-onInstall\" class=\"docClass\">draw2d.policy.EditPolicy.onInstall</a></p></div></div></div><div id='method-onRightMouseDown' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.FigureEditPolicy' rel='draw2d.policy.figure.FigureEditPolicy' class='defined-in docClass'>draw2d.policy.figure.FigureEditPolicy</a><br/><a href='source/FigureEditPolicy.html#draw2d-policy-figure-FigureEditPolicy-method-onRightMouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.FigureEditPolicy-method-onRightMouseDown' class='name expandable'>onRightMouseDown</a>( <span class='pre'>figure, x, y, shiftKey, ctrlKey</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called if the user press the right mouse on the figure. ...</div><div class='long'><p>Called if the user press the right mouse on the figure.<br>\nYou can either override the \"onContextMenu\" method of the figure or install an editor policy and override this method.\nBooth is valid and possible.</p>\n        <p>Available since: <b>4.4.0</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a>|<a href=\"#!/api/draw2d.shape.basic.Line\" rel=\"draw2d.shape.basic.Line\" class=\"docClass\">draw2d.shape.basic.Line</a><div class='sub-desc'><p>the figure below the mouse</p>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>the x-coordinate of the mouse down event</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>the y-coordinate of the mouse down event</p>\n</div></li><li><span class='pre'>shiftKey</span> : Boolean<div class='sub-desc'><p>true if the shift key has been pressed during this event</p>\n</div></li><li><span class='pre'>ctrlKey</span> : Boolean<div class='sub-desc'><p>true if the ctrl key has been pressed during the event</p>\n</div></li></ul></div></div></div><div id='method-onSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.figure.SelectionFeedbackPolicy'>draw2d.policy.figure.SelectionFeedbackPolicy</span><br/><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy-method-onSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.SelectionFeedbackPolicy-method-onSelect' class='name expandable'>onSelect</a>( <span class='pre'>figure, isPrimarySelection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>isPrimarySelection</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onUninstall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.figure.SelectionFeedbackPolicy'>draw2d.policy.figure.SelectionFeedbackPolicy</span><br/><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.SelectionFeedbackPolicy-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>figure</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the host if the policy has been uninstalled. ...</div><div class='long'><p>Called by the host if the policy has been uninstalled.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.EditPolicy-method-onUninstall\" rel=\"draw2d.policy.EditPolicy-method-onUninstall\" class=\"docClass\">draw2d.policy.EditPolicy.onUninstall</a></p></div></div></div><div id='method-onUnselect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.figure.SelectionFeedbackPolicy'>draw2d.policy.figure.SelectionFeedbackPolicy</span><br/><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy-method-onUnselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.SelectionFeedbackPolicy-method-onUnselect' class='name expandable'>onUnselect</a>( <span class='pre'>figure</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>the unselected figure</p>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});