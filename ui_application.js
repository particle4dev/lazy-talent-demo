
// ==========================================================================
// Project:   The M-Project Plus - Mobile HTML5 Application Framework
// Creator:   Steve Hoang
// Date:      07.01.2013
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
// LOG
//	+) 13.01.2013 : add cssStyle variable in style(function)
// ==========================================================================

// BASE ON

// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: (c) 2010 M-Way Solutions GmbH. All rights reserved.
//            (c) 2011 panacoda GmbH. All rights reserved.
// Creator:   Dominik
// Date:      02.11.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

M.Pagination = M.View.extend({
  
  
  
    /**
     * Renders a pagination
     *
     * @private
     * @returns {String} The toolbar view's html representation.
     */
    render: function() {
    
    
    },  
  
    /**
     * Applies some style-attributes to the pagination
     *
     * @private
     * @returns {String} The toolbar's styling as html representation.
     */
    style: function() {
        var html = '';
        if(this.cssClass) {
            html += ' class="' + this.cssClass + '" style="' + (this.cssStyle = (this.cssStyle != null) ? this.cssStyle : '') + '" ';
        }
        return html;
    }
})
M.Element = M.View.extend({
    /**
     * The type of this object.
     *
     * @type String
     */
    type: 'M.Element',
    /**
     *
     * @type Object
     */
    attribute: null,
    /**
     *
     * @type String
     * @default : 'div'
     */
    e : 'div',
    /**
     *
     * @type Boolean
     * @default : YES
     */		  
    end : YES,
    /**
     * Renders a simple div container and applies css classes if specified.
     *
     * @private
     * @returns {String} The container view's html representation.
     */
    render: function() {
	if(this.end == YES)
		this.html += '<' + this.e + ' id="' + this.id + '"' + this.style() + '>';
	else
		this.html += '<' + this.e + ' id="' + this.id + '"' + this.style() + '/>';
	
        if(this.value)
		this.html += this.value;
	
	this.renderChildViews();
	
	if(this.end == YES)
		this.html += '</' + this.e + '>';
	
        return this.html;
    },

    /**
     * Applies some style-attributes to the container view.
     *
     * @private
     * @returns {String} The container's styling as html representation.
     */
    style: function() {
        var html = ' ';	
	if(this.attribute != null){
		for (var i in this.attribute) {
			if (this.attribute.hasOwnProperty(i)) { 
				html += (i+ " =' "+ this.attribute[i]+" ' ");
			}
		}
	}
        if(this.cssClass) {
            html += ' class="' + this.cssClass + '"';
        }
        html += ' style="' + (this.cssStyle = (this.cssStyle != null) ? this.cssStyle : '') + '" ';
        return html;
    }
});