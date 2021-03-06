/**
 * Swing.svg : WinButtonSkin
 *
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.io>
 * @copyright 2004-2016 Web Semantics, Inc. (http://websemantics.io)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @since     19th July 2005
 * @package   websemantics/oea/swing.svg/lookandfeel
 */

/**
 * Class WinButtonSkin
 *
 * And implementation of ButtonSkin interface for a window button
 */

WinButtonSkin.prototype = new SimpleButtonSkin();

function WinButtonSkin() {
        /* String */
        this.name = "WinButtonSkin";
        /* String */
        this.className = "WinButtonSkin";
    }

WinButtonSkin.prototype.drawBorder = function( /* Graphics */ g, /* int */ x, /* int */ y, /* int */ w, /* int */ h) {
        return g.drawWinBorder(x, y, w, h);
    }

WinButtonSkin.prototype.clone = function() {
    return new WinButtonSkin();
}
