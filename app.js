Ext.application({
	name: 'Septnuts'
	,appFolder: '/x/Septnuts'

	,launch: function() {

		Ext.create('Ext.Component', {
			fullscreen: true
			,styleHtmlContent: true
			,html: '<h1>Hello World</h1><p>Welcome to my Sencha Touch app</p>'
		});

	}
});