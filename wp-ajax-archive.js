var ajaxArchive = (function() {
	var $archive    = null;
	var $content    = null;
	var archiveType = null;
	var category  = null;

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

	return {
		init: init
	};
})();