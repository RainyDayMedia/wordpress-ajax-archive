/**
 * WordPress Ajax Archive
 * JQuery module that builds an ajax supported gallery or archive.
 *
 * Author: Todd Miller <todd@rainydaymedia.net>
 * Homepage: https://github.com/RainyDayMedia/wp-ajax-archive
 * Repo: https://github.com/RainyDayMedia/wp-ajax-archive.git
 * License: Copyright (c) <2014> <Rainy Day Media, LLC>
 */

var ajaxArchive = (function() {
	var $archive    = null;
	var $content    = null;
	var archiveType = null;
	var category  = null;

	// initialize with the selector ID
	// of the select box and selector ID of the content area
	var init = function ( selectID, contentID ) {
		$archive    = $( "#" + selectID);
		$content    = $( "#" + contentID)
		archiveType = $archive.data( "archive-type" );
		category    = $archive.data( "category" );

		$archive.on( "click", selectHandler )
				.on( "click", "li", filterHandler );
	};

	var selectHandler = function() {
		var $el = $archive.find( "> ul" );
		$el.toggleClass( "is-open" );
	};

	var filterHandler = function() {
		var $el        = $(this);
		var $current   = $archive.find( "#current-selection" );
		var filter     = $el.data("filter");
		var filterName = $el.html();

		var data = {
			'action': 'archive_filter',
			'filter': filter,
			'archiveType': archiveType,
			'category': category
		};

		$current.html( filterName );

		$.post(ajax_object.ajax_url, data, function(response) {
			$content.html(response);
		});
	};

	// public API
	return {
		init: init
	};
})();