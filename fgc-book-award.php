<?php
/**
 * Plugin Name:       Fgc Book Award
 * Description:       Book Award Block
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Florian Goussin - FGC
 * License:           MIT
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fgc-book-award
 *
 * @package           fgc-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function fgc_book_award_fgc_book_award_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'fgc_book_award_fgc_book_award_block_init' );
