# WordPress Ajax Archive

JQuery module for WordPress that displays a gallery / archive with ajax support.

## Usage

_Note:_ This module does not make use of the traditional <select> box, but instead uses a custom div selector box and a list. This gives you more options for styling your select boxes.

HTML

```html
<div id="example-id" data-archive-type="example_post_type" data-category="example_category_slug">
	<span id="current-selection">All</span>
	<span class="right"><i class="fa fa-caret-down fa-lg"></i></span>
	<ul>
		<li data-filter="0">All</li>
		<li data-filter="term_id">Filter 1</li>
		<li data-filter="term_id">Filter 2</li>
		<li data-filter="term_id">Filter 3</li>
		<li data-filter="term_id">Filter 4</li>
	</ul>
</div>

<div id="example-content-id">

</div>

<script>ajaxArchive.init("example-id", "example-content-id");</script>

```

Enqueue your scripts in your theme's function.php file

```php
add_action( 'wp_enqueue_scripts', 'custom_scripts' );
function devents_scripts()
{
	wp_enqueue_script( 'rdm-ajax-archive-script', get_template_directory_uri() . '/assets/js/dist/wp-ajax-archive.min.js', array(), '20121208', true );

	// This line is of extreme importance. Without localizing this script, ajax will not work on your page.
	wp_localize_script( 'rdm-ajax-archive-script', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' )));
}
```

Now, include an action and handler in your theme's function.php file

```php
add_action( 'wp_ajax_archive_filter', 'exampleArchiveHandler');
add_action( 'wp_ajax_nopriv_archive_filter', 'exampleArchiveHandler');

function exampleArchiveHandler()
{
	global $wpdb;

	$filter      = $_POST['filter'];
	$archiveType = $_POST['archiveType'];
	$category    = $_POST['category'];
	$taxonomy    = array();
	$cat         = "example_taxonomy";

	// Build your post query
	$args = array();

	$output = "";
	$posts = get_posts( $args );

	foreach ( $posts as $post ) {
		$output .= '

 	// HTML for your archive items

		';
	}

	wp_reset_postdata();

	echo $output;
	die();
}
```


### Author

Rainy Day Media <hello@rainydaymedia.net>
Todd Miller <todd@rainydaymedia.net>

### License

Copyright (c) <2014> <Rainy Day Media, LLC>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.